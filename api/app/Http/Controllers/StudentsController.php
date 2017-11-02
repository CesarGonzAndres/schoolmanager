<?php

namespace App\Http\Controllers;
use DB;
use App\Student;
use App\Representative;
use Illuminate\Http\Request;

class StudentsController extends Controller
{
   function index(Request $request) {
   		try {
   			$students = Student::with('Representatives')->get(); 
   			return response()->json($students, 200);
   		}
      catch (Exception $e) {
        return response()->json(['error' => 'Unauthorized'], 401, []);
      }       		
   }

   function createStudent(Request $request) {
   		if($request->isJson()) {
   			$data = $request->json()->all();
   			$student = Student::create([
   				'name' => $data['name'],
          'lastname' => $data['lastname'],
   				'email' => $data['email'],
          'birthdate' => $data['birthdate'],
          'gender' => $data['gender'],
          'document' => $data['document'],
          'city' => $data['city'],
          'state' => $data['state'],
          'address' => $data['address'],
          'description' => $data['description'],
          'phone' => $data['phone'],
          'phone_optional' => $data['phone_optional']
   			]);
   			return response()->json($student, 200);
   		}
   		return response()->json(['error' => 'Unauthorized'], 401, []);
   }

   public function updateStudent(Request $request, $id)
    {
        if ($request->isJson()) {
            try {
                $student = Student::findOrFail($id);
                $data = $request->json()->all();
                $student->name = $data['name'];
                $student->lastname = $data['lastname'];
                $student->email = $data['email'];
                $student->birthdate = $data['birthdate'];
                $student->gender = $data['gender'];
                $student->city = $data['city'];
                $student->state = $data['state'];
                $student->address = $data['address'];
                $student->description = $data['description'];
                $student->phone = $data['phone'];
                $student->phone_optional = $data['phone_optional'];   
                $student->save();
                return response()->json($student, 200);
            } catch (ModelNotFoundException $e) {
                return response()->json(['error' => 'No content'], 406);
            }
        } else {
            return response()->json(['error' => 'Unauthorized'], 401, []);
        }
    }
    
    public function getStudent(Request $request, $id)
    {
        // if ($request->isJson()) {
            try {
              $student = Student::findOrFail($id);
              return response()->json($student, 200);
            } catch (ModelNotFoundException $e) {
                return response()->json(['error' => 'No content'], 406);
            }
        // } else {
        //     return response()->json(['error' => 'Unauthorized'], 401, []);
        // }
    }

    public function deleteStudent(Request $request, $id)
    {
        try {
            try {
                $student = Student::findOrFail($id);
                $student->delete();
                return response()->json('Delete success', 200);
            } catch (ModelNotFoundException $e) {
                return response()->json(['error' => 'No content'], 406);
            }
        } catch (Exception $e) {
            return response()->json(['error' => 'Unauthorized'], 401, []);
        }
    }
}

 