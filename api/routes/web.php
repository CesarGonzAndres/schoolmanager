<?php
/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/
$router->post('/users/login', ['cors','uses' => 'UsersController@getToken']);

//USERS
$router->get('usersList', ['uses' => 'UsersController@index']);
$router->post('newUser', ['uses' => 'UsersController@createUser']);

//STUDENTS
$router->get('student', ['uses' => 'StudentsController@index']);
$router->get('student/{id}', ['uses' => 'StudentsController@getStudent']);
$router->post('student', ['uses' => 'StudentsController@createStudent']);
$router->put('student/{id}', ['uses' => 'StudentsController@updateStudent']);
$router->delete('student/{id}', ['uses' => 'StudentsController@deleteStudent']);

//TEACHERS
$router->get('teacher', ['uses' => 'TeachersController@index']);
$router->get('teacher/{id}', ['uses' => 'TeachersController@getTeacher']);
$router->post('teacher', ['uses' => 'TeachersController@createTeacher']);
$router->put('teacher/{id}', ['uses' => 'TeachersController@updateTeacher']);
$router->delete('teacher/{id}', ['uses' => 'TeachersController@deleteTeacher']);



