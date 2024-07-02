@extends('layouts.app')

@section('content')
    @php
        use Illuminate\Support\HtmlString;
    @endphp
    {{-- <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js"
        integrity="sha512-aVKKRRi/Q/YV+4mjoKBsE4x3H+BkegoM/em46NNlCqNTmUYADjBbeNefNxYV7giUp0VxICtqdrbqU7iVaeZNXA=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://cdn.jsdelivr.net/npm/editorjs-html@3.4.0/build/edjsHTML.js"></script>

    <script>
        function parse(contentID, containerID) {
            $(`#${contentID}`).ready(function() {
                // Get the content
                const content = document.getElementById(contentID).innerHTML

                // Parse the content
                const edjsParser = edjsHTML();
                let html = edjsParser.parse(JSON.parse(content));

                // Loop to display content
                for (let i = 0; i < html.length; i++) {
                    document.getElementById(containerID).insertAdjacentHTML('beforeend', html[i])
                }

                // Limit the number of characters & delete unused element
                $(`#${containerID}`).html($(`#${containerID}`).text().slice(0, 250))
                $(`#${contentID}`).remove()
                document.getElementById(containerID).insertAdjacentHTML('beforeend', ' …')
            })
        }
    </script> --}}

    <section class="min-h-screen flex justify-center items-start overflow-hidden px-4">
        <div class="container flex flex-col flex-wrap py-8 pb-16">
            <div class="text-4xl md:text-8xl font-bold mb-4">Artikel</div>
            <a class="w-fit mb-8"
                href="https://docs.google.com/document/d/19btlAaVNOrRGmpQRNdsVAODPsrnPHKxn/edit?usp=drivesdk&ouid=112812510591510158545&rtpof=true&sd=true"
                target="__blank">» Lihat SOP Pengajuan Artikel</a>
            <div class="flex flex-col gap-12 my-8">
                @foreach ($articles as $article)
                    <script type="text/javascript">
                        parse('content-{{ $loop->iteration }}', 'container-{{ $loop->iteration }}')
                    </script>
                    <a href="{{ route('article.client.detail', ['year' => $article->getPublishedYear(), 'month' => $article->getPublishedMonth(), 'day' => $article->getPublishedDay(), 'slug' => $article->slug]) }}"
                        class="normalize-text flex justify-between gap-4 md:gap-32 group">
                        <div class="flex flex-col gap-2">
                            <div class="flex gap-4 items-center">
                                {{-- <p class="text-base font-medium">article</p>
                                <p class="text-base font-medium">-</p> --}}
                                <p class="text-base font-medium text-gray-500 opacity-80">
                                    @if ($article->viewer > 0)
                                        {{ $article->viewer }} tayangan ·
                                    @endif
                                    {{ $article->published_at->diffForHumans() }}
                                </p>
                            </div>
                            <div>
                                <h2 class="text-2xl font-medium mb-2 group-hover:text-bemsun transition">
                                    {{ $article->title }}</h2>
                                <div class="w-full" id="container-{{ $loop->iteration }}">{{ $article->content }}</div>
                            </div>
                        </div>
                        <img src="{{ asset($article->image1) }}" alt=""
                            class="flex-none w-32 h-32 rounded-2xl bg-black/30 object-cover overflow-hidden">
                    </a>
                @endforeach
            </div>
        </div>
    </section>
@endsection
