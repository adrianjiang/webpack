
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
        
        $('*[MPhd-id="masknav"]').find('*[li-id="m_news"]').css({
            'color' : '#1a6fbf',
            'border-bottom' : '2px solid #1a6fbf'
        });

        /*var nA=window.location.href.indexOf('id=');
        var newsId=parseInt(window.location.href.substring(nA+3,nA+7)) || 8;*/

       var newsId=E.page_argument('id') || 558;

        //console.log('1111',newsId);

        E.ajax('newsdetail',{id:newsId},function(cb){
            console.log('===',cb);

            $dom.find('.new_title1').html(cb.title);

            var strDate='发布时间：'+cb.date.substring(0,11);
            $dom.find('.news_date1').html(strDate);

            var strType='最新资讯/'+cb.cname+'/详细';
            $dom.find('.book_position').html(strType);

            $dom.find('.news_content').html(cb.detail);
        });







        MPhd.ecInit($dom.search('EC-name','hdothernews'),{
                 data: [
                    {
                        num: '1',               
                        title: '2016司法考试大纲解读'
                        
                    },
                    {
                        num: '2',               
                        title: '2016司法考试大纲解读'
                    },
                    {
                        num: '3',               
                        title: '2016司法考试大纲解读'
                    },
                    {
                        num: '4',               
                        title: '2016司法考试大纲解读'
                    },
                    {
                        num: '5',               
                        title: '2016司法考试大纲解读'
                    }
                 ]
            }
        );
    }


    return page;

})
