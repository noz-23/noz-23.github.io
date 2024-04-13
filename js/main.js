jQuery.noConflict();


(async () => {
    'use strict';
    function LinkClick(e) {
        var link = jQuery(this);
        console.log('link:%o', link);
        var iframe = document.getElementById('id_iframe_main');
        console.log('iframe:%o', iframe);
        iframe.src = link.src;
        // false 返しで元の動作をキャンセル
        return false;
    }
    var listLink = document.getElementsByTagName('a');
    console.log('listLink:%o', listLink);
    for (var link of listLink) {
        link.addEventListener('click', LinkClick);
        console.log('link:%o', link);
    }
})();
