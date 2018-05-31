class Slider_Box {
  constructor() {
    this.Global();
  }
  Global(){
    this.Box_Adress();
  }
  Box_Adress(){
    const Offer_Slider = $('#info--add .boxs--address .main-carousel');

    Offer_Slider.flickity({
      // options
      cellAlign    : 'right',
      pageDots     : false,
      contain      : true,
      wrapAround   : true,
      imagesLoaded : true,
      autoPlay     : true,
      adaptiveHeight: true,
      rightToLeft   : true
    });

  }



}















$(document).ready(()=>{
  new Slider_Box();
});
