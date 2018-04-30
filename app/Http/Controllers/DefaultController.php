<?php

namespace App\Http\Controllers;

class DefaultController extends Controller
{

    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {
        $data = [
            'name' => env('APP_NAME'),
            'base_url' => env('APP_URL'),
        ];

        return view('index', compact('data'));
    }

}