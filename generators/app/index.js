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
        packagefile: () => {
            this.fs.copyTpl(
                this.templatePath('_package.json'),
                this.destinationPate('package.json'),
                {
                    appName: this.config.get('appName'),
                    appAuthor: this.config.get('appAuthor')
                }
            )
        },

        // Config files
        configfiles: () => {
            var filesArr = ['_systemjs.config', '_tsconfig.json', '_typings.json', '_styles.css']
            filesArr.forEach(filesArr, (file) => {
                this.copy(file, file.substring(1))
            });
        },

        // Index file
        indexfile: () => {
            this.fs.copyTpl(
                this.templatePath('_index.html'),
                this.destinationPate('index.html'),
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