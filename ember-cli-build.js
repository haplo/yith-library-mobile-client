/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var mergeTrees = require('broccoli-merge-trees');
var pickFiles = require('broccoli-static-compiler');
var replace = require('broccoli-replace');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    fingerprint: {
        enabled: false
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  // SJCL
  app.import('bower_components/sjcl/sjcl.js');

  // Building Blocks CSS
  app.import('bower_components/building-blocks/style/action_menu.css');
  app.import('bower_components/building-blocks/style/buttons.css');
  app.import('bower_components/building-blocks/style/confirm.css');
  app.import('bower_components/building-blocks/style/edit_mode.css');
  app.import('bower_components/building-blocks/style/headers.css');
  app.import('bower_components/building-blocks/style/input_areas.css');
  app.import('bower_components/building-blocks/style/status.css');
  app.import('bower_components/building-blocks/style/switches.css');
  app.import('bower_components/building-blocks/style_unstable/drawer.css');
  app.import('bower_components/building-blocks/style_unstable/lists.css');
  app.import('bower_components/building-blocks/style_unstable/progress_activity.css');
  app.import('bower_components/building-blocks/style_unstable/scrolling.css');
  app.import('bower_components/building-blocks/style_unstable/seekbars.css');
  app.import('bower_components/building-blocks/style_unstable/tabs.css');
  app.import('bower_components/building-blocks/style_unstable/toolbars.css');

  app.import('bower_components/building-blocks/style/icons.css');
  app.import('bower_components/building-blocks/icons/styles/action_icons.css');
  app.import('bower_components/building-blocks/icons/styles/comms_icons.css');
  app.import('bower_components/building-blocks/icons/styles/media_icons.css');
  app.import('bower_components/building-blocks/icons/styles/settings_icons.css');

  app.import('bower_components/building-blocks/transitions.css');

  app.import('bower_components/building-blocks/util.css');
  app.import('bower_components/building-blocks/fonts.css');
  app.import('bower_components/building-blocks/cross_browser.css');

  // Building Blocks Images
  var bbImages = pickFiles('bower_components/building-blocks/style', {
    srcDir: '/',
    files: [
        '**/*.png',
    ],
    destDir: '/assets/'
  });

  var bbImagesUnstable = pickFiles('bower_components/building-blocks/style_unstable', {
    srcDir: '/',
    files: [
        '**/*.png',
    ],
    destDir: '/assets/'
  });

  var bbIcons = pickFiles('bower_components/building-blocks/icons/styles', {
    srcDir: '/',
    files: [
        '*.png',
    ],
    destDir: '/assets/'
  });

  var bbImagesUnstable2 = pickFiles('bower_components/building-blocks/style_unstable', {
    srcDir: '/',
    files: [
        '**/*.png',
    ],
    destDir: '/assets/style_unstable/'
  });

  // Building Blocks fonts
  var firaSansFont = pickFiles('bower_components/building-blocks/fonts/FiraSans', {
    srcDir: '/',
    files: ['**/*.eot', '**/*.otf', '**/*.ttf', '**/*.woff'],
    destDir: '/assets/fonts/FiraSans'
  });

  var manifest = '';
  if (app.env === 'production') {
      manifest = 'manifest.appcache';
  }

  // Fix image paths
  var fixedPaths = replace(app.toTree(), {
    files: [
        'index.html',
        'manifest.appcache',
        'assets/vendor.css'
    ],
    patterns: [{
        match: /style\//g,
        replacement: ''
    }, {
        match: /style_unstable\//g,
        replacement: ''
    }, {
        match: 'projectVersion',
        replacement: app.project.pkg.version
    }, {
        match: /\{\{MANIFEST\}\}/g,
        replacement: manifest
    }]
  });

  return mergeTrees([
    fixedPaths,
    bbImages,
    bbImagesUnstable,
    bbIcons,
    firaSansFont
  ]);
};
