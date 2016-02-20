function MQ(){   
  return {
  // Public Methods
    isPhone:            function(){ return Modernizr.mq("(max-width: 479px)") },
    isPhablet:          function(){ return Modernizr.mq("(min-width: 480px) and (max-width: 767px)") },
    isTablet:           function(){ return Modernizr.mq("(min-width: 768px) and (max-width: 991px)") },
    isSmallDesktop:     function(){ return Modernizr.mq("(min-width: 992px) and (max-width: 1199px)") },
    isLargeDesktop:     function(){ return Modernizr.mq("(min-width: 1200px)") },
    isPortrait:         function(){ return Modernizr.mq("(orientation: portrait)") },
    isLandscape:        function(){ return Modernizr.mq("(orientation: landscape)") },
    isPrint:            function(){ return Modernizr.mq("print") }
  }
}
var mq = MQ();
console.log(mq.isLargeDesktop());
