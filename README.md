#Angular2 quickstart yeoman generator

A simple angular2 generator based of of the quickstart tutorial from angular.io
https://angular.io/docs/ts/latest/quickstart.html

Current version: [2.0.0-rc.4 (2016-06-30)](https://github.com/angular/angular/blob/master/CHANGELOG.md)


*note: abandoning project, if you want to take it over just pm - project will be deleted once angular 2 final release is ready*

##Directory structure

* app <br />
  |-- app.component.ts<br />
  |-- main.ts
- node_modules ( after npm install )
- typings ( after npm install ) <br />
|- index.html<br />
|- package,json<br />
|- styles.css<br />
|- systemjs.config.js<br />
|- tsconfig.json<br />
|- typings<br />

##Getting started

Navigate into the folder for your project

<code>> npm install -g generator-angular2-quickstart</code> ( you will need [nodejs](https://nodejs.org/en/) for this step )

<code>> yo angular2-quickstart</code> ( you will need yeoman for this step <code>> npm install -g yo</code> ) 

<code>> npm start</code>

##Extras

There are 3 extra options you can use with the generator

1. skip-install: <code>> yo angular2-quickstart --skip-install</code>
    
   Skips npm install. You will need to manually run the npm install command

2. npmstart: <code>> yo angular2-quickstart --npmstart</code>

   Will automagically run the npm start command , transpile the typescript and launch the 
   browser with the newly generated app.

3. vscode: <code>> yo angular2-quickstart --vscode</code>

   Will launch visual studio code once it has completed the generation of the project.
   
##Roadmap

Will try keep this upto date with changes in the quickstart tutorial. 
   
   
