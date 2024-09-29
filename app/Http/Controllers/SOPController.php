<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class SOPController extends Controller
{
    public function index()
    {
        // Generate the URL for the PDF file
        $pdfUrl = asset('pdf/SOP Kementerian Hubungan Luar 2024.pdf');
        $pdfUrl2 = asset('pdf/STANDARD OPERATIONAL PROCEDURE (SOP) KERJA SAMA KEMENTERIAN SINEMA BEM UNAIR 2024 KABINET ASA PROGRESIF FIXX.pdf');
        // Pass the PDF URL to the Inertia view
        return Inertia::render('Standar', [
            'pdfUrl' => $pdfUrl,
            'pdfUrl2' => $pdfUrl2
        ]);
        // return Inertia::render('Standar');
    }
}
