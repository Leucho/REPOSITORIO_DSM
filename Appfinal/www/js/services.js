angular.module('starter.services', [])
  .service('AlbumesServ', function($q,$http) {
    
    var baseUrl = 'https://api.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=6e8a597cb502b7b95dbd46a46e25db8d&user_id=137290658%40N08&format=json&nojsoncallback=1';
    
    var url_album1 = 'https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=6e8a597cb502b7b95dbd46a46e25db8d&photoset_id='; //1era parte de url_album --> Para agregar dps el id   
    var url_album2 = '&user_id=137290658%40N08&format=json&nojsoncallback=1';                                                                        //2da parte de url_album --> Para agregar dps el id     
    
    
    var url_comentario1= 'https://api.flickr.com/services/rest/?method=flickr.photos.comments.getList&api_key=6e8a597cb502b7b95dbd46a46e25db8d&photo_id=';
    var url_comentario2= '&user_id=137290658%40N08&format=json&nojsoncallback=1';
    
    
    this.getAlbumes = function() {
      return $http.get(baseUrl).then(function(respuesta) {
                return _.cloneDeep(respuesta.data);
            });       
      };
    
    
    
     this.getAlbum = function(id_album) {
      return $http.get(url_album1 + id_album + url_album2).then(function(respuesta) {
                return _.cloneDeep(respuesta.data);
            });       
      };
    
    
    
    this.getComentarios = function(id_foto) {
      return $http.get(url_comentario1 + id_foto + url_comentario2).then(function(respuesta) {
                return _.cloneDeep(respuesta.data);
            });       
      };
    
    
  /*   this.getAlbu = function(id) {
            return $http.get(baseUrl + id).then(function(respuesta) {
                return _.cloneDeep(respuesta.data);
            });
    };*/
    

    
    
  });       //FIN del SERVICE