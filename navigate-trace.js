var navigateTrace = (function($w, $nav){
    'use strict';

    function extractRoute(routeparam) {
        return routeparam.slice(routeparam.indexOf('#') + 1);
    }
    function putTraceOnLoad() {
        trace(extractRoute($w.location.hash));
    }
    function putTraceOnPopState(e) {
        if (JSON.stringify(e.state) === '{"page":"navigatePage"}') {
            trace(extractRoute($w.location.hash));
        }
    }
    function addOnLoad() {
        $w.removeEventListener('load', putTraceOnLoad, false);
        $w.addEventListener('load', putTraceOnLoad, false);
    }
    function addOnPopState() {
        $w.removeEventListener('popstate', putTraceOnPopState, false);
        $w.addEventListener('popstate', putTraceOnPopState, false);
    }

    function trace(idSelector, path){
        
    }

    return {
        trace: trace
    }

})(window, window.navigate)