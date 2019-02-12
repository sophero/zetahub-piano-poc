document.addEventListener("DOMContentLoaded", function() {

  // Load ZetaHub P13N.js library
  var SITEID='sourcemedia-dev'; // DEV
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

  // Set up Piano custom event handler and Zeta callbacks.
  tp = window.tp || [];
  tp.push(["addHandler", "customEvent", function(event) {
    switch (event.eventName) {
      case 'email-signup':
        var email = '';
        var params;

        // Parse params object and obtain email address
        params = JSON.parse(event.params.params);
        console.log('params:', params);
        if ((typeof event.params.email != 'undefined') && (event.params.email.length > 0)) {
            email = event.params.email;
        }
        // Pass the relevant data to ZetaHub by invoking p13n library's track function.
        bt(
          'track',
          'signed_up',
          { email },
          {
            onComplete: function() { console.log(`BT track request completed`); },
            onSuccess: function() { console.log(`ZETA: User ${email} successfully signed up`); },
            onFailure: function(err) { console.log(`ZETA: An error occurred: ${err}`); }
          }
        );

        break;
    }
  }]);
});