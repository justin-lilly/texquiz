'use strict';

angular.module('texquiz')
  .controller('MainCtrl', function ($scope) {
    // $scope.awesomeThings = [
    //   {
    //     'key': 'angular',
    //     'title': 'AngularJS',
    //     'url': 'https://angularjs.org/',
    //     'description': 'HTML enhanced for web apps!',
    //     'logo': 'angular.png'
    //   },
    //   {
    //     'key': 'browsersync',
    //     'title': 'BrowserSync',
    //     'url': 'http://browsersync.io/',
    //     'description': 'Time-saving synchronised browser testing.',
    //     'logo': 'browsersync.png'
    //   },
    //   {
    //     'key': 'gulp',
    //     'title': 'GulpJS',
    //     'url': 'http://gulpjs.com/',
    //     'description': 'The streaming build system.',
    //     'logo': 'gulp.png'
    //   },
    //   {
    //     'key': 'jasmine',
    //     'title': 'Jasmine',
    //     'url': 'http://jasmine.github.io/',
    //     'description': 'Behavior-Driven JavaScript.',
    //     'logo': 'jasmine.png'
    //   },
    //   {
    //     'key': 'karma',
    //     'title': 'Karma',
    //     'url': 'http://karma-runner.github.io/',
    //     'description': 'Spectacular Test Runner for JavaScript.',
    //     'logo': 'karma.png'
    //   },
    //   {
    //     'key': 'protractor',
    //     'title': 'Protractor',
    //     'url': 'https://github.com/angular/protractor',
    //     'description': 'End to end test framework for AngularJS applications built on top of WebDriverJS.',
    //     'logo': 'protractor.png'
    //   },
    //   {
    //     'key': 'bootstrap',
    //     'title': 'Bootstrap',
    //     'url': 'http://getbootstrap.com/',
    //     'description': 'Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.',
    //     'logo': 'bootstrap.png'
    //   }
    // ];

    $scope.landmarks = [
      {
        'key':'alamo'
        'description':'Alamo'
        'source':'alamo.jpg'
      },
      {
        'key':'capitol'
        'description':'Capitol'
        'source':'capitol.jpg'
      },
      {
        'key':'bigtex'
        'description':'Big Tex'
        'source':'bigtex.jpg'
      },
      {
        'key':'cadillac'
        'description':'Cadillac Ranch'
        'source':'cadillac.jpg'
      },
      {
        'key':'terlingua'
        'description':'Terlingua Trading Company'
        'source':'terlingua.jpg'
      },
      {
        'key':'sanjacmonument'
        'description':'San Jacinto Monument'
        'source':'sanjacmonument.jpg'
      },
      {
        'key':'saturnv'
        'description':'Saturn V'
        'source':'saturnv.jpg'
      },
      {
        'key':'usslex'
        'description':'U.S.S. Lexington'
        'source':'enchantedrock.jpg'
      },
      {
        'key':'donjuan'
        'description':'Don Juan de Oñate Sculpture'
        'source':'donjuan.jpg'
      },
      {
        'key':'jackrabbit'
        'description':'Odessa Jack Rabbit'
        'source':'jackrabbit.jpg'
      }
    ];



    // angular.forEach($scope.landmarks, function(awesomeThing) {
    //   awesomeThing.rank = Math.random();
    // });
  });
