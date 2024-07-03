<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'publish_status',
        'published_at',
        'content',
        'image1',
        'image2',
        'image3',
        'viewer',
        'slug',
    ];

    protected $casts = [
        'published_at' => 'datetime',
    ];

    public function getPublishedYear() {
        return $this->published_at->format('Y');
    }

    public function getPublishedMonth() {
        return $this->published_at->format('m');
    }

    public function getPublishedDay() {
        return $this->published_at->format('d');
    }
}
