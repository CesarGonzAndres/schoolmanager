<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateStudentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('students', function (Blueprint $table) {
            $table->create();
            $table->increments('id');
            $table->string('name');
            $table->date('birthdate');
            $table->string('email')->unique();
            $table->string('document');
            $table->string('lastname');
            $table->string('gender');
            $table->string('description');
            $table->string('city');
            $table->string('state');
            $table->string('phone');
            $table->string('phone_optional');
            $table->string('address');
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
      Schema::dropIfExists('students');
    }
}
