<?php
namespace App\Exports;

use App\Models\Form;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;

class FormExport implements FromView
{
    public function __construct($token) {
        $this->token = $token;
    }

    public function view(): View {
        $form = Form::where('token', $this->token)->first();
        $isOpen = $isOpen = $form->deadline > now('Asia/Jakarta');
        return view('export.form', [
            'form' => $form,
            'isOpen' => $isOpen,
        ]);
    }

    public function properties(): array {
        $author = Form::where('token', $this->token)->first()->author;
        return [
            'creator'        => $author,
        ];
    }
}
