@extends('layouts.app')

@section('content')
<section class="min-h-min max-h-[156] flex justify-center items-start overflow-hidden px-4 my-16 md:my-32">
    <div class="container flex flex-col justify-center flex-wrap gap-12">
        <h1 class="text-4xl font-bold text-center">Filosofi Logo</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="flex flex-col gap-4 items-center">
                <img src="{{ asset('assets/images/about/tangan.png') }}" class="max-w-[240px] sm:w-full" alt="">
                <div>
                    <h3 class="text-lg font-bold text-center">Tangan Kiri Mengepal</h3>
                    <h4 class="text-sm font-bold text-gray-400 text-center mb-1">Semangat Perubahan</h4>
                    <p class="text-xs font-medium text-center">BEM Universitas Airlangga dalam periode ini, ingin membawa semangat pembaharuan agar BEM Universitas Airlangga dapat beradaptasi dengan lingkungan.</p>
                </div>
            </div>
            <div class="flex flex-col gap-4 items-center">
                <img src="{{ asset('assets/images/about/api.png') }}" class="max-w-[240px] sm:w-full" alt="">
                <div>
                    <h3 class="text-lg font-bold text-center">Api</h3>
                    <h4 class="text-sm font-bold text-gray-400 text-center mb-1">Kekuatan</h4>
                    <p class="text-xs font-medium text-center">Kekuatan adalah bagian dari spirit pembaharuan. Kekuatan dapat bermakna kemampuan atau kompetensi. Sehingga dapat menjadikan BEM Universitas Airlangga sebagai ormawa yang professional dan berdaya.</p>
                </div>
            </div>
            <div class="flex flex-col gap-4 items-center">
                <img src="{{ asset('assets/images/about/lingkaran.png') }}" class="max-w-[240px] sm:w-full" alt="">
                <div>
                    <h3 class="text-lg font-bold text-center">Lingkaran</h3>
                    <h4 class="text-sm font-bold text-gray-400 text-center mb-1">Tekad yang Bulat</h4>
                    <p class="text-xs font-medium text-center">Tekad yang bulat adalah kesungguhan untuk menjalankan amanah. Sehingga komitmen untuk mengabdi dengan sungguh-sungguh dan penuh percaya diri.</p>
                </div>
            </div>
            <div class="flex flex-col gap-4 items-center">
                <img src="{{ asset('assets/images/about/tungku.png') }}" class="max-w-[240px] sm:w-full" alt="">
                <div>
                    <h3 class="text-lg font-bold text-center">Tungku Api</h3>
                    <h4 class="text-sm font-bold text-gray-400 text-center mb-1">Mewadahi Minat dan Bakat</h4>
                    <p class="text-xs font-medium text-center">Universitas Airlangga adalah kampus yang majemuk, sehingga BEM Universitas Airlangga harus mampu mewadahi seluruh mahasiswa.</p>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div class="flex gap-4">
                <div class="aspect-square bg-bemred rounded-full h-12"></div>
                <div class="flex flex-col gap-2">
                    <h4 class="text-lg font-bold">Merah <span class="text-gray-400">- Keberanian</span></h4>
                    <p class="text-xs font-medium">Keberanian merupakan modal terbesar dalam pergerakan. Karena dengan keberanian BEM Universitas Airlangga dapat bergerak lebih progresif.</p>
                </div>
            </div>
            <div class="flex gap-4">
                <div class="aspect-square bg-bemblue rounded-full h-12"></div>
                <div class="flex flex-col gap-2">
                    <h4 class="text-lg font-bold">Biru Navy <span class="text-gray-400">- Kekeluargaan</span></h4>
                    <p class="text-xs font-medium">Selain membangun iklim organisasi yang professional, BEM Universitas Airlangga juga ingin membangun nilai kekeluargaan dalam internal organisasi.</p>
                </div>
            </div>
            <div class="flex gap-4">
                <div class="aspect-square bg-bemsun rounded-full h-12"></div>
                <div class="flex flex-col gap-2">
                    <h4 class="text-lg font-bold">Orange <span class="text-gray-400">- Inklusif</span></h4>
                    <p class="text-xs font-medium">Inklusifitas gerakan adalah salah satu nilai yang akan dibangun di dalam BEM Universitas Airlangga. Hal ini diharapkan agar BEM Universitas Airlangga dapat bergerak dan melibatkan seluruh pihak.</p>
                </div>
            </div>
            <div class="flex gap-4">
                <div class="aspect-square bg-white rounded-full h-12 border border-gray-400"></div>
                <div class="flex flex-col gap-2">
                    <h4 class="text-lg font-bold">Putih <span class="text-gray-400">- Suci</span></h4>
                    <p class="text-xs font-medium">Inklusifitas gerakan adalah salah satu nilai yang akan dibangun di dalam BEM Universitas Airlangga. Hal ini diharapkan agar BEM Universitas Airlangga dapat bergerak dan melibatkan seluruh pihak.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="flex justify-center items-center flex-col px-4 my-16 md:my-32 overflow-hidden">
    <div class="block h-0 -z-10">
        <div class="text-white dark:text-[#2A303C] text-9xl md:text-[240px] font-bold relative leading-[128px] md:leading-[240px] left-64 md:left-[32rem] xl:left-[40rem] top-2 md:-top-4 opacity-30"
        style="text-shadow:
            1px 1px 0 #E88A45,
            -1px -1px 0 #E88A45,
            1px -1px 0 #E88A45,
            -1px 1px 0 #E88A45,
            1px 1px 0 #E88A45;">
            Visi</div>
        <div class="clear-both"></div>
    </div>
    <div class="container flex flex-col md:flex-row mb-8 md:mb-16">
        <div class="basis-1/4">
            <h1 class="text-5xl lg:text-8xl font-extrabold font-sans leading-[5rem]">Visi</h1>
        </div>
        <div class="basis-3/4 items-center flex">
            <div class="text-sm">BEM Universitas Airlangga sebagai mercusuar gerakan yang berintegritas, inklusif,
                sinergis, dan adaptif dengan berlandaskan tri dharma perguruan tinggi</div>
        </div>
    </div>
    <div class="block h-0 -z-10">
        <div class="text-white dark:text-[#2A303C] text-9xl md:text-[240px] font-bold relative leading-[128px] md:leading-[240px] left-64 md:left-[32rem] xl:left-[40rem] top-[30px] md:top-8 opacity-30"
        style="text-shadow:
            1px 1px 0 #E88A45,
            -1px -1px 0 #E88A45,
            1px -1px 0 #E88A45,
            -1px 1px 0 #E88A45,
            1px 1px 0 #E88A45;">
            Misi</div>
        <div class="clear-both"></div>
    </div>
    <div class="container flex flex-col md:flex-row">
        <div class="basis-1/4">
            <h1 class="text-5xl lg:text-8xl font-extrabold font-sans leading-[5rem]">Misi</h1>
        </div>
        <div class="basis-3/4 items-center flex">
            <div class="text-sm">
                <ol class="list-decimal list-inside">
                    <li class="mb-4">
                        <span class="font-bold">ORGANIZATIONAL DEVELOPMENT</span><br>
                        <span>Membangun organisasi yang sinergis dan berintegritas dengan berpedoman pada aspek
                            kekeluargaan dan professionalitas.</span>
                    </li>
                    <li class="mb-4">
                        <span class="font-bold">PRO - ACTIVE</span><br>
                        <span>Berperan aktif dalam menghadapi berbagai macam problematika lokal hingga
                            internasional.</span>
                    </li>
                    <li class="mb-4">
                        <span class="font-bold">TANGIBLE EMPOWERMENT</span><br>
                        <span>Meningkatkan iklim prestatif melalui pemberdayaan potensi dan minat bakat mahasiswa
                            Universitas Airlangga.</span>
                    </li>
                    <li class="mb-4">
                        <span class="font-bold">INTERNATIONAL AND DIGITAL ORIENTATION</span><br>
                        <span>Internasionalisasi dan digitalisasi BEM Universitas Airlangga sebagai jawaban atas
                            tantangan zaman dan dinamika perubahan.</span>
                    </li>
                    <li class="mb-4">
                        <span class="font-bold">MAXIMUM COLLABORATION</span><br>
                        <span>Meningkatkan sinergitas dengan civitas akademika Universitas Airlangga dan berbagai pihak
                            lain.</span>
                    </li>
                </ol>
            </div>
        </div>
    </div>
</section>

<section class="flex justify-center items-center flex-col my-16 md:my-32 px-4">
    <div class="container flex flex-col">
        <div class="text-4xl font-bold text-center mb-12">Struktur Organisasi <span class="text-bemsun">Kabinet
                Reformasi</span></div>
        <img src="{{ asset('assets/images/about/struktur.png') }}" class="shadow-xl rounded-2xl" alt="">
    </div>
</section>
@endsection
