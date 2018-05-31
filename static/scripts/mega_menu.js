$(document).ready(()=>{
  Mega_Menu();
  function Mega_Menu(){
    const elem = $(".title--mega");

    elem.mouseenter((event)=>{
      const target     = $(event.target);
      const index      = target.index();
      const menu_show  = $(".menu--level1");
      const index_li   = target.parents(".mega--li").index();

       menu_show.eq(index).addClass("display--show");
       elem.eq(index_li).addClass("dg--select");
    });

    elem.mouseleave((event)=>{
      const target     = $(event.target);
      const index      = target.index();
      const menu_show  = $(".menu--level1");

      menu_show.removeClass("display--show");
      $(".table--info").removeClass("table--d");
      elem.removeClass("dg--select")
    });

    const menu_level1 = $(".menu--level1");
    menu_level1.mouseenter((event)=>{
      const target     = $(event.target);
      const index      = target.parents("li").index();
     menu_level1.eq(index).addClass("display--show");
    });


    const li_level1 = $(".link--title");
    li_level1.mouseenter((event)=>{
      const ul         = $(".table--info");
      const target     = $(event.target);
      const parent     = target.parents(".level1--li");
      const find_title = target.parents(".mega--li").find('.title--mega');

      parent.children(".table--info").addClass("table--d");
      find_title.addClass('dg--select');
    });

    $(".level1--li").mouseleave((event)=>{
      const ul         = $(".table--info");
      ul.removeClass("table--d");
    });


    const info_li = $(".info--a");
    info_li.mouseenter((event)=>{
      const ul         = $(".table--info");
      const target     = $(event.target);

      target.parents(".level1--li").children(".table--info").addClass("table--d");
    });



    const memu_level2 = $(".menu--level1");
    memu_level2.mouseleave((event)=>{
      const target     = $(event.target);
      const index     = target.parents(".mega--li").index();

      $(".menu--level1").removeClass("display--show");

      $(".title--mega").eq(index).removeClass("dg--select");
    });













  }











});
