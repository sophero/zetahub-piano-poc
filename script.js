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

  // Set up Piano callbacks.
  // Uses code from https://docs.piano.io/how-to-create-a-newsletter-signup-with-templates/#customngform
  tp = window.tp || [];
  tp.push(["addHandler", "customEvent", function(event) {
    switch (event.eventName) {
      case 'email-signup':
        console.log('received email customcheckout event');
        var email = '';
        var params;

        // We are parsing the params object sent from the template to find out which iframe triggered it
        params = JSON.parse(event.params.params);
        console.log('params:', params)
        if ((typeof event.params.email != 'undefined') && (event.params.email.length > 0)) {
            email = event.params.email;
        }
        // pass the relevant data to ZetaHub. Invoke p13n library's track function.
        bt(
          'track',
          'signed_up',
          { email },
          { onSuccess: function() { console.log(`ZETA: User ${email} successfully signed up`); }});
        break;
    }
  }]);

});