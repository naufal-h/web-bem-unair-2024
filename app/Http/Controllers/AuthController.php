<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function showLogin()
    {
        return view('auth.login');
    }

    public function login(Request $request)
    {
        $credentials = $request->validate([
            'username' => ['required'],
            'password' => ['required'],
        ]);

        $user = User::where('username', '=', $request->username)->first();

        if ($user && Auth::attempt($credentials)) {
            if($user->status != 1){
                Auth::logout();
                return back()->withErrors([
                    'username' => 'Your account has been deactivated.',
                ])->onlyInput('username');
            }
            else{
                $request->session()->regenerate();
                return redirect()->route('admin.dashboard');
            }
        }

        else return back()->withErrors([
            'username' => 'The provided credentials do not match our records.',
        ])->onlyInput('username');
    }

    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect()->route('login');
    }
}
