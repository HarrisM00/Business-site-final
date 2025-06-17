// Ready for interactivity if needed
console.log("Sure Shot Pest Control - site loaded");
// script.js

// Log site load
console.log("Sure Shot Pest Control site loaded");

$(document).ready(function () {
  // Highlight active nav link based on URL
  const currentPage = window.location.pathname.split("/").pop();
  $(".nav-link").each(function () {
    const href = $(this).attr("href");
    if (href === currentPage) {
      $(this).addClass("active");
    }
  });

  // Bootstrap custom validation
  // See https://getbootstrap.com/docs/5.3/forms/validation/
  (function () {
    'use strict';
    const forms = document.querySelectorAll('#paymentForm');

    Array.prototype.slice.call(forms).forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
          $(form).addClass('was-validated');
        } else {
          event.preventDefault(); // Remove this if real submission
          alert('Thank you for your payment submission!');
          form.reset();
          $(form).removeClass('was-validated');
        }
      }, false);
    });
  })();
});
