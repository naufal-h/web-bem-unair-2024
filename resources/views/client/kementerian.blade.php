@extends('layouts.app')

@section('content')
<section class="min-h-screen flex justify-center items-start overflow-hidden px-4">
    <div class="container flex flex-col flex-wrap py-8">
        <div class="text-4xl md:text-8xl font-bold mb-12">Kementerian</div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 gap-y-6 mb-20">
            <x-card.kementerian>
                Sekretaris Kabinet
                <x-slot:img>{{ asset('assets/images/kementerian/small/SESKAB 1.png') }}</x-slot:img>
                <x-slot:href>{{ route('kementerian') . '/sekretaris-kabinet' }}</x-slot:href>
            </x-card.kementerian>
            <x-card.kementerian>
                Keuangan
                <x-slot:img>{{ asset('assets/images/kementerian/small/MENKEU 1.png') }}</x-slot:img>
                <x-slot:href>{{ route('kementerian') . '/keuangan' }}</x-slot:href>
            </x-card.kementerian>
            <x-card.kementerian>
                Pendayagunaan Aparatur Kabinet
                <x-slot:img>{{ asset('assets/images/kementerian/small/PAK 1.png') }}</x-slot:img>
                <x-slot:href>{{ route('kementerian') . '/pendayagunaan-aparatur-kabinet' }}</x-slot:href>
            </x-card.kementerian>
        </div>
        <div class="mb-20">
            <div class="text-lg font-bold mb-8">Kementerian Koordinator <span class="text-bemsun">Kemahasiswaan</span></div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 gap-y-6">
                <x-card.kementerian>
                    Pengembangan Sumber Daya Manusia
                    <x-slot:img>{{ asset('assets/images/kementerian/small/PSDM 1.png') }}</x-slot:img>
                    <x-slot:href>{{ route('kementerian') . '/pengembangan-sdm' }}</x-slot:href>
                </x-card.kementerian>
                <x-card.kementerian>
                    Sinergitas Mahasiswa
                    <x-slot:img>{{ asset('assets/images/kementerian/small/SINEMA 1.png') }}</x-slot:img>
                    <x-slot:href>{{ route('kementerian') . '/sinergitas-mahasiswa' }}</x-slot:href>
                </x-card.kementerian>
                <x-card.kementerian>
                    Riset dan Keilmuan
                    <x-slot:img>{{ asset('assets/images/kementerian/small/RISKEL 1.png') }}</x-slot:img>
                    <x-slot:href>{{ route('kementerian') . '/riset-keilmuan' }}</x-slot:href>
                </x-card.kementerian>
                <x-card.kementerian>
                    Advokasi dan Kesejahteraan Mahasiswa
                    <x-slot:img>{{ asset('assets/images/kementerian/small/ADKESMA 1.png') }}</x-slot:img>
                    <x-slot:href>{{ route('kementerian') . '/advokasi-kesejahteraan' }}</x-slot:href>
                </x-card.kementerian>
            </div>
        </div>
        <div class="mb-20">
            <div class="text-lg font-bold mb-8">Kementerian Koordinator <span class="text-bemsun">Internasionalisasi dan Digitalisasi</span></div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 gap-y-6">
                <x-card.kementerian>
                    Komunikasi dan Informasi
                    <x-slot:img>{{ asset('assets/images/kementerian/small/KOMINFO 1.png') }}</x-slot:img>
                    <x-slot:href>{{ route('kementerian') . '/komunikasi-informasi' }}</x-slot:href>
                </x-card.kementerian>
                <x-card.kementerian>
                    Hubungan Luar
                    <x-slot:img>{{ asset('assets/images/kementerian/small/HUBLU 1.png') }}</x-slot:img>
                    <x-slot:href>{{ route('kementerian') . '/hubungan-luar' }}</x-slot:href>
                </x-card.kementerian>
            </div>
        </div>
        <div class="mb-20">
            <div class="text-lg font-bold mb-8">Kementerian Koordinator <span class="text-bemsun">Pergerakan</span></div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 gap-y-6">
                <x-card.kementerian>
                    Sosial dan Politik
                    <x-slot:img>{{ asset('assets/images/kementerian/small/SOSPOL 1.png') }}</x-slot:img>
                    <x-slot:href>{{ route('kementerian') . '/sosial-politik' }}</x-slot:href>
                </x-card.kementerian>
                <x-card.kementerian>
                    Kesetaraan Gender dan Perlindungan Anak
                    <x-slot:img>{{ asset('assets/images/kementerian/small/KGPA 1.png') }}</x-slot:img>
                    <x-slot:href>{{ route('kementerian') . '/kesetaraan-perlindungan' }}</x-slot:href>
                </x-card.kementerian>
                <x-card.kementerian>
                    Seni Budaya dan Olahraga
                    <x-slot:img>{{ asset('assets/images/kementerian/small/SENIORA 1.png') }}</x-slot:img>
                    <x-slot:href>{{ route('kementerian') . '/seni-olahraga' }}</x-slot:href>
                </x-card.kementerian>
            </div>
        </div>
        <div class="mb-20">
            <div class="text-lg font-bold mb-8">Kementerian Koordinator <span class="text-bemsun">Kemasyarakatan</span></div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 gap-y-6">
                <x-card.kementerian>
                    Pengabdian Masyarakat
                    <x-slot:img>{{ asset('assets/images/kementerian/small/PENGMAS 1.png') }}</x-slot:img>
                    <x-slot:href>{{ route('kementerian') . '/pengabdian-masyarakat' }}</x-slot:href>
                </x-card.kementerian>
                <x-card.kementerian>
                    Kesehatan
                    <x-slot:img>{{ asset('assets/images/kementerian/small/KESEHATAN 1.png') }}</x-slot:img>
                    <x-slot:href>{{ route('kementerian') . '/kesehatan' }}</x-slot:href>
                </x-card.kementerian>
                <x-card.kementerian>
                    Lingkungan Hidup
                    <x-slot:img>{{ asset('assets/images/kementerian/small/LH 1.png') }}</x-slot:img>
                    <x-slot:href>{{ route('kementerian') . '/lingkungan-hidup' }}</x-slot:href>
                </x-card.kementerian>
            </div>
        </div>
        <div class="mb-20">
            <div class="text-lg font-bold mb-8">Kementerian Koordinator <span class="text-bemsun">Perekonomian</span></div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 gap-y-6">
                <x-card.kementerian>
                    Ekonomi Kreatif
                    <x-slot:img>{{ asset('assets/images/kementerian/small/EKRAF 1.png') }}</x-slot:img>
                    <x-slot:href>{{ route('kementerian') . '/ekonomi-kreatif' }}</x-slot:href>
                </x-card.kementerian>
                <x-card.kementerian>
                    Pengembangan Profesi
                    <x-slot:img>{{ asset('assets/images/kementerian/small/PENGPROF 1.png') }}</x-slot:img>
                    <x-slot:href>{{ route('kementerian') . '/pengembangan-profesi' }}</x-slot:href>
                </x-card.kementerian>
            </div>
        </div>
    </div>
</section>
@endsection
