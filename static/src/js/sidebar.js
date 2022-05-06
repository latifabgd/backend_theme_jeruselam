odoo.define('theme_jerusalem.SideBar', function (require) {
    "use strict";

    var session = require('web.session');
    var lang = session.user_context.lang;

    if(lang == 'ar' || lang == 'ar_SY'){
        var close_sidebar = 0;
        var sidebar_closes_aut = 0;
        $('#sidebar_panel').show()

        $(document).on("mouseenter", "#sidebar_panel", function(event){
            $("#nk_sidebar").css({'width':'290px'});
            $("#nk_sidebar_head").css({'width':'290px'});
            $("#rtl_logo_img").css({'visibility':'visible'});
            $("#logo").css({'visibility':'hidden'});
            $("#nk_sidebar").addClass( "nk_active" );
            $("#close_btn").css({'visibility':'visible'});
            $("#apps_title").css({'visibility':'visible'});
            $("#app_name").css({'visibility':'visible'});
            $("#current_app").css({'visibility':'visible'});
            $("#other_app_name").css({'visibility':'visible'});
            $(".app_name_cls").css({'visibility':'visible'});

        });
        $(document).on("mouseleave", "#sidebar_panel", function(event){
            if(sidebar_closes_aut == 0){
                $("#nk_sidebar").css({'width':'90px'});
                $("#nk_sidebar_head").css({'width':'90px'});
                $("#rtl_logo_img").css({'visibility':'hidden'});
                $("#logo").css({'visibility':'visible'});
                $("#nk_sidebar").removeClass( "nk_active" );
                $("#close_btn").css({'visibility':'hidden'});
                $("#apps_title").css({'visibility':'hidden'});
                $("#app_name").css({'visibility':'hidden'});
                $("#current_app").css({'visibility':'hidden'});
                $("#other_app_name").css({'visibility':'hidden'});
                $(".app_name_cls").css({'visibility':'hidden'});
            }
            else{
                $("#nk_sidebar").css({'width':'290px'});
                $("#nk_sidebar_head").css({'width':'290px'});
                $("#rtl_logo_img").css({'visibility':'visible'});
                $("#logo").css({'visibility':'hidden'});
                $("#nk_sidebar").addClass( "nk_active" );

                $("#close_btn").css({'visibility':'visible'});
                $("#apps_title").css({'visibility':'visible'});
                $("#app_name").css({'visibility':'visible'});
                $("#current_app").css({'visibility':'visible'});
                $("#other_app_name").css({'visibility':'visible'});
                $(".app_name_cls").css({'visibility':'visible'});
            }

        });
        $(document).on("click", "#closeSidebar", function(event){
           if (close_sidebar == 0){
                $(".o_web_client>.o_action_manager").css({'padding-right':'300px'});
                $(".o_main_navbar").css({'padding-right':'255px'});

                close_sidebar=1;
                sidebar_closes_aut = 1;
           }
           else{
                $(".o_web_client>.o_action_manager").css({'padding-right':'100px'});
                $(".o_main_navbar").css({'padding-right':'55px'});
                close_sidebar = 0;
                sidebar_closes_aut = 0;
           }
        });
        $(document).on("click", ".nk_active .nk-nav-toggle #closeSidebar", function(event){
            $("#nk_sidebar").css({'width':'90px'});
                $("#nk_sidebar_head").css({'width':'90px'});
                $("#rtl_logo_img").css({'visibility':'hidden'});
                $("#logo").css({'visibility':'visible'});
                $("#nk_sidebar").removeClass( "nk_active" );
                $("#nk_sidebar").addClass( "nk_desactive" );
                $("#close_btn").css({'visibility':'hidden'});
                $("#apps_title").css({'visibility':'hidden'});
                $("#app_name").css({'visibility':'hidden'});
                $("#current_app").css({'visibility':'hidden'});
                $("#other_app_name").css({'visibility':'hidden'});
                $(".app_name_cls").css({'visibility':'hidden'});
                $(".o_main_navbar").css({'padding-right':'0px'});
        });
        $(document).on("click", ".nk_desactive .nk-nav-compact #closeSidebar", function(event){
             $("#nk_sidebar").css({'width':'290px'});
            $("#nk_sidebar_head").css({'width':'290px'});
            $("#rtl_logo_img").css({'visibility':'visible'});
            $("#logo").css({'visibility':'hidden'});
            $("#nk_sidebar").addClass( "nk_active" );
            $("#nk_sidebar").removeClass( "nk_desactive" );
            $("#close_btn").css({'visibility':'visible'});
            $("#apps_title").css({'visibility':'visible'});
            $("#app_name").css({'visibility':'visible'});
            $("#current_app").css({'visibility':'visible'});
            $("#other_app_name").css({'visibility':'visible'});
            $(".app_name_cls").css({'visibility':'visible'});
            $(".o_main_navbar").css({'padding-left':'0px'});
        });
    }
    else{
        var close_sidebar = 0;
        var sidebar_closes_aut = 0;
        $('#sidebar_panel').show()

        $(document).on("mouseenter", "#sidebar_panel", function(event){
            $("#nk_sidebar").css({'width':'290px'});
            $("#nk_sidebar_head").css({'width':'290px'});
            $("#logo_img").css({'visibility':'visible'});
            $("#nk_sidebar").addClass( "nk_active" );
            $("#close_btn").css({'visibility':'visible'});
            $("#apps_title").css({'visibility':'visible'});
            $("#app_name").css({'visibility':'visible'});
            $("#current_app").css({'visibility':'visible'});
            $("#other_app_name").css({'visibility':'visible'});
            $(".app_name_cls").css({'visibility':'visible'});

        });
        $(document).on("mouseleave", "#sidebar_panel", function(event){
            if(sidebar_closes_aut == 0){
                $("#nk_sidebar").css({'width':'90px'});
                $("#nk_sidebar_head").css({'width':'90px'});
                $("#logo_img").css({'visibility':'hidden'});
                $("#nk_sidebar").removeClass( "nk_active" );
                $("#close_btn").css({'visibility':'hidden'});
                $("#apps_title").css({'visibility':'hidden'});
                $("#app_name").css({'visibility':'hidden'});
                $("#current_app").css({'visibility':'hidden'});
                $("#other_app_name").css({'visibility':'hidden'});
                $(".app_name_cls").css({'visibility':'hidden'});
            }
            else{
                $("#nk_sidebar").css({'width':'290px'});
                $("#nk_sidebar_head").css({'width':'290px'});
                $("#logo_img").css({'visibility':'visible'});
                $("#nk_sidebar").addClass( "nk_active" );

                $("#close_btn").css({'visibility':'visible'});
                $("#apps_title").css({'visibility':'visible'});
                $("#app_name").css({'visibility':'visible'});
                $("#current_app").css({'visibility':'visible'});
                $("#other_app_name").css({'visibility':'visible'});
                $(".app_name_cls").css({'visibility':'visible'});
            }

        });
        $(document).on("click", "#closeSidebar", function(event){
           if (close_sidebar == 0){
                $(".o_web_client>.o_action_manager").css({'padding-left':'300px'});
                $(".o_main_navbar").css({'padding-left':'255px'});

                close_sidebar=1;
                sidebar_closes_aut = 1;
           }
           else{
                $(".o_web_client>.o_action_manager").css({'padding-left':'100px'});
                $(".o_main_navbar").css({'padding-left':'55px'});
                close_sidebar = 0;
                sidebar_closes_aut = 0;
           }
        });
        $(document).on("click", ".nk_active .nk-nav-toggle #closeSidebar", function(event){
            $("#nk_sidebar").css({'width':'90px'});
                $("#nk_sidebar_head").css({'width':'90px'});
                $("#logo_img").css({'visibility':'hidden'});
                $("#nk_sidebar").removeClass( "nk_active" );
                $("#nk_sidebar").addClass( "nk_desactive" );
                $("#close_btn").css({'visibility':'hidden'});
                $("#apps_title").css({'visibility':'hidden'});
                $("#app_name").css({'visibility':'hidden'});
                $("#current_app").css({'visibility':'hidden'});
                $("#other_app_name").css({'visibility':'hidden'});
                $(".app_name_cls").css({'visibility':'hidden'});
                $(".o_main_navbar").css({'padding-left':'0px'});
        });
        $(document).on("click", ".nk_desactive .nk-nav-compact #closeSidebar", function(event){
             $("#nk_sidebar").css({'width':'290px'});
            $("#nk_sidebar_head").css({'width':'290px'});
            $("#logo_img").css({'visibility':'visible'});
            $("#nk_sidebar").addClass( "nk_active" );
            $("#nk_sidebar").removeClass( "nk_desactive" );
            $("#close_btn").css({'visibility':'visible'});
            $("#apps_title").css({'visibility':'visible'});
            $("#app_name").css({'visibility':'visible'});
            $("#current_app").css({'visibility':'visible'});
            $("#other_app_name").css({'visibility':'visible'});
            $(".app_name_cls").css({'visibility':'visible'});
            $(".o_main_navbar").css({'padding-left':'0px'});
        });
    }




    $(document).on("click", ".sidebar a", function(event){
        var menu = $(".sidebar a");
        var $this = $(this);
        var id = $this.data("id");
        $("header").removeClass().addClass(id);
        menu.removeClass("active");
        $this.addClass("active");

        //sidebar close on menu-item click
//        $("#sidebar_panel").css({'display':'none'});
//        $(".o_action_manager").css({'margin-left': '0px'});
//        $(".side_bar_icon").css({'margin-left': '0px'});
//        $("#closeSidebar").hide();
//        $("#openSidebar").show();

        //remove class in navbar
        var navbar = $(".o_main_navbar");
        var navbar_id = navbar.data("id");
        $("nav").removeClass(navbar_id);
        navbar.removeClass("small_nav");

        //remove class in action-manager
        var action_manager = $(".o_action_manager");
        var action_manager_id = action_manager.data("id");
        $("div").removeClass(action_manager_id);
        action_manager.removeClass("sidebar_margin");

        //remove class in top_heading
        var top_head = $(".top_heading");
        var top_head_id = top_head.data("id");
        $("div").removeClass(top_head_id);
        top_head.removeClass("sidebar_margin");
    });

    //nav bar click //
    $(document).on("click", ".dashboard-nav-dropdown-toggle", function(event){
        $(this).closest(".dashboard-nav-dropdown").toggleClass("show").find(".dashboard-nav-dropdown")
        .removeClass("show");
        $(this).parent()
            .siblings()
            .removeClass("show");
    });

    $(document).on("click", ".dashboard-nav-dropdown-toggle_submenu", function(event){
        $(this).closest(".dashboard-nav-dropdown-menu").toggleClass("show")
        .find(".dashboard-nav-dropdown-menu").removeClass("show");
        $(this).parent()
            .siblings()
            .removeClass("show");
    });

    $(document).on("click", ".menu-toggle", function(event){
        if (mobileScreen.matches) {
            $(".dashboard-nav").toggleClass("mobile-show");
        } else {
            $(".dashboard").toggleClass("dashboard-compact");
        }
    });

});


