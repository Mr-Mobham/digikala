class Slider {
  constructor() {
    this.Global();
    this.Events();
  }
  Global(){
    this.Offer_Tools();
    this.Digital_Slider();
  }
  Events(){
    // this.Add_FadeIn();
    this.Digital_Selected();
  }
  Offer_Tools(){
    const Offer_Slider = $('#offer--slider .main-carousel');
    const Offer_Nav    = $('#offer--slider .carousel-nav');
    Offer_Slider.flickity({
      // options
      cellAlign    : 'right',
      pageDots     : false,
      contain      : true,
      wrapAround   : true,
      imagesLoaded : true,
      autoPlay     : true,
      adaptiveHeight: true
    });

    Offer_Nav.flickity({
      asNavFor         : '#offer--slider .main-carousel',
      contain          : true,
      pageDots         : false,
      prevNextButtons  : false,
      draggable        : true,
      cellAlign        : 'right',
      adaptiveHeight   : true
    });
  }
  Add_FadeIn(){
    const Slider        = $("#shopping--home #offer--slider .main-carousel .carousel-cell")
    const Right_Arrow   = $(`#shopping--home #offer--slider .flickity-prev-next-button.next`);
    const Left_Arrow    = $("#shopping--home #offer--slider .flickity-prev-next-button.previous");
    const Len_Slider    = Slider.length;

    let sum = 0;
    Right_Arrow.on("click",()=>{
      const Slected_Item  = $("#shopping--home #offer--slider .main-carousel .is-selected");
      const Index         = Slected_Item.index();
      sum++;
      if (Len_Slider <= sum) {
        sum = 0;
      }
      Slider.removeClass("animated fadeIn");
      Slider.removeClass("fadeOut animated");
      Slider.eq(sum).addClass("animated fadeIn");
    });
    Left_Arrow.on('click',()=>{
      const Slected_Item  = $("#shopping--home #offer--slider .main-carousel .is-selected");
      const Index         = Slected_Item.index();
      sum--;
      if ('-' + Len_Slider >= sum) {
        sum = 0;
      }

      Slider.removeClass("fadeOut animated");
      Slider.removeClass("animated fadeIn");
      Slider.eq(sum).addClass("fadeOut animated");
    });

  }
  Digital_Slider(){
    const Digital_Slider = $("#shopping--home .offer--you .main-carousel")

    Digital_Slider.flickity({
      // options
      cellAlign    : 'right',
      pageDots     : false,
      contain      : true,
      wrapAround   : false,
      imagesLoaded : true,
      autoPlay     : true,
      adaptiveHeight: true,
      groupCells    : true,
      rightToLeft   : true
    });

    const digital_discount = $("#shopping--home .digital--discount");
    for (let i = 0; i < digital_discount.length; i++) {
      let Arry = [];
      Arry = digital_discount[i];
      if ($(Arry).attr('data--show') == 'true') {
        $(Arry).addClass('show--discount');
      }
    }


  }
  Digital_Selected(){
    const $carousel = $("#shopping--home .offer--you .main-carousel");

    $carousel.on( 'select.flickity', ( event, index ) =>{
      const Sliders        = $("#shopping--home .offer--you .offer--products")

      for (let i = 0; i < Sliders.length; i++) {
        const parent          = $(Sliders[i]);
        const carousel_cell   = parent.find('.carousel-cell');
        const selected        = parent.find('.is-selected');
        let carousel_len      = carousel_cell.length;
        let selected_len      = selected.length;
        let shadow            = parent.find('.digital--shadow');

        if (selected_len < 3) {
          shadow.hide();
        }
        else {
          shadow.show();
        }
      }



    });
  }





}









$(document).ready(()=>{
  new Slider();
});
