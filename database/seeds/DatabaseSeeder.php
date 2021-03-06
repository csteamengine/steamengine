<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class DatabaseSeeder extends Seeder
{
    use TruncateTable;

    /**
     * Seed the application's database.
     */
    public function run()
    {
        Model::unguard();

        $this->truncateMultiple([
            'cache',
            'jobs',
            'sessions',
        ]);

        $this->call(AuthTableSeeder::class);
        $this->call(JobsTableSeeder::class);
        $this->call(ProjectsTableSeeder::class);
        $this->call(ProfilesTableSeeder::class);
        $this->call(VisitsTableSeeder::class);

        Model::reguard();
    }
}
