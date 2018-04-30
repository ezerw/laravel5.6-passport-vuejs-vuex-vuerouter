<?php
use Illuminate\Support\Facades\Request;

function set_active($routeString) {
   return (Request::path() === $routeString) ? 'active' : '';
}