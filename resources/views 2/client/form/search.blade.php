@extends('layouts.app')

@section('content')
<section class="min-h-[80vh] lg:container flex justify-center items-center m-auto px-4">
    <h1>Cari Form mu</h1>
    <form action="{{ route('form.token.validation', $form->token) }}" method="POST">
        <input type="email" name="email" placeholder="Masukkan email anda">
        <button type="submit">Cari</button>
    </form>
</section>
@endsection
