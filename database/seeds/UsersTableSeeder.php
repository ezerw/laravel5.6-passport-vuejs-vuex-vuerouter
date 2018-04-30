<?php

use App\User;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $santi = new User();
        $santi->name = 'Admin';
        $santi->email = 'admin@admin.com';
        $santi->password = bcrypt('secret');
        $santi->is_admin = true;
        $santi->save();
    }
}
