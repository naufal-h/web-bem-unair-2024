{{-- success --}}
@if (session('success'))
<div class="bg-green-500/30 rounded-xl p-4 {{ $slot }}">
    <p class="text-base">
        {{ session('success') }}
    </p>
</div>
@endif
{{-- error --}}
@if ($errors->any() || session('error'))
<div class="bg-red-500/30 rounded-xl p-4 {{ $slot }}">
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
