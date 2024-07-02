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
        Schema::create('questions', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('form_id');
            $table->string('title');
            $table->enum('type', ['text', 'textarea', 'radio', 'checkbox', 'select', 'date', 'time', 'datetime', 'file']);
            $table->enum('required', ['yes', 'no'])->default('no');
            $table->string('placeholder')->nullable();
            $table->string('options')->nullable();
            $table->integer('max_size_file')->nullable();
            $table->integer('order')->nullable();
            $table->foreign('form_id')
                ->references('id')
                ->on('forms')
                ->onUpdate('cascade')
                ->onDelete('cascade');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('questions');
    }
};
