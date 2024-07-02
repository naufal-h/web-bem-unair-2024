@extends('layouts.dashboard')

@section('content')
<div class="content-header row">
    <div class="content-header-left col-md-9 col-12 mb-2">
        <div class="row breadcrumbs-top">
            <div class="col-12">
                <a class="btn btn-sm btn-primary float-start me-1" href="{{ route('feedback.index') }}">< Back</a>
                <h2 class="content-header-title float-start mb-0">Feedback Detail</h2>
            </div>
        </div>
    </div>
</div>
<div class="row">
    <div class="col-12">
        <div class="card p-2">

            <p>Feedback : {{ $feedback->feedback }}</p>
        </div>
    </div>
</div>
@endsection
