<?php

namespace App\Http\Controllers;

use App\Exports\FormExport;
use App\Models\Form;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;
use Maatwebsite\Excel\Facades\Excel;

class FormController extends Controller
{
    // Variables
    protected $tab = 'information';

    // Check and Login to Form
    protected function checkLogin(Form $form) {
        if (Auth::guard('form')->check()) {
            Auth::guard('form')->logout();
        }
        Auth::guard('form')->login($form);
    }

    // Check Token
    protected function checkToken($form, $token) {
        if (!$form) {
            return false;
        }
        return $form->token == $token;
    }

    public function index() {
        return view('client.form.index');
    }

    public function help() {
        return view('client.form.help');
    }

    public function adminIndex() {
        $forms = Form::latest()->get();
        return view('admin.form.index', compact('forms'));
    }

    public function edit(Request $request) {
        $form = Form::where('token', $request->token)->first();
        if ($this->checkToken($form, Auth::guard('form')->user()->token)) {
            if (!$request->tab) {
                redirect()
                    ->route('form.edit', [
                        'token' => $request->token,
                        'tab' => $this->tab
                    ]);
            }
            foreach ($form->questions as $question) {
                $question->max_size_file /=1024;
            }
            $isOpen = $form->deadline ? $form->deadline > now() : true;
            return view('client.form.edit', compact('form', 'isOpen'));
        } else {
            return redirect()
                ->route('form.edit', [
                    'token' => Auth::guard('form')->user()->token,
                    'tab' => $request->tab
                ]);
        }
    }

    public function download(Request $request) {
        $form = Form::where('token', $request->token)->first();
        if ($this->checkToken($form, Auth::guard('form')->user()->token)) {
            return Excel::download(new FormExport($form->token), $form->title . '-' . time() . '.xlsx');
        } else {
            return redirect()
                ->route('form.edit', [
                    'token' => Auth::guard('form')->user()->token,
                    'tab' => $this->tab
                ]);
        }
    }

    public function leave() {
        if (Auth::guard('form')->check()) {
            Auth::guard('form')->logout();
        }
        return redirect()->route('form.index');
    }

    public function update(Request $request) {
        $form = Form::where('token', $request->token)->first();
        if ($this->checkToken($form, Auth::guard('form')->user()->token)) {
            // Validate
            $validator = Validator::make($request->all(), [
                'slug' => 'required|unique:forms,slug,' . $form->id,
                'title' => 'required',
                'deadline' => 'required_if:deadlineType,set|date|after:now',
            ]);
            if ($validator->fails()) {
                return redirect()
                    ->route('form.edit', [
                        'token' => $form->token,
                        'tab' => $this->tab
                    ])
                    ->withErrors($validator);
            }

            // Deadline value
            $deadline = [
                'set' => $request->input('deadline'),
                'open' => null,
                'close' => now()
            ];

            // Update Form
            $form->update([
                'slug' => $request->input('slug'),
                'title' => $request->input('title'),
                'description' => $request->input('description'),
                'after_form_message' => $request->input('after_form_message'),
                'after_form_redirect' => $request->input('after_form_redirect'),
                'deadline' => $deadline[$request->input('deadlineType')]
            ]);

            // Redirect
            return redirect()
                ->route('form.edit', [
                    'token' => $form->token,
                    'tab' => $this->tab
                ])
                ->with('success', 'Form berhasil diperbarui');

        } else {
            return redirect()
                ->route('form.edit', [
                    'token' => Auth::guard('form')->user()->token,
                    'tab' => $this->tab
                ]);
        }
    }

    public function validation(Request $request) {
        // Validate Request
        $validator = Validator::make($request->all(), [
            'token' => 'required',
            'author' => 'required|email',
        ]);
        if ($validator->fails()) {
            return redirect()
                ->route('form.index')
                ->withErrors($validator);
        }

        // Check if token exists
        $form = Form::where('token', $request->token)->first();
        if (!$form) {
            return redirect()
                ->route('form.index')
                ->withErrors('Token tidak ditemukan');
        }

        // Return Response
        if ($form->author == $request->author) {
            $this->checkLogin($form);
            return redirect()
                ->route('form.edit', [
                    'token' => $form->token,
                    'tab' => $this->tab
                ]);
        } else {
            return redirect()
                ->route('form.index')
                ->withErrors('Email tidak cocok');
        }
    }

    public function show(Request $request) {
        $form = Form::where('slug', $request->slug)->first();
        if ($form) {
            if (now() < $form->deadline || !$form->deadline) {
                $hasFile = $form->questions->where('type', 'file')->count() > 0;
                return view('client.form.show', compact('form', 'hasFile'));
            } else {
                return redirect()->route('form.index')->with('error', 'Form "' . $form->title . '" telah ditutup pada ' . $form->deadlineDetail);
            }
        } else {
            return redirect()->route('form.index')->with('error', 'Form tidak ditemukan.');
        }
    }

    public function afterForm(Request $request) {
        $form = Form::where('slug', $request->slug)->first();
        if ($form) {
            return view('client.form.after', compact('form'));
        } else {
            return redirect()->route('form.index')->with('error', 'Form tidak ditemukan.');
        }
    }

    public function delete(Request $request) {
        $form = Form::where('token', $request->token)->first();
        if ($this->checkToken($form, Auth::guard('form')->user()->token)) {
            $title = $form->title;
            Auth::guard('form')->logout();
            $path = public_path('storage/form/' . $form->token);
            $form->respondents()->delete();
            $form->questions()->delete();
            $form->delete();
            if (File::isDirectory($path)) {
                File::deleteDirectory($path);
            }
            return redirect()->route('form.index')->with('success', 'Form "' . $title . '" berhasil dihapus');
        } else {
            return redirect()
                ->route('form.edit', [
                    'token' => Auth::guard('form')->user()->token,
                    'tab' => $this->tab
                ]);
        }
    }

    public function adminDelete(Request $request) {
        $form = Form::where('token', $request->token)->first();
        if ($form) {
            $title = $form->title;
            $path = public_path('storage/form/' . $form->token);
            $form->respondents()->delete();
            $form->questions()->delete();
            $form->delete();
            if (File::isDirectory($path)) {
                File::deleteDirectory($path);
            }
            return redirect()->route('admin.form.index')->with('success', 'Form "' . $title . '" berhasil dihapus');
        } else {
            return redirect()->route('admin.form.index')->with('error', 'Form tidak ditemukan.');
        }
    }
}
