/*!
 * Start Bootstrap - Agency v6.0.2 (https://startbootstrap.com/template-overviews/agency)
 * Copyright 2013-2020 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
 */
(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top - 72,
          },
          1000,
          "easeInOutExpo"
        );
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $(".js-scroll-trigger").click(function () {
    $(".navbar-collapse").collapse("hide");
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $("body").scrollspy({
    target: "#mainNav",
    offset: 74,
  });

  $("#pcbox").click(() => {
    if (document.getElementById("pcbox").checked) {
      document.querySelectorAll(".pcbox").forEach((val) => {
        val.setAttribute("readonly", true);
      });
    } else {
      document.querySelectorAll(".pcbox").forEach((val) => {
        val.removeAttribute("readonly");
      });
    }
  });

  $("#submit").click(async () => {
    let data = {};
    console.log("Submit button clicked");
    document.querySelectorAll(".fv").forEach((val) => {
      data[val.id] = val.value;
    });
    console.log(data);
    let ttypec = [];
    document.querySelectorAll(".ttypec").forEach((val) => {
      console.log(val.value);
      if (val.checked) {
        return ttypec.push(val.value);
      }
      console.log(ttypec);
    });
    let name = $("#name").val();
    console.log(name);
    let res = await axios({
      method: "post",
      url: "http://127.0.0.1:3000/form/form-data",
      data,
    });

    // data: {
    //   tname,
    //   ttypec,
    // fname,
    // lname,
    // gender,
    // abn,
    // street,
    // suburb,
    // state,
    // postcode,
    // paddress,
    // psuburb,
    // pstate,
    // pcode,
    // ophone,
    // hphone,
    // mobile,
    // fax,
    // website,
    // email,
    // lnumber,
    // lexpiry,
    // dob,
    // partnersname,
    // position,
    // aemail,
    // toi: [],
    // whoref,
    // ypref,
    // cande,
    // privacydec,
    // coe,
    // aom,
    // iread,
    // },
    $("#becomemember").html(
      '<div class="jumbotron text-center">\
    <h1 class="display-3">Thank You!</h1>\
    <p class="lead"><strong>Please check your email</strong> for further instructions on how to complete your account setup.</p>\
    <hr>\
  </div>'
    );
  });

  // Collapse Navbar
  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);
})(jQuery); // End of use strict
