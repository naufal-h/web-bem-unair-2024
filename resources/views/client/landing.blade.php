@extends('layouts.app')

@push('style')
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
@endpush

@push('script')
    {{-- Show article js --}}
    <script src="https://cdn.jsdelivr.net/npm/editorjs-html@3.4.0/build/edjsHTML.js"></script>
    {{-- Image parallax js --}}
    <script src="https://cdn.jsdelivr.net/npm/simple-parallax-js@5.5.1/dist/simpleParallax.min.js"></script>
    {{-- Animate on Scroll JS --}}
    <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
    <script>
        AOS.init();
    </script>

    <script>
        var image = document.getElementsByClassName('parallax');
        new simpleParallax(image, {
            scale: 1.4,
            orientation: 'down',
        });
        var image = document.querySelectorAll('.parallax-ornament');
        new simpleParallax(image, {
            overflow: true,
        });

        // AUDIO Player
        let songplay = 1;

        $(document).ready(function() {
            var media = document.getElementById('backsound');
            media.muted = true;
            media.play();
            media.muted = false;
        });

        setTimeout(function() {
            if (document.getElementById('backsound').paused) {
                songplay = 0;
            }
        }, 500);

        $('#backsound').prop("volume", 0.35);
        $('#backsound').ready(function() {
            if (document.getElementById('backsound').paused && $('#music-icon').hasClass('playing')) {
                $('#text-lagu').css('opacity', '0');
            } else {
                $('#text-lagu').css('opacity', '1');
                setTimeout(function() {
                    $('#text-lagu').css('opacity', '0');
                }, 5000);
            }
        })

        function playPause() {
            var mediaPlayer = document.getElementById('backsound');
            if (mediaPlayer.paused) {
                $('#music-icon').removeAttr('class').addClass('circular-loader')
                $('#music-icon').html(
                    `<circle class="loader-path" cx="12" cy="12" r="6" fill="none" stroke="#70c542" stroke-width="1" />`
                )
                mediaPlayer.play().then(() => {
                    songplay = 1;
                    $('#music-icon').removeAttr('class')
                    // $('#music-icon').addClass('playing')
                    $('#music-icon').html(
                        `<path d="M13 5L8 9H4V15H8L13 19V5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M17.54 8.46C18.4774 9.39764 19.004 10.6692 19.004 11.995C19.004 13.3208 18.4774 14.5924 17.54 15.53" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`
                    )
                    $('#text-lagu').css('opacity', '1');
                    setTimeout_(function() {
                        $('#text-lagu').css('opacity', '0');
                    }, 5000);
                    setTimeout(
                        function() {
                            $('#text-lagu').css('opacity', '0');
                            // $('#music-icon').removeAttr('class').addClass('playing')
                        }, 1000);
                });
                // mediaPlayer.play();
            } else {
                mediaPlayer.pause();
                songplay = 0;
                $('#music-icon').html(`<path d="M11 5L6 9H2V15H6L11 19V5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M23 9L17 15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M17 9L23 15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`)
                $('#text-lagu').css('opacity', '0');
            }
        }

        function pauseTemporary() {
            var mediaPlayer = document.getElementById('backsound');
            if (!mediaPlayer.paused) {
                // console.log('ngepause')
                mediaPlayer.pause();
            } else if (songplay && mediaPlayer.paused) {
                // console.log('ngeplay')
                mediaPlayer.play();
            }
        }
    </script>
@endpush

