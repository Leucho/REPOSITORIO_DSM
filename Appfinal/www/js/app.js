angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
     if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  
  $stateProvider
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
      
    }
  })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'AlbumesCtrl'
        }
      }
    })
    
    .state('tab.album', {
      url: '/album/:id',
      views: {
       'tab-account': {
        templateUrl: 'templates/album.html',
        controller: 'AlbumCtrl'
        }
      }
    })
    
    .state('tab.foto', {
      url: '/foto/:farm/:server/:idFoto/:secret/:title',
      views: {
       'tab-account': {
        templateUrl: 'templates/foto.html',
        controller: 'FotoCtrl'
        }
      }
    })

    
  $urlRouterProvider.otherwise('/tab/chats');     //Esta linea sirve para especificar donde va abrir el browser
})

 
.config(function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        $httpProvider.defaults.headers.common = 'Content-Type: application/json';
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
            }
     );