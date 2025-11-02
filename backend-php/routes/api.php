<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BlogController;

Route::get('/blogs', [BlogController::class,'index']);
Route::get('/blogs/{id}', [BlogController::class,'show']);
Route::get('/blogs/slug/{slug}', [BlogController::class,'showBySlug']);
Route::post('/blogs', [BlogController::class,'store']);
Route::put('/blogs/{id}', [BlogController::class,'update']);
Route::delete('/blogs/{id}', [BlogController::class,'destroy']);
Route::post('/blogs/upload-image', [BlogController::class,'uploadImage']);
