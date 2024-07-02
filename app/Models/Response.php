<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Response extends Model
{
    use HasFactory;

    protected $fillable = [
        'respondent_id',
        'question_id',
        'value',
    ];

    public function respondent() {
        return $this->belongsTo(Respondent::class);
    }

    public function question() {
        return $this->belongsTo(Question::class)->withTrashed();
    }
}
