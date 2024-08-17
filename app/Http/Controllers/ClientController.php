<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Carbon\Carbon;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Crypt;
use Inertia\Inertia;

class ClientController extends Controller
{
    public function index()
    {
        $articles = Article::where('publish_status', true)->latest('published_at')->limit(4)->get();
        foreach ($articles as $article) {
            $text = strip_tags(str_replace('<', ' <', $article->content));
            $text = Str::limit($text, 250);
            $article->content = $text;
        }
        ;
        return view('client.landing', compact('articles'));
    }

    public function about()
    {
        return view('client.about');
    }

    public function pengurus()
    {
        return view('client.pengurus');
    }

    public function kementerian()
    {
        return view('client.kementerian');
    }

    public function kementerianDetail($kementerian)
    {
        $pages = array(
            'sekretaris-kabinet',
            'keuangan',
            'pendayagunaan-aparatur-kabinet',
            'pengembangan-sdm',
            'sinergitas-mahasiswa',
            'riset-keilmuan',
            'advokasi-kesejahteraan',
            'komunikasi-informasi',
            'hubungan-luar',
            'sosial-politik',
            'kesetaraan-perlindungan',
            'seni-olahraga',
            'pengabdian-masyarakat',
            'kesehatan',
            'lingkungan-hidup',
            'ekonomi-kreatif',
            'pengembangan-profesi'
        );

        return view('client.kementerian.' . $kementerian);
    }

    public function article()
    {
        $articles = Article::where('publish_status', true)->latest('published_at')->get();
        foreach ($articles as $article) {
            $text = strip_tags(str_replace(['&nbsp;', '<'], [' ', ' <'], $article->content));
            // $text = trim(preg_replace('/\s+/', ' ', $text));
            $text = Str::limit($text, 250);
            $article->content = $text;
        }
        ;
        return view('client.artikel.index', compact('articles'));
    }

    public function articleDetail($year, $month, $day, $slug)
    {
        $article = Article::whereYear('published_at', $year)
            ->whereMonth('published_at', $month)
            ->whereDay('published_at', $day)
            ->where('slug', $slug)
            ->firstOrFail();
        $article->viewer = $article->viewer + 1;
        $article->save();

        $articles = Article::where('id', '!=', $article->id)->where('publish_status', true)
            ->latest('published_at')->limit(5)->get();

        // return view('client.artikel.detail', compact('article', 'articles'));
        return Inertia('Article', compact('article', 'articles'));
    }

    public function feature()
    {
        return view('client.feature');
    }

    // bemu 2024
    public function bemuLanding()
    {
        
        $articles = Article::where('publish_status', true)
            ->latest('published_at')->limit(3)->get();
        return Inertia('Welcome', compact('articles'));
        // return Inertia::render('Welcome');
    }
}
