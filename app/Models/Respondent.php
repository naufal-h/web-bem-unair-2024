<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Respondent extends Model
{
    use HasFactory;

    protected $fillable = [
        'form_id',
    ];

    public function form() {
        return $this->belongsTo(Form::class);
    }

    public function responses() {
        return $this->hasMany(Response::class);
    }

    public function getCreatedDetailAttribute() {
        return date('d F Y - H:i:s', strtotime($this->created_at));
    }
}
