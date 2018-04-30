<?php

Route::get('/login', 'Auth\LoginController@showLoginForm')->name('login');
Route::post('/login', 'Auth\LoginController@login');
Route::get('/logout', 'Auth\LoginController@logout')->name('logout');

Route::middleware('auth')
    ->get('/{vue_capture?}', 'DefaultController@index')
    ->where('vue_capture', '[\/\w\.-]*')
    ->name('index');
