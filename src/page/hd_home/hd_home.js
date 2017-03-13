
/**
 * ------------------------------------------------------------------
 * Home页面对应初始化逻辑
 * ------------------------------------------------------------------
 */




define(function(){
    let page = E.new_page();
    
    // page.img = [
    // 'icon_news.png'
    // ];
    page.willLoad = function(string){

    }
    /**
     * 页面加载完成后触发
     *
     * @param    {object}  $dom     jquery对象
     *
     */
    page.didLoad = function($dom,option){
        // E.page($dom.find_pb('home-webInfo'),'hd_webInfo');
         let o_data = [
            {
                name: '第一张',
                id  : '201701050942234193',
                img :  require('../../image/201701050942234193.jpg')
            },
            {
                name: '第二张',
                id  : '201701131445415793',
                img :  require('../../image/201701131445415793.jpg')
            },
            {
                name: '第三张',
                id  : '201701171436421187',
                img :  require('../../image/201701171436421187.jpg')
            },
        ];

        E.ecinit_swipeImg({
            box: $dom.search('box-ec','swipeimg'),
            data: o_data,
            onTap:function(cb){
                console.log(cb);
            }
        }); 

        //导航
        var ec = E.ecinit_swipeNav({
            click:function(b){
                MPhd.load(b.id);
            },
            classLi: 'SwipeNav-li',
            box: $dom.search('box-ec','swipenavbar'),
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
                    id: 'm_exercises'
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

        //公告
        E.ajax('hdnews',function(cb){
            var box = $('.index_news');
            var o_data = [];


            for(var i = 0; i < 10; i++){
                var title = cb[i].title;
                var bid = cb[i].bid;
                var o = {
                    id: bid,
                    text: title,
                    type: 'text',
                    textClass: 'Aswiper-slide-title'
                }
                o_data.push(o);
            }
            A.new_swiper({
                a_data:o_data,
                a_box: box,
                a_paginationIf: false,
                a_autoplay: true,
                onTap: function(swiper){
                    var id = $(swiper.clickedSlide).attr('data-id');
                     MPhd.load('m_newsdetail',{
                        id:id
                    })
                },
            });


        });

        //轮播图
        E.ajax('hdadvlist',function(cb){
            console.log(99999,cb);
                    MPhd.ecInit($dom.search('EC-name','home_swipeimg'),{
                         data: cb
                    }
                );
        });

        




    }


    return page;

})
