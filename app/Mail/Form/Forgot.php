<?php

namespace App\Mail\Form;

use App\Models\Form;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class Forgot extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($author) {
        $this->forms = Form::where('author', $author)->orderBy('updated_at', 'desc')->get();
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build() {
        return $this
            ->subject('Daftar Tokenmu pada Form BEM UNAIR')
            ->markdown('emails.forms.forgot', [
                'forms' => $this->forms,
            ]);
    }
}
