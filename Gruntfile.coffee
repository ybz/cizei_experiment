module.exports = (grunt) ->
    grunt.initConfig {
        pkg: grunt.file.readJSON('package.json')
        src_static_folder: 'src-static'
        target_static_folder: 'static'

        clean:
            static: ['<%= target_static_folder %>/*']

        copy:
            dev: {
                files: [{
                    expand: true
                    cwd: '<%= src_static_folder %>/'
                    src: ['**/*']
                    dest: '<%= target_static_folder %>/'
                }]
            }

        coffee:
            dev:
                files: [{
                    expand: true
                    cwd: '<%= src_static_folder %>/'
                    src: '**/*.coffee'
                    dest: '<%= target_static_folder %>/'
                    ext: '.js'
                }]

        compass:
            dev:
                options:
                    specify: [
                        '<%= src_static_folder %>/index.scss',
                        '<%= src_static_folder %>/noc/noc.scss',
                        '<%= src_static_folder %>/nov_timer.scss',
                    ]
                    sassDir: '<%= src_static_folder %>/'
                    cssDir: '<%= target_static_folder %>/'
    }

    grunt.loadNpmTasks 'grunt-contrib-coffee'
    grunt.loadNpmTasks 'grunt-contrib-clean'
    grunt.loadNpmTasks 'grunt-contrib-copy'
    grunt.loadNpmTasks 'grunt-contrib-compass'

    grunt.registerTask 'build:dev', 'Build dev files', [
        'clean:static',
        'copy:dev',
        'coffee:dev',
        'compass:dev',
    ]

    grunt.registerTask 'heroku', 'Build heroku dist', ['build:dev']
