@extends('layouts.dashboard')

@section('content')
<div class="content-header row">
    <div class="content-header-left col-md-9 col-12 mb-2">
        <div class="row breadcrumbs-top">
            <div class="col-12">
                <h2 class="content-header-title float-start mb-0">Article</h2>
            </div>
        </div>
    </div>
    <div class="content-header-right text-md-end col-md-3 col-12 d-md-block d-none">
        <div class="mb-1 breadcrumb-right">
            <div class="dropdown">
                <a href="{{ route('article.create') }}" class="btn-icon btn btn-primary btn-round btn-sm dropdown-toggle waves-effect waves-float waves-light" type="button">Create</a>
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
                            <th scope="col">Title</th>
                            <th scope="col">Published at</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        @forelse ( $articles as $article )
                            <tr>
                                <th scope="row">{{ $article->id }}</th>
                                <td>{{ $article->title }}</td>
                                <td>{{ $article->published_at }}</td>
                                <td>
                                    <form action="{{ route('article.destroy', Crypt::encrypt($article->id)) }}" method="POST">
                                        @csrf
                                        @method('DELETE')
                                        @if ( $article->publish_status )
                                            <a href="{{ route('article.status', Crypt::encrypt($article->id)) }}" class="btn btn-success">Unpublish</a>
                                        @else
                                            <a href="{{ route('article.status', Crypt::encrypt($article->id)) }}" class="btn btn-success">Publish</a>
                                        @endif
                                        <a href="{{ route('article.show', Crypt::encrypt($article->id)) }}" class="btn btn-primary">Detail</a>
                                        <a href="{{ route('article.edit', Crypt::encrypt($article->id))}}" class="btn btn-warning">Edit</a>
                                        <button type="submit" class="btn btn-danger" onclick="return confirm('Yakin ingin menghapus?')">Delete</button>
                                    </form>
                                </td>
                            </tr>
                        @empty
                            <tr>
                                <td colspan="4" class="text-center">No data available</td>
                            </tr>
                        @endforelse
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
@endsection
