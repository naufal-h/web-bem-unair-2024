@extends('layouts.dashboard')

@section('content')
<div class="row">
    <div class="col-12">
        <div class="card p-2">
            <h2>Selamat Datang {{ Auth::user()->username }}</h2>
            <p class="m-0">Silahkan akses menu melalui bar navigasi</p>
        </div>
    </div>
</div>
@endsection
