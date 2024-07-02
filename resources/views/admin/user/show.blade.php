@extends('layouts.dashboard')

@section('content')
<div class="content-header row">
    <div class="content-header-left col-md-9 col-12 mb-2">
        <div class="row breadcrumbs-top">
            <div class="col-12">
                <a class="btn btn-sm btn-primary float-start me-1" href="{{ route('user.index') }}">< Back</a>
                <h2 class="content-header-title float-start mb-0">User Detail</h2>
            </div>
        </div>
    </div>
</div>
<div class="row">
    <div class="col-12">
        <div class="card p-2">
            <p>Username : {{ $user->username }}</p>
            <p for="type">Type :
                <span>
                    @if ($user->type == "sa")
                        Superadmin
                    @elseif ($user->problem == "ad")
                        Adkesma
                    @else
                        Content Writer
                    @endif
                </span>
            </p>
            <p>Status :
                <span>
                    @if ($user->status == 0)
                        Deactivated
                    @else
                        Activated
                    @endif
                </span>
            </p>
        </div>
    </div>
</div>
@endsection
