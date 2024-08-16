<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class SOPController extends Controller
{
    public function index() {
        // Generate the URL for the PDF file
        $pdfUrl = asset('pdf/CS-13_REVIEW FORM _R1.pdf');
        // Pass the PDF URL to the Inertia view
        return Inertia::render('Standar', [
            'pdfUrl' => $pdfUrl,
        ]);
    }
}
