<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCareerJobsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('career_jobs', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('title');
            $table->string('company');
            $table->string('short_description', 500)->nullable();
            $table->text('description')->nullable();
            $table->string('company_url')->nullable();
            $table->longText('page_content')->nullable();
            $table->boolean('is_active')->default(true);
            $table->date('started_at')->nullable();
            $table->date('finished_at')->nullable();
            $table->softDeletes();
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
        Schema::dropIfExists('career_jobs');
    }
}
