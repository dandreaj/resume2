(function() {
  'use strict';

  angular
    .module('resume2')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($location,$anchorScroll) {
    var vm = this;

    vm.goToResume = goToResume;

    function goToResume(){
      $location.hash("resume");

      $anchorScroll();
    }

  }
})();
