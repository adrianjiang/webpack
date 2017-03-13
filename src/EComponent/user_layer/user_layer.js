
/**
 * ------------------------------------------------------------------
 * EC组件   教师介绍滚动条 组件
 * ------------------------------------------------------------------
 */


define(function(){
    let ec = new E.EC_ajax({
        dataFormat: 'title=bumenname&name=name&img=img&c1=course[0].name&c2=course[1].name&c3=course[2].name&c4=course[3].name',
        interface: "hdteacher",
        dataStrict: true,//打开则规定为严格的数据模式，如果找不到任意数据则结束本次滚动
    });

    ec.img = [];
    ec.willLoad = function(string){

    }
    /**
     * 页面加载完成后触发
     *
     * @param    {object}  $dom     jquery对象
     *
     */
    ec.didLoad = function($dom,option){
            new Swiper($dom.search('ec-box','swipePage2')[0], {
                slidesPerView: 1.5,
                paginationClickable: true,
                freeMode: true,lazyLoading: true,
                onTap: function(e){
                    console.log('onTap');
                }
            });
     
    }
    return ec;
})
