var navigateTrace = (function($w, $nav){
    'use strict';

    function extractRoute(routeparam) {
        return routeparam.slice(routeparam.indexOf('#') + 1);
    }
    function putTraceOnLoad() {
        trace(extractRoute($w.location.hash));
    }
    function trace(){
        
    }


    return {

    }

})(window, window.navigate)