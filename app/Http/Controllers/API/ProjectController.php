<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\DataResource;
use App\Models\TbProjetoRouanetTeste;

class ProjectController extends Controller
{
    public function index()
    {
        $aux = (array) TbProjetoRouanetTeste::take(60)->get();
        $projects = [];
        $aux = array_shift($aux);

        while (count($aux) > 0) {
            array_push($projects, array_splice($aux, 0, 3));
        }

        return new DataResource($projects);
    }

    public function list()
    {
        // $aux = (array) TbProjetoRouanetTeste::get();
        $projects = TbProjetoRouanetTeste::get();
        // dd($aux);

        // $projects = [];
        // $aux = array_shift($aux);

        // dd($aux);
        // while (count($aux) > 0) {
        //     array_push($projects, array_splice($aux, 0, 3));
        // }

        return new DataResource($projects);
    }
}
