<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = User::orderBy('id', 'asc')->get();

        return view('admin.user.index', compact('users'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.user.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'username' => ['required'],
            'password' => ['required'],
            'type' => ['required'],
        ]);

        $input = $request->all();
        $input['password'] = Hash::make($request->password);
        $input['status'] = '1';
        User::create($input);

        return redirect()->route('admin.user.index')->with('success', 'User has been created successfully');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user = User::findOrFail(Crypt::decrypt($id));

        return view('admin.user.show', compact('user'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $user = User::findOrFail(Crypt::decrypt($id));

        return view('admin.user.edit', compact('user'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $user = User::findOrFail(Crypt::decrypt($id));

        $request->validate([
            'username' => ['required'],
            'type' => ['required'],
        ]);

        $user->username = $request->username;
        $user->type = $request->type;

        $user->save();

        return redirect()->route('admin.user.index')->with('success', 'User has been updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function change_status($id)
    {
        $user = User::findOrFail(Crypt::decrypt($id));
        if($user->status == "0"){

            $user->status = "1";
            $user->save();

            return redirect()->route('admin.user.index')->with('success', 'User activated successfully!');

        }
        else $user->status = "0";
        $user->save();

        return redirect()->route('admin.user.index')->with('success', 'User deactivated successfully!');
    }

    public function change_password(Request $request, $id)
    {
        $user = User::findOrFail(Crypt::decrypt($id));

        $request->validate([
            'password' => ['required'],
        ]);

        $user->password = Hash::make($request->password);
        $user->save();

        return redirect()->route('admin.user.index')->with('success', 'User password changed successfully!');
    }
}
