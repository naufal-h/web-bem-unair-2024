<nav class="bg-white w-full shadow-lg">
    <div class="container flex items-center justify-between px-[24px] w-full h-full sm:flex-row sm:justify-between ">
        <div class="flex items-center">
            <a href="#">
                <img src="{{ asset('images/logo/logo.png') }}" 
                alt="BEM UNAIR 2024" >
                
            </a>
        </div>
        <div class="hidden lg:flex justify-center w-full" id="text-navbar">
            <a href="{{ route('landing') }}" class="text-gray-800 hover:text-gray-600 font-semibold px-[28px]">BERANDA</a>
            <a href="{{ route('about.index') }}" class="text-gray-800 hover:text-gray-600 font-semibold px-[28px]">TENTANG KAMI</a>
            <a href="{{ route('article.client.index') }}" class="text-gray-800 hover:text-gray-600 font-semibold px-[28px]">ARTIKEL</a>
            <a href="{{route('sop.index')}}" class="text-gray-800 hover:text-gray-600 font-semibold px-[28px]">PARTNERSHIP</a>
            <a href="{{ route('struktur.index') }}" class="text-gray-800 hover:text-gray-600 font-semibold px-[28px]">STRUKTUR ORGANISASI</a>
            <a href="{{ route('form.index') }}" class="text-gray-800 hover:text-gray-600 font-semibold px-[28px]">FORM</a>
        </div>
        <div class="lg:hidden">
            <button id="hamburger" class="focus:outline-none">
                <svg class="w-6 h-6 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
        </div>
    </div>

    <!-- Mobile Drawer Menu -->
    <div id="mobile-drawer" class="fixed lg:hidden bg-white top-0 left-0 h-full w-64 shadow-lg z-50 opacity-0 transform -translate-x-full">
        <div class="flex justify-end p-4">
            <button id="close-drawer" class="focus:outline-none">
                <svg class="w-6 h-6 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
        <a href="{{ route('landing') }}" class="block text-gray-800 hover:text-gray-600 px-5 py-2">BERANDA</a>
        <a href="{{ route('about.index') }}" class="block text-gray-800 hover:text-gray-600 px-5 py-2">TENTANG KAMI</a>
        <a href="{{ route('article.client.index') }}" class="block text-gray-800 hover:text-gray-600 px-5 py-2">ARTIKEL</a>
        <a href="{{route('sop.index')}}" class="block text-gray-800 hover:text-gray-600 px-5 py-2">PARTNERSHIP</a>
        <a href="{{ route('struktur.index') }}" class="block text-gray-800 hover:text-gray-600 px-5 py-2">STRUKTUR ORGANISASI</a>
        <a href="{{ route('form.index') }}" class="block text-gray-800 hover:text-gray-600 px-5 py-2">FORM</a>
    </div>

    <!-- Overlay (Dimmed Background) -->
    <div id="drawer-overlay" class="fixed inset-0 bg-black opacity-0 z-40 pointer-events-none"></div>
</nav>

<style>
    #text-navbar {
        font-family: 'Open Sans';
        font-size: 1rem;
    }

        @media only screen and (max-width: 426px){
            img {
                width: 171px;
            }

            nav{
                height: 100px;
            }
        }


    /* Drawer menu transition and style */
    #mobile-drawer {
        transition: transform 0.4s ease-in-out, opacity 0.4s ease-in-out;
    }

    #mobile-drawer.active {
        transform: translateX(0);
        opacity: 1;
    }

    /* Overlay */
    #drawer-overlay {
        transition: opacity 0.4s ease-in-out;
    }

    #drawer-overlay.active {
        opacity: 0.5;
        pointer-events: auto;
    }
</style>

<script>
    const hamburger = document.getElementById('hamburger');
    const mobileDrawer = document.getElementById('mobile-drawer');
    const closeDrawer = document.getElementById('close-drawer');
    const drawerOverlay = document.getElementById('drawer-overlay');

    // Toggle Drawer and Overlay
    hamburger.addEventListener('click', () => {
        mobileDrawer.classList.add('active');
        drawerOverlay.classList.add('active');
    });

    // Close Drawer and Overlay
    closeDrawer.addEventListener('click', () => {
        mobileDrawer.classList.remove('active');
        drawerOverlay.classList.remove('active');
    });

    // Close Drawer when clicking on the overlay
    drawerOverlay.addEventListener('click', () => {
        closeDrawer.click();
    });
</script>
