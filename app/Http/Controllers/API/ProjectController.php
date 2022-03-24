<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\DataResource;
use App\Models\TbProjetoRouanetTeste;

class ProjectController extends Controller
{
    public function index($quantity)
    {
        $aux = (array) TbProjetoRouanetTeste::take($quantity)->get();
        $projects = [];
        $projects = array_shift($aux);

        return new DataResource($projects);
    }

    public function list()
    {
        $projects = TbProjetoRouanetTeste::get();

        return new DataResource($projects);
    }
}
