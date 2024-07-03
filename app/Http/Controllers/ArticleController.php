<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Storage;

class ArticleController extends Controller
{
    public function index() {
        $articles = Article::latest()->get();
        return view('admin.article.index', compact('articles'));
    }

    public function create() {
        return view('admin.article.create');
    }

    public function store(Request $request) {
        # request validation back with input
       $request->validate([
            'title' => 'required | max:255',
            'content' => 'required | max:4294967295',
            'image1' => 'required | mimes:png,jpg,jpeg | max:5012',
            'image2' => 'mimes:png,jpg,jpeg | max:5012',
            'image3' => 'mimes:png,jpg,jpeg | max:5012',
        ]);

        $input = $request->all();

        if($request->hasFile('image1')) {
            $image1 = $request->file('image1');
            $image1Name = time().'-'.$image1->getClientOriginalName();
            $path1 = $image1->storeAs('uploads', $image1Name, 'public');
            $input['image1'] = '/storage/'.$path1;
        }

        if($request->hasFile('image2')) {
            $image2 = $request->file('image2');
            $image2Name = time().'-'.$image2->getClientOriginalName();
            $path2 = $image2->storeAs('uploads', $image2Name, 'public');
            $input['image2'] = '/storage/'.$path2;
        }

        if($request->hasFile('image3')) {
            $image3 = $request->file('image3');
            $image3Name = time().'.'.$image3->getClientOriginalName();
            $path3 = $image3->storeAs('uploads', $image3Name, 'public');
            $input['image3'] = '/storage/'.$path3;
        }

        $input['slug'] = Str::slug($request->title, '-');

        Article::create($input);

        return redirect()->route('article.index')
            ->with('success', 'Article created successfully.');
    }

    public function show($id) {
        $article = Article::findOrFail(Crypt::decrypt($id));
        return view('admin.article.show', compact('article'));
    }

    public function edit($id) {
        $article = Article::findOrFail(Crypt::decrypt($id));
        return view('admin.article.edit', compact('article'));
    }

    public function update(Request $request, $id) {
        $request->validate([
            'title' => 'required | max:255',
            'content' => 'required | max:4294967295',
            'image1' => 'mimes:png,jpg,jpeg | max:5012',
            'image2' => 'mimes:png,jpg,jpeg | max:5012',
            'image3' => 'mimes:png,jpg,jpeg | max:5012',
        ]);

        $input = $request->all();

        if($request->hasFile('image1')) {
            $image1 = $request->file('image1');
            $image1Name = time().'.'.$image1->getClientOriginalExtension();
            $path1 = $image1->storeAs('uploads', $image1Name, 'public');
            $input['image1'] = '/storage/'.$path1;
        }

        if($request->hasFile('image2')) {
            $image2 = $request->file('image2');
            $image2Name = time().'.'.$image2->getClientOriginalExtension();
            $path2 = $image2->storeAs('uploads', $image2Name, 'public');
            $input['image2'] = '/storage/'.$path2;
        }

        if($request->hasFile('image3')) {
            $image3 = $request->file('image3');
            $image3Name = time().'.'.$image3->getClientOriginalExtension();
            $path3 = $image3->storeAs('uploads', $image3Name, 'public');
            $input['image3'] = '/storage/'.$path3;
        }

        $input['slug'] = Str::slug($request->title, '-');

        $article = Article::findOrFail(Crypt::decrypt($id));
        $article->update($input);

        return redirect()->route('article.index')
            ->with('success', 'Article updated successfully');
    }

    public function destroy($id) {
        $article = Article::findOrFail(Crypt::decrypt($id));

        // Delete image from storage
        if($article->image1) {
            $image1 = str_replace('/storage/', '', $article->image1);
            Storage::disk('public')->delete($image1);
        }
        if($article->image2) {
            $image2 = str_replace('/storage/', '', $article->image2);
            Storage::disk('public')->delete($image2);
        }
        if($article->image3) {
            $image3 = str_replace('/storage/', '', $article->image3);
            Storage::disk('public')->delete($image3);
        }

        $article->delete();

        return redirect()->route('article.index')
            ->with('success', 'Article deleted successfully');
    }

    public function change_publish_status($id) {
        $article = Article::findOrFail(Crypt::decrypt($id));
        $article->publish_status = !$article->publish_status;
        $article->published_at = now();
        $article->save();

        return redirect()->route('article.index')
            ->with('success', 'Article published status changed successfully');
    }
}
