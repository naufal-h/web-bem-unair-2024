<!DOCTYPE html>
{{-- <html lang="en" data-theme="{{ $theme }}" class="{{ $theme }}"> --}}
<html lang="en" data-theme="light" class="light">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>BEM 2024</title>
    @vite('resources/css/app.css')
    {{-- <link rel="stylesheet" href="{{ asset('/resources/css/app.css') }}"> --}}
    {{-- <link rel="stylesheet" href="{{ asset('build/assets/app-DazU-V9Y.css') }}"> --}}
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet">
    <link rel="apple-touch-icon" sizes="180x180" href="{{ asset('assets/favicon/apple-touch-icon.png') }}">
    <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('assets/favicon/favicon-32x32.png') }}">
    <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('assets/favicon/favicon-16x16.png') }}">
    <link rel="manifest" href="{{ asset('assets/favicon/site.webmanifest') }}">
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet">

    <script src="https://kit.fontawesome.com/9ef81299b0.js" crossorigin="anonymous"></script>
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-723Y286KJ7"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', 'G-723Y286KJ7');
    </script>
    {{-- @vite('resources/js/app.tsx') --}}
    {{-- Redirect to secure protocol --}}
    {{-- <script>
        if (location.protocol !== 'https:') {
            location.replace(`https:${location.href.substring(location.protocol.length)}`);
        }
    </script> --}}
    <style>
        .normalize-text b {
            font-weight: inherit;
        }

        .normalize-text i {
            font-style: inherit
        }
    </style>
    @stack('style')
</head>

<body>
    <x-navbar />
    <div style="min-height: 500px; overflow: hidden;">
        @yield('content')
    </div>
    {{-- <div id="footer-component"></div> --}}
    <x-footer />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js"
        integrity="sha512-aVKKRRi/Q/YV+4mjoKBsE4x3H+BkegoM/em46NNlCqNTmUYADjBbeNefNxYV7giUp0VxICtqdrbqU7iVaeZNXA=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    @stack('script')
</body>

</html>
