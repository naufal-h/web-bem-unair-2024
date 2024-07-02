<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\FormController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::group(['prefix' => 'form', 'as' => 'api.form.'], function () {
    Route::post('create', [FormController::class, 'create'])->name('create');
    Route::post('validation', [FormController::class, 'validation'])->name('validation');
    Route::post('check/slug', [FormController::class, 'checkSlug'])->name('check.slug');
    Route::post('forgot', [FormController::class, 'forgot'])->name('forgot');
});