    @extends('layouts.dashboard')

    @section('content')
    <div class="content-header row">
        <div class="content-header-left col-md-9 col-12 mb-2">
            <div class="row breadcrumbs-top">
                <div class="col-12">
                    <a class="btn btn-sm btn-primary float-start me-1" href="{{ route('care.index') }}">< Back</a>
                    <h2 class="content-header-title float-start mb-0">Airlangga Care Detail</h2>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-12">
            <x-alert.bootstrap></x-alert.bootstrap>
            <div class="card p-2">
                <p>Nama : {{ $care->name }}</p>
                <p>NIM : {{ $care->nim }}</p>
                <p>Fakultas : {{ $care->faculty->name }}</p>
                <p>Jurusan : {{ $care->major->name }}</p>
                <p>Angkatan : {{ $care->generation }}</p>
                <p>Nomor Telepon : {{ $care->phone_number }}</p>
                <p>Permasalahan :
                    @if ($care->problem == 1)
                    Kemahasiswaan
                    @elseif ($care->problem == 2)
                    Keuangan
                    @else
                    Others
                    @endif
                </p>
                <p>Penjelasan : {{ $care->explanation }}</p>
                <p>Saran :{{ $care->suggestion }}</p>
            </div>
        </div>
    </div>
@endsection
