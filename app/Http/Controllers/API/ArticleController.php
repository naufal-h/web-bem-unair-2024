<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\ArticleResource;
use App\Models\Article;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ArticleController extends Controller
{
    public function index()
    {
        $articles = Article::where('publish_status', true)->get();

        $response =
            [
                'success' => true,
                'message' => 'Articles retrieved successfully.',
                'data' => ArticleResource::collection($articles),
            ];

        return response()->json($response, Response::HTTP_OK);
    }

    public function show($id)
    {
        $article = Article::find($id);

        if (is_null($article)) {
            $response =
                [
                    'success' => false,
                    'message' => 'Article not found.',
                    'data' => null,
                ];

            return response()->json($response, Response::HTTP_NOT_FOUND);
        }

        $response =
            [
                'success' => true,
                'message' => 'Article retrieved successfully.',
                'data' => $article,
            ];

        return response()->json($response, Response::HTTP_OK);
    }
}
