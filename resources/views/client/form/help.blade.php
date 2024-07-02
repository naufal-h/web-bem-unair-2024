@extends('layouts.app')

@push('style')
    {{-- Slider CSS --}}
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/tiny-slider.css">
@endpush

@push('script')
    {{-- Slider JS --}}
    <script src="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.2/min/tiny-slider.js"></script>
    <script>
        const slider = tns({
            container: '.my-slider',
            loop: false,
            items: 1,
            slideBy: 'page',
            nav: false,
            autoplayButtonOutput: false,
            mouseDrag: true,
            // lazyload: true,
            controlsContainer: "#customize-controls",
        });

        var slider2 = tns({
            container: '.my-slider2',
            items: 1,
            slideBy: 'page',
            controlsContainer: "#customize-controls-2",
        });

        function nav(direction) {
            if (direction == 'next') {
                $('#customize-controls-2 [data-controls="next"]').click()
            } else {
                $('#customize-controls-2 [data-controls="prev"]').click()
            }
        }
    </script>
@endpush

@section('content')
    <div class="slider-container">

        {{-- Slider 2 navigation --}}
        <ul class="controls hidden" id="customize-controls-2" aria-label="Carousel Navigation" tabindex="0">
            <li class="prev" data-controls="prev" aria-controls="customize" tabindex="-1">
                <i class="fas fa-angle-left fa-5x"></i>
            </li>
            <li class="next" data-controls="next" aria-controls="customize" tabindex="-1">
                <i class="fas fa-angle-right fa-5x"></i>
            </li>
        </ul>
        <section class="min-h-[80vh] lg:container flex justify-center items-center m-auto px-4">
            <div class="grid grid-cols-1 lg:grid-cols-2 my-12">
                <div class="shadow-xl border border-gray-400/10 rounded-lg overflow-hidden">
                    <div class="my-slider">
                        <div>
                            <img src="{{ asset('assets/images/form/help/step-0.jpg') }}"
                                class="w-full rounded-lg object-cover" alt="Foto langkah ke 0">
                        </div>
                        <div>
                            <img src="{{ asset('assets/images/form/help/step-1.jpg') }}"
                                class="w-full rounded-lg object-cover" alt="Foto langkah ke 1">
                        </div>
                        <div>
                            <img src="{{ asset('assets/images/form/help/step-2.jpg') }}"
                                class="w-full rounded-lg object-cover" alt="Foto langkah ke 2">
                        </div>
                        <div>
                            <img src="{{ asset('assets/images/form/help/step-3.jpg') }}"
                                class="w-full rounded-lg object-cover" alt="Foto langkah ke 3">
                        </div>
                        <div>
                            <img src="{{ asset('assets/images/form/help/step-4.jpg') }}"
                                class="w-full rounded-lg object-cover" alt="Foto langkah ke 4">
                        </div>
                        <div>
                            <img src="{{ asset('assets/images/form/help/step-5.jpg') }}"
                                class="w-full rounded-lg object-cover" alt="Foto langkah ke 5">
                        </div>
                        <div>
                            <img src="{{ asset('assets/images/form/help/step-6.jpg') }}"
                                class="w-full rounded-lg object-cover" alt="Foto langkah ke 6">
                        </div>
                        <div>
                            <img src="{{ asset('assets/images/form/help/step-7.jpg') }}"
                                class="w-full rounded-lg object-cover" alt="Foto langkah ke 7">
                        </div>
                        <div>
                            <img src="{{ asset('assets/images/form/help/step-8.jpg') }}"
                                class="w-full rounded-lg object-cover" alt="Foto langkah ke 8">
                        </div>
                        <div>
                            <img src="{{ asset('assets/images/form/help/step-9.jpg') }}"
                                class="w-full rounded-lg object-cover" alt="Foto langkah ke 9">
                        </div>
                    </div>
                </div>

                <div class="flex flex-col justify-between my-8 mx-4 md:my-16 md:mx-20">
                    <div class="my-slider2">
                        <div>
                            <p class="text-base font-bold text-bemsun mb-12">Kabinet Reformasi</p>
                            <div class="text-5xl font-bold">Panduan Form Generator.</div>
                        </div>
                        <div class="flex flex-col">
                            <p class="text-sm text-gray-400 mb-12">Panduan Form Generator</p>
                            <div class="flex items-center gap-4 md:gap-8">
                                <h1 class="text-4xl md:text-7xl font-bold">1</h1>
                                <div class="text-base-font-medium">Masukkan email anda pada kolom yang tersedia kemudian
                                    tekan tombol 'Kirim Token'.
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col">
                            <p class="text-sm text-gray-400 mb-12">Panduan Form Generator</p>
                            <div class="flex items-center gap-4 md:gap-8">
                                <h1 class="text-4xl md:text-7xl font-bold">2</h1>
                                <div class="text-base-font-medium">Apabila email sudah masuk, pilih tombol 'Edit Form'
                                    kemudian masukkan token yang telah didapat lengkap dengan email yang terkait, lalu tekan
                                    tombol 'Edit Form'.
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col">
                            <p class="text-sm text-gray-400 mb-12">Panduan Form Generator</p>
                            <div class="flex items-center gap-4 md:gap-8">
                                <h1 class="text-4xl md:text-7xl font-bold">3</h1>
                                <div class="text-base-font-medium">Untuk mengubah informasi umum terkait dengan form yang
                                    ingin dibuat, silakan pilih tombol 'Edit Detail Form' dan sesuaikan segala jenis
                                    informasi sesuai dengan kebutuhanmu.
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col">
                            <p class="text-sm text-gray-400 mb-12">Panduan Form Generator</p>
                            <div class="flex items-center gap-4 md:gap-8">
                                <h1 class="text-4xl md:text-7xl font-bold">4</h1>
                                <div class="text-base-font-medium">Untuk menambahkan atau mengubah daftar pertanyaan yang
                                    ada pada form, pilihlah bagian 'Edit Pertanyaan Form' yang ada pada navigasi atas.
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col">
                            <p class="text-sm text-gray-400 mb-12">Panduan Form Generator</p>
                            <div class="flex items-center gap-4 md:gap-8">
                                <h1 class="text-4xl md:text-7xl font-bold">5</h1>
                                <div class="text-base-font-medium">Untuk menambah pertanyaan silakan tekan tombol 'Tambah
                                    Pertanyaan' kemudian isikan informasi sesuai dengan kebutuhan.
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col">
                            <p class="text-sm text-gray-400 mb-12">Panduan Form Generator</p>
                            <div class="flex items-center gap-4 md:gap-8">
                                <h1 class="text-4xl md:text-7xl font-bold">6</h1>
                                <div class="text-base-font-medium">Apabila ingin menyunting informasi pertanyaan, silakan
                                    pilih tombol 'Edit' dan sesuaikan informasi sesuai dengan kebutuhanmu.
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col">
                            <p class="text-sm text-gray-400 mb-12">Panduan Form Generator</p>
                            <div class="flex items-center gap-4 md:gap-8">
                                <h1 class="text-4xl md:text-7xl font-bold">7</h1>
                                <div class="text-base-font-medium">Untuk mengubah urutan pertanyaan form, silakan pilih
                                    tombol 'Ubah Urutan' kemudian sesuaikan dengan kebutuhanmu.
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col">
                            <p class="text-sm text-gray-400 mb-12">Panduan Form Generator</p>
                            <div class="flex items-center gap-4 md:gap-8">
                                <h1 class="text-4xl md:text-7xl font-bold">8</h1>
                                <div class="text-base-font-medium">Untuk mengakses bentuk form anda, silakan akses
                                    menggunakan shortlink yang ada (dapat dimodifikasi melalui tombol 'Edit Detail Form').
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col">
                            <p class="text-sm text-gray-400 mb-12">Panduan Form Generator</p>
                            <div class="flex items-center gap-4 md:gap-8">
                                <h1 class="text-4xl md:text-7xl font-bold">9</h1>
                                <div class="text-base-font-medium">Untuk melihat hasil responden, pilih bagian 'Respon
                                    Form'.
                                </div>
                            </div>
                        </div>

                    </div>
                    {{-- Slider 1 navigation --}}
                    <div class="controls flex justify-between w-full mt-8" id="customize-controls"
                        aria-label="Carousel Navigation" tabindex="0">
                        <button onclick="nav('prev')" class="prev disabled:opacity-0" data-controls="prev"
                            aria-controls="customize" tabindex="-1">
                            Prev
                        </button>
                        <button onclick="nav('next')" class="next btn btn-primary" data-controls="next"
                            aria-controls="customize" tabindex="-1">
                            Next <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    </div>
@endsection
