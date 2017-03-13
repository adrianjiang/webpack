
/**
 * ------------------------------------------------------------------
 * EC组件   教师介绍滚动条 组件
 * ------------------------------------------------------------------
 */


define(function(){
    let ec = new E.EC_cycle({
        //interface: 'hdadvlist',
        dataFormat: 'img=img&path=path'
    });

    /**
     * 页面加载完成后触发
     *
     * @param    {object}  $dom     jquery对象
     *
     */
    ec.didLoad = function($dom,option){
        console.log('轮播图初始化')
        new Swiper($dom.search('ec-box','swipe1739')[0], {
            paginationClickable: true,
            pagination: '.Aswiper-pagination-center',
            loop: true,
            autoplay: 5000,
            autoplayDisableOnInteraction: false,
            lazyLoading: true,
            onTap: function(e){
                var path=$(e.clickedSlide).attr('tap-lunbon');
               // console.log('ooooooooo',path)
                var nA=path.indexOf('id=');
                var newsId=parseInt(path.substring(nA+3,nA+6)) || 554;
                MPhd.load('m_newsdetail',{
                    id:newsId
                });

            }
        });
     
    }
    return ec;

})
