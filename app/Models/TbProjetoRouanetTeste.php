<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TbProjetoRouanetTeste extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    protected $table = 'tb_projeto_rouanet_teste';
}
