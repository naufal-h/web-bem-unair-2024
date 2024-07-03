<div class="main-menu menu-fixed menu-light menu-accordion menu-shadow" data-scroll-to-active="true">
    <div class="navbar-header">
        <ul class="nav navbar-nav flex-row">
            <li class="nav-item me-auto"><a class="navbar-brand"
                    href="{{ route('admin.dashboard') }}"><span class="brand-logo">
                    <h2 class="brand-text">BEM 2024</h2>
                </a></li>
            <li class="nav-item nav-toggle"><a class="nav-link modern-nav-toggle pe-0" data-bs-toggle="collapse"><i
                        class="d-block d-xl-none text-primary toggle-icon font-medium-4" data-feather="x"></i><i
                        class="d-none d-xl-block collapse-toggle-icon font-medium-4  text-primary" data-feather="disc"
                        data-ticon="disc"></i></a></li>
        </ul>
    </div>
    <div class="shadow-bottom"></div>
    <div class="main-menu-content">
        <ul class="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation">
            <hr>
            <li class="nav-item {{ (request()->is('user*')) ? 'active' : ''  }}"><a class="d-flex align-items-center" href="{{ route('user.index') }}"><i
                data-feather="user"></i><span class="menu-title text-truncate"
                data-i18n="User">User</span></a>
            </li>
            <hr>
            {{-- <li class="nav-item {{ (request()->is('care*')) ? 'active' : ''  }}"><a class="d-flex align-items-center" href="{{ route('care.index') }}"><i
                data-feather="heart"></i><span class="menu-title text-truncate"
                data-i18n="Airlangga Care">Airlangga Care</span></a>
            </li> --}}
            <li class="nav-item {{ (request()->is('article*')) ? 'active' : ''  }}"><a class="d-flex align-items-center" href="{{ route('article.index') }}"><i
                data-feather="book"></i><span class="menu-title text-truncate"
                data-i18n="Article">Article</span></a>
            </li>
            {{-- <li class="nav-item {{ (request()->is('feedback*')) ? 'active' : ''  }}"><a class="d-flex align-items-center" href="{{ route('feedback.index') }}"><i
                data-feather="thumbs-up"></i><span class="menu-title text-truncate"
                data-i18n="Feedback">Feedback</span></a>
            </li> --}}
            <li class="nav-item {{ (request()->is('form*')) ? 'active' : ''  }}"><a class="d-flex align-items-center" href="{{ route('admin.form.index') }}"><i
                data-feather="file-text"></i><span class="menu-title text-truncate"
                data-i18n="Form">Form</span></a>
            </li>

    </div>
</div>
