<?php

namespace App\Mail\Form;

use App\Models\Form;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class Token extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($token) {
        $this->form = Form::where('token', $token)->first();
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build() {
        return $this
            ->subject('Token anda adalah: ' . $this->form->token)
            ->markdown('emails.forms.token', [
                'form' => $this->form,
            ]);
    }
}
