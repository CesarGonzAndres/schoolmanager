angular.module('schoolManage')
.constant('Configs',{
    API:'api/public/index.php'
})
.constant('EndPoints', {
    'login': '/users/login',
    'student': '/student',
    'teacher': '/teacher',
    'images': '/images',
    'statements': '/statements',
});
