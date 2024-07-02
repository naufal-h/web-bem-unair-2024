<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Mail\Form\Forgot as ForgotMail;
use App\Mail\Form\Token as TokenMail;
use App\Models\Form;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response;

class FormController extends Controller
{
    // Variables
    protected $tab = 'information';

    // Generate Token
    protected function generateToken() {
        return Str::random(10);
    }

    // Check and Login to Form
    protected function checkLogin(Form $form) {
        if (Auth::guard('form')->check()) {
            Auth::guard('form')->logout();
        }
        Auth::guard('form')->login($form);
    }

    // Create Form
    public function create(Request $request) {
        // Validate Request
        $validator = Validator::make($request->all(), [
            'author' => 'required|email',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'message' => 'Data is not valid, please check again',
                'errors' => $validator->errors()
            ], Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        // Check if token exists
        do {
            $token = $this->generateToken();
        } while (Form::where('token', $token)->exists());

        // Create Form
        $form = Form::create([
            'slug' => $token,
            'author' => $request->author,
            'token' => $token,
        ]);

        // Email token to author
        Mail::to($request->author)->send(new TokenMail($token));

        // Return Response
        return response()->json([
            'success' => true,
            'message' => 'Form berhasil dibuat, silahkan cek email anda untuk token form.',
            'data' => $form,
        ], Response::HTTP_OK);
    }

    // Validation Form
    public function validation(Request $request) {
        // Validate Request
        $validator = Validator::make($request->all(), [
            'token' => 'required',
            'author' => 'required|email',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'message' => 'Data is not valid, please check again',
                'errors' => $validator->errors()
            ], Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        // Check if token exists
        $form = Form::where('token', $request->token)->first();
        if (!$form) {
            return response()->json([
                'message' => 'Token tidak ditemukan',
            ], Response::HTTP_NOT_FOUND);
        }

        // Return Response
        if ($form->author == $request->author) {
            $this->checkLogin($form);
            return response()->json([
                'success' => true,
                'message' => 'Form berhasil ditemukan, sebentar lagi anda akan dialihkan ke halaman form.',
                'url' => route('form.edit', [
                    'token' => $form->token,
                    'tab' => $this->tab,
                ]),
                'data' => $form,
            ], Response::HTTP_OK);
        } else {
            return response()->json([
                'message' => 'Email tidak sesuai',
            ], Response::HTTP_UNAUTHORIZED);
        }
    }

    // Check Slug
    public function checkSlug(Request $request) {
        // Validate Request
        $validator = Validator::make($request->all(), [
            'slug' => 'required|string',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'message' => 'Data is not valid',
                'errors' => $validator->errors()
            ], Response::HTTP_UNPROCESSABLE_ENTITY);
        }
        // Check if slug exists
        $form = Form::where('slug', $request->slug)->first();
        return response()->json([
            'success' => true,
            'message' => $form ? 'Slug tidak bisa dipakai' : 'Slug bisa dipakai',
            'data' => [
                'exists' => $form ? false : true,
                'form' => $form,
            ],
        ], Response::HTTP_OK);
    }

    // Forgot Token
    public function forgot(Request $request) {
        // Validate Request
        $validator = Validator::make($request->all(), [
            'author' => 'required|email',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'message' => 'Data is not valid',
                'errors' => $validator->errors()
            ], Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        // Check if author exists
        $forms = Form::where('author', $request->author);
        if (!$forms->exists()) {
            return response()->json([
                'success' => false,
                'message' => 'Author tidak ditemukan',
            ], Response::HTTP_NOT_FOUND);
        }

        // Mail token to author
        Mail::to($request->author)->send(new ForgotMail($request->author));

        // Return Response
        return response()->json([
            'success' => true,
            'message' => 'Token telah dikirim ke email anda, silahkan cek email anda.',
        ], Response::HTTP_OK);
    }
}
