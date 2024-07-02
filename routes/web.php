<?php

use App\Http\Controllers\ClientController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\FormController;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\RespondentController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\FeedbackController;
use App\Http\Controllers\AuthController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         // 'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

// Route::get('/test', function () {
//     return Inertia::render('Test');
// });

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });


Route::get('/test-blade', function () {
    return view('testing');
});




// Form Generator
Route::group(['prefix' => 'form', 'as' => 'form.'], function () {
    Route::get('create', [FormController::class, 'index'])->name('index');
    Route::get('help', [FormController::class, 'help'])->name('help');
    Route::post('validation', [FormController::class, 'validation'])->name('validation');

    Route::group(['prefix' => '{token}'], function () {
        Route::group(['middleware' => 'form'], function () {
            Route::get('edit', [FormController::class, 'edit']);
            Route::get('edit?tab={tab?}', [FormController::class, 'edit'])->name('edit');
            Route::get('download', [FormController::class, 'download'])->name('download');
            Route::get('leave', [FormController::class, 'leave'])->name('leave');

            Route::group(['prefix' => 'create', 'as' => 'create.'], function () {
                Route::post('question', [QuestionController::class, 'store'])->name('question');
            });

            Route::group(['prefix' => 'update', 'as' => 'update.'], function () {
                Route::post('form', [FormController::class, 'update'])->name('form');
                Route::post('question/orders', [QuestionController::class, 'updateOrders'])->name('order');
                Route::post('question/{id}', [QuestionController::class, 'updateQuestion'])->name('questions');
            });

            Route::group(['prefix' => 'delete', 'as' => 'delete.'], function () {
                Route::post('/', [FormController::class, 'delete'])->name('all');
                Route::post('question/{id}', [QuestionController::class, 'delete'])->name('questions');
                Route::post('respondent/{id}', [RespondentController::class, 'delete'])->name('respondent');
            });
        });
    });
});

// Response Form
Route::group(['prefix' => 'f/{slug}', 'as' => 'form.'], function () {
    Route::get('/', [FormController::class, 'show'])->name('show');
    Route::post('/', [RespondentController::class, 'store'])->name('submit');
    Route::get('submit', [FormController::class, 'afterForm'])->name('after');
});

Route::middleware(['login'])->group(function () {

    Route::get('/login', [AuthController::class, 'showLogin']);
    Route::post('login', [AuthController::class, 'login'])->name('login');

    Route::get('/', [ClientController::class, 'index'])->name('landing');
    Route::get('/tentang-kami', [ClientController::class, 'about'])->name('about');
    Route::get('/pengurus', [ClientController::class, 'pengurus'])->name('pengurus');
    Route::get('/kementerian', [ClientController::class, 'kementerian'])->name('kementerian');
    Route::get('/artikel', [ClientController::class, 'article'])->name('article.client.index');

});

Route::middleware(['auth'])->group(function () {
    Route::get('logout', [AuthController::class, 'logout'])->name('logout');

    Route::get('/dashboard', function () {
        return view('admin.dashboard');
    })->name('admin.dashboard');

    Route::middleware(['superadmin'])->group(function () {
        Route::group(['prefix' => 'user'], function () {
            Route::get('/', [UserController::class, 'index'])->name('user.index');
            Route::post('/create', [UserController::class, 'store'])->name('user.store');
            Route::get('/create', [UserController::class, 'create'])->name('user.create');
            Route::get('/{user}', [UserController::class, 'show'])->name('user.show');
            Route::put('/{user}', [UserController::class, 'update'])->name('user.update');
            Route::get('/change-status/{user}', [UserController::class, 'change_status'])->name('user.status');
            Route::get('/{user}/edit', [UserController::class, 'edit'])->name('user.edit');
            Route::post('/password/{user}', [UserController::class, 'change_password'])->name('user.password');
        });

        Route::group(['prefix' => 'feedback'], function () {
            Route::get('/', [FeedbackController::class, 'index'])->name('feedback.index');
            Route::get('/{feedback}', [FeedbackController::class, 'show'])->name('feedback.show');
        });

        Route::group(['prefix' => 'forms', 'as' => 'admin.form.'], function () {
            Route::get('/', [FormController::class, 'adminIndex'])->name('index');
            Route::post('delete', [FormController::class, 'adminDelete'])->name('delete');
        });
    });

    // Route::middleware(['adkesma'])->group(function(){
    //     Route::group(['prefix' => 'care'], function(){
    //         Route::get('/', [CareController::class, 'index'])->name('care.index');
    //         Route::get('/{care}', [CareController::class, 'show'])->name('care.show');
    //     });
    // });

    // Route::middleware(['content-writer'])->group(function(){
    //     Route::group(['prefix' => 'article'], function(){
    //         Route::get('/', [ArticleController::class, 'index'])->name('article.index');
    //         Route::post('/create', [ArticleController::class, 'store'])->name('article.store');
    //         Route::get('/create', [ArticleController::class, 'create'])->name('article.create');
    //         Route::get('/{article}', [ArticleController::class, 'show'])->name('article.show');
    //         Route::put('/{article}', [ArticleController::class, 'update'])->name('article.update');
    //         Route::get('/{article}/edit', [ArticleController::class, 'edit'])->name('article.edit');
    //         Route::delete('/{article}', [ArticleController::class, 'destroy'])->name('article.destroy');
    //         Route::get('/change-status/{article}', [ArticleController::class, 'change_publish_status'])->name('article.status');
    //     });
    // });
});


// require __DIR__ . '/auth.php';
