var isPublic = typeof window != "undefined";

(function(global) {
    // map tells the System loader where to look for things
    var map = {
        'app': 'app', // 'dist',
        '@angular': (isPublic) ? '@angular' : 'node_modules/@angular',
        'rxjs': (isPublic) ? 'rxjs' : 'node_modules/rxjs',
        'angular2-cookie': (isPublic) ? 'angular2-cookie' : 'node_modules/angular2-cookie',
        'socket.io-client': (isPublic) ? 'socket.io-client' : 'node_modules/socket.io-client',
        'shared': (isPublic) ? 'shared' : '../shared'
    };

    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'app': { main: 'main.js', defaultExtension: 'js' },
        'rxjs': { defaultExtension: 'js' },
        'angular2-cookie': { defaultExtension: 'js' },
        'socket.io-client': { main: 'dist/socket.io.js' },
        'shared': { main: 'index.js', defaultExtension: 'js' }
    };
    var ngPackageNames = [
        'common',
        'compiler',
        'core',
        'forms',
        'http',
        'platform-browser',
        'platform-browser-dynamic',
        'router',
        'router-deprecated',
        'upgrade'
    ];

    // Individual files (~300 requests):
    function packAngularIndex(pkgName) {
        packages['@angular/' + pkgName] = { main: 'index.js', defaultExtension: 'js' };
    }
    // Bundled (~40 requests):
    function packAngularUmd(pkgName) {
        packages['@angular/' + pkgName] = { main: 'bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
    }
    // Most environments should use UMD; some (Karma) need the individual index files
    var setPackageConfig = System.packageWithIndex ? packAngularIndex : packAngularUmd;
    // Add package entries for angular packages.
    ngPackageNames.forEach(setPackageConfig);
    var config = {
        map: map,
        packages: packages
    };
    System.config(config);
})(this);