<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Responden {{ Str::limit($form->title, 15, '...') }}</title>
</head>
<body class="bg-[#FFF9F9]">
    {{-- General Information --}}
    {{-- <p><b>{{ $form->title }}</b></p>
    <p><b>Author:</b>{{ $form->author }}</p>
    <p><b>Token:</b> {{ $form->token }}</p>
    <p><b>Status:</b> {{ $isOpen ? 'Terbuka' : 'Ditutup' }}</p>
    <p><b>Tanggal Dibuat:</b> {{ $form->created_detail }}</p>
    <p><b>Batas Waktu Pengisian Form:</b> {{ ($form->deadline == null) ? 'Tidak dibatasi' : $form->deadline_detail }}</p>
    <p><b>Alamat Form (Shortlink):</b> <a href="{{ route('form.show', $form->slug) }}" target="_blank">{{ route('form.show', $form->slug) }}</a></p>
    <p><b>Responden:</b> {{ $form->respondents->count() == 0 ? 'Tidak ada' : $form->respondents->count()}} data</p>
    <br> --}}

    {{-- Respondent Table --}}
    <table>
        <thead>
            <tr>
                <th width="5">No.</th>
                <th width="25">Tanggal Pengisian</th>
                @forelse ($form->questions->sortBy('order') as $question)
                    <th width="50">
                        {{ $question->title }}
                        @if ($question->required == 'yes')
                            <span style="color:red">*</span>
                        @endif
                    </th>
                @empty
                    <th width="50">Tidak ada pertanyaan</th>
                @endforelse
                @if ($form->questionsWithTrashed->count() > 0)
                    @foreach ($form->questionsWithTrashed->where('deleted_at', '!=', null)->sortBy('order') as $question)
                        <th width="50">
                            <strong>
                                {{ $question->title }}
                                @if ($question->required == 'yes')
                                    <span style="color:red">*</span>
                                @endif
                            </strong>
                        </th>
                    @endforeach
                @endif
            </tr>
        </thead>
        <tbody>
            @forelse ($form->respondents->sortByDesc('created_at') as $respondent)
                <tr>
                    <td>{{ $loop->iteration }}</td>
                    <td>{{ $respondent->created_detail }}</td>
                    @foreach ($form->questions->sortBy('order') as $question)
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
                                    <a href="{{ asset($question->responses->where('respondent_id', $respondent->id)->first()->value) }}" target="_blank">
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
                    @endforeach
                    @if ($form->questionsWithTrashed->count() > 0)
                        @foreach ($form->questionsWithTrashed->where('deleted_at', '!=', null)->sortBy('order') as $question)
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
                                        <a href="{{ asset($question->responses->where('respondent_id', $respondent->id)->first()->value) }}" target="_blank">
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
                        @endforeach
                    @endif
                </tr>
            @empty
                <tr>
                    <td colspan="{{ $form->questionsWithTrashed->count() + 2 }}">Tidak ada data.</td>
                </tr>
            @endforelse
        </tbody>
    </table>
</body>
</html>
