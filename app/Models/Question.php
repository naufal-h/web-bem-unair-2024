<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Question extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'form_id',
        'title',
        'type',
        'required',
        'placeholder',
        'options',
        'max_size_file',
        'order',
    ];

    public function form() {
        return $this->belongsTo(Form::class);
    }

    public function responses() {
        return $this->hasMany(Response::class);
    }

    public function getOptionsAttribute($value) {
        return json_decode($value);
    }

    public function setOptionsAttribute($value) {
        $this->attributes['options'] = json_encode($value);
    }
}
