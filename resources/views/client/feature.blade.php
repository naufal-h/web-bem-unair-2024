@extends('layouts.app')

@section('content')
<section class="min-h-min max-h-[156] flex justify-center items-start overflow-hidden px-4 py-12">
    <div class="container flex flex-row flex-wrap py-8">
        <div class="md:basis-2/3 flex flex-col justify-center mt-8 md:mt-0">
            <h1 class="text-5xl md:text-8xl font-extrabold font-sans leading-[5rem]">Fitur</h1>
        </div>
    </div>
</section>
<section class="flex justify-center px-2 pb-24">
    <div class="container grid grid-cols-1 md:grid-cols-2 gap-4">
        <a href="{{ route('care.create') }}" class="group bg-bemsun rounded-lg flex flex-row items-center w-full h-24 overflow-hidden p-4 justify-between">
            <h2 class="text-2xl font-bold text-white ">Airlangga Care</h2>
            <img class="left-24 relative group-hover:scale-110 transition" src="{{ asset('assets/images/logo-bem.png') }}" alt="">
        </a>
        <a href="{{ route('form.index') }}" class="group bg-bemsun rounded-lg flex flex-row items-center w-full h-24 overflow-hidden p-4 justify-between">
            <h2 class="text-2xl font-bold text-white">Form Generator</h2>
            <img class="left-24 relative group-hover:scale-110 transition" src="{{ asset('assets/images/logo-bem.png') }}" alt="">
        </a>
        <a href="{{ route('feedback.client.create') }}" class="group bg-bemsun rounded-lg flex flex-row items-center w-full h-24 overflow-hidden p-4 justify-between">
            <h2 class="text-2xl font-bold text-white">Feedback</h2>
            <img class="left-24 relative group-hover:scale-110 transition" src="{{ asset('assets/images/logo-bem.png') }}" alt="">
        </a>
    </div>
</section>
@endsection
