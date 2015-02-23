'use strict';

var pickFiles = require('broccoli-static-compiler');
var Funnel = require('broccoli-funnel');
var unwatchedTree = require('broccoli-unwatched-tree');
var upstreamMergeTrees = require('broccoli-merge-trees');
var compileModules = require('broccoli-es6-module-transpiler');
var AMDFormatter = require('es6-module-transpiler-amd-formatter');
var transpiler = require('es6-module-transpiler');
var findBowerTrees = require('broccoli-bower');
var concat = require('broccoli-concat');
var angularTemplates = require('broccoli-angular-templates-cache');

function mergeTrees(inputTree, options) {
  var tree = upstreamMergeTrees(inputTree, options);
  tree.description = options && options.description;
  return tree;
}

var AngularApp = function () {
  this.partialFiles = new Funnel('./client/app', {
    include: [new RegExp('.*\\.html$')],
    exclude: [new RegExp('index\\.html$')],
    description: 'Funnel: App JS Files'
  });

  this.templates = angularTemplates(this.partialFiles, {
    srcDir: './',
    destDir: './',
    strip: '.tmp/',
    fileName:'templates.js',
    moduleName:'testApp'
  });

  this.appJs = new Funnel('client/app', {
    include: [new RegExp('.*\\.js$')],
    exclude: [new RegExp('.*\\.spec.js$')],
    description: 'Funnel: App JS Files'
  });

  this.libraries = mergeTrees(findBowerTrees());

  this.transpiledJS = compileModules(this.appJs, {
    output: 'app.js'
  });

  this.maps = pickFiles(this.tranpiledJS, {
    srcDir: '.',
    destDir: '.',
    files: [
      '**/*.js.map'
    ]
  });

  this.scripts = mergeTrees([this.libraries, this.transpiledJS, this.templates]);

  this.concatenatedJS = concat(this.scripts, {
    inputFiles: [
      'angular.js',
      '**/*.js'
    ],
    outputFile: '/app.js'
  });

};

AngularApp.prototype.toTree = function () {
  return mergeTrees([this.concatenatedJS, 'client/app', 'client/public']);
};

var broccoliTree = new AngularApp().toTree();

module.exports = broccoliTree;
