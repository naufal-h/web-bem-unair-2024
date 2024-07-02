<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class Form extends Authenticatable
{
    use HasFactory, Notifiable;

    protected $fillable = [
        'slug',
        'author',
        'title',
        'token',
        'description',
        'deadline',
        'after_form_message',
        'after_form_redirect',
    ];

    protected $hidden = [
        'token',
    ];

    public function questions() {
        return $this->hasMany(Question::class);
    }

    public function questionsWithTrashed() {
        return $this->hasMany(Question::class)->withTrashed();
    }

    public function respondents() {
        return $this->hasMany(Respondent::class);
    }

    public function getDeadlineDetailAttribute() {
        return date('d F Y - H:i:s', strtotime($this->deadline));
    }

    public function getCreatedDetailAttribute() {
        return date('d F Y - H:i:s', strtotime($this->created_at));
    }
}