@section('content')
    <a class="fixed cursor-pointer rounded-lg flex bottom-4 left-4 bg-bemsun px-4 py-2 text-white group transition shadow-md"
        onclick="playPause()">
        <div class="mr-1 transition">
            <svg id="music-icon" class="playing" width="24" height="24" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M13 5L8 9H4V15H8L13 19V5Z" stroke="white" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
                <path
                    d="M17.54 8.46C18.4774 9.39764 19.004 10.6692 19.004 11.995C19.004 13.3208 18.4774 14.5924 17.54 15.53"
                    stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </div>
        {{-- <p class="w-0 group-hover:w-fit transition">Suara</p> --}}
    </a>
    <div id="text-lagu"
        class="fixed left-24 rounded-lg bottom-4 px-4 py-2 bg-bemsun text-white transition shadow-md opacity-0">
        <p>♫ OST Kabinet Reformasi</p>
    </div>
    <audio class="hidden" controls autoplay="true" muted loop id="backsound">
        <source src="{{ asset('assets/sound/ost-loop.mp3') }}" type="audio/mpeg">
    </audio>


    <section
        class="min-h-[60vh] md:min-h-screen flex flex-col justify-center items-center m-auto py-20 overflow-hidden pt-44">
        <div class="container flex flex-col justify-center px-4">
            <div class="block h-0 -z-10">
                <div class="text-white dark:text-[#2A303C] text-9xl md:text-[240px] xl:text-[250px] 2xl:text-[280px] font-bold relative leading-[128px] md:leading-[220px] 2xl:leading-[250px] left-1/3 -top-[100px] md:-top-[150px] 2xl:-top-44 opacity-30"
                    style="text-shadow:
                1px 1px 0 #E88A45,
                -1px -1px 0 #E88A45,
                1px -1px 0 #E88A45,
                -1px 1px 0 #E88A45,
                1px 1px 0 #E88A45;">
                    Kabinet<br>Reformasi</div>
            </div>
            <div class="flex flex-row items-center gap-x-4 mb-2 md:mb-4">
                <p class="text-base font-light">BEM Universitas Airlangga</p>
                <div class="h-1 bg-bemsun w-12"></div>
            </div>
            <h1 class="text-5xl md:text-8xl font-extrabold text-bemsun font-sans md:leading-[5rem]">KABINET REFORMASI</h1>
        </div>
        <div class="block mt-12 min-w-[12rem] w-full">
            <img src="{{ asset('assets/images/landing/banner.jpg') }}" class="w-full parallax" alt="BEM 2022"></img>
        </div>
    </section>

    <section class="min-h-[60vh] md:min-h-screen xl:min-h-0 max-h-[70rem] flex justify-center items-center py-12">
        <div class="container flex flex-col md:flex-row flex-wrap px-4 md:gap-4">
            <div class="flex-1 flex justify-center pl-4">
                <div class="block m-auto min-w-[12rem]">
                    <img data-aos="fade-up" src="{{ asset('assets/images/landing/logo-bem-landing.png') }}"></img>
                </div>
            </div>
            <div class="flex-1 flex flex-col justify-center mt-8 md:mt-0">
                <p class="text-4xl font-bold">Tentang <span class="text-bemsun">Kabinet Reformasi</span></p>
                <h1 class="text-sm my-6 text-justify">
                    Kabinet Reformasi lahir dari rahim semangat perjuangan mahasiswa yang terbentuk dari gerakan - gerakan
                    perubahan. Kata reformasi yang berarti merombak, mendobrak dan menyusun Kembali semangat dan niat
                    perubahan untuk menjunjung tinggi nilai organisasi yang berintegritas, inklusif, adaptif dan sinergis di
                    dalamnya. Lambang tangan mengepal yang mengambarkan semangat perubahan untuk menciptakan inovasi –
                    inovasi pembaharuan di dalam setiap Gerakan yang diciptakan. Warna yang menggambarkan isi filosofis
                    dalam kabinet yang menggambarkan keberanian, kekeluargaan, inklusif dan juga suci yang menjadi sifat
                    dari setiap komponen yang berada di dalam cabinet reformasi untuk membawa semangat pembaharuan.
                </h1>
                <a href="{{ route('about') }}" data-aos="zoom-in"
                    class="bg-orange-500 hover:bg-orange-600 px-4 py-2 text-white rounded max-w-max">Kenali Kami Lebih
                    Dalam!</a>
            </div>
        </div>
    </section>

    <section class="min-h-screen flex flex-col justify-center items-center overflow-hidden pt-36 pb-20">
        {{-- Top divider --}}
        <svg class="-z-20 relative left-0" width="3731" height="200" viewBox="0 0 3731 200" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M3731 200L0 200L3731 0.000183105V200Z" fill="#E88A45" />
        </svg>
        <div class="block h-0 z-10">
            <img class="relative scale-75 left-1/3 -top-8 md:-top-12"
                src="{{ asset('assets/images/landing/Sambutan.svg') }}" alt="">
        </div>
        {{-- Ornament --}}
        <div class="block w-full h-0 -z-10">
            <svg class="relative w-[700px] parallax-ornament md:w-[891px] -top-24 -left-1/3 z-0 pointer-events-none"
                width="891" height="891" viewBox="0 0 891 891" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="445.5" cy="445.5" r="295.5" stroke="white" stroke-opacity="0.1"
                    stroke-width="300" />
            </svg>
        </div>
        <div class="bg-bemsun w-full flex flex-col justify-center items-center -z-30 pb-12 pt-44">
            <div class="container flex flex-row flex-wrap items-center px-4 z-10">
                <div class="basis-full md:basis-2/5">
                    <div class="w-full aspect-square rounded-2xl overflow-hidden">
                        <img data-aos="fade-up" src="{{ asset('assets/images/landing/Yoga.png') }}" class="w-full"
                            alt="">
                    </div>
                </div>
                <div class="basis-full md:basis-3/5 flex flex-col justify-center mt-8 md:pl-12">
                    <p class="text-base text-justify text-white z-10">
                        Hidup Mahasiswa! <br>
                        Hidup Rakyat Indonesia!
                        <br><br>
                        Demi terwujudnya misi kami yang ke empat yaitu internasionalisasi dan digitalisasi BEM Universitas
                        Airlangga sebagai jawaban tantangan zaman dan dinamika perbuahan, kami berkomitmen besar untuk
                        merevitalisasi pondasi dalam ruang-ruang digital BEM Universitas yang selama ini ada.
                        Perombakan-perombakan ini adalah langkah konkret kami agar BEM Unair mampu mencapai relevansinya
                        dengan
                        kebutuhan mahasiswa hari ini.
                        <br><br>
                        Kita tahu bahwa BEM Unair hari ini berdiri di tengah kemajuan digital. Melalui aplikasi dan website
                        yang
                        kami perbaiki ini, kami berkomiten besar untuk menyesuaikan dengan kebutuhan-kebutuhan mahasiswa,
                        mulai
                        dari kanal informasi terpadu, ruang pemberdayaan dan pengembangan, hingga ruang pengaduan terpadu
                        harapan sebagai upaya menjawab tantangan zaman. Besar harapan kami agar seluruh civitas akademika
                        (terutama mahasiswa) menyambut ikhtikad ini dengan baik dan memanfaatkan sebaik-baiknya.
                    </p>
                    <p class="mt-8">
                        <span class="text-base font-bold text-white">Yoga Haryo Prayogo</span>
                        <br>
                        <span class="text-sm text-white">Ketua BEM UNAIR 2021/2022</span>
                    </p>
                </div>
            </div>
            <div class="container flex flex-row flex-wrap items-center px-4 mt-16">
                <div class="basis-full md:basis-2/5 md:order-last">
                    <div class="w-full aspect-square rounded-2xl overflow-hidden">
                        <img data-aos="fade-up" src="{{ asset('assets/images/landing/Rama.png') }}" class="w-full"
                            alt="">
                    </div>
                </div>
                <div class="basis-full md:basis-3/5 flex flex-col justify-center mt-8 md:pr-12 md:text-right">
                    <p class="text-base text-justify text-white">
                        Salam Sejahtera untuk kita semua <br>
                        Hidup Mahasiswa <br>
                        Hidup Rakyat Indonesia
                        <br><br>
                        Kemajuan zaman merupakan suatu keniscayaan yang tidak dapat dihindarkan. Salah satunya adalah
                        perkembangan teknologi. Pada saat ini, dunia sedang memasuki era society 5.0. Pada era ini,
                        teknologi
                        bukan sekedar alat bantu saja melainkan sudah menjadi satu dengan kehidupan manusia sendiri.
                        <br><br>
                        Menyikapi hal tersebut, BEM Universitas Airlangga melakukan upaya digitalisasi gerakan sebagai
                        bentuk
                        adaptasi terhadap kemajuan zaman. Upaya digitalisasi tersebut terwujud dalam program optimalisasi
                        website BEM dan Upgrade Aplikasi ASA Unair. Website dan aplikasi yang dikerjakan oleh BEM Unair
                        melalui
                        Kementerian Komunikasi dan Informasi diharapkan dapat menjadi platform yang dapat dimanfaatkan oleh
                        seluruh civitas akademika Universitas Airlangga
                    </p>
                    <p class="mt-8">
                        <span class="text-base font-bold text-white">Ramadhani Jaka Samudra</span>
                        <br>
                        <span class="text-sm text-white">Wakil Ketua BEM UNAIR 2021/2022</span>
                    </p>
                </div>
            </div>
        </div>
        {{-- Bottom divider --}}
        <svg class="-z-20 relative right-0" width="3731" height="200" viewBox="0 0 3731 200" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M1.74845e-05 -5.73984e-06L3731 0.000320435L0 200L1.74845e-05 -5.73984e-06Z" fill="#E88A45" />
        </svg>
    </section>
    {{-- Ornament --}}
    <div class="block w-full h-0 -z-10">
        <svg class="relative w-[700px] parallax-ornament md:w-[891px] -top-[500px] -right-1/3 z-0 pointer-events-none"
            width="942" height="941" viewBox="0 0 942 941" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M194.123 304.096L799.761 141.815L637.481 747.453L194.123 304.096Z" stroke="white"
                stroke-opacity="0.1" stroke-width="200" />
        </svg>
    </div>
    @if ($articles->isNotEmpty())
        <section class="min-h-screen flex flex-col justify-center items-center my-12">
            <div class="container flex flex-col items-center px-4 gap-8">
                <h2 class="text-4xl md:text-8xl font-bold mb-0 md:mb-8 text-left w-full">Artikel</h2>
                <div data-aos="fade-up" class="flex flex-col w-full md:flex-row gap-6 md:gap-12">
                    <img src="{{ asset($articles[0]->image1) }}" alt=""
                        class="aspect-video w-full object-cover rounded-2xl overflow-hidden bg-black/30">
                    <div class="flex flex-col gap-4">
                        <h4 class="text-xs bg-orange-500/80 text-white py-2 px-4 max-w-fit">Artikel Terbaru</h4>
                        <h3 class="text-3xl font-bold">{{ $articles[0]->title }}</h3>
                        <p class="normalize-text text-justify" id="container-0" class="w-full">
                            {{ $articles[0]->content }}</p>
                        <a href="{{ route('article.client.detail', ['year' => $articles[0]->getPublishedYear(), 'month' => $articles[0]->getPublishedMonth(), 'day' => $articles[0]->getPublishedDay(), 'slug' => $articles[0]->slug]) }}"
                            class="text-sm font-bold text-bemsun">Selengkapnya »</a>
                    </div>
                </div>
                <div class="grid grid-cols-2 md:grid-cols-3 gap-4 justify-center" data-aos="fade-up">
                    @foreach ($articles as $article)
                        @if ($loop->first)
                            @continue
                        @endif
                        <a href="{{ route('article.client.detail', ['year' => $article->getPublishedYear(), 'month' => $article->getPublishedMonth(), 'day' => $article->getPublishedDay(), 'slug' => $article->slug]) }}"
                            class="flex flex-col group">
                            <img src="{{ asset($article->image1) }}" alt=""
                                class="w-full aspect-video mb-4 object-cover rounded-2xl overflow-hidden bg-black/30">
                            <h3 class="text-xl md:text-2xl font bold mb-2 group-hover:text-bemsun transition">
                                {{ $article->title }}</h3>
                            <p class="w-full normalize-text text-justify" id="container-{{ $loop->iteration }}">
                                {{ $article->content }}</p>
                        </a>
                    @endforeach
                </div>
                <a data-aos="zoom-in" href="{{ route('article.client.index') }}"
                    class="bg-orange-500 hover:bg-orange-600 px-4 py-2 text-white rounded max-w-max">Lihat Artikel Lain</a>
            </div>
        </section>
    @endif
@endsection
