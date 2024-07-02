<?php

namespace App\Http\Controllers;

use App\Models\Form;
use App\Models\Question;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class QuestionController extends Controller
{
    // Variables
    protected $tab = 'questions';

    public function store(Request $request) {
        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'type' => 'required',
            'required' => 'required',
            'options' => 'required_if:type,radio,checkbox,select',
            'max_size_file' => 'required_if:type,file',
        ]);
        if ($validator->fails()) {
            return redirect()
                ->route('form.edit', [
                    'token' => $request->token,
                    'tab' => $this->tab
                ])
                ->withErrors($validator)
                ->withInput();
        }

        $form = Form::where('token', $request->token)->first();
        if ($form) {
            $order = count($form->questions) == 0 ? 1 : $form->questions->last()->order + 1;
            $question = Question::create([
                'form_id' => $form->id,
                'title' => $request->title,
                'type' => $request->type,
                'required' => $request->required,
                'order' => $order,
            ]);
            if (in_array($request->type, ['text', 'textarea', 'select'])) {
                Question::find($question->id)->update([
                    'placeholder' => $request->placeholder ?? null,
                ]);
            }
            if (in_array($request->type, ['radio', 'checkbox', 'select'])) {
                Question::find($question->id)->update([
                    'options' => $request->options,
                ]);
            }
            if ($request->type == 'file') {
                Question::find($question->id)->update([
                    'max_size_file' => $request->max_size_file * 1024,
                ]);
            }
            return redirect()
                ->route('form.edit', [
                    'token' => $request->token,
                    'tab' => $this->tab
                ])
                ->with('success', 'Pertanyaan berhasil ditambahkan');
        } else {
            return redirect()
                ->route('form.index')
                ->with('error', 'Token tidak ditemukan');
        }
    }

    public function updateQuestion(Request $request) {
        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'type' => 'required',
            'required' => 'required',
            'options' => 'required_if:type,radio,checkbox,select',
            'max_size_file' => 'required_if:type,file',
        ]);
        if ($validator->fails()) {
            return redirect()
            ->route('form.edit', [
                'token' => $request->token,
                'tab' => $this->tab
            ])
            ->withErrors($validator)
            ->withInput();
        }

        $form = Form::where('token', $request->token)->first();
        if ($form) {
            $question = Question::find($request->id);
            if ($question) {
                $question->update([
                    'title' => $request->title,
                    'type' => $request->type,
                    'required' => $request->required,
                ]);
                if (in_array($request->type, ['text', 'textarea', 'select'])) {
                    Question::find($question->id)->update([
                        'placeholder' => $request->placeholder ?? null,
                    ]);
                } else {
                    Question::find($question->id)->update([
                        'placeholder' => null,
                    ]);
                }
                if (in_array($request->type, ['radio', 'checkbox', 'select'])) {
                    Question::find($question->id)->update([
                        'options' => $request->options,
                    ]);
                } else {
                    Question::find($question->id)->update([
                        'options' => null,
                    ]);
                }
                if ($request->type == 'file') {
                    Question::find($question->id)->update([
                        'max_size_file' => $request->max_size_file * 1024,
                    ]);
                } else {
                    Question::find($question->id)->update([
                        'max_size_file' => null,
                    ]);
                }
                return redirect()
                    ->route('form.edit', [
                        'token' => $request->token,
                        'tab' => $this->tab
                    ])
                    ->with('success', 'Pertanyaan "'.$request->title.'" berhasil diperbarui');
            } else {
                return redirect()
                    ->route('form.edit', [
                        'token' => $request->token,
                        'tab' => $this->tab
                    ])
                    ->with('error', 'Pertanyaan tidak ditemukan');
            }
        } else {
            return redirect()
                ->route('form.index')
                ->with('error', 'Token tidak ditemukan');
        }
    }

    public function updateOrders(Request $request) {
        $form = Form::where('token', $request->token)->first();
        if ($form) {
            $validator = Validator::make($request->all(), [
                'orders' => 'required|array|min:1|max:'.count($form->questions),
            ]);
            if ($validator->fails()) {
                return redirect()
                    ->route('form.edit', [
                        'token' => $request->token,
                        'tab' => $this->tab
                    ])
                    ->withErrors($validator)
                    ->withInput();
            }

            if (!(array_unique($request->orders) == $request->orders)){
                return redirect()
                    ->route('form.edit', [
                        'token' => $request->token,
                        'tab' => $this->tab
                    ])
                    ->with('error', 'Urutan pertanyaan tidak boleh sama')
                    ->withInput();
            }

            foreach ($request->orders as $key => $value) {
                if ($value < 1 || $value > $form->questions->count()) {
                    return redirect()
                        ->route('form.edit', [
                            'token' => $request->token,
                            'tab' => $this->tab
                        ])
                        ->with('error', 'Urutan pertanyaan tidak boleh kurang dari 1 dan tidak boleh lebih dari '.$form->questions->count())
                        ->withInput();
                }
            }

            foreach ($request->orders as $id => $order) {
                Question::find($id)->update([
                    'order' => $order,
                ]);
            }
            return redirect()
                ->route('form.edit', [
                    'token' => $request->token,
                    'tab' => $this->tab
                ])
                ->with('success', 'Urutan pertanyaan berhasil diperbarui');
        } else {
            return redirect()
                ->route('form.index')
                ->with('error', 'Token tidak ditemukan');
        }
    }

    public function delete(Request $request) {
        $form = Form::where('token', $request->token)->first();
        if ($form) {
            $question = Question::find($request->id);
            if ($question) {
                $title = $question->title;
                $order = $question->order;
                $question->delete();
                Question::where('form_id', $form->id)
                    ->where('order', '>', $order)
                    ->decrement('order');
                return redirect()
                    ->route('form.edit', [
                        'token' => $request->token,
                        'tab' => $this->tab
                    ])
                    ->with('success', 'Pertanyaan "' . $title . '" berhasil dihapus');
            } else {
                return redirect()
                    ->route('form.edit', [
                        'token' => $request->token,
                        'tab' => $this->tab
                    ])
                    ->with('error', 'Pertanyaan tidak ditemukan');
            }
        } else {
            return redirect()
                ->route('form.index')
                ->with('error', 'Token tidak ditemukan');
        }
    }
}
