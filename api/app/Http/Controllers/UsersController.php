<?php
namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UsersController extends Controller
{

  function index(Request $request) {

   		if($request->isJson()) {
   			$users = User::all();
   			return response()->json($users, 200);
   		}
   		return response()->json(['error' => 'Unauthorized'], 401, []);
       		
  }

   function createUser(Request $request) {

   		if($request->isJson()) {
   			$data = $request->json()->all();
   			$user = User::create([
   				'name' => $data['name'],
   				'username' => $data['username'],
   				'email' => $data['email'],
   				'password' => Hash::make($data['password']),
   				'api_token' => str_random(60),
   			]);
   			return response()->json($user, 200);
   		}
   		return response()->json(['error' => 'Unauthorized'], 401, []);

   }

   public function updateUser(Request $request, $id)
    {
        if ($request->isJson()) {
            try {
                $user = User::findOrFail($id);
                $data = $request->json()->all();
                $user->name = $data['name'];
                $user->username = $data['username'];
                $user->email = $data['email'];
                $user->password = Hash::make($data['password']);
                $user->save();
                return response()->json($user, 200);
            } catch (ModelNotFoundException $e) {
                return response()->json(['error' => 'No content'], 406);
            }
        } else {
            return response()->json(['error' => 'Unauthorized'], 401, []);
        }
    }
    
    public function getUser(Request $request, $id)
    {
        if ($request->isJson()) {
            try {
                $user = User::with(['issues_assigned_to_me', 'issues_reported_to_me'])->findOrFail($id);
                return response()->json($user, 200);
            } catch (ModelNotFoundException $e) {
                return response()->json(['error' => 'No content'], 406);
            }
        } else {
            return response()->json(['error' => 'Unauthorized'], 401, []);
        }
    }

    public function deleteUser(Request $request, $id)
    {
        if ($request->isJson()) {
            try {
                $user = User::findOrFail($id);
                $user->delete();
                return response()->json($user, 200);
            } catch (ModelNotFoundException $e) {
                return response()->json(['error' => 'No content'], 406);
            }
        } else {
            return response()->json(['error' => 'Unauthorized'], 401, []);
        }
    }

    function getToken(Request $request) {

   		if($request->isJson()) {
   			try {
   				$data = $request->json()->all();

   				$user = User::where('username', $data['username'])->first();
  				if($user && Hash::check($data['password'], $user->password)) {   
   					return response()->json(['user'=> $user,'api_token'=>$user['api_token']], 200);
   				} else {
   					response()->json(['error' => 'No content'], 406);
   				}
   			}
   			catch (ModelNotFoundException $e){
   				return response()->json(['error' => 'No content'], 406);
   			}
   		}
   	return response()->json(['error' => 'Unauthorized'], 404, []);	
   }


}
