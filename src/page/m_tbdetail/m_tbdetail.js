
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
        $('*[MPhd-id="masknav"]').find('*[li-id="m_textbook"]').css({
            'color' : '#1a6fbf',
            'border-bottom' : '2px solid #1a6fbf'
        });      
        
         var nA=window.location.href.indexOf('id=');
         var bookId=parseInt(window.location.href.substring(nA+3,nA+5)) || 8;
         //隐藏产品参数
         $dom.find('.book_chanshu').css('display','none ');
         //获取数据
        E.ajax('bookdetail',{id:bookId},function(cb){
            //console.log('++++',cb);
            //拼dom
            $dom.find('.book_title').html('专属教材/'+cb.name+'/详细');
            $dom.find('.book_photo img').attr('src',cb.photo);

            $dom.find('.book_info').html('<p class="book_name">'+cb.name+'</p><p class="book_description">'+cb.title+'</p><p class="book_price">¥'+cb.disprice.toFixed(1)+'</p>');
            $dom.find('.book_tuwen').html(cb.detail);
            $dom.find('.book_chanshu').html('<li><span class="book_label">是否套装</span><span class="book_txt">是</span></li><li><span class="book_label">定价</span><span class="book_txt">'+cb.price.toFixed(1)+'元</span></li><li><span class="book_label">出版社</span><span class="book_txt">'+cb.press+'</span></li><li><span class="book_label">作者</span><span class="book_txt"></span></li><li><span class="book_label">出版时间</span><span class="book_txt">'+cb.chubanshijian+'</span></li><li><span class="book_label">开本</span><span class="book_txt">'+cb.kaiben+'</span></li>');
        });

        //点击图文详细
        $dom.find('.bk_tuwen').click(function(){
            $dom.find('.bk_chanpin').removeClass('active');
            $(this).addClass('active');

            $dom.find('.book_tuwen').css('display','block ');
            $dom.find('.book_chanshu').css('display','none ');
        });
        //点击产品参数
        $dom.find('.bk_chanpin').click(function(){
            $dom.find('.bk_tuwen').removeClass('active');
            $(this).addClass('active');

            $dom.find('.book_chanshu').css('display','block ');
            $dom.find('.book_tuwen').css('display','none ');
        });
    }


    return page;

})
