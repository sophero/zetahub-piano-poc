document.addEventListener("DOMContentLoaded", function() {

  // Load ZetaHub P13N.js library

  var SITEID='souremedia-dev'; // DEV
  // var SITEID='sourcemedia-prod'; // PROD
  (function(b, t, r, a, i, n) {
     b['bt']=b['bt'] || function() {
         (b['_bt']=b['_bt']||[]).push(arguments);
     },
     i = t.createElement(r),
     n = t.getElementsByTagName(r)[0];
     i.async = 1;
     i.src = a;
     n.parentNode.insertBefore(i, n);
  })(
     window,
     document,
     'script',
  // DEV
     'https://cdn.boomtrain.com/p13n/'+SITEID+'/p13n.js'
  );
});  

