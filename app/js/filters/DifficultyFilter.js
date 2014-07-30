'use strict';

eventsApp.register.filter('difficulty', function() {
    return function(difficultyLevel) {
        switch(difficultyLevel) {
            case '':
                return 'All';
                break;
            default:
                return difficultyLevel;
        }
    }
})