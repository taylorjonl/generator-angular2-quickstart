var generators = require('yeoman-generator');

module.exports = generators.Base.extend();

module.exports = gen.Base.extend({

    constructor: function () {
        gen.Base.apply(this, arguments);
    },

    initializing: function () {
        
    },
    
    prompting: function () {
        var done =  this.async();
    },
    
    configuring: function () {

    },
    
    writing: {
        
    },
    
    conflicts: function () {

    },
    
    install: function () {
        this.installDependencies({
            skipInstall: this.options['skip-install'] // Skip on an update or test
        });
    },
    
    end: function () {
        
    }
})