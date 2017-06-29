angular.module('starter.services', [])
  .service('albumesDbSvc', function($q) {         
    var db = null;

    //Abre la base de datos y crea las tablas si aun no existen
    db = window.sqlitePlugin.openDatabase({name: "albumes.db", location: 'default'}, function() {
      db.transaction(function(tx) {
        tx.executeSql("CREATE TABLE IF NOT EXISTS albumes(title text primary key)");
      });
    });

    //Obtiene la lista de encuestas desde la DB
    this.getAlbumes = function() {
      return $q(function(resolve, reject) {
        db.executeSql("SELECT * FROM albumes", [],
          function(resultado) {
            resolve(rows(resultado));
          },
          reject);
      });
    };

    //Guarda la lista de encuestas en la DB
    this.actualizarAlbumes = function(albumes) {
      var sqlStatments = [ "DELETE FROM albumes" ];
      albumes.forEach(function(album) {
        sqlStatments.push([ "INSERT INTO albumes(title) VALUES(?)", [ album.title._content ] ]);
      });

      return $q(function(resolve, reject) {
        db.sqlBatch(sqlStatments, resolve, reject);
      });
    };

    function rows(resultado) {
      var items = [];
      for (var i = 0; i < resultado.rows.length; i++) {
        items.push(resultado.rows.item(i));
      }
      return items;
    }
    
    
  })    //Fin del Servicio albumesDbSvc