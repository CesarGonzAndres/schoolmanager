<?php

namespace App;

use App\Representative;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{

    public function representatives()
    {
        return $this->hasMany(Representative::class);
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'lastname', 'email', 'gender', 'birthdate', 'document', 'state', 'city', 'phone', 'phone_optional', 'description', 'address', 'student_id'
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [
       
    ];
}
