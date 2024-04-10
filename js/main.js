function LinkClick(e) {
    var link = jQuery(this);
    console.log('link:%o', link);
    var iframe = document.getElementById('id_iframe_main');
    console.log('iframe:%o', iframe);
    iframe.src = link.src;
}
var listLink = document.getElementsByTagName('a');
for (var link of listLink) {
    link.addEventListener('click', LinkClick);
    console.log('link:%o', link);
}