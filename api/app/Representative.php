<?php

namespace App;

use App\Student;
use Illuminate\Database\Eloquent\Model;

class Representative extends Model
{
    public function students()
    {
        return $this->hasMany(Student::class);
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'lastname', 'email', 'birthdate', 'gender', 'document', 'phone', 'phone_optional', 'description', 'address'
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [
       
    ];
}
