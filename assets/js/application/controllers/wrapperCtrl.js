function wrapperCtrl($scope, $state, $rootScope) {

    $scope.navs = [
        {
            name: 'none',
            icon: 'times'
        },
        {
            name: "round",
            icon: "tachometer fa-rotate-270"
        }];
    $scope.nav = "round";

    $scope.setNav = function(name){
        $scope.nav = name;
    };

    $scope.toggle = function () {
        $rootScope.sidebarOpened = !$scope.sidebarOpened
    };

    $scope.go = function (state) {
        $state.go(state);
    };

    $rootScope.states = ["wrapper.main", "wrapper.components"]; //"wrapper.about", "wrapper.reply"

    function changeState(direction){
        var nextState = $rootScope.states[$rootScope.states.indexOf($state.current.name) + direction];
        if(nextState){
            $scope.go(nextState)
        } else if (direction > 0) {
            $scope.go(_.first($rootScope.states))
        } else if (direction < 0) {
            $scope.go(_.last($rootScope.states))
        }
    }

    var allowScroll = true;

    function reset() {
        allowScroll = true;
    }

    function onWheel(e) {
        if (allowScroll) {
            e = e || window.event;
            // wheelDelta не дает возможность узнать количество пикселей
            var delta = e.deltaY || e.detail || e.wheelDelta;
            e.preventDefault ? e.preventDefault() : (e.returnValue = false);

            allowScroll = false;
            if (delta > 0) {
                changeState(1);
                //$scope.$broadcast('scrollBottom',true);
            } else {
                changeState(-1);
                //$scope.$broadcast('scrollTop',true);
            }
            setTimeout(reset, 500);
        }
    }

    var elem = document.body;
    if (elem.addEventListener) {
        if ('onwheel' in document) { // IE9+, FF17+, Ch31+
            elem.addEventListener("wheel", onWheel);
        } else if ('onmousewheel' in document) { // устаревший вариант события
            elem.addEventListener("mousewheel",onWheel);
        } else { // Firefox < 17
            elem.addEventListener("MozMousePixelScroll", onWheel);
        }
    } else { // IE8-
        elem.attachEvent("onmousewheel", onWheel);
    }

}

wrapperCtrl['$inject'] = ['$scope', '$state', '$rootScope'];
angular.module('clj-forge').controller('wrapperCtrl', wrapperCtrl);