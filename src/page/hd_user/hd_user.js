
/**
 * ------------------------------------------------------------------
 * Home页面对应初始化逻辑
 * ------------------------------------------------------------------
 */




define(function(){
    let page = E.new_page();
    
    page.img = [

    ];
    page.willLoad = function(string){

    }
    /**
     * 页面加载完成后触发
     *
     * @param    {object}  $dom     jquery对象
     *
     */
    page.didLoad = function($dom,option){
       
        $dom.find(".btn-group.usr_btns > .btn").click(function(){
            var index = $dom.find(this).index();
            $dom.find(".btn-group.usr_btns > .btn").removeClass("active");
            $dom.find(this).addClass("btn active");
            $dom.find(".usr_record").hide();
            $dom.find(".usr_record").eq(index).show();
        });
      
    }


    return page;

})
