@extends('layouts.app')

@section('content')
<section class="min-h-[80vh] lg:container flex justify-center items-center m-auto px-4">
    <div class="container flex flex-col justify-center px-4">
        <h1 class="text-4xl">{{ $form->title }}</h1>
        <br><hr><br>
        @if ($form->after_form_message)
            <p class="text-base">{{ $form->after_form_message }}</p>
        @endif
        @if ($form->after_form_redirect)
            <p class="text-base mt-4">Kunjungi</p>
            <a class="text-bemsun" href="{{ $form->after_form_redirect }}">{{ $form->after_form_redirect }}</a>
        @endif
    </div>
</section>
@endsection
