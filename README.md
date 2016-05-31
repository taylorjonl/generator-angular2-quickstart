#Angular2 quickstart yeoman generator

A simple angular2 generator based of of the quickstart tutorial from angular.io
https://angular.io/docs/ts/latest/quickstart.html

##Directory structure

- app
- node_modules ( after npm install )
- typings ( after npm install )
- index.html
- package,json
- styles.css
- systemjs.config.js
- tsconfig.json
- typings

##Getting started

Navigate into the folder for your project

<code>> npm i -g generator-angular2-quickstart</code>

<code>> yo angular2-quickstart</code>

<code>> npm start</code>

##Extras

There are 3 extra options you can use with the generator

1. skip-install: <code>> yo angular2-quickstart --skip-install</code>
    
   Skips npm install. You will need to manually run the npm install command

2. npmstart: <code>> yo angular2-quickstart --npmstart</code>

   Will automagically run the npm start command , transpile the typescript and launch the 
   browser with the newly generated app.

3. npmstart: <code>> yo angular2-quickstart --vscode</code>

   Will launch visual studio code once it has completed the generation of the project.
   
##Roadmap

Will try keep this upto date with changes in the quickstart tutorial. 
   
   