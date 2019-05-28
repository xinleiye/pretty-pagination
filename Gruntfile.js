module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        clean: {
            build: {
                src: ["./dist/*"]
            }
        },
        uglify: {
            options: {
                banner: "/*! <%= pkg.name %>-<%= pkg.version %> <%= grunt.template.today(\"yyyy-mm-dd\") %> */\n"
            },
            build: {
                src: "./src/js/<%= pkg.name %>.js",
                dest: "./dist/<%= pkg.name %>.min.js"
            }
        },
        less: {
            build: {
                options: {
                    banner: "/*! used for <%= pkg.name %>.js version: <%= pkg.version %> <%= grunt.template.today(\"yyyy-mm-dd\") %> */\n",
                    compress: false
                },
                files: {
                    "dist/jquery-pagination.css": "src/less/jquery-pagination.less"
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-less");

    grunt.registerTask("default", ["clean", "uglify", "less"]);
};
