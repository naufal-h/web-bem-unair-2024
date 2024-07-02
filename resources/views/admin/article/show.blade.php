@extends('layouts.dashboard')

@section('content')
    <div class="content-header row">
        <div class="content-header-left col-md-9 col-12 mb-2">
            <div class="row breadcrumbs-top">
                <div class="col-12">
                    <a class="btn btn-sm btn-primary float-start me-1" href="{{ route('article.index') }}">
                        < Back</a>
                            <h2 class="content-header-title float-start mb-0">Article Detail</h2>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-12">
            <x-alert.bootstrap></x-alert.bootstrap>
            <div class="card p-2">
                <h2>Judul : {{ $article->title }}</h2>
                <div id="carouselExampleIndicators" class="carousel slide" style="max-width: 500px" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                            class="" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                            aria-label="Slide 2" class="active" aria-current="true"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                            aria-label="Slide 3" class=""></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="{{ asset($article->image1) }}" class="d-block w-100" alt="...">
                        </div>
                        @if ($article->image2 != null)
                            <div class="carousel-item">
                                <img src{{ asset($article->image2) }} class="d-block w-100" alt="...">
                            </div>
                        @endif
                        @if ($article->image3 != null)
                            <div class="carousel-item">
                                <img src="{{ asset($article->image3) }}" class="d-block w-100" alt="...">
                            </div>
                        @endif
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>

                <div id="container"></div>
                <p id="content" class="d-none">{!! $article->content !!}</p>
            </div>
        </div>
    </div>
@endsection
