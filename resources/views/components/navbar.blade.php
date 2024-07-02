<header class="sticky top-0 z-50 bg-white/80 dark:bg-gray-800/70 backdrop-blur-lg w-full">
    <nav
        class="
        lg:container mx-auto flex flex-wrap items-center justify-between
         w-full py-4 lg:py-0 text-lg text-gray-700 h-20 nav-container
       ">
        <div class="px-4 lg:px-0 h-full py-0 lg:py-2">
            <a href="{{ route('landing') }}">
                @if ($theme != 'dark')
                    <img src="{{ asset('assets/images/logo.png') }}" class="h-full" alt="Logo Kabinet Reformasi">
                @else
                    <img src="{{ asset('assets/images/logo-dark.png') }}" class="h-full" alt="Logo Kabinet Reformasi">
                @endif
            </a>
        </div>

        <input class="checkbox opacity-0 right-5 w-8 h-8 absolute z-10 lg:hidden" type="checkbox" name=""
            id="menu-button" />
        <div class="hamburger-lines flex flex-col justify-between h-6 w-8 absolute right-5 lg:hidden">
            <span class="h-1 w-full rounded-lg bg-gray-600 dark:bg-gray-400 line1 lg:hidden"></span>
            <span class="h-1 w-full rounded-lg bg-gray-600 dark:bg-gray-400 line2 lg:hidden"></span>
            <span class="h-1 w-full rounded-lg bg-gray-600 dark:bg-gray-400 line3 lg:hidden"></span>
        </div>

        <div class="hidden px-4 lg:px-0 mt-5 lg:mt-0 w-full lg:flex lg:items-center lg:w-auto" id="menu">
            <ul
                class="
             h-[80vh] lg:h-min overflow-y-auto lg:overflow-visible
             menu menu-horizontal
             pt-4 text-base text-gray-700
             flex-col w-full
             lg:flex
             lg:flex-row
             lg:justify-between
             lg:pt-0">
                <li>
                    <a class="lg:p-4 py-3 flex hover:text-bemsun rounded-lg w-full lg:w-fit lg:hover:bg-transparent {{ request()->routeIs('landing') ? 'text-bemsun font-bold' : 'text-gray-500 dark:text-gray-300' }}"
                        href="{{ route('landing') }}">Home</a>
                </li>
                <li>
                    <a class="lg:p-4 py-3 flex hover:text-bemsun rounded-lg w-full lg:w-fit lg:hover:bg-transparent {{ request()->routeIs('about') ? 'text-bemsun font-bold' : 'text-gray-500 dark:text-gray-300' }}"
                        href="{{ route('about') }}">Tentang Kami</a>
                </li>
                <li>
                    <a class="lg:p-4 py-3 flex hover:text-bemsun rounded-lg w-full lg:w-fit lg:hover:bg-transparent {{ request()->routeIs('pengurus') ? 'text-bemsun font-bold' : 'text-gray-500 dark:text-gray-300' }}"
                        href="{{ route('pengurus') }}">Pengurus</a>
                </li>
                <li>
                    <a class="lg:p-4 py-3 flex hover:text-bemsun rounded-lg w-full lg:w-fit lg:hover:bg-transparent {{ request()->is('kementerian*') ? 'text-bemsun font-bold' : 'text-gray-500 dark:text-gray-300' }}"
                        href="{{ route('kementerian') }}">Kementerian</a>
                </li>
                <li>
                    <a class="lg:p-4 py-3 flex hover:text-bemsun rounded-lg w-full lg:w-fit lg:hover:bg-transparent {{ request()->is('artikel*') ? 'text-bemsun font-bold' : 'text-gray-500 dark:text-gray-300' }}"
                        href="{{ route('article.client.index') }}">Artikel</a>
                </li>
                <li class="group">
                    <a
                        class="lg:p-4 py-3 hidden lg:flex hover:text-bemsun rounded-lg w-full lg:w-fit lg:hover:bg-transparent {{ request()->routeIs('fitur') ? 'text-bemsun font-bold' : 'text-gray-500 dark:text-gray-300' }}">
                        Fitur
                        <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            viewBox="0 0 24 24">
                            <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                        </svg>
                    </a>
                    <ul
                        class="p-2 bg-base-100 contents lg:hidden flex-col lg:group-hover:flex border border-gray-400/20 rounded-lg">
                        {{-- <li
                            class="{{ request()->is('care*') ? 'text-bemsun font-bold' : 'text-gray-500 dark:text-gray-300' }} hover:text-bemsun rounded-lg"">
                            <a class="rounded-lg" href="{{ route('care.create') }}">Airlangga Care</a>
                        </li> --}}
                        <li
                            class="{{ request()->is('form*') ? 'text-bemsun font-bold' : 'text-gray-500 dark:text-gray-300' }} hover:text-bemsun rounded-lg">
                            <a class="rounded-lg" href="{{ route('form.index') }}">Form Generator</a>
                        </li>
                        {{-- <li
                            class="{{ request()->is('kritik-saran*') ? 'text-bemsun font-bold' : 'text-gray-500 dark:text-gray-300' }} hover:text-bemsun rounded-lg">
                            <a class="rounded-lg" href="{{ route('feedback.client.create') }}">Kritik & Saran</a>
                        </li> --}}
                    </ul>
                </li>
                <li class="flex items-center justify-start lg:justify-center mb-4 lg:m-0">
                    <div
                        class="hidden lg:flex divider divider-horizontal h-4 pointer-events-none my-auto mx-0 px-0 before:bg-gray-400/50 after:bg-gray-400/50">
                    </div>
                    <label
                        class="my-2 swap swap-rotate group hover:bg-bemsun/80 lg:hover:bg-transparent bg-bemsun lg:bg-transparent rounded-lg"
                        onclick="theme('{{ $theme }}')">
                        <!-- this hidden checkbox controls the state -->
                        <input type="checkbox" class="hidden" @if ($theme != 'dark') checked @endif>
                        <p class="text-base ml-8 block lg:hidden text-white group-hover:text-white">Dark Mode</p>

                        <!-- sun icon -->
                        <svg class="swap-on fill-white lg:fill-gray-400 group-hover:fill-white lg:group-hover:fill-bemsun w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path
                                d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                        </svg>

                        <!-- moon icon -->
                        <svg class="swap-off fill-white lg:fill-gray-400 group-hover:fill-white lg:group-hover:fill-bemsun w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path
                                d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                        </svg>

                    </label>
                </li>
            </ul>
        </div>
    </nav>
