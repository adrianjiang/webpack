
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
        $dom.css({

        })
        console.log('hd_mask加载完成');
        MPhd.loadBox = $dom.search('page-box','mask-load');

        E.page($dom.find_pb('mask-webInfo'),'hd_webInfo');



         //导航
        var ec = E.ecinit_swipeNav({
            click:function(b){
                b.dom.siblings().css({
                    'color': '',
                    'border-bottom' : ''
                });

                MPhd.load(b.id);

              
            },
            box: $dom.search('ec-box','swipenavbar'),
            data: [
                {
                    name: '免费课堂',
                    id: 'm_freeClass'
                },
                {
                    name: '专属教材',
                    id: 'm_textbook'
                },
                {
                    name: '面授课程',
                    id: 'm_ayClass'
                },
                {
                    name: '师资介绍',
                    id: 'm_trIntroduce'
                },
                {
                    name: '厚大题库',
                    url: 'waphdsk://wap.houdask.com/'
                },
                {
                    name: '全国分校',
                    id: 'm_branchschool'
                },
                {
                    name: '最新资讯',
                    id: 'm_news'
                },
                {
                    name: '厚大在线360',
                    id: 'm_hd360'
                },                
                {
                    name: '客服中心',
                    id: 'm_service'
                }

            ]
        });       
     
        
    }


    return page;

})
