<nav class="bg-white shadow">
    <div class="container mx-auto flex items-center justify-between pr-8">
        <div class="flex items-center">
            <a href="#">
                <img src="{{ asset('images/logo/logo.png') }}" alt="BEM UNAIR 2024" class="h-10" style="height: 100px">
            </a>
        </div>
        <div class="hidden lg:flex justify-center font-semibold" id="text-navbar">
            <a href="{{ route('landing') }}" class="text-gray-800 hover:text-gray-600 px-5">BERANDA</a>
            <a href="{{ route('about.index') }}" class="text-gray-800 hover:text-gray-600 px-5">TENTANG KAMI</a>
            <a href="{{ route('article.client.index') }}" class="text-gray-800 hover:text-gray-600 px-5">ARTIKEL</a>
            <a href="{{route('sop.index')}}" class="text-gray-800 hover:text-gray-600 px-5">SOP</a>
            <a href="{{ route('struktur.index') }}" class="text-gray-800 hover:text-gray-600 px-5">STRUKTUR ORGANISASI</a>
            <a href="{{ route('form.index') }}" class="text-gray-800 hover:text-gray-600 px-5">FORM GENERATOR</a>
        </div>
        <div class="lg:hidden">
            <button id="hamburger" class="focus:outline-none">
                <svg class="w-6 h-6 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
        </div>
    </div>
    <!-- Mobile Menu -->
    <div id="mobile-menu" class="hidden lg:hidden">
        <a href="{{ route('landing') }}" class="block text-gray-800 hover:text-gray-600 px-5 py-2">BERANDA</a>
        <a href="{{ route('about.index') }}" class="block text-gray-800 hover:text-gray-600 px-5 py-2">TENTANG KAMI</a>
        <a href="{{ route('article.client.index') }}" class="block text-gray-800 hover:text-gray-600 px-5 py-2">ARTIKEL</a>
        <a href="{{route('sop.index')}}" class="block text-gray-800 hover:text-gray-600 px-5 py-2">SOP</a>
        <a href="{{ route('struktur.index') }}" class="block text-gray-800 hover:text-gray-600 px-5 py-2">STRUKTUR ORGANISASI</a>
        <a href="{{ route('form.index') }}" class="block text-gray-800 hover:text-gray-600 px-5 py-2">FORM GENERATOR</a>
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

<script>
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');

    hamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
</script>
