@extends('layouts.dashboard')

@section('content')
<div class="content-header row">
    <div class="content-header-left col-md-9 col-12 mb-2">
        <div class="row breadcrumbs-top">
            <div class="col-12">
                <h2 class="content-header-title float-start mb-0">Airlangga Care</h2>
            </div>
        </div>
    </div>
</div>
<div class="row">
    <div class="col-12">
        <x-alert.bootstrap></x-alert.bootstrap>
        <div class="card">
            <div class="table-responsive">
                <table class="table table-stripped">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Problem</th>
                            <th scope="col">Submitted At</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        @forelse ( $cares as $care )
                            <tr>
                                <th scope="row">{{ $care->id }}</th>
                                <td>{{ $care->name }}</td>
                                <td>
                                    @if ($care->problem == 1)
                                    Kemahasiswaan
                                    @elseif ($care->problem == 2)
                                    Keuangan
                                    @else
                                    Others
                                    @endif
                                </td>
                                <td>{{$care->created_at}}</td>
                                <td>
                                    <a href="{{ route('care.show', Crypt::encrypt($care->id)) }}" class="btn btn-primary">Detail</a>
                                </td>
                            </tr>
                        @empty
                            <tr>
                                <td colspan="5" class="text-center">No data available</td>
                            </tr>
                        @endforelse
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
@endsection
