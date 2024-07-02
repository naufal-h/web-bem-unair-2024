@extends('layouts.app')

@section('content')
<section class="min-h-screen flex justify-center items-start overflow-hidden px-4">
    <div class="container flex flex-row flex-wrap py-8">
        <div class="text-4xl md:text-8xl font-bold mb-12">Anggota Kami</div>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 gap-y-20 mb-20">
            <x-card.anggota>
                Yoga Haryo Prayogo
                <x-slot:img>{{ asset('assets/images/about/pengurus/Yoga Haryo Prayogot.png') }}</x-slot:img>
                <x-slot:department>Ketua BEM</x-slot:department>
                <x-slot:faculty>FISIP 18</x-slot:faculty>
            </x-card.anggota>
            <x-card.anggota>
                Ramadhani Jaka Samudra
                <x-slot:img>{{ asset('assets/images/about/pengurus/Ramadhani Jaka Samudra.png') }}</x-slot:img>
                <x-slot:department>Wakil Ketua BEM</x-slot:department>
                <x-slot:faculty>FST 18</x-slot:faculty>
            </x-card.anggota>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 gap-y-20 mb-20">
            <x-card.anggota>
                Meliana Feby Widyanti
                <x-slot:img>{{ asset('assets/images/about/pengurus/Meliana Feby Widyanti.png') }}</x-slot:img>
                <x-slot:department>Sekretaris Kabinet</x-slot:department>
                <x-slot:faculty>FIB 18</x-slot:faculty>
            </x-card.anggota>
            <x-card.anggota>
                Uais Asmaratu Qolbu
                <x-slot:img>{{ asset('assets/images/about/pengurus/Uais Asmaratu Qolbu.png') }}</x-slot:img>
                <x-slot:department>Menteri Keuangan</x-slot:department>
                <x-slot:faculty>FISIP 18</x-slot:faculty>
            </x-card.anggota>
            <x-card.anggota>
                Janni Bahira Akbar
                <x-slot:img>{{ asset('assets/images/about/pengurus/Janni Bahira Akbar.png') }}</x-slot:img>
                <x-slot:department>Pendayagunaan Aparatur Kabinet</x-slot:department>
                <x-slot:faculty>FIB 18</x-slot:faculty>
            </x-card.anggota>
        </div>
        <div class="mb-20">
            <div class="text-lg font-bold mb-8">Kementerian Koordinator <span class="text-bemsun">Kemahasiswaan</span></div>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 gap-y-20">
                <x-card.anggota>
                    Satryo Rsiwidagdho D.
                    <x-slot:img>{{ asset('assets/images/about/pengurus/Satryo Rsiwidagdho D..png') }}</x-slot:img>
                    <x-slot:department>Menteri Koordinator Kemahasiswaan</x-slot:department>
                    <x-slot:faculty>FEB 19</x-slot:faculty>
                </x-card.anggota>
                <x-card.anggota>
                    Reza Nizar Maulana
                    <x-slot:img>{{ asset('assets/images/about/pengurus/Reza Nizar Maulana.png') }}</x-slot:img>
                    <x-slot:department>Menteri Pengembangan Sumber Daya Mahasiswa</x-slot:department>
                    <x-slot:faculty>FISIP 19</x-slot:faculty>
                </x-card.anggota>
                <x-card.anggota>
                    Gerry Pratama Putra
                    <x-slot:img>{{ asset('assets/images/about/pengurus/Gerry Pratama Putra.png') }}</x-slot:img>
                    <x-slot:department>Menteri Sinergitas Mahasiswa</x-slot:department>
                    <x-slot:faculty>FISIP 19</x-slot:faculty>
                </x-card.anggota>
                <x-card.anggota>
                    Bryan Ritchie T.
                    <x-slot:img>{{ asset('assets/images/about/pengurus/Bryan Ritchie T..png') }}</x-slot:img>
                    <x-slot:department>Menteri Riset dan Keilmuan</x-slot:department>
                    <x-slot:faculty>FEB 19</x-slot:faculty>
                </x-card.anggota>
                <x-card.anggota>
                    Rifqi Arrazi Mahmudi
                    <x-slot:img>{{ asset('assets/images/about/pengurus/Rifqi Arrazi Mahmudi.png') }}</x-slot:img>
                    <x-slot:department>Menteri Advokasi dan Kesejahteraan Mahasiswa</x-slot:department>
                    <x-slot:faculty>FISIP 19</x-slot:faculty>
                </x-card.anggota>
            </div>
        </div>
        <div class="mb-20">
            <div class="text-lg font-bold mb-8">Kementerian Koordinator <span class="text-bemsun">Internasionalisasi dan Digitalisasi</span></div>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 gap-y-20">
                <x-card.anggota>
                    Guntur Adi Prayoga
                    <x-slot:img>{{ asset('assets/images/about/pengurus/Guntur Adi Prayoga.png') }}</x-slot:img>
                    <x-slot:department>Menteri Koordinator Internasionalisasi dan Digitalisasi</x-slot:department>
                    <x-slot:faculty>FEB 18</x-slot:faculty>
                </x-card.anggota>
                <x-card.anggota>
                    Daffa Hafizh Permadi
                    <x-slot:img>{{ asset('assets/images/about/pengurus/Daffa Hafizh Permadi.png') }}</x-slot:img>
                    <x-slot:department>Menteri Komunikasi dan Informasi</x-slot:department>
                    <x-slot:faculty>FST 20</x-slot:faculty>
                </x-card.anggota>
                <x-card.anggota>
                    Nabila Farhana
                    <x-slot:img>{{ asset('assets/images/about/pengurus/Nabila Farhana.png') }}</x-slot:img>
                    <x-slot:department>Menteri Hubungan Luar</x-slot:department>
                    <x-slot:faculty>FV 20</x-slot:faculty>
                </x-card.anggota>
            </div>
        </div>
        <div class="mb-20">
            <div class="text-lg font-bold mb-8">Kementerian Koordinator <span class="text-bemsun">Pergerakan</span></div>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 gap-y-20">
                <x-card.anggota>
                    Muh Aziz Mahendra
                    <x-slot:img>{{ asset('assets/images/about/pengurus/Muh Aziz Mahendra.png') }}</x-slot:img>
                    <x-slot:department>Menteri Koordinator Pergerakan</x-slot:department>
                    <x-slot:faculty>FEB 19</x-slot:faculty>
                </x-card.anggota>
                <x-card.anggota>
                    Maulana Hanif Ibrahim
                    <x-slot:img>{{ asset('assets/images/about/pengurus/Maulana Hanif Ibrahim.png') }}</x-slot:img>
                    <x-slot:department>Menteri Sosial dan Politik</x-slot:department>
                    <x-slot:faculty>FK 19</x-slot:faculty>
                </x-card.anggota>
                <x-card.anggota>
                    Salsabilla Az Zahra
                    <x-slot:img>{{ asset('assets/images/about/pengurus/Salsabilla Az Zahra.png') }}</x-slot:img>
                    <x-slot:department>Menteri Kesetaraan Gender dan Perlindungan Anak</x-slot:department>
                    <x-slot:faculty>FISIP 19</x-slot:faculty>
                </x-card.anggota>
                <x-card.anggota>
                    Jonathan Thanusaputra
                    <x-slot:img>{{ asset('assets/images/about/pengurus/Jonathan Thanusaputra.png') }}</x-slot:img>
                    <x-slot:department>Menteri Seni Budaya dan Olahraga</x-slot:department>
                    <x-slot:faculty>FV 20</x-slot:faculty>
                </x-card.anggota>
            </div>
        </div>
        <div class="mb-20">
            <div class="text-lg font-bold mb-8">Kementerian Koordinator <span class="text-bemsun">Kemasyarakatan</span></div>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 gap-y-20">
                <x-card.anggota>
                    M. Rusydan Mirwan H.
                    <x-slot:img>{{ asset('assets/images/about/pengurus/M. Rusydan Mirwan H..png') }}</x-slot:img>
                    <x-slot:department>Menteri Koordinator Kemasyarakatan</x-slot:department>
                    <x-slot:faculty>FIB 19</x-slot:faculty>
                </x-card.anggota>
                <x-card.anggota>
                    Rafly Rahmawan
                    <x-slot:img>{{ asset('assets/images/about/pengurus/Rafly Rahmawan.png') }}</x-slot:img>
                    <x-slot:department>Menteri Pengabdian Masyarakat</x-slot:department>
                    <x-slot:faculty>FISIP 19</x-slot:faculty>
                </x-card.anggota>
                <x-card.anggota>
                    Ifa Dhotul Aini
                    <x-slot:img>{{ asset('assets/images/about/pengurus/Ifa Dhotul Aini.png') }}</x-slot:img>
                    <x-slot:department>Menteri Kesehatan</x-slot:department>
                    <x-slot:faculty>FKP 20</x-slot:faculty>
                </x-card.anggota>
                <x-card.anggota>
                    Muh Rafli Dwi Septianto
                    <x-slot:img>{{ asset('assets/images/about/pengurus/Muh Rafli Dwi Septianto.png') }}</x-slot:img>
                    <x-slot:department>Menteri Lingkungan Hidup</x-slot:department>
                    <x-slot:faculty>FH 20</x-slot:faculty>
                </x-card.anggota>
            </div>
        </div>
        <div class="mb-20">
            <div class="text-lg font-bold mb-8">Kementerian Koordinator <span class="text-bemsun">Perekonomian</span></div>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 gap-y-20">
                <x-card.anggota>
                    Athirah Salsabila S.
                    <x-slot:img>{{ asset('assets/images/about/pengurus/Athirah Salsabila S..png') }}</x-slot:img>
                    <x-slot:department>Menteri Koordinator Perekonomian</x-slot:department>
                    <x-slot:faculty>FISIP 19</x-slot:faculty>
                </x-card.anggota>
                <x-card.anggota>
                    Soekarno Dewa S
                    <x-slot:img>{{ asset('assets/images/about/pengurus/Soekarno Dewa S.png') }}</x-slot:img>
                    <x-slot:department>Menteri Ekonomi Kreatif</x-slot:department>
                    <x-slot:faculty>FISIP 20</x-slot:faculty>
                </x-card.anggota>
                <x-card.anggota>
                    Muhammad Fikri A.
                    <x-slot:img>{{ asset('assets/images/about/pengurus/Muhammad Fikri A..png') }}</x-slot:img>
                    <x-slot:department>Menteri Pengembangan Profesi</x-slot:department>
                    <x-slot:faculty>FIB 19</x-slot:faculty>
                </x-card.anggota>
            </div>
        </div>
    </div>
</section>
@endsection
