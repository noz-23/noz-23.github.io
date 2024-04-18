jQuery.noConflict();

(async () => {
    'use strict';
    function LinkClick() {
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
    console.log('listLink.length:%o', listLink.length);
    var arryLink =[...listLink.HTMLCollection];
    //var arryLink =Array.from(listLink);
    console.log('arryLink:%o', arryLink);
    //for (var l of arryLink) {
    //    console.log('link:%o', l);
    //    l.addEventListener('click', LinkClick);
    //}
    for(var i =0; i<listLink.length;i++){
        var l=listLink.[i];
        console.log('link:%o', l);
        l.addEventListener('click', LinkClick);    
    }
    //listLink.forEach(element => {
    //    console.log('element:%o', element);
    //    element.addEventListener('click', LinkClick);
    //});

})();
