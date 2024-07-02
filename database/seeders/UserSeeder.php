<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = [[
            'username' => 'superadmin',
            'password' => Hash::make('5up3r4dm1n'),
            'type' => 'sa',
            'status' => '1'
        ]
        ];

        DB::table('users')->insert($user);
    }
}
