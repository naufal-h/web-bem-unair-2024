@extends('layouts.dashboard')

@section('content')
<div class="content-header row">
    <div class="content-header-left col-md-9 col-12 mb-2">
        <div class="row breadcrumbs-top">
            <div class="col-12">
                <h2 class="content-header-title float-start mb-0">User</h2>
            </div>
        </div>
    </div>
    <div class="content-header-right text-md-end col-md-3 col-12 d-md-block d-none">
        <div class="mb-1 breadcrumb-right">
            <div class="dropdown">
                <a href="{{ route('user.create') }}" class="btn-icon btn btn-primary btn-round btn-sm dropdown-toggle waves-effect waves-float waves-light" type="button">Create</a>
            </div>
        </div>
    </div>
</div>
<div class="row">
    <x-alert.bootstrap></x-alert.bootstrap>
    <div class="col-12">
        <div class="card">
            <div class="table-responsive">
                <table class="table table-stripped">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Username</th>
                            <th scope="col">Type</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ( $users as $user )
                        <tr>
                            <th scope="row">{{ $user->id }}</th>
                            <td>{{ $user->username }}</td>
                            <td>
                                @if ($user->type == "sa")
                                Superadmin
                                @elseif ($user->type == "ad")
                                Adkesma
                                @else
                                Content Writer
                                @endif
                            </td>
                            <td>
                                @if ($user->status == 0)
                                    Deactivated
                                @else
                                    Activated
                                @endif
                            </td>
                            <td>
                                <a href="{{ route('user.show', Crypt::encrypt($user->id)) }}" class="btn btn-primary">Detail</a>
                                <a href="{{ route('user.edit', Crypt::encrypt($user->id)) }}" class="btn btn-warning">Edit</a>
                                <a href="{{ route('user.status', Crypt::encrypt($user->id)) }}" class="btn btn-info">{{$user->status == 1 ? 'Deactivate' : 'Activate'}}</a>
                            </td>
                        </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
@endsection
