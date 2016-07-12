 $(document).ready(function(){
      console.log('slick started');
      $('.caro').slick({
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 3,
          autoplay:true,
          autoplaySpeed:1000,
          pauseonhover:true
     });
     });