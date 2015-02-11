'use strict';

var pickFiles = require('broccoli-static-compiler');
var Funnel = require('broccoli-funnel');
var unwatchedTree = require('broccoli-unwatched-tree');
var upstreamMergeTrees = require('broccoli-merge-trees');
var compileModules = require('broccoli-es6-module-transpiler');
var AMDFormatter = require('es6-module-transpiler-amd-formatter');
var transpiler = require('es6-module-transpiler');

function mergeTrees(inputTree, options) {
  var tree = upstreamMergeTrees(inputTree, options);
  tree.description = options && options.description;
  return tree;
}

var AngularApp = function () {
  var jsFiles = new Funnel('client/app', {
    include: [new RegExp('.*\\.js$')],
    exclude: [new RegExp('.*\\.spec.js$')],
    description: 'Funnel: App JS Files'
  });

  var transpiledJS = compileModules(jsFiles, {
    formatter: new AMDFormatter(),
    output: 'app/'
  });

  this.trees = mergeTrees([transpiledJS, 'client/app']);
};

AngularApp.prototype.toTree = function () {
  return this.trees;
};

var broccoliTree = new AngularApp().toTree();

module.exports = broccoliTree;
