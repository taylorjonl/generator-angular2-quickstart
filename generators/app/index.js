var generator = require('yeoman-generator');

module.exports = generator.Base.extend({

    constructor: function () {
        generator.Base.apply(this, arguments);
    },

    initializing: function () {

    },

    prompting: function () {
        var done = this.async();

        this.prompt([
            
            // Application name
            {
                type: 'input',
                name: 'appName',
                message: 'What is the name of your application ? ',
                default: this.config.get('appName') || 'New Application',
            },
            // Main application selector
            {
                type: 'input',
                name: 'selectorName',
                message: 'What is the name of your main component selector ? ',
                default: this.config.get('selectorName') || 'my-app',
            },
            // Application Author
            {
                type: 'input',
                name: 'appAuthor',
                message: 'Author',
                default: this.config.get('appAuthor')
            },
        ], function (answers) {

            // Settings added to global yeoman config file: .yo-rc.json
            this.config.set({
                'appName': answers.appName,
                'selectorName': answers.selectorName,
                'appAuthor': answers.appAuthor
            });

            this.config.save();
            done();
        }.bind(this));
    },

    configuring: function () {

    },

    writing: {

        // Package.json
        packagefile: function(){
            this.fs.copyTpl(
                this.templatePath('_package.json'),
                this.destinationPath('package.json'),
                {
                    appName: this.config.get('appName'),
                    appAuthor: this.config.get('appAuthor')
                }
            )
        },

        // Config files
        configfiles: function() {
                this.copy('_systemjs.config.js','systemjs.config.js');
                this.copy('_tsconfig.json','tsconfig.json');
                this.copy('_typings.json','typings.json');
                this.copy('_styles.css','styles.css');
                this.copy('app/_app.component.ts','app/app.component.ts');
                this.copy('app/_main.ts','app/main.ts');
        },

        // Index file
        indexfile: function() {
            this.fs.copyTpl(
                this.templatePath('_index.html'),
                this.destinationPath('index.html'),
                {
                    selectorName: this.config.get('selectorName'),
                    appName: this.config.get('appName'),
                }
            )
        }
    },

    conflicts: function () {

    },

    install: function () {
        this.installDependencies({
            skipInstall: this.options['skip-install'] 
        });
    },

    end: function () {

        // Start server
        if (this.options['npmstart']) {
            this.spawnCommand('npm', ['start']);
        }
        // Open vscode
        if (this.options['vscode']) {
            this.spawnCommand('code', ['.']);
        }
    }
})