</header>

<script>
    function theme(current) {
        const theme = (current != 'dark') ? 'dark' : 'light';
        document.cookie = 'theme=' + theme + ";domain=" + window.location.hostname + ";path=/";
        console.log(theme)
        location.reload();
    }

    // Mobile navbar button toggle
    const button = document.querySelector('#menu-button');
    const header = document.querySelector('header');
    const body = document.querySelector('body');

    button.addEventListener('click', () => {
        try {
            document.querySelector('#menu-button:checked').value
            body.classList.add("overflow-hidden")
            body.classList.add("pt-20")
            header.classList.add("mobile-nav")
        } catch (error) {
            body.classList.remove("overflow-hidden")
            body.classList.remove("pt-20")
            header.classList.remove("mobile-nav")
        }
    });
</script>

{{-- Mobile navbar button animation --}}
<style>
    .mobile-nav {
        position: fixed;
        height: 100vh;
    }

    @media only screen and (min-width: 1024px) {
        .mobile-nav {
            position: sticky;
            height: auto;
        }
    }

    .nav-container .hamburger-lines .line1 {
        transform-origin: 0% 0%;
        transition: transform 0.4s ease-in-out;
    }

    .nav-container .hamburger-lines .line2 {
        transition: transform 0.2s ease-in-out;
    }

    .nav-container .hamburger-lines .line3 {
        transform-origin: 0% 100%;
        transition: transform 0.4s ease-in-out;
    }

    .nav-container input[type="checkbox"]:checked~.hamburger-lines .line1 {
        transform: rotate(45deg);
    }

    .nav-container input[type="checkbox"]:checked~.hamburger-lines .line2 {
        transform: scaleX(0) translateX(10px);
    }

    .nav-container input[type="checkbox"]:checked~.hamburger-lines .line3 {
        transform: rotate(-45deg);
    }

    .nav-container input[type="checkbox"]:checked~#menu {
        display: block;
    }
</style>
