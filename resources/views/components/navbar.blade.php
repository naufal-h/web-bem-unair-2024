<nav class="bg-white shadow">
    <div class="container mx-auto px-6">
        <div class="flex items-center">
            <div class="flex items-center" style="20%">
                <a href="#">
                    <img src="{{ asset('images/logo/logo.png') }}" alt="BEM UNAIR 2024" class="h-10" style="height: 100px">
                </a>
            </div>
            <div class="flex space-x-4 justify-center font-semibold" id="text-navbar" style="width: 80%; font-family:'Open Sans'; font-size: 1rem; padding-left: 8.5%; padding-right: 8.5%" >
                <a href="{{route('landing')}}" class="text-gray-800 hover:text-gray-600 px-7">BERANDA</a>
                <a href="{{ route('about.index') }}" class="text-gray-800 hover:text-gray-600 px-7">TENTANG KAMI</a>
                <a href="{{route('article.client.index')}}" class="text-gray-800 hover:text-gray-600 px-7">ARTIKEL</a>
                <a href="#" class="text-gray-800 hover:text-gray-600 px-7">SOP</a>
                <a href="{{route('form.index')}}" class="text-gray-800 hover:text-gray-600 px-7">FORM GENERATOR</a>
            </div>
        </div>
    </div>
</nav>

