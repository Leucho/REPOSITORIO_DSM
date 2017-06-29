angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
    $scope.personas = 'Esto es una scope personas';
})


.controller('AlbumesCtrl', function($scope,AlbumesServ,$ionicLoading) {      //Se agrega la dependencia del Servicio creado llamado Chats en el archivo "services.js"
  
   $ionicLoading.show();
    function cargarAlbumes() {
      return AlbumesServ.getAlbumes().then(function(albumes) {
        $scope.albumes = albumes;                            
      $ionicLoading.hide(); 
});
   }
    $scope.order = function(x) {
    $scope.orden = x;
  }
    $scope.cargarAlbumes = cargarAlbumes;
 
    cargarAlbumes(); 
                                   //Carga la lista de encuestas cuando se inicia la aplicación 
        
})



 .controller("AlbumCtrl", function($scope,$stateParams,$ionicLoading,AlbumesServ) {
 
     $ionicLoading.show();

    //  function showIonicLoading() {
      //    return $ionicLoading.show({
        //      template: '<ion-spinner icon="lines"/>'
    //      });
      //}
    
/*
     function verificarConexion() {
      return AlbumesServ.getConexion().then(function(respuesta){
        $scope.leucho = 'respuesta';
        }); 
    }

    $scope.verificarConexion = verificarConexion;
 
    verificarConexion(); */
    
    
    function cargarAlbum() {
      return AlbumesServ.getAlbum($stateParams.id).then(function(album) {
        $scope.albumcen = album;
   
        //  $scope.id_album = $stateParams.id;     //     --> Esto lo puse para comprobar como guardaba el estado el stateParams del id del album seleccionado, que en realidad es el id definido en el archivo app.js en la parte de /album/:id
        // $scope.primari = $stateParams.primary; 
$ionicLoading.hide();     
 });
    }

    $scope.cargarAlbum = cargarAlbum;
 
     $scope.order = function(x) {
    $scope.orden = x;
  }
    cargarAlbum(); 
    
     
    
  })




.controller("FotoCtrl", function($scope,$stateParams,$ionicLoading,AlbumesServ) {
 
    $ionicLoading.show();
      
     
    function cargarFoto_Comentarios() {
      return AlbumesServ.getComentarios($stateParams.idFoto).then(function(foto) {
        $scope.comentarios = foto;
          
        $scope.nombre_foto = $stateParams.title;
        $scope.farm_foto = $stateParams.farm;
        $scope.server_foto = $stateParams.server;
        $scope.id_foto = $stateParams.idFoto;
        $scope.secret_foto = $stateParams.secret;
         $ionicLoading.hide();
      });
    }
    
    $scope.cargarFoto = cargarFoto_Comentarios;
    
    cargarFoto_Comentarios(); 
    
    
 /* function (global) {
    var DemoViewModel,
        app = global.app = global.app || {};

    DemoViewModel = kendo.data.ObservableObject.extend({
       shareViaEmail: function () {
            if (!this.checkSimulator()) {
             window.plugins.socialsharing.shareViaEmail (
                   'The message',
                   'The subject',
                   ['to@person1.com', 'to@person2.com'], // TO: must be null or an array
                   ['cc@person1.com'], // CC: must be null or an array
                   null, // BCC: must be null or an array
                   ['https://farm'+$stateParams.farm+'.staticflickr.com/'+$stateParams.server+'/'+$stateParams.secret+'_'+$stateParams.idFoto+'.jpg'],
                   this.onSuccess,
                   this.onError
               );
            }
        },
   });
  };*/
     });







