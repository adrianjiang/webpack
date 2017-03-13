
/**
 * ------------------------------------------------------------------
 * Home页面对应初始化逻辑
 * ------------------------------------------------------------------
 */




define(function(){
    let page = E.new_page();

    /**
     * 页面加载完成后触发
     *
     * @param    {object}  $dom     jquery对象
     *
     */
    page.didLoad = function($dom,option){
        $('*[MPhd-id="masknav"]').find('*[li-id="m_branchschool"]').css({
            'color' : '#1a6fbf',
            'border-bottom' : '2px solid #1a6fbf'
        });

        $dom.find("#btn_fbz").click(function(){
            $dom.find("#btn_bz").removeClass("focus");
            $dom.find("#fbz_box").show();
            $dom.find("#bz_box").hide();
        });
        $dom.find("#btn_bz").click(function(){
            $dom.find("#bz_box").show();
            $dom.find("#fbz_box").hide();
        });


        $dom.find(".city a").click(function(){
             // $dom.find("#2_1 a").removeClass("current");
             $dom.find("a").removeClass("current");
             $dom.find(this).addClass("current");
             $dom.find(".qgfx_bgcolor").removeClass("qgfx_bgcolor");
             $dom.find(".qgfx_state").removeClass("qgfx_state");
            var id = $dom.find(this).attr("index");
             $dom.find("."+id).addClass("qgfx_state");
             $dom.find(".qgfx_sf_bgcolor1").removeClass("qgfx_sf_bgcolor1");
             $dom.find("."+id+" .qgfx_sf").addClass("qgfx_sf_bgcolor1");
            
        })


        $dom.find(".collapseOne").click(function(){
            $dom.find(this).find("i").hasClass("fx_add").addClass("fx_del");            
        })






    //     $dom.find(".collapseOne").click(function(){
    //         var c=$dom.find(this).attr("c");
    //         c == 0 ?($dom.find(this).find("img").attr("src","img/fx_add.png"), $dom.find(this).attr("c",1)) :($dom.find(this).find("img").attr("src","img/fx_del.png"), $dom.find(this).attr("c",0),$dom.find(".collapseTwo").find("img").attr("src","img/fx_add.png"), $dom.find(".collapseTwo").attr("c",1),$dom.find(".collapseThree").find("img").attr("src","img/fx_add.png"), $dom.find(".collapseThree").attr("c",1)); 
    //     });
    //     $dom.find(".collapseTwo").click(function(){
    //         var c=$dom.find(this).attr("c");
    //         c == 0 ?($dom.find(this).find("img").attr("src","img/fx_add.png"), $dom.find(this).attr("c",1)) :($dom.find(this).find("img").attr("src","img/fx_del.png"), $dom.find(this).attr("c",0),$dom.find(".collapseOne").find("img").attr("src","img/fx_add.png"), $dom.find(".collapseOne").attr("c",1),$dom.find(".collapseThree").find("img").attr("src","img/fx_add.png"), $dom.find(".collapseThree").attr("c",1)); 
    //             });
    //     $dom.find(".collapseThree").click(function(){
    //         var c=$dom.find(this).attr("c");
    //         c == 0 ?($dom.find(this).find("img").attr("src","img/fx_add.png"), $dom.find(this).attr("c",1)) :($dom.find(this).find("img").attr("src","img/fx_del.png"), $dom.find(this).attr("c",0),$dom.find(".collapseTwo").find("img").attr("src","img/fx_add.png"), $dom.find(".collapseTwo").attr("c",1),$dom.find(".collapseOne").find("img").attr("src","img/fx_add.png"), $dom.find(".collapseOne").attr("c",1)); 
    //             });

    }


        

       


 


    return page;

})
