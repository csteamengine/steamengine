<?php

namespace App\Http\Controllers\Frontend;

use App\Models\Job;
use Illuminate\Contracts\View\Factory;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\View\View;

class JobController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Factory|View
     */
    public function index()
    {
        //Shows all projects (or at least a range and searchable)
        return view('frontend.jobs.index');
    }

    /**
     * Display the specified resource.
     *
     * @param Job $job
     * @return Factory|View
     */
    public function show(Job $job)
    {
        //Shows all the info on a single project.
        return view('frontend.jobs.show')->with(['job' => $job]);
    }

}
