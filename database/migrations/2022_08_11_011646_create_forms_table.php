<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('forms', function (Blueprint $table) {
            $table->id();
            $table->string('slug')->unique();
            $table->string('author');
            $table->string('title')->default('Silahkan ganti judul form ini');
            $table->string('token')->unique();
            $table->string('description')->nullable();
            $table->dateTime('deadline')->nullable();
            $table->string('after_form_message')->nullable();
            $table->string('after_form_redirect')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('forms');
    }
};
