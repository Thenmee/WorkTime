<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTendersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tenders', function (Blueprint $table) {
            $table->bigIncrements('tender_id');
            $table->foreignId('user_id');
            $table->foreignId('major_id');
            $table->string('title');
            $table->string('image');
            $table->string('company');
            $table->longText('description');
            $table->string('apply_link');
            $table->datetime('start_date');
            $table->datetime('deadline');
            $table->datetime('posted_date');
            $table->boolean('active');
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
        Schema::dropIfExists('tenders');
    }
}