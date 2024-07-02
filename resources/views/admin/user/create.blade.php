@extends('layouts.dashboard')

@section('content')
<div class="content-header row">
    <div class="content-header-left col-md-9 col-12 mb-2">
        <div class="row breadcrumbs-top">
            <div class="col-12">
                <a class="btn btn-sm btn-primary float-start me-1" href="{{ route('user.index') }}">< Back</a>
                <h2 class="content-header-title float-start mb-0">Create User</h2>
            </div>
        </div>
    </div>
</div>
<div class="row">
    <div class="col-12">
        <x-alert.bootstrap></x-alert.bootstrap>
        <div class="card">
            <form class="card-body" method="POST" action="{{ route('user.store') }}" enctype="multipart/form-data">
                @csrf
                <div class="mb-1">
                    <label class="form-label" for="username">Username</label>
                    <input class="form-control" type="text" name="username" id="username">
                </div>
                <div class="mb-1">
                    <label class="form-label" for="password">Password</label>
                    <input class="form-control" type="password" name="password" id="password">
                </div>
                <div class="mb-1">
                    <label class="form-label" for="type">Type</label>
                    <select class="form-select" name="type" required id="type">
                        <option value="option_select" disabled selected>Please select the admin type</option>
                        <option value="ad">Adkesma</option>
                        <option value="cw">Content Writer</option>
                    </select>
                </div>
                <button class="btn btn-primary" type="submit">Create</button>
            </form>
        </div>
    </div>
</div>
@endsection
