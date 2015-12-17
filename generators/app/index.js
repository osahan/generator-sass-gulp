'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({

    prompting: function() {
        var done = this.async();

        this.log(yosay(
            'Welcome to the brilliant ' + chalk.red('generator-sass-gulp') + ' generator!'
        ));

        var prompts = [{
            name: 'appName',
            message: 'What is your app\'s name ?'
        }, {
            name: 'version',
            message: 'Version (1.0.0)',
            default: '1.0.0'
        }, {
            type: 'input',
            name: 'description',
            message: 'Give me a description on what your SASS project is supposed to do '
        }, {
            type: 'input',
            name: 'author',
            message: 'What is your name ?'
        }];

        this.prompt(prompts, function(props) {

            this.props = props;

            done();
        }.bind(this));
    },

    writing: function() {

        this.copy('_package.json', 'package.json');
        this.copy('_gulpfile.js', 'gulpfile.js');
        this.copy('_.gitignore', '.gitignore');
        this.copy('_.editorconfig', '.editorconfig');
        this.copy('_README.md', 'README.md');
        this.copy('_index.scss', 'src/app/index.scss');
        this.copy('_demo.scss', 'src/app/styles/demo/_demo.scss');
        this.copy('_index.html', 'src/index.html');
        this.copy('_build.js', 'gulp/build.js');
        this.copy('_conf.js', 'gulp/conf.js');
        this.copy('_inject.js', 'gulp/inject.js');
        this.copy('_scripts.js', 'gulp/scripts.js');
        this.copy('_server.js', 'gulp/server.js');
        this.copy('_styles.js', 'gulp/styles.js');
        this.copy('_watch.js', 'gulp/watch.js');
    },

    install: function() {
        this.installDependencies();
    }
});