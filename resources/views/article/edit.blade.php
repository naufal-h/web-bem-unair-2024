@extends('layouts.dashboard')

@section('content')
    <div class="content-header row">
        <div class="content-header-left col-md-9 col-12 mb-2">
            <div class="row breadcrumbs-top">
                <div class="col-12">
                    <a class="btn btn-sm btn-primary float-start me-1" href="{{ route('article.index') }}">
                        < Back</a>
                            <h2 class="content-header-title float-start mb-0">Update Article</h2>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-12">
            <x-alert.bootstrap></x-alert.bootstrap>
            <div class="card p-2">
                <form id="articleForm" method="POST" action="{{ route('article.update', Crypt::encrypt($article->id)) }}"
                    enctype="multipart/form-data">
                    @csrf
                    @method('PUT')
                    <div class="form-group">
                        <label for="title">Title</label><br>
                        <input class="form-control" type="text" name="title" id="title"
                            value="{{ $article->title }}"><br>
                    </div>
                    <div class="form-group">
                        <label for="content">Content</label><br>
                        <div id="editor" class="form-control">{!! $article->content !!}</div>
                        {{-- <input class="hidden" type="text" name="content" id="content" value="{{ $article->content }}"> --}}
                        <textarea name="content" id="content" class="d-none"></textarea>
                    </div>
                    <p class="m-0 mt-2">Disarankan menggunakan foto dengan rasio 16x9 (landscape)</p>
                    <div class="form-group">
                        <label for="image1">Foto 1</label><br>
                        <input class="form-control" type="file" name="image1" id="image1" accept="image/*"><br>
                    </div>
                    <div class="form-group">
                        <label for="image2">Foto 2</label><br>
                        <input class="form-control" type="file" name="image2" id="image2" accept="image/*"><br>
                    </div>
                    <div class="form-group">
                        <label for="image3">Foto 3</label><br>
                        <input class="form-control" type="file" name="image3" id="image3" accept="image/*"><br>
                    </div>
                    <input class="btn btn-primary mt-1" type="button" value="Update" onclick="submitForm()">
                </form>
            </div>
        </div>
    </div>

    {{-- <script src="https://cdn.jsdelivr.net/npm/@editorjs/editorjs@latest"></script>
<script src="https://cdn.jsdelivr.net/npm/@editorjs/header@latest"></script>
<script src="https://cdn.jsdelivr.net/npm/@editorjs/list@latest"></script>

<script>
    // Get content old value
    var content = document.getElementById('content').value
    console.log(content)


    // Initialize EditorJS
    const editor = new EditorJS({
        holder: 'editor',
        tools: {
            header: Header,
            list: List,
        },
        data: JSON.parse(content)
    })

    // Get EditorJS data and submit form
    function submitForm() {
        editor.save().then((outputData) => {
            // console.log("SUCCESS", outputData)

            const res = JSON.stringify(outputData)
            document.getElementById("content").value = res

            document.getElementById("articleForm").submit();
            // const edjsParser = edjsHTML();
            // let html = edjsParser.parse(JSON.parse(res));
            // console.log(html);
        }).catch((error) => {
            console.log("ERROR", error)
        })
    }
</script> --}}
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
