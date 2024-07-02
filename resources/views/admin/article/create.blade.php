@extends('layouts.dashboard')

@section('content')
    <div class="content-header row">
        <div class="content-header-left col-md-9 col-12 mb-2">
            <div class="row breadcrumbs-top">
                <div class="col-12">
                    <a class="btn btn-sm btn-primary float-start me-1" href="{{ route('article.index') }}">
                        < Back</a>
                            <h2 class="content-header-title float-start mb-0">Create Article</h2>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-12">
            <x-alert.bootstrap></x-alert.bootstrap>
            <div class="card">
                <form id="articleForm" class="card-body" method="POST" action="{{ route('article.store') }}"
                    enctype="multipart/form-data">
                    @csrf
                    <div class="mb-1">
                        <label class="form-label" for="title">Title</label>
                        <input class="form-control" type="text" name="title" id="title"
                            value="{{ old('title') }}">
                    </div>
                    <div class="mb-1" style="max-width: 775px">
                        <label class="form-label" for="content">Content</label>
                        <div id="editor" class="form-control"></div>
                        {{-- <input class="hidden" type="text" name="content" id="content" value="{{ old('content') }}"> --}}
                        <textarea name="content" id="content" class="d-none"></textarea>

                    </div>
                    <p class="m-0 mt-2">Disarankan menggunakan foto dengan rasio 16x9 (landscape)</p>
                    <div class="mb-1">
                        <label class="form-label" for="image1">Foto 1</label>
                        <input class="form-control" type="file" name="image1" id="image1" accept="image/*">
                    </div>
                    <div class="mb-1">
                        <label class="form-label" for="image2">Foto 2</label>
                        <input class="form-control" type="file" name="image2" id="image2" accept="image/*">
                    </div>
                    <div class="mb-1">
                        <label class="form-label" for="image3">Foto 3</label>
                        <input class="form-control" type="file" name="image3" id="image3" accept="image/*">
                    </div>
                    <button class="btn btn-primary" type="button" onclick="submitForm()">Create</button>
                </form>
            </div>
        </div>
    </div>
@endsection

@push('styles')
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ckeditor/4.21.0/contents.min.css"
        integrity="sha512-HK3G0WJTxeYhsh/hzS/1NDmqw1uZplDy2w2Z60xHPTytEKEpSSXF9DsXytkUNLh7AyPeBvyVSpz4+kRCxTDYqQ=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
@endpush

@push('scripts')
    <script src="https://cdn.ckeditor.com/ckeditor5/36.0.1/inline/ckeditor.js"></script>

    <script>
        let editorData;
        InlineEditor
            .create(document.querySelector('#editor', contenteditable = "true"))
            .then(editor => {
                editorData = editor;
                console.log(editor);
            })
            .catch(error => {
                console.error(error);
            });

        // Save WYSIWYG data to form post
        function submitForm() {
            document.querySelector('#content').value = editorData.getData();
            document.getElementById("articleForm").submit();
        }
    </script>
@endpush
