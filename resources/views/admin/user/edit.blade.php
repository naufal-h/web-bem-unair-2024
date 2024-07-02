@extends('layouts.dashboard')

@section('content')
<div class="content-header row">
    <div class="content-header-left col-md-9 col-12 mb-2">
        <div class="row breadcrumbs-top">
            <div class="col-12">
                <a class="btn btn-sm btn-primary float-start me-1" href="{{ route('user.index') }}">< Back</a>
                <h2 class="content-header-title float-start mb-0">Update User</h2>
            </div>
        </div>
    </div>
</div>
<div class="row">
    <div class="col-12">
        <x-alert.bootstrap></x-alert.bootstrap>
        <div class="card p-2">
            <h2>Ubah User</h2>
            <form method="POST" action="{{ route('user.update', Crypt::encrypt($user->id)) }}" enctype="multipart/form-data">
                @csrf
                @method('PUT')
                <div class="form-group">
                    <label for="username">Username</label><br>
                    <input type="text" class="form-control" name="username" id="username" value="{{ $user->username }}"><br>
                </div>
                <div class="form-group">
                    <label for="type">Type</label><br>
                    <select name="type" class="form-select" required id="type" value="{{old('type')}}">
                        <option value="sa" {{ $user->type == 'sa' ? 'selected' : '' }}>Superadmin</option>
                        <option value="ad" {{ $user->type == 'ad' ? 'selected' : '' }}>Adkesma</option>
                        <option value="cw" {{ $user->type == 'cw' ? 'selected' : '' }}>Content Writer</option>
                    </select>
                </div>
                <input class="btn btn-primary mt-1" type="submit" value="Update">
            </form>
            <hr>
            <h2>Ubah Password</h2>
            <form action="{{ route('user.password', Crypt::encrypt($user->id)) }}" method="POST" enctype="multipart/form-data">
                @csrf
                @method('POST')
                <div class="form-group">
                    <label for="password">Password</label><br>
                    <input class="form-control" type="password" name="password" id="password">
                </div>
                <input class="btn btn-primary mt-1" type="submit" value="Update Password">
            </form>
        </div>
    </div>
</div>
@endsection
