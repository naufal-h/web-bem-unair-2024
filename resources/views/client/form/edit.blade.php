@extends('layouts.app')

@section('content')
    <section class="lg:container flex flex-col justify-start align-top items-center m-auto px-4 mb-32">
        <div class="tabs tabs-boxed my-12">
            <a class="tab" onclick="toggleTab('information')" id="informationTab">Informasi Form</a>
            <a class="tab" onclick="toggleTab('questions')" id="questionsTab">Edit Pertanyaan Form</a>
            <a class="tab" onclick="toggleTab('respondents')" id="respondentsTab">Respon Form</a>
        </div>
        {{-- success --}}
        @if (session('success'))
            <div class="bg-green-500/30 rounded-2xl p-4 mb-6" id="alert">
                <p class="text-base">
                    {{ session('success') }}
                </p>
            </div>
        @endif
        {{-- error --}}
        @if ($errors->any() || session('error'))
            <div class="bg-red-500/30 rounded-2xl p-4 mb-6" id="alert">
                <ul class="text-base list-inside list-disc">
                    @foreach ($errors->all() as $error)
                        <li>{{ $error }}</li>
                    @endforeach
                    @if (session('error'))
                        <li>{{ session('error') }}</li>
                    @endif
                </ul>
            </div>
        @endif
        <div class="w-full hidden" id="information">
            <div class="flex flex-row justify-between items-center w-full">
                <h1 class="text-3xl font-bold">
                    {{ $form->title }}
                </h1>
                <div class="flex gap-2 flex-wrap justify-end">
                    <form action="{{ route('form.delete.all', $form->token) }}" method="POST">
                        @csrf
                        <button class="btn btn-error" type="submit"
                            onclick="return confirm('Yakin ingin menghapus Form?')">
                            <span class="mr-2">Hapus Form</span>
                            <svg width="12" height="16" viewBox="0 0 12 16" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_1011_2986)">
                                    <path
                                        d="M12 0.842105H9.05262L8.21051 0H3.99998L3.15788 0.842105H0.21051V2.52632H12V0.842105ZM1.05262 13.4737C1.05262 13.9204 1.23006 14.3487 1.54591 14.6646C1.86176 14.9805 2.29015 15.1579 2.73683 15.1579H9.47367C9.92035 15.1579 10.3487 14.9805 10.6646 14.6646C10.9804 14.3487 11.1579 13.9204 11.1579 13.4737V3.36842H1.05262V13.4737Z"
                                        fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1011_2986">
                                        <rect width="11.7895" height="16" fill="white"
                                            transform="translate(0.21051)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>
                    </form>
                    <label class="btn btn-warning" for="edit-form-modal">
                        <span class="mr-2">Edit Detail Form</span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1011_2992)">
                                <path
                                    d="M11.6694 1.42697C11.8588 1.23084 12.0854 1.07439 12.3359 0.966769C12.5865 0.859145 12.8559 0.802496 13.1286 0.800126C13.4013 0.797757 13.6717 0.849715 13.9241 0.952969C14.1764 1.05622 14.4057 1.2087 14.5985 1.40152C14.7913 1.59433 14.9438 1.82361 15.0471 2.07598C15.1503 2.32835 15.2023 2.59876 15.1999 2.87143C15.1975 3.1441 15.1409 3.41356 15.0333 3.6641C14.9256 3.91464 14.7692 4.14124 14.5731 4.33067L13.7588 5.1449L10.8551 2.2412L11.6694 1.42697ZM9.40328 3.69305L0.799988 12.2963V15.2H3.70369L12.308 6.59675L9.40226 3.69305H9.40328Z"
                                    fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1011_2992">
                                    <rect width="16" height="16" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </label>
                </div>
            </div>
            <div class="flex flex-col lg:flex-row mt-8 gap-4">
                <div class="flex flex-col basis-1/4 gap-4">
                    <div class="text-2xl font-bold text-gray-500">Detail Pemilik</div>
                    <div class="flex flex-col gap-6">
                        <div>
                            <div class="text-base">Author Email</div>
                            <div class="text-base font-medium">{{ $form->author }}</div>
                        </div>
                        <div>
                            <div class="text-base">Token</div>
                            <div class="text-base font-medium">{{ $form->token }}</div>
                        </div>
                        <div>
                            <div class="text-base">Status Form</div>
                            <div class="text-base font-medium">{{ $isOpen ? 'Terbuka' : 'Ditutup' }}</div>
                        </div>
                        <div>
                            <div class="text-base">Tanggal Dibuat</div>
                            <div class="text-base font-medium">{{ $form->created_detail }}</div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col basis-3/4 gap-4">
                    <div class="text-2xl font-bold text-gray-500">Detail Form</div>
                    <div class="flex flex-col gap-6">
                        <div>
                            <div class="text-base">Shortlink</div>
                            <a href="https://bem.unair.ac.id/f/{{ $form->slug }}"
                                class="text-base font-medium hover:text-bemsun"
                                target="__blank">https://bem.unair.ac.id/f/{{ $form->slug }}</a>
                        </div>
                        <div>
                            <div class="text-base">Deskripsi Form</div>
                            <div class="text-base font-medium" id="form_description">{{ $form->description }}</div>
                            <script>
                                // replace paragraph with <br/>
                                document.getElementById('form_description').innerHTML = document.getElementById('form_description').innerHTML
                                    .replace(/\n/g, "<br/>");
                            </script>
                        </div>
                        <div>
                            <div class="text-base">Batas Waktu Pengisian</div>
                            <div class="text-base font-medium">
                                @if ($isOpen && $form->deadline == null)
                                    Selalu dibuka
                                @elseif (!$isOpen)
                                    Telah Ditutup -
                                @endif
                                {{ $form->deadline }}
                            </div>
                        </div>
                        <div>
                            <div class="text-base">Pesan Penutup (Ditampilkan setelah mengisi form)</div>
                            <div class="text-base font-medium">{{ $form->after_form_message }}</div>
                        </div>
                        <div>
                            <div class="text-base">Link Website (Ditampilkan setelah mengisi form)</div>
                            <div class="text-base font-medium">{{ $form->after_form_redirect }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full hidden" id="questions">
            <div class="flex flex-row justify-between items-center w-full">
                <h1 class="text-3xl font-bold">
                    Edit Pertanyaan Form
                </h1>
                <div class="flex gap-2 flex-wrap justify-end">
                    <label class="btn btn-info" for="sort-form-modal">
                        <span class="mr-2">Ubah Urutan</span>
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M2.39998 2.8999C2.1878 2.8999 1.98432 2.98419 1.83429 3.13422C1.68426 3.28425 1.59998 3.48773 1.59998 3.6999C1.59998 3.91208 1.68426 4.11556 1.83429 4.26559C1.98432 4.41562 2.1878 4.4999 2.39998 4.4999H11.2C11.4121 4.4999 11.6156 4.41562 11.7657 4.26559C11.9157 4.11556 12 3.91208 12 3.6999C12 3.48773 11.9157 3.28425 11.7657 3.13422C11.6156 2.98419 11.4121 2.8999 11.2 2.8999H2.39998ZM2.39998 6.0999C2.1878 6.0999 1.98432 6.18419 1.83429 6.33422C1.68426 6.48425 1.59998 6.68773 1.59998 6.8999C1.59998 7.11208 1.68426 7.31556 1.83429 7.46559C1.98432 7.61562 2.1878 7.6999 2.39998 7.6999H7.99998C8.21215 7.6999 8.41563 7.61562 8.56566 7.46559C8.71569 7.31556 8.79998 7.11208 8.79998 6.8999C8.79998 6.68773 8.71569 6.48425 8.56566 6.33422C8.41563 6.18419 8.21215 6.0999 7.99998 6.0999H2.39998ZM2.39998 9.2999C2.1878 9.2999 1.98432 9.38419 1.83429 9.53422C1.68426 9.68425 1.59998 9.88773 1.59998 10.0999C1.59998 10.3121 1.68426 10.5156 1.83429 10.6656C1.98432 10.8156 2.1878 10.8999 2.39998 10.8999H5.59998C5.81215 10.8999 6.01563 10.8156 6.16566 10.6656C6.31569 10.5156 6.39998 10.3121 6.39998 10.0999C6.39998 9.88773 6.31569 9.68425 6.16566 9.53422C6.01563 9.38419 5.81215 9.2999 5.59998 9.2999H2.39998ZM12 6.8999C12 6.68773 11.9157 6.48425 11.7657 6.33422C11.6156 6.18419 11.4121 6.0999 11.2 6.0999C10.9878 6.0999 10.7843 6.18419 10.6343 6.33422C10.4843 6.48425 10.4 6.68773 10.4 6.8999V11.3687L9.36557 10.3343C9.21469 10.1886 9.01261 10.1079 8.80285 10.1098C8.5931 10.1116 8.39245 10.1957 8.24412 10.344C8.09579 10.4924 8.01166 10.693 8.00984 10.9028C8.00801 11.1125 8.08865 11.3146 8.23438 11.4655L10.6344 13.8655C10.7844 14.0155 10.9878 14.0997 11.2 14.0997C11.4121 14.0997 11.6156 14.0155 11.7656 13.8655L14.1656 11.4655C14.3113 11.3146 14.3919 11.1125 14.3901 10.9028C14.3883 10.693 14.3042 10.4924 14.1558 10.344C14.0075 10.1957 13.8069 10.1116 13.5971 10.1098C13.3873 10.1079 13.1853 10.1886 13.0344 10.3343L12 11.3687V6.8999Z"
                                fill="white" />
                        </svg>
                    </label>
                    <label class="btn" for="add-question-modal">
                        <span class="mr-2">Tambah Pertanyaan</span>
                        <svg width="12" height="13" viewBox="0 0 12 13" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1007_2307)">
                                <path
                                    d="M5.99995 1.69995V6.49995M5.99995 6.49995V11.3M5.99995 6.49995H10.8M5.99995 6.49995H1.19995"
                                    stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1007_2307">
                                    <rect width="12" height="12" fill="white" transform="translate(0 0.5)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </label>
                </div>
            </div>
            <ol class="mt-8 list-decimal list-inside flex flex-col gap-8">
                @forelse ($form->questions->sortBy('order') as $question)
                    <div class="flex">
                        <li>
                        </li>
                        <div class="flex gap-4 justify-between w-full ml-4">
                            <div>
                                <h4 class="text-lg font-medium question">{{ $question->title }}</h4>
                                <p class="text-sm font-medium">
                                    Tipe {{ $question->type }}
                                    <span
                                        class="text-bemfire">{{ $question->required == 'yes' ? '(Wajib diisi)' : '' }}</span>
                                </p>
                            </div>
                            <div class="flex gap-2 flex-wrap justify-end items-center">
                                <form action="{{ route('form.delete.questions', [$form->token, $question->id]) }}"
                                    method="POST">
                                    @csrf
                                    <button class="btn btn-error" onclick="return confirm('Yakin ingin menghapus?')"
                                        type="submit">
                                        <span class="mr-2">Hapus</span>
                                        <svg width="12" height="16" viewBox="0 0 12 16" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_1020_3188)">
                                                <path
                                                    d="M11.9999 0.842105H9.05255L8.21045 0H3.99992L3.15782 0.842105H0.210449V2.52632H11.9999V0.842105ZM1.05255 13.4737C1.05255 13.9204 1.23 14.3488 1.54585 14.6646C1.8617 14.9805 2.29008 15.1579 2.73676 15.1579H9.47361C9.92029 15.1579 10.3487 14.9805 10.6645 14.6646C10.9804 14.3488 11.1578 13.9204 11.1578 13.4737V3.36842H1.05255V13.4737Z"
                                                    fill="white" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1020_3188">
                                                    <rect width="11.7895" height="16" fill="white"
                                                        transform="translate(0.210449)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </button>
                                </form>
                                <label for="edit-question-modal" class="btn btn-primary" onclick="editQuestion(this)"
                                    data-token="{{ $form->token }}" data-id="{{ $question->id }}"
                                    data-title="{{ $question->title }}" data-type="{{ $question->type }}"
                                    data-required="{{ $question->required }}"
                                    data-placeholder="{{ $question->placeholder }}"
                                    data-options="{{ $question->options }}"
                                    data-max_size_file="{{ $question->max_size_file }}">
                                    <span class="mr-2">Edit</span>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_1020_3183)">
                                            <path
                                                d="M11.6694 1.42697C11.8589 1.23084 12.0855 1.07439 12.336 0.966769C12.5865 0.859145 12.856 0.802496 13.1287 0.800126C13.4013 0.797757 13.6717 0.849715 13.9241 0.952969C14.1765 1.05622 14.4058 1.2087 14.5986 1.40152C14.7914 1.59433 14.9439 1.82361 15.0471 2.07598C15.1504 2.32835 15.2023 2.59876 15.2 2.87143C15.1976 3.1441 15.141 3.41356 15.0333 3.6641C14.9257 3.91464 14.7693 4.14124 14.5731 4.33067L13.7589 5.1449L10.8552 2.2412L11.6694 1.42697ZM9.40335 3.69305L0.800049 12.2963V15.2H3.70375L12.3081 6.59675L9.40232 3.69305H9.40335Z"
                                                fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1020_3183">
                                                <rect width="16" height="16" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </label>
                                <span class="hidden">{{ $question->form_id }}</span>
                            </div>
                        </div>
                    </div>
                @empty
                    <p>Tidak ada pertanyaan</p>
                @endforelse
                <script>
                    // replace h4.question with <br/>
                    document.querySelectorAll('h4.question').forEach((h4) => {
                        h4.innerHTML = h4.innerHTML.replace(/\n/g, "<br/>");
                    });
                </script>
            </ol>

        </div>
        <div class="w-full hidden" id="respondents" style="display: none">
            <div class="flex flex-row justify-between items-center w-full">
                <h1 class="text-3xl font-bold">
                    Daftar Responden
                </h1>
                <div class="flex gap-2 flex-wrap justify-end">
                    <a href="{{ route('form.download', $form->token) }}" target="__blank"
                        class="btn bg-green-900 hover:bg-green-800">
                        <span class="mr-2">Unduh Excel</span>
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1007_2557)">
                                <path
                                    d="M10.7488 8.0999L4.10693 6.8999V15.7667C4.10693 16.1716 4.42756 16.4999 4.82308 16.4999H16.2838C16.6793 16.4999 17 16.1716 17 15.7667V12.4999L10.7488 8.0999Z"
                                    fill="#185C37" />
                                <path
                                    d="M10.7488 0.5H4.82308C4.42756 0.5 4.10693 0.828263 4.10693 1.2332V4.5L10.7488 8.5L14.2651 9.7L17 8.5V4.5L10.7488 0.5Z"
                                    fill="#21A366" />
                                <path d="M4.10693 4.5H10.7488V8.5H4.10693V4.5Z" fill="#107C41" />
                                <path opacity="0.1"
                                    d="M8.86055 3.69995H4.10693V13.7H8.86055C9.25553 13.6986 9.57541 13.3711 9.57669 12.9668V4.43315C9.57541 4.02876 9.25553 3.70127 8.86055 3.69995Z"
                                    fill="black" />
                                <path opacity="0.2"
                                    d="M8.46985 4.1001H4.10693V14.1001H8.46985C8.86484 14.0988 9.18472 13.7713 9.186 13.3669V4.8333C9.18472 4.42891 8.86484 4.10141 8.46985 4.1001Z"
                                    fill="black" />
                                <path opacity="0.2"
                                    d="M8.46985 4.1001H4.10693V13.3001H8.46985C8.86484 13.2988 9.18472 12.9713 9.186 12.5669V4.8333C9.18472 4.42891 8.86484 4.10141 8.46985 4.1001Z"
                                    fill="black" />
                                <path opacity="0.2"
                                    d="M8.07916 4.1001H4.10693V13.3001H8.07916C8.47414 13.2988 8.79402 12.9713 8.79531 12.5669V4.8333C8.79402 4.42891 8.47414 4.10141 8.07916 4.1001Z"
                                    fill="black" />
                                <path
                                    d="M0.916098 4.1001H8.07915C8.47466 4.1001 8.79529 4.42836 8.79529 4.8333V12.1669C8.79529 12.5718 8.47466 12.9001 8.07915 12.9001H0.916098C0.52058 12.9001 0.199951 12.5718 0.199951 12.1669V4.8333C0.199951 4.42836 0.52058 4.1001 0.916098 4.1001Z"
                                    fill="url(#paint0_linear_1007_2557)" />
                                <path
                                    d="M2.41797 10.8833L3.9245 8.49326L2.54417 6.11646H3.65453L4.40779 7.63646C4.47734 7.78085 4.525 7.88805 4.55079 7.95885H4.56056C4.60925 7.84536 4.66137 7.73344 4.71683 7.62325L5.52206 6.11726H6.54139L5.12589 8.48006L6.57734 10.8833H5.49276L4.62268 9.21486C4.58169 9.14387 4.54692 9.06932 4.51876 8.99206H4.50586C4.48038 9.06774 4.44656 9.14021 4.40506 9.20806L3.50919 10.8833H2.41797Z"
                                    fill="white" />
                                <path d="M16.2838 0.5H10.7488V4.5H16.9999V1.2332C16.9999 0.828263 16.6793 0.5 16.2838 0.5Z"
                                    fill="#33C481" />
                                <path d="M10.7488 8.5H16.9999V12.5H10.7488V8.5Z" fill="#107C41" />
                            </g>
                            <defs>
                                <linearGradient id="paint0_linear_1007_2557" x1="1.69314" y1="3.52719"
                                    x2="7.5024" y2="13.3546" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#18884F" />
                                    <stop offset="0.5" stop-color="#117E43" />
                                    <stop offset="1" stop-color="#0B6631" />
                                </linearGradient>
                                <clipPath id="clip0_1007_2557">
                                    <rect width="16.8" height="16" fill="white"
                                        transform="translate(0.199951 0.5)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </a>
                </div>
            </div>
            <ol class="mt-8 list-decimal list-inside flex flex-col gap-8">
                @forelse ($form->respondents->sortByDesc('created_at') as $respondent)
                    <h2>{{ $loop->iteration }}. {{ $respondent->created_detail }}</h2>
                    <div class="overflow-x-auto">
                        <table class="table table-zebra w-full">
                            <thead>
                                <tr>
                                    <th class="bg-orange-300/50" width="35px"></th>
                                    <th class="bg-orange-300/50">Pertanyaan</th>
                                    <th class="bg-orange-300/50">Tipe</th>
                                    <th class="bg-orange-300/50">Jawaban</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($form->questions->sortBy('order') as $question)
                                    <tr>
                                        <th>{{ $loop->iteration }}</th>
                                        <td class="question">{{ $question->title }}@if ($question->required == 'yes')
                                                <span class="required text-bemfire">(wajib)</span>
                                            @endif
                                        </td>
                                        <td>{{ Str::ucfirst($question->type) }}</td>
                                        <td>
                                            @if ($question->type == 'datetime')
                                                @if ($question->responses->where('respondent_id', $respondent->id)->first())
                                                    {{ date('d F Y - H:i:s', strtotime($question->responses->where('respondent_id', $respondent->id)->first()->value)) }}
                                                @else
                                                    Tidak ada jawaban.
                                                @endif
                                            @elseif ($question->type == 'date')
                                                @if ($question->responses->where('respondent_id', $respondent->id)->first())
                                                    {{ date('d F Y', strtotime($question->responses->where('respondent_id', $respondent->id)->first()->value)) }}
                                                @else
                                                    Tidak ada jawaban.
                                                @endif
                                            @elseif ($question->type == 'file')
                                                @if ($question->responses->where('respondent_id', $respondent->id)->first())
                                                    <a href="{{ asset($question->responses->where('respondent_id', $respondent->id)->first()->value) }}"
                                                        target="_blank">
                                                        @foreach (explode('/', $question->responses->where('respondent_id', $respondent->id)->first()->value) as $name)
                                                            @if ($loop->last)
                                                                {{ $name }}
                                                            @endif
                                                        @endforeach
                                                    </a>
                                                @else
                                                    Tidak ada jawaban.
                                                @endif
                                            @else
                                                <span
                                                    class="answer">{{ $question->responses->where('respondent_id', $respondent->id)->first()->value ?? 'Tidak ada jawaban.' }}
                                                </span>
                                            @endif
                                        </td>
                                    </tr>
                                @endforeach
                                @if ($form->questionsWithTrashed->count() > 0)
                                    <tr>
                                        <td colspan="3">
                                            <strong>Pertanyaan yang dihapus</strong>
                                        </td>
                                    </tr>
                                    @foreach ($form->questionsWithTrashed->where('deleted_at', '!=', null)->sortBy('order') as $question)
                                        <tr>
                                            <td>
                                                {{ $question->title }}
                                                @if ($question->required == 'yes')
                                                    <span class="required text-bemfire">*</span>
                                                @endif
                                            </td>
                                            <td>{{ Str::ucfirst($question->type) }}</td>
                                            <td>
                                                @if ($question->type == 'datetime')
                                                    @if ($question->responses->where('respondent_id', $respondent->id)->first())
                                                        {{ date('d F Y - H:i:s', strtotime($question->responses->where('respondent_id', $respondent->id)->first()->value)) }}
                                                    @else
                                                        Tidak ada jawaban.
                                                    @endif
                                                @elseif ($question->type == 'date')
                                                    @if ($question->responses->where('respondent_id', $respondent->id)->first())
                                                        {{ date('d F Y', strtotime($question->responses->where('respondent_id', $respondent->id)->first()->value)) }}
                                                    @else
                                                        Tidak ada jawaban.
                                                    @endif
                                                @elseif ($question->type == 'file')
                                                    @if ($question->responses->where('respondent_id', $respondent->id)->first())
                                                        <a href="{{ asset($question->responses->where('respondent_id', $respondent->id)->first()->value) }}"
                                                            target="_blank">
                                                            @foreach (explode('/', $question->responses->where('respondent_id', $respondent->id)->first()->value) as $name)
                                                                @if ($loop->last)
                                                                    {{ $name }}
                                                                @endif
                                                            @endforeach
                                                        </a>
                                                    @else
                                                        Tidak ada jawaban.
                                                    @endif
                                                @else
                                                    {{ $question->responses->where('respondent_id', $respondent->id)->first()->value ?? 'Tidak ada jawaban.' }}
                                                @endif
                                            </td>
                                        </tr>
                                    @endforeach
                                @endif
                            </tbody>
                        </table>
                    </div>
                    <form action="{{ route('form.delete.respondent', [$form->token, $respondent->id]) }}" method="POST">
                        @csrf
                        <button class="btn btn-primary" type="submit">Hapus Responden</button>
                    </form>
                @empty
                    <p>Tidak ada responden</p>
                @endforelse
                <script>
                    // replace td.question with <br/>
                    document.querySelectorAll('td.question').forEach((question) => {
                        question.innerHTML = question.innerHTML.replace(/\n/g, "<br/>");
                    });
                    // replace span.answer with <br/>
                    document.querySelectorAll('span.answer').forEach((answer) => {
                        answer.innerHTML = answer.innerHTML.replace(/\n/g, "<br/>");
                    });
                </script>
            </ol>

        </div>
    </section>

    {{-- Edit Detail Form Modal --}}
    <input type="checkbox" id="edit-form-modal" class="modal-toggle" />
    <label for="edit-form-modal" class="modal cursor-pointer">
        <label class="modal-box relative stepper active:opacity-100" for="">
            <form action="{{ route('form.update.form', $form->token) }}" method="POST" id="edit-detail-form">
                @csrf
                <label for="edit-form-modal" class="btn btn-ghost btn-sm absolute right-6 top-6">✕</label>
                <h3 class="font-bold text-lg">Edit Detail Form</h3>
                <div class="flex flex-col my-8 gap-6">
                    <div class="form-control">
                        <label for="" class="text-base text-gray-500 block mb-1">Judul Form</label>
                        <input type="text" name="title" value="{{ $form->title }}"
                            placeholder="Masukkan Judul Form Anda" class="input rounded-lg input-bordered w-full">
                    </div>
                    <div class="form-control">
                        <label for="" class="text-base text-gray-500 block mb-1">Shortlink</label>
                        <label class="input-group">
                            <span class="bg-gray-100 dark:bg-gray-700 input-bordered">bemunair.ac.id/f/</span>
                            <input type="text" name="slug" value="{{ $form->slug }}"
                                placeholder="Masukkan Shortlink Form Anda" class="input input-bordered w-full" />
                            <span class="label-text-alt" id="statusSlug"><span class="p-0"
                                    style="color: green;">✅</span></span>
                        </label>
                    </div>
                    <div class="form-control">
                        <label for="" class="text-base text-gray-500 block mb-1">Deskripsi Form</label>
                        <textarea class="textarea textarea-bordered rounded-lg w-full" placeholder="Masukkan Deskripsi Form Anda"
                            name="description">{{ $form->description }}</textarea>
                    </div>
                    <div class="form-control flex gap-2">
                        <label for="" class="text-base text-gray-500 block mb-1">Waktu Buka Form</label>
                        <label
                            class="label justify-start gap-2 cursor-pointer border border-gray-300 dark:border-gray-600 rounded-lg">
                            <input type="radio" name="deadlineType" value="open" class="radio"
                                @if ($isOpen && $form->deadline == null) checked @endif />
                            <span class="label-text">Selalu Dibuka</span>
                        </label>
                        <label
                            class="label justify-start gap-2 cursor-pointer border border-gray-300 dark:border-gray-600 rounded-lg">
                            <input type="radio" name="deadlineType" value="close" class="radio"
                                @if (!$isOpen) checked @endif />
                            <span class="label-text">Ditutup</span>
                        </label>
                        <label
                            class="label justify-start gap-2 cursor-pointer border border-gray-300 dark:border-gray-600 rounded-lg">
                            <input type="radio" name="deadlineType" value="set" class="radio"
                                @if ($isOpen && $form->deadline != null) checked @endif />
                            <span class="label-text">Atur Deadline</span>
                        </label>
                    </div>
                    <div class="form-control" id="edit-deadline">
                        <label for="" class="text-base text-gray-500 block mb-1">Batas Pengisian*</label>
                        <input disabled type="datetime-local" name="deadline" value="{{ $form->deadline }}"
                            placeholder="Masukkan Batas Pengisian Form Anda"
                            class="input rounded-lg input-bordered w-full">
                    </div>
                    <div class="form-control">
                        <label for="" class="text-base text-gray-500 block mb-1">Pesan Penutup**</label>
                        <input type="text" name="after_form_message" value="{{ $form->after_form_message }}"
                            placeholder="Masukkan Pesan Penutup Form Anda" class="input rounded-lg input-bordered w-full">
                    </div>
                    <div class="form-control">
                        <label for="" class="text-base text-gray-500 block mb-1">Link Website**</label>
                        <input type="text" name="after_form_redirect" value="{{ $form->after_form_redirect }}"
                            placeholder="Masukkan Link Website Form Anda" class="input rounded-lg input-bordered w-full">
                    </div>
                </div>
                <div>
                    <p class="text-sm font-medium">*Kosongi bila ingin form terbuka tanpa batasan waktu.</p>
                    <p class="text-sm font-medium">**Ditampilkan setelah mengisi form.</p>
                </div>
                <div class="modal-action">
                    <label for="edit-form-modal" class="btn btn-secondary">Batalkan</label>
                    <button for="" class="btn btn-primary" type="submit">Simpan</button>
                </div>
            </form>
        </label>
    </label>

    {{-- Ubah Urutan Form Modal --}}
    <input type="checkbox" id="sort-form-modal" class="modal-toggle" />
    <label for="sort-form-modal" class="modal cursor-pointer">
        <label class="modal-box relative stepper active:opacity-100" for="">
            <form action="{{ route('form.update.order', $form->token) }}" method="POST">
                @csrf
                <label for="sort-form-modal" class="btn btn-ghost btn-sm absolute right-6 top-6">✕</label>
                <h3 class="font-bold text-lg">Ubah Urutan Form</h3>
                <div class="flex flex-col my-8 gap-6">
                    @forelse ($form->questions->sortBy('order') as $question)
                        <div class="form-control">
                            <label for="{{ $question->order }}"
                                class="text-base text-gray-500 block mb-1">{{ $loop->iteration }}.
                                {{ $question->title }}</label>
                            <input type="number" placeholder="Masukkan Urutan" name="orders[{{ $question->id }}]"
                                id="{{ $question->order }}" value="{{ $question->order }}"
                                max="{{ $form->questions->count() }}" min="1" required
                                class="input rounded-lg input-bordered w-full">
                        </div>
                    @empty
                        <p>Tidak ada pertanyaan</p>
                    @endforelse
                </div>
                <div class="modal-action">
                    <label for="sort-form-modal" class="btn btn-secondary">Batalkan</label>
                    <button for="" class="btn btn-primary" type="submit">Simpan Urutan</button>
                </div>
            </form>
        </label>
    </label>

    {{-- Tambah Pertanyaan Form Modal --}}
    <input type="checkbox" id="add-question-modal" class="modal-toggle" />
    <label for="add-question-modal" class="modal cursor-pointer">
        <label class="modal-box relative stepper active:opacity-100" for="">
            <form action="{{ route('form.create.question', $form->token) }}" method="POST">
                @csrf
                <label for="add-question-modal" class="btn btn-ghost btn-sm absolute right-6 top-6">✕</label>
                <h3 class="font-bold text-lg">Tambah Pertanyaan</h3>
                <div class="flex flex-col my-8 gap-6">
                    <div class="form-control">
                        <label for="" class="text-base text-gray-500 block mb-1">Pertanyaan</label>
                        {{-- <input type="text" name="title" placeholder="Masukkan Pertanyaan Anda"
                            class="input rounded-lg input-bordered w-full"> --}}
                        <textarea class="textarea textarea-bordered rounded-lg w-full" placeholder="Masukkan Pertanyaan Anda" name="title"></textarea>
                    </div>
                    <div class="form-control">
                        <label for="" class="text-base text-gray-500 block mb-1">Tipe Pertanyaan</label>
                        <select name="type" id="type" class="select rounded-lg input-bordered w-full" required>
                            @foreach (['text', 'textarea', 'radio', 'checkbox', 'select', 'date', 'time', 'datetime', 'file'] as $typeQuestion)
                                <option value="{{ $typeQuestion }}" @if (old('type') == $typeQuestion) selected @endif>
                                    {{ Str::ucfirst($typeQuestion) }}</option>
                            @endforeach
                        </select>
                    </div>
                    <div class="form-control">
                        <label for="" class="text-base text-gray-500 block mb-1">Sifat Pertanyaan</label>
                        <div class="grid grid-cols-2 gap-2">
                            <label
                                class="label justify-start gap-2 cursor-pointer border border-gray-300 dark:border-gray-600 rounded-lg">
                                <input type="radio" name="required" value="yes" class="radio"
                                    @if (old('required') == 'yes') checked @endif />
                                <span class="label-text">Wajib</span>
                            </label>
                            <label
                                class="label justify-start gap-2 cursor-pointer border border-gray-300 dark:border-gray-600 rounded-lg">
                                <input type="radio" name="required" value="no" class="radio"
                                    @if (old('required') == 'no') checked @endif />
                                <span class="label-text">Tidak Wajib</span>
                            </label>
                        </div>
                    </div>
                    <div class="form-control" id="placeholder" @if (!in_array(old('type'), ['text', 'textarea', 'select']) && old('type')) hidden @endif>
                        <label for="" class="text-base text-gray-500 block mb-1">Placeholder (Teks sebelum form
                            diisi)</label>
                        <input type="text" name="placeholder" placeholder="Masukkan Placeholder Anda"
                            class="input rounded-lg input-bordered w-full">
                    </div>
                    <div class="form-control @if (!in_array(old('type'), ['radio', 'checkbox', 'select'])) hidden @endif" id="options">
                        <label for="" class="text-base text-gray-500 block mb-1">Pilihan Jawaban <span
                                class="text-bemsun text-sm">(pisahkan dengan
                                koma)</span></label>
                        {{-- <input type="text" name="options" placeholder="Masukkan Pilihan Jawaban Anda"
                            class="input rounded-lg input-bordered w-full"> --}}
                        <textarea class="textarea textarea-bordered rounded-lg w-full" placeholder="Masukkan Pilihan Jawaban Anda"
                            name="options"></textarea>

                    </div>
                    <div class="form-control @if (old('type') != 'file') hidden @endif" id="max_size_file">
                        <label for="" class="text-base text-gray-500 block mb-1">Ukuran maksimal file</label>
                        <input type="number" name="max_size_file" placeholder="Masukkan Pilihan Jawaban Anda"
                            class="input rounded-lg input-bordered w-full">
                        <p class="text-sm mt-2">Ukuran maksimal file dalam MB (Megabyte)</p>
                    </div>
                </div>
                <div class="modal-action">
                    <label for="add-question-modal" class="btn btn-secondary">Batalkan</label>
                    <button for="" class="btn btn-primary" type="submit">Tambah Pertanyaan</button>
                </div>
            </form>
        </label>
    </label>

    {{-- Edit Pertanyaan Form Modal --}}
    <input type="checkbox" id="edit-question-modal" class="modal-toggle" />
    <label for="edit-question-modal" class="modal cursor-pointer">
        <label class="modal-box relative stepper active:opacity-100" for="">
            <form action="" method="POST" id="edit-question-form">
                @csrf
                <label for="edit-question-modal" class="btn btn-ghost btn-sm absolute right-6 top-6">✕</label>
                <h3 class="font-bold text-lg">Edit Pertanyaan</h3>
                <div class="flex flex-col my-8 gap-6">
                    <div class="form-control">
                        <label for="" class="text-base text-gray-500 block mb-1">Pertanyaan</label>
                        {{-- <input type="text" name="title" placeholder="Masukkan Pertanyaan Anda"
                            class="input rounded-lg input-bordered w-full"> --}}
                        <textarea class="textarea textarea-bordered rounded-lg w-full" placeholder="Masukkan Pertanyaan Anda" name="title"></textarea>
                    </div>
                    <div class="form-control">
                        <label for="" class="text-base text-gray-500 block mb-1">Tipe Pertanyaan</label>
                        <select name="type" id="edit-question-type" class="select rounded-lg input-bordered w-full"
                            required>
                            @foreach (['text', 'textarea', 'radio', 'checkbox', 'select', 'date', 'time', 'datetime', 'file'] as $typeQuestion)
                                <option value="{{ $typeQuestion }}" @if (old('type') == $typeQuestion) selected @endif>
                                    {{ Str::ucfirst($typeQuestion) }}</option>
                            @endforeach
                        </select>
                    </div>
                    <div class="form-control">
                        <label for="" class="text-base text-gray-500 block mb-1">Sifat Pertanyaan</label>
                        <div class="grid grid-cols-2 gap-2">
                            <label for="yes"
                                class="label justify-start gap-2 cursor-pointer border border-gray-300 dark:border-gray-600 rounded-lg">
                                <input type="radio" name="required" value="yes" class="radio accent-bemsun"
                                    @if (old('required') == 'yes') checked @endif />
                                <span class="label-text">Wajib</span>
                            </label>
                            <label for="no"
                                class="label justify-start gap-2 cursor-pointer border border-gray-300 dark:border-gray-600 rounded-lg">
                                <input for="required-no" type="radio" name="required" value="no"
                                    class="radio accent-bemsun" @if (old('required') == 'no') checked @endif />
                                <span class="label-text">Tidak Wajib</span>
                            </label>
                        </div>
                    </div>
                    <div id="edit-placeholder" class="form-control" @if (!in_array(old('type'), ['text', 'textarea', 'select']) && old('type')) hidden @endif>
                        <label for="" class="text-base text-gray-500 block mb-1">Placeholder (Teks sebelum form
                            diisi)</label>
                        <input type="text" name="placeholder" placeholder="Masukkan Placeholder Anda"
                            class="input rounded-lg input-bordered w-full">
                    </div>
                    <div id="edit-options" class="form-control @if (!in_array(old('type'), ['radio', 'checkbox', 'select'])) hidden @endif">
                        <label for="" class="text-base text-gray-500 block mb-1">Pilihan Jawaban (pisahkan dengan
                            koma)</label>
                        {{-- <input type="text" name="options" placeholder="Masukkan Pilihan Jawaban Anda"
                            class="input rounded-lg input-bordered w-full"> --}}
                        <textarea class="textarea textarea-bordered rounded-lg w-full" placeholder="Masukkan Pilihan Jawaban Anda"
                            name="options"></textarea>
                    </div>
                    <div id="edit-max_size_file" class="form-control" @if (old('type') != 'file') hidden @endif">
                        <label for="" class="text-base text-gray-500 block mb-1">Ukuran maksimal file</label>
                        <input type="number" name="max_size_file" placeholder="Masukkan Pilihan Jawaban Anda"
                            class="input rounded-lg input-bordered w-full">
                        <p class="text-sm mt-2">Ukuran maksimal file dalam MB (Megabyte)</p>
                    </div>
                </div>
                <div class="modal-action">
                    <label for="edit-question-modal" class="btn btn-secondary">Batalkan</label>
                    <button for="" class="btn btn-primary" type="submit">Edit Pertanyaan</button>
                </div>
            </form>
        </label>
    </label>

    {{-- JQuery --}}
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js"
        integrity="sha512-aVKKRRi/Q/YV+4mjoKBsE4x3H+BkegoM/em46NNlCqNTmUYADjBbeNefNxYV7giUp0VxICtqdrbqU7iVaeZNXA=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>

    {{-- JS Slug --}}
    <script>
        // Change tab by Parameter
        getUrlParameter('tab') ? toggleTab(getUrlParameter('tab')) : toggleTab('information');

        // Get Parameter
        function getUrlParameter(name) {
            name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
            var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
            var results = regex.exec(location.href);
            return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, '    '));
        };

        // Change Tab
        function toggleTab(activeTab) {
            const tab = ['information', 'questions', 'respondents'];
            window.history.pushState("", "", location.origin + location.pathname + '?tab=' + activeTab);
            for (let i = 0; i < tab.length; i++) {
                if (tab[i] == activeTab) {
                    $(`#${tab[i]}`).show();
                    $(`#${tab[i]}Tab`).addClass('tab-active');
                } else {
                    $(`#${tab[i]}`).hide();
                    $(`#${tab[i]}Tab`).removeClass('tab-active');
                }
            }
        }

        $(document).ready(function() {
            $('input[name="slug"]').keyup(function() {
                var slug = $(this).val();
                if (slug.length > 0) {
                    $.ajax({
                        url: '{{ route('api.form.check.slug') }}',
                        method: 'POST',
                        data: {
                            slug: slug,
                            _token: '{{ csrf_token() }}'
                        },
                        success: function(data) {
                            if (data.data.exists || slug == '{{ $form->slug }}') {
                                $('#statusSlug').html(
                                    '<span class="p-0" style="color: green;">' + '✅' +
                                    '</span>');
                            } else {
                                $('#statusSlug').html('<span class="p-0" style="color: red;">' +
                                    '❌' + '</span>');
                            }
                        }
                    });
                } else {
                    $('#statusSlug').html('');
                }
            });
            $('#edit-detail-form input[name="deadlineType"]').change(function() {
                var type = $(this).val();
                if (type == 'set') {
                    // $('#edit-deadline').show();
                    $('#edit-deadline input').attr('required', true);
                    $('#edit-deadline input').attr('disabled', false);
                } else {
                    // $('#edit-deadline').hide();
                    $('#edit-deadline input').attr('required', false);
                    $('#edit-deadline input').attr('disabled', true);
                }
            });
            $('#type').change(function() {
                var type = $(this).val();
                if (type == 'select' || type == 'radio' || type == 'checkbox') {
                    $('#options').show();
                } else {
                    $('#options').hide();
                }
                if (type == 'file') {
                    $('#max_size_file').show();
                } else {
                    $('#max_size_file').hide();
                }
                if (type == 'text' || type == 'textarea' || type == 'select') {
                    $('#placeholder').show();
                } else {
                    $('#placeholder').hide();
                }
            });
            $('#edit-question-type').change(function() {
                var type = $(this).val();
                if (type == 'select' || type == 'radio' || type == 'checkbox') {
                    $('#edit-options').show();
                } else {
                    $('#edit-options').hide();
                }
                if (type == 'file') {
                    console.log('file');
                    $('#edit-max_size_file').show();
                } else {
                    console.log('file hide');
                    $('#edit-max_size_file').hide();
                }
                if (type == 'text' || type == 'textarea' || type == 'select') {
                    $('#edit-placeholder').show();
                } else {
                    $('#edit-placeholder').hide();
                }
            });
        });

        // Edit Question
        function editQuestion(el) {
            var token = el.getAttribute("data-token")
            var id = el.getAttribute("data-id")
            var title = el.getAttribute("data-title")
            var type = el.getAttribute("data-type")
            var required = el.getAttribute("data-required")
            var placeholder = el.getAttribute("data-placeholder")
            var options = el.getAttribute("data-options")
            var max_size_file = el.getAttribute("data-max_size_file")

            $('#edit-question-form').attr('action', window.location.origin + `/form/${token}/update/question/${id}`)
            $('#edit-question-form textarea[name="title"]').val(title)
            $('#edit-question-form select[name="type"]').val(type).change()
            $(`#edit-question-form input[name="required"][value="${required}"]`).prop('checked', true)
            $('#edit-question-form input[name="placeholder"]').val(placeholder)
            $('#edit-question-form textarea[name="options"]').val(options)
            $('#edit-question-form input[name="max_size_file"]').val(max_size_file)
        }

        // Timeout alert
        setTimeout(() => {
            const el = document.getElementById('alert');
            $('#alert').css({
                opacity: 0.0,
                visibility: "visible"
            }).animate({
                opacity: 1.0
            });
            el.style.display = 'none';

        }, 5000);
    </script>
@endsection
