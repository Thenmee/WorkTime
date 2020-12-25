<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PassportAuthController;
use App\Http\Controllers\PostController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
*/


Route::post('register', [PassportAuthController::class, 'register']);
Route::post('login', [PassportAuthController::class, 'login']);

Route::middleware('auth:api')->group(function () {
    Route::resource('posts', PostController::class);
});

Route::get('major', 'Major\MajorController@major');
Route::get('major/{majorid}', 'Major\MajorController@majorByID');
Route::post('major', 'Major\MajorController@majorSave');
Route::put('major/{major}', 'Major\MajorController@majorUpdate');
Route::delete('major/{major}', 'Major\MajorController@majorDelete');

Route::namespace('Tender')->group(function(){

    Route::get('Tender/get','TenderController@getActiveTenders');
    Route::get('Tender/get/{id}','TenderController@getTenders');
    //Route::get('Tender/filters','TenderController@filterAllActiveTender');
    //Route::get('Tender/filter/{filters?}','TenderController@filterActiveTender');


    
});