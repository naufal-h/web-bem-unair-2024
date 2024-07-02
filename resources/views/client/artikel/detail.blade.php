@extends('layouts.app')

@section('content')
    <section class="min-h-[80vh] flex justify-center items-start overflow-hidden px-4 pb-8">
        <div class="container flex flex-col md:flex-row py-8 gap-8 lg:gap-16">
            <div class="basis-2/3">
                <h1 class="text-4xl font-bold mb-2">{{ $article->title }}</h1>
                <p class="text-base text-gray-500">{{ $article->published_at->translatedFormat('l, d F Y') }}</p>
                <div class="carousel chocolat-parent aspect-video w-full mt-8 mb-12 rounded-2xl overflow-hidden">
                    <div id="slide1" class="carousel-item relative w-full">
                        <a href="{{ asset($article->image1) }}" class="w-full chocolat-image"><img
                                src="{{ asset($article->image1) }}" class="w-full object-cover" /></a>
                        @if ($article->image2 != null)
                            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide3" class="btn btn-circle opacity-70">❮</a>
                                <a href="#slide2" class="btn btn-circle opacity-70">❯</a>
                            </div>
                        @endif
                    </div>
                    @if ($article->image2 != null)
                        <div id="slide2" class="carousel-item relative w-full">
                            <a href="{{ asset($article->image2) }}" class="w-full chocolat-image"><img
                                    src="{{ asset($article->image2) }}" class="w-full object-cover" /></a>
                            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" class="btn btn-circle opacity-70">❮</a>
                                <a href="#slide3" class="btn btn-circle opacity-70">❯</a>
                            </div>
                        </div>
                    @endif
                    @if ($article->image3 != null)
                        <div id="slide3" class="carousel-item relative w-full">
                            <a href="{{ asset($article->image3) }}" class="w-full chocolat-image"><img
                                    src="{{ asset($article->image3) }}" class="w-full object-cover" /></a>
                            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" class="btn btn-circle opacity-70">❮</a>
                                <a href="#slide1" class="btn btn-circle opacity-70">❯</a>
                            </div>
                        </div>
                    @endif
                </div>
                <div id="container">{!! $article->content !!}</div>
            </div>
            <div class="basis-1/3">
                <h2 class="text-2xl font-bold text-gray-400">Artikel Lainnya</h2>
                <div class="flex flex-col gap-8 mt-4">
                    @foreach ($articles as $article)
                        <a href="{{ route('article.client.detail', ['year' => $article->getPublishedYear(), 'month' => $article->getPublishedMonth(), 'day' => $article->getPublishedDay(), 'slug' => $article->slug]) }}"
                            class="flex gap-4 group">
                            <img class="flex-none w-32 h-32 bg-black/30 rounded-2xl object-cover overflow-hidden"
                                src="{{ asset($article->image1) }}" alt="">
                            <div>
                                <p class="text-base font-bold group-hover:text-bemsun transition">{{ $article->title }}</p>
                                <span class="text-sm text-gray-500">{{ $article->published_at->diffForHumans() }}</span>
                            </div>
                        </a>
                    @endforeach
                </div>
            </div>
        </div>
    </section>
@endsection

@push('style')
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/chocolat/1.1.0/css/chocolat.css"
        integrity="sha512-SZKIFMKtGWhRWJJ5ZEWJmKRXK/EDpYU5dKMWrF2cky8nS+KA4pwer86EIJPwuJKKFzP1bhjyL3yj5cGChmcd9g=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <style>
        #container h1,
        #container h2,
        #container h3,
        #container h4,
        #container h5,
        #container h6,
        #container p,
        #container a,
        #container ol,
        #container ul,
        #container li {
            margin: revert;
        }

        #container {
            font-size: 16px;
            line-height: 1.5;
            color: #333333;
        }

        #container h1 {
            font-size: 2.5em;
            font-weight: bold;
            margin-top: 1.5em;
            margin-bottom: 0.5em;
        }

        #container h2 {
            font-size: 2em;
            font-weight: bold;
            margin-top: 1.5em;
            margin-bottom: 0.5em;
        }

        #container h3 {
            font-size: 1.5em;
            font-weight: bold;
            margin-top: 1.5em;
            margin-bottom: 0.5em;
        }

        #container h4 {
            font-size: 1.2em;
            font-weight: bold;
            margin-top: 1em;
            margin-bottom: 0.5em;
        }

        #container h5 {
            font-size: 1em;
            font-weight: bold;
            margin-top: 1em;
            margin-bottom: 0.5em;
        }

        #container h6 {
            font-size: 0.9em;
            font-weight: bold;
            margin-top: 1em;
            margin-bottom: 0.5em;
        }

        #container p {
            text-align: justify;
        }

        #container ol,
        #container ul,
        #container li {
            list-style: revert;
            list-style-position: inside
        }
    </style>
@endpush
