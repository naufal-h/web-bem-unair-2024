@extends('layouts.app')

@section('content')
    <section class="min-h-[80vh] lg:container flex flex-col gap-2 justify-center items-center m-auto px-4 my-16">
        <h1 class="text-2xl md:text-4xl font-bold text-center">{{ $form->title }}</h1>
        @if ($form->description)
            <p id="form_description" class="text-center">{{ $form->description }}</p>
            <script>
                // replace paragraph with <br/>
                document.getElementById('form_description').innerHTML = document.getElementById('form_description').innerHTML
                    .replace(/\n/g, "<br/>");
            </script>
        @endif
        <div class="block h-0 -z-10">
            <div class="text-white rotate-90 dark:text-[#2A303C] text-9xl md:text-[240px] xl:text-[250px] 2xl:text-[280px] font-bold relative leading-[128px] md:leading-[220px] 2xl:leading-[250px] left-1/3 top-[20px] md:top-[170px] 2xl:top-56 opacity-30"
                style="text-shadow:
            1px 1px 0 #E88A45,
            -1px -1px 0 #E88A45,
            1px -1px 0 #E88A45,
            -1px 1px 0 #E88A45,
            1px 1px 0 #E88A45;;">
                {{ $form->title }}</div>
            <div class="clear-both"></div>
        </div>
        <div
            class="container max-w-3xl border border-gray-800/10 shadow-xl rounded-lg bg-white/60 dark:bg-gray-800/60 p-6 mt-4">
            <x-alert.tailwind>mb-4</x-alert.tailwind>
            <form class="flex flex-col gap-4" action="{{ route('form.submit', $form->slug) }}" method="POST"
                @if ($hasFile) enctype="multipart/form-data" @endif>
                @csrf
                @forelse ($form->questions->sortBy('order') as $question)
                    <h4 class="font-bold question" for="{{ $question->order }}">
                        {{ $loop->iteration }}. {{ $question->title }}@if ($question->required == 'yes')
                            <span class="required text-bemsun">(wajib)</span>
                        @endif
                    </h4>
                    <div class="ml-4">
                        @if ($question->type == 'radio')
                            <div class="form-control">
                                @foreach (explode(',', $question->options) as $option)
                                    <label class="label cursor-pointer gap-2">
                                        <span class="label-text" for="{{ $option }}">{{ $option }}</span>
                                        <input class="radio checked:bg-bemsun border-gray-300/70 rounded-lg accent-bemsun"
                                            type="{{ $question->type }}" name="responses[{{ $question->id }}]"
                                            id="{{ $option }}" value="{{ $option }}"
                                            @if ($question->required == 'yes') required @endif>
                                    </label>
                                @endforeach
                            </div>
                        @elseif ($question->type == 'checkbox')
                            @foreach (explode(',', $question->options) as $option)
                                <label class="label cursor-pointer gap-2">
                                    <span class="label-text" for="{{ $option }}">{{ $option }}</span>
                                    <input class="checkbox checkbox-primary border-gray-300/70 rounded-lg accent-bemsun"
                                        type="{{ $question->type }}" name="responses[{{ $question->id }}][]"
                                        id="{{ $option }}" value="{{ $option }}">
                                </label>
                            @endforeach
                        @elseif ($question->type == 'select')
                            <select class="select w-full border-gray-300/70 rounded-lg"
                                name="responses[{{ $question->id }}]" id="{{ $question->order }}"
                                @if ($question->required == 'yes') required @endif>
                                @if ($question->placeholder)
                                    <option selected disabled>{{ $question->placeholder }}</option>
                                @endif
                                @foreach (explode(',', $question->options) as $option)
                                    <option value="{{ $option }}">{{ $option }}</option>
                                @endforeach
                            </select>
                        @elseif ($question->type == 'datetime')
                            <input class="input border-gray-300/70 rounded-lg w-full" type="datetime-local"
                                name="responses[{{ $question->id }}]" id="{{ $question->order }}"
                                @if ($question->required == 'yes') required @endif>
                        @elseif ($question->type == 'file')
                            <input
                                class="
                    file:mr-4 file:py-2 file:px-4 file:my-1
                    file:rounded-lg file:border-0
                    file:text-sm file:font-semibold
                    file:bg-orange-200/10 file:text-bemsun
                    hover:file:bg-orange-100 pl-2
                    input border-gray-300/70 rounded-lg w-full"
                                type="file" name="responses[{{ $question->id }}]" id="{{ $question->order }}"
                                max="{{ $question->max_size_file }}" @if ($question->required == 'yes') required @endif>
                        @elseif ($question->type == 'textarea')
                            <textarea class="textarea border-gray-300/70 rounded-lg w-full" name="responses[{{ $question->id }}]"
                                id="{{ $question->order }}" cols="30" rows="10" @if ($question->required == 'yes') required @endif></textarea>
                        @else
                            <input class="input border-gray-300/70 rounded-lg w-full" type="{{ $question->type }}"
                                name="responses[{{ $question->id }}]" id="{{ $question->order }}"
                                placeholder="{{ $question->placeholder }}"
                                @if ($question->required == 'yes') required @endif>
                        @endif
                    </div>
                    @empty
                        <p>Tidak ada pertanyaan</p>
                    @endforelse
                    <script>
                        // replace h4.question with <br/> -1
                        document.querySelectorAll('h4.question').forEach((h4) => {
                            h4.innerHTML = h4.innerHTML.replace(/\n/g, "<br/>");
                        });
                        // replace input.radio with <br/>
                        document.querySelectorAll('span.label-text').forEach((radio) => {
                            radio.innerHTML = radio.innerHTML.replace(/\n/g, "<br/>");
                        });
                    </script>
                    <button type="submit" class="btn btn-primary mt-4">Submit</button>
                </form>
            </div>
        </section>
    @endsection
