<?php

namespace App\Http\Controllers;

use App\Models\Form;
use App\Models\Respondent;
use App\Models\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class RespondentController extends Controller
{
    // Variables
    protected $tab = 'respondents';

    // Store Respondent
    public function store(Request $request) {
        $form = Form::where('slug', $request->slug)->first();
        if ($form) {
            // Search questions is required
            $requiredQuestions = $form->questions()->where('required', 'yes')->get();
            $requiredQuestionsId = $requiredQuestions->map(function ($item) {
                return $item->id;
            });

            // Check if all required questions are filled
            $isFilled = true;
            foreach ($request->responses as $response => $value) {
                if (in_array($response, $requiredQuestions->pluck('id')->toArray())) {
                    if (empty($value)) {
                        $isFilled = false;
                    }
                }
            }

            // Get all index array of responses
            $indexes = array_keys($request->responses);
            foreach ($requiredQuestionsId->toArray() as $id) {
                if (!in_array($id, $indexes)) {
                    $isFilled = false;
                }
            }

            // Return error if not filled
            if (!$isFilled){
                return redirect()
                ->route('form.show', $form->slug)
                ->with('error', 'Silahkan isi semua pertanyaan yang ditandai dengan tanda *')
                ->withInput();
            }

            // Max size file
            $maxSizeFiles = $form->questions()->where('type', 'file')->get();
            $maxSizeFilesId = $maxSizeFiles->map(function ($item) {
                if ($item->max_size_file) {
                    return $item->id;
                }
            });

            // Check if file uploaded is limited
            foreach ($maxSizeFilesId->toArray() as $id) {
                if (in_array($id, $indexes)) {
                    // Convert bytes to megabytes
                    if ($request->file('responses.'.$id)->getSize()/1000 > $maxSizeFiles->where('id', $id)->first()->max_size_file) {
                        return redirect()
                        ->route('form.show', $form->slug)
                        ->with('error', 'Ukuran file yang diupload melebihi batas maksimal yang ditentukan')
                        ->withInput();
                    }
                }
            }

            // Create Respondent
            $respondent = Respondent::create([
                'form_id' => $form->id,
            ]);

            // Save responses
            foreach ($request->responses as $response => $value) {
                if (is_array($value)) {
                    $value = implode(',', $value);
                } elseif (is_file($value)) {
                    // Check Directory is exists
                    if (!File::exists(public_path('storage/form/'.$form->token.'/'))) {
                        File::makeDirectory(public_path('storage/form/'.$form->token.'/'), 0755, true);
                    }

                    // Save file
                    $value->storeAs('public/form/'.$form->token, time().'-'.$value->getClientOriginalName());
                    $value = 'storage/form/'.$form->token.'/'.time().'-'.$value->getClientOriginalName();
                }
                if (!empty($value)) {
                    Response::create([
                        'respondent_id' => $respondent->id,
                        'question_id' => $response,
                        'value' => $value,
                    ]);
                }
            }

            // Redirect to thank you page
            return redirect()
                ->route('form.after', $form->slug);
        } else {
            return redirect()->route('form.index')->with('error', 'Form tidak ditemukan.');
        }
    }

    // Delete Respondent
    public function delete(Request $request) {
        $form = Form::where('token', $request->token)->first();
        if ($form) {
            $respondent = Respondent::where('id', $request->id)->first();
            if ($respondent) {
                $fileQuestions = $form->questions->where('type', 'file');
                foreach ($fileQuestions as $fileQuestion) {
                    $response = $respondent->responses->where('question_id', $fileQuestion->id)->first();
                    if ($response) {
                        $path = public_path($response->value);
                        if (file_exists($path)) {
                            unlink($path);
                        }
                    }
                }
                $dateTime = date('d F Y - H:i:s', strtotime($respondent->created_at));
                $respondent->delete();
                return redirect()
                    ->route('form.edit', [
                        'token' => $form->token,
                        'tab' => $this->tab,
                    ])
                    ->with('success', 'Responden pada tanggal '.$dateTime.' berhasil dihapus.');
            } else {
                return redirect()
                    ->route('form.edit', [
                        'token' => $form->token,
                        'tab' => $this->tab,
                    ])
                    ->with('error', 'Data tidak ditemukan.');
            }
        } else {
            return redirect()
                ->route('form.index')
                ->with('error', 'Form tidak ditemukan.');
        }
    }
}
