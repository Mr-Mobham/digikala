class Search {
  constructor() {
    this.Arry          = [];
    this.Json_Server();
    this.target_height = '';
    this.counter       = 0;


    this.Global();
    this.Events();
  }
  Global(){

  }
  Events(){
    this.Product_checkbox();
    this.Change_Tab();
    this.Filter_Category();
    this.Drop_Down();
    this.Search_Filter();
    this.Append_Name_Company();
    this.Name_Company_Remove();
    this.All_Remove_Name_Company();
    this.Renger_Slider();
    this.Filter_Price();
    this.Run();
    this.More_Item();
    this.Gorup_Remove_Checked();
  }
  Product_checkbox(){
    $(document).on('change',"#filter .product--checkbox",(event)=>{
      const target   = $(event.target);
      const parent   = target.parents(".product--vs");
      const index    = parent.index();
      const checkbox = $("#filter .product--checkbox");

      if (target.parents(".product--vs")) {
        parent.toggleClass("check--item");
      }
    });
  }
  Change_Tab(){
    const li = $("#filter .tab--li");

    li.on('click',(event)=>{
      const target  = $(event.target);
      const index   = target.index();
      const line    = $("#filter .tab--line");

      line.removeClass("show--line");
      line.eq(index).addClass('show--line');
    });
  }
  Filter_Category(){
    const dropdown_link  = $("#filter .dropdown--link");
    const filter_wrapper = $("#filter .filter--wrapper");

    dropdown_link.on('click',(event)=>{
      const target   = $(event.target);
      const attr     = target.attr('data-id');
      const location = window.location.href;

      console.log(attr);
      filter_wrapper.addClass("loader");
      event.preventDefault();
    });

    const li = $("#filter .res--title");
    li.on('click',(event) =>{
      const target = $(event.target);
      const parent = target.parents(".res--li");
      const attr   = parent.attr('data-id');

      console.log(attr);
      event.preventDefault();
    });

    const available_checked = $("#filter .available--checked");
    available_checked.on('change',(event)=>{
      const target  = $(event.target);
      const parent  = target.parents(".available--item");
      const checked = $("#filter .check--item");

      parent.toggleClass("check--item");
    });

  }

  Drop_Down(){
    const filter_category = $("#filter .filter--category");

    filter_category.on('click',(event)=>{
      const target    = $(event.target);
      const parent    = target.parents(".filter--min");
      const drop_down = $("#filter .category--content");


      if (!target.is(".group--remove")) {
        parent.toggleClass("select--dropdown");
        this.Plus_Increase(target);
      }

    });
  }
  Search_Filter(){
    const search_filter = $("#filter .category--input");
    const min_more      = $("#filter .min--more");

    search_filter.on('keyup',(e)=>{
      const target                  = $(e.target);
      const parent_compony_name     = target.parents(".filter--min");
      const find_compony_name       = parent_compony_name.find(".available--item");
      const find_category           = parent_compony_name.find(".category--checkbox");
      const count_show_compony_name = parseInt(find_category.attr('data-show'));
      let len_show                  = 0;
      const more_better             = parent_compony_name.find(".more--better");
      const more_mine               = parent_compony_name.find(".more--mine");
      let Arry                      = [];
      let count_show_elem           = 0;
      const find_count_more         = parent_compony_name.find(".count--more");

      function myFunction($this) {
        var input, filter, ul, li, name_en, i,name_fa;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        ul = document.getElementById("category--checkbox");
        li = ul.getElementsByTagName("label");
        for (i = 0; i < li.length; i++) {
          const  val   = target.val();
          name_fa     = li[i].getElementsByTagName("h3")[0];
          name_en     = li[i].getElementsByTagName("h3")[1];
          let len_elem       = 0;

          if (name_en.innerHTML.toUpperCase().indexOf(filter) > -1 || name_fa.innerHTML.toUpperCase().indexOf(filter) > -1) {

            if (find_category.hasClass("more--type")) {
              $(li[i]).addClass("d-flex");
              $(li[i]).addClass('type--keyword');
              if (more_better.hasClass("open--more")) {
                if (val  == '') {
                  more_better.hide();
                  more_mine.removeClass("d-none");
                  $(li[i]).addClass("d-flex");
                  find_category.attr('data-keypress','');
                  $(li[i]).removeClass('type--keyword');
                }
                else {
                  $(li[i]).addClass('type--keyword');
                  $(li[i]).addClass('d-flex');
                  more_mine.removeClass("d-none");
                  find_category.addClass('more--type');
                  find_category.attr('data-keypress',true);
                }

              }
              // else {
              //   if (val  == '') {
              //     more_better.hide();
              //     more_mine.removeClass("d-none");
              //     find_category.attr('data-keypress','');
              //     $(li[i]).removeClass('type--keyword');
              //     $this.Check_Count_More();
              //   }
              //   else {
              //     more_mine.addClass("d-none");
              //     $(li[i]).addClass('type--keyword');
              //     find_category.attr('data-keypress',true);
              //     more_better.show();
              //     count_show_elem++;
              //     find_count_more.text(count_show_elem);
              //   }
              // }

            }
            else {
              if (more_better.hasClass("open--more")) {
                $(li[i]).addClass("d-flex");

                if (val  == '') {
                  len_show++;
                  more_better.show();
                  more_mine.addClass("d-none");

                  if (len_show > count_show_compony_name) {
                    $(li[i]).removeClass('d-flex');
                  }
                  else {
                    $(li[i]).addClass("d-flex");
                  }

                  find_category.attr('data-keypress','');
                  $(li[i]).removeClass('type--keyword');
                  find_category.addClass("more--type");
                }

                else {
                  len_show++;
                  more_mine.addClass("d-none");
                  $(li[i]).addClass('type--keyword');

                  if (len_show > count_show_compony_name) {
                    more_better.show();
                    more_mine.addClass("d-none");
                    $(li[i]).removeClass('d-flex');

                    count_show_elem++;
                    find_count_more.text(count_show_elem);
                  }
                  else {
                    $(li[i]).addClass("d-flex");
                    more_better.hide();
                    find_category.attr('data-keypress',true);
                  }
                  find_category.addClass("more--type");

                }


              }
              else {

                if (val  == '') {
                  len_show++;
                  more_better.show();
                  more_mine.addClass("d-none");

                  if (len_show > count_show_compony_name) {
                    $(li[i]).removeClass('d-flex');
                  }
                  else {
                    $(li[i]).addClass("d-flex");
                  }
                  find_category.attr('data-keypress','');
                  $(li[i]).removeClass('type--keyword');

                  $this.Check_Count_More();
                }
                else {
                  len_show++;
                  more_mine.addClass("d-none");
                  $(li[i]).addClass('type--keyword');

                  if (len_show > count_show_compony_name) {
                    more_better.show();
                    more_mine.addClass("d-none");
                    $(li[i]).removeClass('d-flex');

                    count_show_elem++;
                    find_count_more.text(count_show_elem);
                  }
                  else {
                    $(li[i]).addClass("d-flex");
                    more_better.show();
                    find_category.attr('data-keypress',true);
                  }
                  const type_keyword   = parent_compony_name.find(".type--keyword");
                  find_category.attr('data-len',type_keyword.length);

                }

              }

            }

          }
          else {
            $(li[i]).removeClass("d-flex");
            $(li[i]).removeClass('type--keyword');
            const type_keyword = $(find_compony_name).hasClass("type--keyword");

            if (type_keyword === false) {
              more_better.hide();
            }
          }
        }
      }
      myFunction(this);

    if (parseInt(find_category.attr('data-len')) <= count_show_compony_name) {
      more_better.hide();
    }


    });
  }
  Name_Company(id,title,remove_all,type){
    const selected_parent      = $("#filter--names");
    const selected_you         = $("#filter #selected--you");
    const selected_text        = $("#filter .select--text");
    const product_available    = $("#filter #product--available");

    selected_parent.html('');
    if (typeof(id) != 'undefined') {
      this.Arry = [...this.Arry,{id : id, title : title,type:type}];
    }

    if (remove_all == 'remove_all') {
      this.Arry.length = 0;
    }

    this.Arry.map((text,index)=>{
      selected_parent.append(
        ` <div class="digi--right select--status p-relative " data-id=${text.id} data-type=${text.type}>
            <h3 class="font--digi select--title ">${text.title}</h3>
            <div class="digi--flex select--remove c-pointer">
            <img src="public/icon/cancel.svg" class="icon--cancel" alt="">
          </div>
        </div>
        `);

      });


      if (this.Arry.length < 1) {
        selected_you.hide();
      }
      else {
        selected_you.show();
        product_available.removeClass('d-none');
      }

      if (this.Arry.length < 2) {
        selected_text.addClass('d-none');
      }
      if (this.Arry.length <= 0) {
        product_available.addClass('d-none');
      }
      if (this.Arry.length >= 2) {
        selected_text.removeClass('d-none');
      }

    }
    Remove_Name_Company(index){
      const selected_parent = $("#filter--names");

      this.Arry.splice(index,1);
      selected_parent.html("");
      this.Name_Company();
    }
    Remove_Checked(id){
      const name_company = $("#filter .product--checkbox");
      for (let i = 0; i < name_company.length; i++) {
        let Arry = name_company[i];
        if ($(Arry).attr('data-id') == id) {
          const remove_checked = $(Arry).parents(".available--item");
          remove_checked.removeClass("check--item");
        }

      }



    }
    Append_Name_Company(){
      const checkbox        = $("#filter .product--checkbox");
      const compony_names   = $("#product--available");

      for (let i = 0; i < checkbox.length; i++) {
        $(checkbox[i]).attr('data-id',i);

        $(checkbox[i]).attr('data-filter',i);
        $(checkbox[i]).attr('data-type','status');

      }

      $(document).on('change','#filter .available--item',(event)=>{
        const target          = $(event.target);
        const parent          = target.parents(".available--item");
        const index           = parent.index();
        const id              = target.attr('data-id');
        const $filter_type    = target.attr('data-type');
        const $filter_val     = target.attr('data-filter');


        setTimeout( () =>{
          if (parent.hasClass("check--item")) {
            const name_item = parent.find('.available--title');
            const title     =  $(name_item[0]).text();

            this.Name_Company(id,title,null,$filter_type);
            this.Add_Params($filter_type,$filter_val,id);
          }
          else {
            const remove = $("#filter .select--status");
            for (let i = 0; i < remove.length; i++) {
              let Arry = remove[i];
              if ($(Arry).attr('data-id') == id) {
                this.Remove_Name_Company(i);
              }
            }
            this.Remove_Params($filter_type,id);
          }
          this.Select_Box_Selected(target);
        });

      });

    }
    Add_Params($type,$val,id){
      function updateURLParameter(url, param, paramVal)
      {
        var TheAnchor = null;
        var newAdditionalURL = "";
        var tempArray = url.split("?");
        var baseURL = tempArray[0];
        var additionalURL = tempArray[1];
        var temp = "";

        if (additionalURL)
        {
          var tmpAnchor = additionalURL.split("#");
          var TheParams = tmpAnchor[0];
          TheAnchor = tmpAnchor[1];
          if(TheAnchor)
          additionalURL = TheParams;

          tempArray = additionalURL.split("&");

          for (var i=0; i<tempArray.length; i++)
          {
            if(tempArray[i].split('=')[0] != param)
            {
              newAdditionalURL += temp + tempArray[i];
              temp = "&";
            }
          }
        }
        else
        {
          var tmpAnchor = baseURL.split("#");
          var TheParams = tmpAnchor[0];
          TheAnchor  = tmpAnchor[1];

          if(TheParams)
          baseURL = TheParams;
        }

        if(TheAnchor)
        paramVal += "#" + TheAnchor;

        var rows_txt = temp + "" + param + "=" + paramVal;
        return baseURL + "?" + newAdditionalURL + rows_txt;
      }
      const newURL = updateURLParameter(window.location.href);
      window.history.pushState('', '',updateURLParameter(window.location.href, `status${id}`, $val));
    }
    Remove_Params($type,id){
      function removeURLParameter(url, parameter) {
        var urlparts= url.split('?');
        if (urlparts.length>=2) {

          var prefix= encodeURIComponent(parameter)+'=';
          var pars= urlparts[1].split(/[&;]/g);

          for (var i= pars.length; i-- > 0;) {
            if (pars[i].lastIndexOf(prefix, 0) !== -1) {
              pars.splice(i, 1);
            }
          }
          url= urlparts[0] + (pars.length > 0 ? '?' + pars.join('&') : "");
          return url;
        } else {
          return url;
        }
      }

      console.log(`${$type}${id}`);
      history.pushState({},null,removeURLParameter(window.location.href , `${$type}${id}`));
    }
    Remove_All_Prams(){
      const newURL = location.href.split("?")[0];
      window.history.pushState('object', document.title, newURL);
    }
    Name_Company_Remove(){
      const remove          = "#filter .select--remove";
      const selected_parent = $("#filter--names");

      $(document).on('click',remove,(event)=>{
        const target = $(event.target);
        const parent = target.parents(".select--status");
        const id     = parent.attr('data-id');
        const index  = parent.index();
        const $type  = parent.attr('data-type');


        this.Remove_Name_Company(index);
        this.Remove_Checked(id);
        this.Remove_Params($type,id);

      });
    }
    All_Remove_Name_Company(){
      const remove_all      = $("#filter .selected--clear");

      remove_all.on('click',(event)=>{
        const elem           = $("#filter .select--min");
        const parent_checked = $("#filter .available--item");

        this.Name_Company(null,null,'remove_all');

        for (let i = 0; i < parent_checked.length; i++) {
          let Arry = parent_checked[i];
          if ($(Arry).hasClass("check--item")) {
            $(Arry).removeClass("check--item");
          }
        }

        this.Remove_All_Prams();
        this.Remove_Elem_Delete('#filter .group--remove','#filter .min--text');

        $("#filter .select--text").addClass('d-none');
      });
    }
    Remove_Elem_Delete(elem_delete,selected_count){
      $(elem_delete).addClass('d-none');
      $(selected_count).removeClass("d-flex");

    }
    Renger_Slider(){
      var keypressSlider = document.getElementById('keypress');
      var input0 = document.getElementById('input-with-keypress-0');
      var input1 = document.getElementById('input-with-keypress-1');
      var inputs = [input0, input1];

      noUiSlider.create(keypressSlider, {
        start: [0, 120000],
        connect: true,
        direction: 'rtl',
        range: {
          'min': [300],

          'max': 120000
        },

        direction: 'rtl'
      });

      keypressSlider.noUiSlider.on('update', function( values, handle ) {
        $("#renger--from").text(Math.round(values[0]));
        $("#renger--upto").text(Math.round(values[1]));
      });

      $('#filter .noUi-horizontal .noUi-handle').append(`
        <img src="public/icon/arrow-point-to-right3.svg" class="noUi--img d-flex"></img>
        `)
      }
      Filter_Price(){
        const elem = $("#filter .product--item");

        $("#filter--renger").on('click',()=>{
          let count = 0;
          for (let i = 0; i < elem.length; i++) {
            let Arry     = [];
            Arry         = elem[i];
            let price  = parseInt($(Arry).attr('data-price'));

            if ($("#renger--upto").text() >= price && $("#renger--from").text() <= price) {
              $(Arry).show();
            }
            else {
              $(Arry).hide();
            }
          }
        });

      }

      Plus_Increase(target){
        $(document.body).trigger("sticky_kit:recalc");
      }
      Run(){
        const column      = $("#column--right");
        const w_height    = $(window).scrollTop();
        column.stick_in_parent({
          offset_top   : 0,
          parent       : ".filter--wrapper"
        });
      }
      Check_Count_More(){
        const count_more        = $("#filter .count--more");
        for (let i = 0; i < count_more.length; i++) {
          const elem_count        = $(count_more[i]);
          const parent            = $(elem_count).parents(".filter--min");
          const find_item         = parent.find(".available--item");
          const find_elem         = parent.find(".count--more");
          const find_count_show   = parent.find(".category--checkbox").attr('data-show');

          for (let h = 0; h < find_item.length; h++) {
            const len   = $(find_item).length;
            const calc  =  len - find_count_show;

            find_elem.text(calc);
          }
        }
      }
      More_Item(){
        const elem              = $("#filter .more--better");
        const label_item        = $("#filter .available--item");
        const len_label_item    = label_item.length;
        this.Check_Count_More();
        this.Show_Count_Item();

        elem.on('click',(event)=>{
          const target      = $(event.target);
          const clouser     = target.parents(".filter--min");
          const context     = clouser.find(".category--checkbox");
          const items       = context.find('.available--item');
          const count_show  = parseInt(context.attr('data-show'));
          const parent      = target.parents(".min--more");
          const more_better = parent.find(".more--better");
          const more_min    = parent.find(".more--mine");
          const data_keypress = context.attr('data-keypress');
          const type_keyword      = context.find('.type--keyword');


          more_min.removeClass("d-none");
          more_better.hide();

          if (data_keypress) {
            items.removeClass("d-flex");
            for (let j = 0; j < type_keyword.length; j++) {
              $(type_keyword[j]).addClass("d-flex");
            }
          }
          else {
            items.addClass("d-flex");
          }
          more_better.addClass("open--more");

        });

        $("#filter .more--mine").on('click',(event)=>{
          const target      = $(event.target);
          const clouser     = target.parents(".filter--min");
          const context     = clouser.find(".category--checkbox");
          const items       = context.find('.available--item');
          const count_show  = parseInt(context.attr('data-show'));
          const parent      = target.parents(".min--more");
          const more_better = parent.find(".more--better");
          const more_min    = parent.find(".more--mine");
          const data_keypress  = context.attr('data-keypress');
          const type_keyword   = context.find('.type--keyword');
          let sum              = 0;

          more_better.show();
          more_min.addClass("d-none");

          if (context.hasClass("more--type")) {
            type_keyword.addClass("d-flex");
              for (let i = 0; i < type_keyword.length; i++) {
                if (i >= count_show) {
                  $(type_keyword[i]).removeClass("d-flex");
                  sum++;
                  $("#filter .count--more").text(sum);
                }

              }
              context.removeClass("more--type");
          }
          else {
            if (data_keypress) {
              for (let i = 0; i < type_keyword.length; i++) {
                if (i >= count_show) {
                  $(type_keyword[i]).removeClass("d-flex");
                }
              }
            }
            else {
              for (let i = 0; i < items.length; i++) {
                if (i >= count_show) {
                  $(items[i]).removeClass("d-flex");
                }
              }
            }
          }

          more_better.removeClass("open--more");



        });

      }
      Show_Compony_Name(items,count_show){
        for (let i = 0; i < count_show; i++) {
          items.eq(i).addClass('d-flex');
        }
      }
      Show_Count_Item(){
        const elem = $("#filter .min--more");

        for (let i = 0; i < elem.length; i++) {
          let Arry         = elem[i];
          const parent     = $(Arry).parents(".filter--min");
          const find_count = parent.find(".category--checkbox");
          const count_show = parseInt(find_count.attr('data-show'));
          const find_item  = $(parent).find(".available--item");

          for (let j = 0; j < count_show; j++) {
            $(find_item[j]).addClass("d-flex");
          }

        }
      }
      Select_Box_Selected(target){
        let count                = 0;
        const mother_parent      = target.parents(".select--dropdown");
        const check_box          = mother_parent.find(".available--checked");
        const count_select       = mother_parent.find(".count--selected");
        const min_text           = mother_parent.find(".min--text");
        const remove_selected    = mother_parent.find(".group--remove");


        for (let i = 0; i < check_box.length; i++) {
          if ($(check_box[i]).hasClass("check--item")) {
            count++;
          }
        }



        if (count == 0) {
          min_text.removeClass('d-flex');
        }
        else {
          min_text.addClass('d-flex');
          count_select.text(count);

          if (count > 1) {
            remove_selected.removeClass('d-none');
          }
          else {
            remove_selected.addClass('d-none');
          }

        }


      }
      Gorup_Remove_Checked(){
        const gorup_remove = $("#filter .group--remove");

        gorup_remove.on('click',(event)=>{
          const target         = $(event.target);
          const parent         = target.parents(".filter--min");
          const find           = parent.find(".group--remove");
          const find_checkbox  = parent.find(".product--checkbox");
          const compony_names  = $("#filter--names .select--status");
          const text_selected  = parent.find(".min--text");
          target.addClass('d-none')
          text_selected.removeClass('d-flex');



          for (let i = 0; i < find_checkbox.length; i++) {
            const gorup_id_checkbox  = $(find_checkbox[i]).attr('data-id');
            this.Remove_Checked(gorup_id_checkbox);
            for (let j = 0; j < this.Arry.length; j++) {
              const elem              = this.Arry[j];
              const compony_name_id   = elem.id;
              if (compony_name_id == gorup_id_checkbox) {
                const $type_query = $(find_checkbox[i]).attr('data-type');

                this.Remove_Params($type_query,compony_name_id);
                this.Remove_Name_Company(j);
              }
            }
          }


        });
      }
      Json_Server(){
        const elem_json = $("#filter .json--server");
        const obj       = {
          "Products":[
              {"id":"1", "type":"status"}
          ]
        };
        elem_json.attr('data-json',JSON.stringify(obj));
        const json      = elem_json.attr('data-json');

        // console.log(JSON.parse(json));
      }











    }






















    $(document).ready(()=>{
      new Search();

    });
