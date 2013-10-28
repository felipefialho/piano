module.exports = function( grunt ) {

// Load all tasks
require('load-grunt-tasks')(grunt);

// Paths
var PathConfig = { 
  dev: 'dev/', 
  dist: 'dist/'
};

// Set scripts
var scripts = [
  '<%= config.dev %>**/_jquery-2.0.3.min.js', // JQuery
  '<%= config.dev %>**/howler.js', // Howler for HTML5 Audio
  '<%= config.dev %>**/_general.js' // General settings
];
 
// Grunt config
grunt.initConfig({

  // Config path
    config: PathConfig, 

  // Clean files
    clean: {
    dist: {
      src: ["dist/"]
    }
  }, 

  // Copy files
  copy: {
      dist: {
        files: [
            {
              expand: true, 
              dot: true,
              cwd: 'dev/', 
              src: [
                '**',
                '*.{md,txt,htaccess}',
                '!assets/css/less/**',
                '!assets/js/_scripts/**',
              ], 
              dest: 'dist/'
            } // makes all src relative to cwd
        ]
      }
  }, 

  // Less
  less: {
    dist: {
      options: {
        paths: ["dev/assets/css/less"],
        compress: true
      },
      files: {
        "dist/assets/css/style.css": "dev/assets/css/less/style.less"
      }
    },
    dev: {
      options: {
        paths: ["dev/assets/css/less"]
      },
      files: {
        "dev/assets/css/style.css": "dev/assets/css/less/style.less"
      }
    }
  }, 

  // Uglify
    uglify: {  
    options: {
      mangle : false 
    },                               
      dist: {   
      files : {
        'dist/assets/js/scripts.min.js': scripts
      }
    },                        
      dev: {   
      options: {
        beautify : true 
      },   
      files : {
        'dev/assets/js/scripts.min.js': scripts
      }
    }
    }, 

  //JShint
  jshint: {
    files: [
      '<%= config.dev %>assets/js/**/_general.js'
    ]
  },

  // HTMLmin
  htmlmin: {                                     
      dist: {                                       
        options: {                                  
          removeComments: true,
          collapseWhitespace: true
        },
        files: [{
            expand: true,      
            cwd: '<%= config.dist %>',       
            src: ['*.html','**/*.html'],  
            dest: '<%= config.dist %>',    
        }],
      }
  }, 

  // Watch 
  watch : {
    options: {
        debounceDelay: 500,
    },
    less: {
      files : [
        '<%= config.dev %>**/*.less'
      ],
      tasks : ['less:dev']
    },
    js: {
      files : [
        '<%= config.dev %>**/_general.js',
        'Gruntfile.js'
      ],
      tasks : ['uglify:dev']
    } 
  },

  // Server
  connect: {
    server: {
      options: {
        port: 9001,
        base: 'dev'
      }
    }
  }


});
  
// JsLint
grunt.registerTask( 'test', ['jshint'] );

// Build
grunt.registerTask( 'build', [ 'clean', 'copy:dist', 'less:dist', 'uglify:dist', 'htmlmin:dist'] );

// Watch
grunt.registerTask( 'w', [ 'watch' ] );

// Server
grunt.registerTask( 'server', ['connect:server:keepalive'] );

};