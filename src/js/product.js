import "slick-carousel";

$('.product-slider').slick({

    infinite: false,

    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            infinite: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            infinite: true
          }
        },
        {
          breakpoint: 300,
          settings: "unslick"
        }
    ]
  });