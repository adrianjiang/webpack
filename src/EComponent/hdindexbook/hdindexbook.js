
/**
 * ------------------------------------------------------------------
 * EC组件   教师介绍滚动条 组件
 * ------------------------------------------------------------------
 */


define(function(){
    let ec = new E.EC_ajax({
         interface: "hdbooklist" ,
         dataFormat: "img=photo&name=name&price=price&id=id"
    });


    /**
     * 页面加载完成后触发
     *
     * @param    {object}  $dom     jquery对象
     *
     */
    ec.didLoad = function($dom,option){
            new Swiper($dom.search('ec-box','swipePage')[0], {
                slidesPerView: 3,
                paginationClickable: true,
                freeMode: true,lazyLoading: true,
                onTap: function(e){
                    var id = $(e.clickedSlide).attr('tap-bookid');
                    MPhd.load('m_tbdetail',{
                        id:id
                    })
                  
                    /*MPhd.load('m_tbdetail',{
                        id:id
                    })*/
                },
                // breakpoints: {
                //     1024: {
                //         slidesPerView: 4,
                //         spaceBetween: 40
                //     },
                //     768: {
                //         slidesPerView: 3,
                //         spaceBetween: 30
                //     },
                //     640: {
                //         slidesPerView: 2,
                //         spaceBetween: 20
                //     },
                //     320: {
                //         slidesPerView: 1,
                //         spaceBetween: 10
                //     }
                // }
            });
     
    }
    return ec;

})
