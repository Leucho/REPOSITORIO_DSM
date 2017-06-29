angular.module('starter.services', [])
  .service('AlbumesConexion', function($q, AlbumesServ , albumesDbSvc, conexion) {
    var albumes = null;
    
     this.getAlbumes = function() {
      if (conexion.online()) 
      {
        return AlbumesServ.getAlbumes()
          .then(function(respuesta) { albumes = respuesta; })
          .then(function() { albumesDbSvc.actualizarAlbumes(albumes); })
          .then(function() {
            return _.cloneDeep(albumes);
          });
      } 
      else 
      {      
        return albumesDbSvc.getAlbumes();
      }
    };
 
    this.getAlbum = function(id) {
      if (!conexion.online()) {
        return $q.reject('Sin conexión');
      }
      return AlbumesServ.getAlbum(id);
    };
 

    
  });
