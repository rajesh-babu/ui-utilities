var scrollToElement = function(el, ms){
    var speed = (ms) ? ms : 600;
    $('html,body').animate({
        scrollTop: $(el).offset().top
    }, speed);
}
$.fn.scrollToME = function(option){
  scrollToElement.apply(this, [this, option]);
};
/* Sample Usage
  $('#<target>').scrollToME(2000);
*/
