<nav class="bg-white shadow">
    <div class="container mx-auto flex items-center">
        <div class="flex items-center">
            <a href="#">
                <img src="{{ asset('images/logo/logo.png') }}" alt="BEM UNAIR 2024" class="h-10" style="height: 100px">
            </a>
        </div>
        <div class="flex space-x-6 justify-center font-semibold" id="text-navbar">
            <a href="{{ route('landing') }}" class="text-gray-800 hover:text-gray-600 px-5">BERANDA</a>
            <a href="{{ route('about.index') }}" class="text-gray-800 hover:text-gray-600 px-5">TENTANG KAMI</a>
            <a href="{{ route('article.client.index') }}" class="text-gray-800 hover:text-gray-600 px-5">ARTIKEL</a>
            <a href="{{route('sop.index')}}" class="text-gray-800 hover:text-gray-600 px-5">SOP</a>
            <a href="{{ route('struktur.index') }}" class="text-gray-800 hover:text-gray-600 px-5">STRUKTUR ORGANISASI</a>
            <a href="{{ route('form.index') }}" class="text-gray-800 hover:text-gray-600 px-5">FORM GENERATOR</a>
        </div>
    </div>
</nav>

<style>
    #text-navbar {
        font-family: 'Open Sans';
        font-size: 1rem;
        margin-left: 5%;
    }

    @media (min-width: 1440px) {
        #text-navbar {
            margin-left: 15%;
        }
    }
</style>
