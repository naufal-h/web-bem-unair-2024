<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class StrukturController extends Controller
{
    public function index() {
        return Inertia::render('Struktur');
    }

    public function kementrian($id) {
        return Inertia::render('Kementrian', [
            'id' => $id
        ]);
    }
}
