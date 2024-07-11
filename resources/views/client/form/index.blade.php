@extends('layouts.app')

@section('content')
    <section class="min-h-[80vh] lg:container flex justify-center items-center m-auto px-4">
        <div class="shadow-xl border border-gray-800/10 rounded-2xl p-4 grid grid-cols-1 md:grid-cols-2 my-12">
            <div class="bg-bemblue p-8 flex flex-col justify-between text-white md:aspect-square rounded-lg">
                <p class="text-sm font-bold text-bempink">
                    KABINET ASA PROGRESIF
                </p>
                <div class="my-8">
                    <h2 class="text-3xl md:text-6xl font-bold mb-4">
                        Buat form anda sendiri sekarang!
                    </h2>
                    <p class="text-sm">
                        Setiap form memiliki token. Token akan dikirim melalui email untuk mengedit form. Jika anda hendak
                        mengakses atau mengedit form yang telah dibuat, buka halaman Edit Form dan siapkan token anda.
                    </p>
                </div>
                <div class="h-2 bg-gradient-to-r from-orange-400 via-red-900 to-blue-900 rounded-xl"></div>
            </div>
            <form class="flex flex-col gap-8 p-4 md:p-12 justify-center">
                <div>
                    <h4 class="text-3xl font-bold mb-2">Buat Form</h4>
                    {{-- <p class="text-sm">Klik <a href="{{ route('form.help') }}" class="text-bemsun underline">disini</a>
                        untuk melihat panduan membuat form!</p> --}}
                </div>
                <div class="bg-green-500/30 rounded-xl p-4 hidden text-base transition" name="alert" id="editFormSuccess">
                </div>
                <div class="bg-red-500/30 rounded-xl p-4 hidden text-base transition" name="alert" id="editFormFailed">
                </div>
                <x-alert.tailwind></x-alert.tailwind>
                <div>
                    <label for="" class="text-base text-gray-500 block mb-1">Email</label>
                    <input type="email" name="email" id="inpEmail" placeholder="Masukkan Email anda"
                        class="input rounded-lg border-gray-300/70 w-full" required>
                    {{-- <span id="createMessage"></span> --}}
                    <p class="text-sm mt-2">Sudah membuat form? <label class="text-bempink modal-button cursor-pointer"
                            for="my-modal-4">Edit form</label></p>
                </div>
                <div>
                    <button id="btnEmail" type="button" class="btn btn-primary">
                        Kirim Token
                        <svg class="w-5 h-5 hidden" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            style="margin: auto; background: none; shape-rendering: auto;" viewBox="0 0 100 100"
                            preserveAspectRatio="xMidYMid">
                            <circle cx="50" cy="50" fill="none" stroke="#ffffff" stroke-width="10"
                                r="35" stroke-dasharray="164.93361431346415 56.97787143782138">
                                <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite"
                                    dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
                            </circle>
                        </svg>
                    </button>
                </div>
            </form>
        </div>
    </section>

    {{-- Edit & forgot token modal --}}
    <input type="checkbox" id="my-modal-4" class="modal-toggle" />
    <label for="my-modal-4" class="modal cursor-pointer">
        <label class="modal-box relative stepper hidden active:opacity-100" for="">
            <form method="POST" action="{{ route('form.validation') }}" id="editForm">
                @csrf
                <label for="my-modal-4" class="btn btn-ghost btn-sm absolute right-6 top-6">✕</label>
                <h3 class="font-bold text-lg">Edit Form</h3>
                <div class="flex flex-col my-8 gap-6">
                    <div class="bg-red-500/30 rounded-xl p-4 hidden text-base transition" name="alert" id="editFormError">
                    </div>
                    <div class="form-group">
                        <label for="" class="text-base text-gray-500 block mb-1">Token Form</label>
                        <input type="text" name="token" placeholder="Masukkan Token Form Anda"
                            class="form-control input rounded-lg border-gray-300/70 w-full" required>
                    </div>
                    <div class="form-group">
                        <label for="" class="text-base text-gray-500 block mb-1">Email Pembuat Form</label>
                        <input type="email" name="author" placeholder="Masukkan Email Anda"
                            class="form-control input rounded-lg border-gray-300/70 w-full" required>
                    </div>
                    <p href="" class="text-bempink underline font-bold text-right w-full mt-2 cursor-pointer"
                        id="nextBtn" onclick="nextPrev(1)">Lupa Token Form Anda?</p>
                </div>
                <div class="modal-action">
                    <label for="my-modal-4" class="btn btn-secondary">Batalkan</label>
                    <button id="editSubmitBtn" class="btn btn-primary" type="submit">Edit Form</button>
                </div>
            </form>
        </label>
        <label class="modal-box relative stepper hidden active:opacity-100" for="">
            <label for="my-modal-4" class="btn btn-ghost btn-sm absolute right-6 top-6">✕</label>
            <h3 class="font-bold text-lg">
                <svg class="stroke-bemsun w-6 h-6 cursor-pointer" style="display: initial" id="prevBtn"
                    onclick="nextPrev(-1)" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                    stroke-width="1.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
                Lupa Token Form
            </h3>
            <div class="flex flex-col my-8">
                <div class="bg-red-500/30 rounded-xl p-4 hidden text-base transition mb-2" name="alert"
                    id="forgotFormFailed"></div>
                <div class="bg-green-500/30 rounded-xl p-4 hidden text-base transition mb-2" name="alert"
                    id="forgotFormSuccess"></div>
                <label for="" class="text-base text-gray-500 block mb-1">Alamat Email Terdaftar</label>
                <input id="inpEmailForgot" type="email" name="email" placeholder="Masukkan Email Anda"
                    class="input rounded-lg border-gray-300/70 w-full" required>
                <p class="text-sm mt-2">Token akan dikirimkan ulang melalui email anda</p>
            </div>
            <div class="modal-action">
                <label for="my-modal-4" class="btn btn-secondary">Batalkan</label>
                <label for="" class="btn btn-primary" id="btnForgot">Kirim Token Ulang
                    <svg class="w-5 h-5 hidden" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        style="margin: auto; background: none; shape-rendering: auto;" viewBox="0 0 100 100"
                        preserveAspectRatio="xMidYMid">
                        <circle cx="50" cy="50" fill="none" stroke="#ffffff" stroke-width="10"
                            r="35" stroke-dasharray="164.93361431346415 56.97787143782138">
                            <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite"
                                dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
                        </circle>
                    </svg>
                </label>
            </div>
        </label>
    </label>

    
