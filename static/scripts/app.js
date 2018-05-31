class Events {
  constructor() {
    this.Global();
    this.Events();
  }
  Global(){
    this.Move_Line();
    //
    this.Time_Change();
    this.Offer_Clock();
  }
  Events(){
    this.Check_Model();
    this.Capcha();
    this.Interest();
    this.Select_Box();
    this.Submit_Favorite();
    this.Close_Interest();
    this.Cart_Select_Box();
    this.Focus();
    this.News_Hover();
    this.Selected_Adress();
    this.SelectBox_Adress();
    this.Hide_Scroll();
  }
  Check_Model(){
    const elem = $("html");

    elem.on("click",(event)=>{
      const target       = $(event.target);
      const modal        = $("#modal--share");
      const click_share  = target.parents(".icon--product,.modal--parent").find("#share,.icon--parent").is('#share,.icon--parent');
      const modal_auth   = target.parents("#modal--share").is('#modal--share');
      const Adress_Modal = $("#interest--digi");

      if (click_share) {
        modal.toggleClass("modal--show");
        Adress_Modal.toggleClass("modal--show");
      }
      else {
        modal.removeClass("modal--show");
        Adress_Modal.removeClass("modal--show");
        if (modal_auth) {
          modal.addClass("modal--show");
        }
      }
    });
  }
  Capcha(){
    const elem = $(".captcha--submit");
    elem.on("click",()=>{
      const input        = $(".input--introduction");
      const value        = input.val();
      const warning      = $('.danger--title');
      const email        = $(".captcha--email");
      const start_emai   = $("#start--email");
      const validation   = $(".input--captcha");


      if(this.isEmail(value)) {
        email.show();
        start_emai.hide();
        if (validation.val() == '') {
          $("#validation--captcha").show();
        }
      }
      else {
        start_emai.show();
        $("#validation--captcha").hide();
      }
    });

  }
  isEmail(email) {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    return pattern.test(email);
  }
  Interest(){
    const elem = $("#interest--product");
    elem.on("click",()=>{
      const overlay        = $("#interest--overlay");
      const favorite_modal = $("#interest--digi");
      overlay.addClass("show--overlay");
      favorite_modal.addClass("show--modal");
    });
  }
  Select_Box(){
    this.Favorite();
    const elem = $("#select--box");
    elem.on('click',()=>{
      const toggle_list   = $("#list_select")
      const Arrow_Rotate  = $("#arrow--select");

      toggle_list.fadeToggle(100);
      Arrow_Rotate.toggleClass('change_Rotate');
    });
    const list_select = $(".title--list");
    list_select.on("click",(event)=>{
      const target           = $(event.target);
      const index            = target.index();
      const toggle_list      = $("#list_select")
      const favorite_option  = $(".select--favorite option");

      toggle_list.hide();
      for (let i = 0; i < favorite_option.length; i++) {
        let Arry = [];
        Arry = favorite_option[i];
        $(Arry).removeAttr("selected","");
      }
      favorite_option.eq(index).attr("selected",'selected');
    });

  }
  Favorite(){
    const list_select = $(".title--list");
    for (let i = 0; i < list_select.length; i++) {
      const favorite = $(".select--favorite option")[i];
      $(favorite).attr("value",i);
    }
  }
  Submit_Favorite(){
    const elem = $("#button--favorite");
    elem.on("click",(event)=>{
      const name_favorite   = $("#favorite--name");
      const value_favorite  = name_favorite.val();
      const error_favorite  = $("#favorite--error");

      if (value_favorite == '') {
        error_favorite.show();
        event.preventDefault();
      }
      else {
        error_favorite.hide();
      }
    });
  }
  Close_Interest(){
    const elem = $("#close--interest");

    elem.on("click",()=>{
      const modal        = $("#interest--digi.interest--digi");
      const overlay_body = $("#interest--overlay");

      modal.removeClass('show--modal');
      overlay_body.removeClass("show--overlay");
    });
    $("html").on("click",(event)=>{
      const target   = $(event.target);
      const elem     = $("#interest--digi");
      const parent   = target.parents("#interest--digi");
      const overlay  = $("#interest--overlay");
      const close    = target.parents(".header--interest").prevObject.is('#close--interest');

      if (parent.is('#interest--digi')) {
        elem.addClass('show--modal');
        overlay.addClass("show--overlay");
        if (close) {
          elem.removeClass('show--modal');
          overlay.removeClass("show--overlay");
        }
      }
      else {
        elem.removeClass("show--modal");
        overlay.removeClass("show--overlay");
        if (target.parents("#interest--product").is('#interest--product')) {
          elem.addClass('show--modal');
        }
        if (target.parents("#interest--product").is('#interest--product')) {
          overlay.addClass("show--overlay");
        }

      }
    });
  }
  Cart_Select_Box(){
    const elem   = $("#shopping--cart .cart--selectbox");
    const Arrow  = $("#shopping--cart .cart--arrow");

    for (let i = 0; i < elem.length; i++) {
      let Arry = [];
      Arry = elem[i];
      $(Arry).attr('data-index',i);
    }

    elem.click((event)=>{
      const target = $(event.target);
      const parent = target.parents(".cart--tr")
      const index  = parent.index();


      for (let i = 0; i < elem.length; i++) {
        let Arry = [];
        Arry = elem[i];
        const attr = $(Arry).attr('data-index');
        if (attr == index) {
          Arrow.eq(index).toggleClass('transform_arrow');
        }
        else {
          Arrow.eq(parseInt(attr)).removeClass('transform_arrow');
        }
      }

    });

    $('html').on('click',(event)=>{
      const target = $(event.target);
      const parent = target.parents(".cart--tr")
      const index  = parent.index();

      if (!target.is('.cart--selectbox')) {
        Arrow.removeClass('transform_arrow');
      }

    });

  }
  Move_Line(){
    const progress = $(".loading-progress");

    if (progress.length != 0) {
      progress.progressTimer({
        timeLimit: 10,
        onFinish:  () =>{

        }
      });
    }
    // $.ajax({
    //    url:"http://localhost/"
    // }).error(function(){
    //     progress.progressTimer('error', {
    //         errorText:'ERROR!',
    //         onFinish:function(){
    //             alert('There was an error processing your information!');
    //         }
    //     });
    // }).done(function(){
    //     progress.progressTimer('complete');
    // });
  }
  Focus(){
    $('html').on('click',(event)=>{
      const target        = $(event.target);
      const search_box    = $("#shopping--home .search--box");
      const parent        = target.parents('.search--box');
      const button_search = $("#shopping--home .button--search");

      if (target.is('.input--search')) {
        button_search.addClass("bg--search");
      }
      else {
        button_search.removeClass("bg--search");
      }
    });

  }
  Time_Change(){
    let sum = 0;
    let interval;
    const Offer_Nav         = $("#shopping--home .offer--li");
    const Offet_Len         = Offer_Nav.length;
    const time_setinterval  = $("#shopping--home #time--setinterval");
    const Offer_Strong      = $("#shopping--home .offer--strong");

    function myFunc(){
      sum++;
      if (Offet_Len <= sum) {
        sum = 0;
      }
      Offer_Nav.removeClass("selected--amazing");
      Offer_Strong.removeClass("show--offer");
      Offer_Nav.eq(sum).addClass("selected--amazing");
      Offer_Strong.eq(sum).addClass("show--offer");
    }

    $(function initial() {
      interval = setInterval(myFunc, time_setinterval.attr("data-setinterval"));
    });


    Offer_Nav.on('click',(event)=>{
      const target            = $(event.target);
      const parent            = target.parents(".offer--li");
      const index             = parent.index();


      Offer_Nav.removeClass("selected--amazing");
      Offer_Strong.removeClass("show--offer");
      Offer_Nav.eq(index).addClass("selected--amazing");
      Offer_Strong.eq(index).addClass("show--offer");
      sum  = index;
      clearInterval(interval);
      interval = setInterval(myFunc, time_setinterval.attr("data-setinterval"));
    });

  }
  Offer_Clock(){
    const counter = $('#shopping--home .counter--timer #offer--counter');
    const parent  = $("#shopping--home .offer--strong");

    for (let i = 0; i < parent.length; i++) {
      let Arry = [];
      Arry = parent[i];
      const id           = $(Arry).find('#offer--counter').attr("id",`offer--counter${i}`);
      const date_counter = $("#shopping--home .data--counter");
      $(`#offer--counter${i}`).countdown({
        date: $(date_counter[i]).attr("data--counter")
      }, function () {

      });
    }

  }
  News_Hover(){
    const News_Right = $("#shopping--home .news--link");

    News_Right.mouseenter((event)=>{
      const target = $(event.target);
      const parent = target.parents(".news--item");
      const index  = parent.index();
      const $Text  = $("#shopping--home .news--text");

      $Text.eq(index).addClass("news--hover");
    });

    News_Right.mouseleave((event)=>{
      const target = $(event.target);
      const parent = target.parents(".news--item");
      const index  = parent.index();
      const $Text  = $("#shopping--home .news--text");

      $Text.eq(index).removeClass('news--hover');
    });
  }
  Selected_Adress (){
    const elem = $("#info--add .send--item");

    elem.on('click',(event)=>{
      const target = $(event.target);
      const parent = target.parents(".min--item");
      const index  = parent.index();

      $("#info--add .min--item").eq(0).addClass("selected--adress");
    });
  }
  SelectBox_Adress(){
    const Select_Box     = $(".adress--modal .adress--select");

    for (let i = 0; i < Select_Box.length; i++) {
      $(Select_Box[i]).attr('data-i',i);
    }

    $('html').on('click',(event)=>{
      const target          = $(event.target);
      const parent          = target.parents(".location--item");
      const index           = parent.index();
      const location_item   = $(".adress--modal .location--item");

      if (parent.is(".location--item")) {
        const attr = target.attr('data-i');
        location_item.eq(attr).toggleClass("location--selected");

        for (let i = 0; i < location_item.length; i++) {
          let Arry = [];
          Arry     = location_item[i];
          if (i != parseInt(attr)) {
            $(Arry).removeClass("location--selected");
          }
        }
      }
      else {
        location_item.removeClass("location--selected");
      }
    });
  }
  Hide_Scroll(){
    const Edit_Adress = $("#interest--product")
    Edit_Adress.on('click',()=>{
      $("html").addClass("scroll--none");
    });
  }






}









$(document).ready(()=>{
  new Events();
});
