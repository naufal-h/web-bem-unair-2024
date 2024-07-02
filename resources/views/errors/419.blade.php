@extends('layouts.app')

@section('content')
<section class="min-h-[70vh] flex justify-center items-center m-auto">
    <div class="container flex flex-col justify-center items-center px-4">
        <h1 class="text-8xl font-bold">419</h1>
        <p class="font-base">Halaman Telah Kadaluarsa :(</p>
        <a href="{{ route('landing') }}" class="btn btn-primary">Kembali ke Halaman Utama</a>
    </div>
</section>
@endsection