@endsection

@push('script')
    <script>
        // Form Stepper in modal
        var currentTab = 0; // Current tab is set to be the first tab (0)
        showTab(currentTab); // Display the current tab

        function showTab(n) {
            // This function will display the specified tab of the form ...
            var x = document.getElementsByClassName("stepper");
            x[n].style.display = "block";
        }

        function nextPrev(n) {
            // This function will figure out which tab to display
            var x = document.getElementsByClassName("stepper");
            x[currentTab].style.display = "none";
            // Increase or decrease the current tab by 1:
            currentTab = currentTab + n;
            // if you have reached the end of the form... :
            if (currentTab >= x.length) {
                return false;
            }
            // Otherwise, display the correct tab:
            showTab(currentTab);
        }

        $(document).ready(function() {
            // Create Form
            $('#btnEmail').click(function() {
                $('#btnEmail').prop('disabled', true);
                $('#btnEmail svg').show()
                var email = $('#inpEmail').val();
                console.log(email);
                $.ajax({
                    url: '{{ route('api.form.create') }}',
                    type: 'POST',
                    data: {
                        author: email,
                        _token: '{{ csrf_token() }}'
                    },
                    success: function(data) {
                        // console.log(data);
                        $('#editFormFailed').hide();
                        $('#editFormSuccess').show();
                        $('#editFormSuccess').html(data.message);
                    },
                    error: function(data) {
                        // console.log(data);
                        $('#editFormSuccess').hide();
                        $('#editFormFailed').show();
                        $('#editFormFailed').html(data.message);
                    },
                    complete: function() {
                        $('#btnEmail').prop('disabled', false);
                        $('#btnEmail svg').hide()
                    }
                });
            });

            // Forgot Token
            $('#btnForgot').click(function() {
                var email = $('#inpEmailForgot').val();
                $('#btnForgot').prop('disabled', true)
                $('#btnForgot svg').show()
                $.ajax({
                    url: '{{ route('api.form.forgot') }}',
                    type: 'POST',
                    data: {
                        author: email,
                        _token: '{{ csrf_token() }}'
                    },
                    success: function(data) {
                        $('#forgotFormFailed').hide();
                        $('#forgotFormSuccess').show();
                        $('#forgotFormSuccess').html(data.message);
                    },
                    error: function(data) {
                        // console.log(data);
                        $('#forgotFormSuccess').hide();
                        $('#forgotFormFailed').show();
                        $('#forgotFormFailed').html(data.message);
                    },
                    complete: function() {
                        $('#btnForgot').prop('disabled', false)
                        $('#btnForgot svg').hide()
                    }
                });
            });
        });
    </script>
@endpush
