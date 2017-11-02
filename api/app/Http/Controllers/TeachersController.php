<?php

namespace App\Http\Controllers;

use App\Teacher;
use Illuminate\Http\Request;

class TeachersController extends Controller
{
   function index(Request $request) {

   		try {
   			$teachers = Teacher::all();
   			return response()->json($teachers, 200);
   		}
      catch (Exception $e) {
        return response()->json(['error' => 'Unauthorized'], 401, []);
      }       		
   }

   function createTeacher(Request $request) {

   		if($request->isJson()) {
   			$data = $request->json()->all();
   			$teacher = Teacher::create([
   				'name' => $data['name'],
   				'email' => $data['email'],
          'birthdate' => $data['birthdate'],
          'gender' => $data['gender'],
          'document' => $data['document'],
          'lastname' => $data['lastname'],
          'subject' => $data['subject'],
          'phone' => $data['phone'],
          'phone_optional' => $data['phone_optional'],
          'state' => $data['state'],
          'city' => $data['city'],
          'address' => $data['address']
   			]);
   			return response()->json($teacher, 200);
   		}
   		return response()->json(['error' => 'Unauthorized'], 401, []);

   }

   public function updateTeacher(Request $request, $id)
    {
        if ($request->isJson()) {
            try {
                $teacher = Teacher::findOrFail($id);
                $data = $request->json()->all();
                $teacher->name = $data['name'];
                $teacher->email = $data['email'];
                $teacher->birthdate = $data['birthdate'];
                $teacher->gender = $data['gender'];
                $teacher->document = $data['document'];
                $teacher->lastname = $data['lastname'];
                $teacher->subject = $data['subject'];
                $teacher->phone = $data['phone'];
                $teacher->phone_optional = $data['phone_optional'];
                $teacher->state = $data['state'];
                $teacher->city = $data['city'];
                $teacher->address = $data['address'];
                $teacher->save();
                return response()->json($teacher, 200);
            } catch (ModelNotFoundException $e) {
                return response()->json(['error' => 'No content'], 406);
            }
        } else {
            return response()->json(['error' => 'Unauthorized'], 401, []);
        }
    }
    
    public function getTeacher(Request $request, $id)
    {
        if ($request->isJson()) {
            try {
                $teacher = Teacher::findOrFail($id);
                return response()->json($teacher, 200);
            } catch (ModelNotFoundException $e) {
                return response()->json(['error' => 'No content'], 406);
            }
        } else {
            return response()->json(['error' => 'Unauthorized'], 401, []);
        }
    }

    public function deleteTeacher(Request $request, $id)
    {
        try {
            try {
                $teacher = Teacher::findOrFail($id);
                $teacher->delete();
                return response()->json($teacher, 200);
            } catch (ModelNotFoundException $e) {
                return response()->json(['error' => 'No content'], 406);
            }
        } catch (Exception $e) {
            return response()->json(['error' => 'Unauthorized'], 401, []);
        }
    }
}
