$('.navBar').click(() =>{
    $('.navBar').toggleClass('active');
    $('.navLinks').toggleClass('active');
});

Splitting({
    /* target: String selector, Element, Array of Elements, or NodeList */
    target: "[data-splitting]",
    /* by: String of the plugin name */
    by: "chars",
    /* key: Optional String to prefix the CSS variables */
    key: null
  });

  $(document).ready(function(){
      $('.loaderBox').addClass('deactive');
  })