odoo.define('theme_jerusalem.settings', function (require) {
"use strict";

var BaseSettingRenderer = require('base.settings').Renderer;

BaseSettingRenderer.include({

    _getAppIconUrl: function (module) {

        if (module == 'general_settings') {
            return "/theme_jerusalem/static/src/img/icons/settings.png";
        }
        else if (module == 'crm') {
            return "/theme_jerusalem/static/src/img/icons/crm.svg";
        }
        else if (module == 'sale_management') {
            return "/theme_jerusalem/static/src/img/icons/sales.svg";
        }
         else if (module == 'purchase') {
            return "/theme_jerusalem/static/src/img/icons/purchase.svg";
        }
         else if (module == 'stock') {
            return "/theme_jerusalem/static/src/img/icons/inventory.svg";
        }
         else if (module == 'mrp') {
            return "/theme_jerusalem/static/src/img/icons/manufacturing.svg";
        }
         else if (module == 'account') {
            return "/theme_jerusalem/static/src/img/icons/accounting.svg";
        }
         else if (module == 'project') {
            return "/theme_jerusalem/static/src/img/icons/project.svg";
        }
         else if (module == 'planning') {
            return "/theme_jerusalem/static/src/img/icons/planning.svg";
        }
        else if (module == 'hr') {
            return "/theme_jerusalem/static/src/img/icons/employee.svg";
        }

        else {
            return this._super.apply(this, arguments);
        }
    }
});

$(document).on("click", ".tab", function(event){
        var is_selected = $(this).hasClass("selected");
        if (is_selected) {
        var image = $(this).find(".icon").css( "background-image" );
        var new_image = image.replace(/\.svg/, ".png");
        $(this).find(".icon").css("background-image",new_image);
        }
        var others = $('.tab').not(".selected");
        jQuery.each(others, function( i, val ) {
           var icon_tabs = $(val).find(".icon");
           var image_tabs = icon_tabs.css( "background-image" );
           var ext = image_tabs.split('.').pop();
           if (ext == 'png")'){
                var new_image_tabs = image_tabs.replace(/\.png/, ".svg");
                icon_tabs.css("background-image",new_image_tabs);
            }


        });

    });


});


