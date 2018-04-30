<?php

Route::middleware('auth:api')->prefix('v1')->namespace('Api')->group( function () {
    Route::apiResource('users', 'UsersController');
    Route::get('/user', 'UsersController@me')->name('users.me');

    Route::apiResource('companies', 'CompaniesController');
    Route::apiResource('addresses', 'AddressesController');
    Route::apiResource('emails', 'EmailsController');
    Route::apiResource('phones', 'PhonesController');
    Route::apiResource('technologies', 'TechnologiesController');
});

