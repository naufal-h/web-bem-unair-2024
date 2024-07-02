@extends('layouts.dashboard')

@section('content')
<div class="content-header row">
    <div class="content-header-left col-md-9 col-12 mb-2">
        <div class="row breadcrumbs-top">
            <div class="col-12">
                <h2 class="content-header-title float-start mb-0">Form</h2>
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
                            <th scope="col">Created at</th>
                            <th scope="col">Email</th>
                            <th scope="col">Title</th>
                            <th scope="col">Last updated</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        @forelse ( $forms as $form )
                            <tr>
                                <th scope="row">{{ $loop->iteration }}</th>
                                <td>{{ $form->created_at }}</td>
                                <td>{{ $form->author }}</td>
                                <td>{{ $form->title }}</td>
                                <td>{{ $form->updated_at->diffForHumans() }}</td>
                                <td>
                                    <a href="{{ route('form.show', $form->slug) }}" target="__blank" class="btn btn-primary">Show</a>
                                    <form action="{{ route('form.validation') }}" method="POST" target="__blank">
                                        @csrf
                                        <input type="hidden" name="token" value="{{ $form->token }}">
                                        <input type="hidden" name="author" value="{{ $form->author }}">
                                        <button type="submit" class="btn btn-success">Edit</button>
                                    </form>
                                    <form action="{{ route('admin.form.delete') }}" method="POST" class="d-inline">
                                        @csrf
                                        <input type="hidden" name="token" id="token" value="{{ $form->token }}">
                                        <button type="submit" class="btn btn-danger" onclick="return confirm('Apakah anda yakin ingin menghapus form ' + '{{ $form->title }}' + '?')">Delete</button>
                                    </form>
                                </td>
                            </tr>
                        @empty
                            <tr>
                                <td colspan="6" class="text-center">No data available</td>
                            </tr>
                        @endforelse
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
@endsection
