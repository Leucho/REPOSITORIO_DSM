Trabajo Practico Diseño Multipantalla - Funcionalidades faltantes

* Ordenar por titulo y fechas las fotografias

La aplicacion ordena por las fotos por titulo, pero tuvimos problemas para hacerlo por fechas. En su lugar ordenamos los albunes por fecha, nombre, cantidad de fotos y fecha de actualizacion.


* Compartir Via Email

La aplicacion no puede compartir via e-mail, ya que tuvimos problemas para llamar a la funcionalidad desde el celular, y no es posible probarla desde el Browser.
Esta instalado el plugin SocialSharing, creado el metodo y boton listo para ejecutarse, aunque esta comentado para que la misma pueda funcionar.


* Base de Datos SQLite

No pudimos hacer que funcione de modo offline, y que guarde los datos (nombre del album) traidos del Api Rest de Flickr y que los guarde en la base de datos. El problema estuvo en el servicio "conexion", porque no podia verificar correctamente el estado (si esta conectado o no a internet) en la app instalada en el celular.
Las lineas estan comentadas en el index.html y en el controllers para que puede funcionar la aplicacion. 

Los principales problemas surgieron cuando tratamos de hacer arrancar la app en el celular, ya que era indispensable ejecutarlo desde ahi, porque la BD SQLite es una base de datos interna de los dispositivos moviles. Problemas que surgieron fueron de modificar las variables de entorno JAVA_HOME y ANDROID_HOME, y ademas, otro problema que despues aparecio es que no encontraba el sdk, que lo solucionamos copiando unas carpetas, y por fin luego de varios intentos arranco la aplicacion. Pero lo mismo, seguia sin poder guardar en la BD debido a que no verificaba correctamente el estado de Conexion.   

Cada uno de los problemas que teniamos, lo ibamos tratando en proyectos por separado para simplificar los problemas que iban a ir surgiendo al agregar todo al mismo proyecto, pero aun asi, los problemas nombrados no los podiamos solucionar.
