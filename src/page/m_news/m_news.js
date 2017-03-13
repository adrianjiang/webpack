
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
        var select=[];
        var oData=[];
        $('*[MPhd-id="masknav"]').find('*[li-id="m_news"]').css({
            'color' : '#1a6fbf',
            'border-bottom' : '2px solid #1a6fbf'
        });

        //数组排序函数
        function toSort(arr,str){
            function compare(property){
                return function(a,b){
                    var value1 = a[property];
                    var value2 = b[property];
                    return value2 - value1;
                }
            }
            arr.sort(compare(str));
        }

        //该函数将数组排序并初始化模块
        function toChange(aArr,sSort){
              toSort(aArr,sSort);
                    //初始化
                    oData = aArr;
                     MPhd.ecInit($dom.search('EC-name','hdnews'),{
                         data: oData
                        }
                    );
        }
        //分组
        function pushsname(d){
            var cname = d.cname;

            //在data上添加日期和月份属性
            d.day=d.date.substring(8,10);
            d.month=d.date.substring(0,4)+'年'+d.date.substring(6,7);
           
           d.sKey=d.cname+d.title;
            for(var i = 0; i < select.length; i++){
                var buff = select[i];
                if(cname == buff.cname){
                    buff.data.push(d);
                    return;
                }
            }
            select.push({
                cname : cname,
                data : [d]
            })
        }

        //获取数据
        E.ajax('hdnews',function(cb){

            select.push({
                    cname: '全部',
                    data: cb
                });

             for(var i = 0; i< cb.length; i++){
                    var buff = cb[i];
                    pushsname(buff);
                }

                //首次加载    
                toChange(select[0].data,'dateline');

        });


       
         //点击导航栏查找
        $dom.find('.col-xs-3').click(function(){
            var str = $.trim($(this).text());

            //点击变字体颜色
             $dom.find('.col-xs-3 p').css('color','#4a4c4b');
             $(this).find('p').css('color','#196ebf');

            //通过bflage判断内容是否为空
            var bFlage = true;
            for(var i = 0; i < select.length; i++){
                if(select[i].cname == str){
                    toChange(select[i].data,'dateline');
                    $dom.find('.news_hot').css({"background":"#fff","color":"#5b5b5b"});
                    $dom.find('.news_new').css({"background":"#1a6fbf","color":"#fff"});
                     bFlage = false;
                }

                
            }
             //通过bflage判断内容是否为空
            if(bFlage){
                toChange([],'dateline');
            }
        });


        //点击热度或最新判断排序方式
        $dom.find('.news_new').click(function(){
            $dom.find('.news_hot').css({"background":"#fff","color":"#5b5b5b"});
            $(this).css({"background":"#1a6fbf","color":"#fff"});
            toChange(oData,'dateline');

        });

        $dom.find('.news_hot').click(function(){
            $dom.find('.news_new').css({"background":"#fff","color":"#5b5b5b"});
            $(this).css({"background":"#1a6fbf","color":"#fff"});
            toChange(oData,'hot');
        });

        //搜索
        function toFind(){
            var str =  $dom.find('.news_txt')[0].value;
            var oData3 = [];
            for(var i = 0; i < select[0].data.length; i++){
                if(select[0].data[i].sKey.indexOf(str) != -1){
                    oData3.push(select[0].data[i]);
                }
            }
            oData = oData3;
            toChange(oData,'dateline');
        }
        //点击搜索事件
        $dom.find('.news_find').click(toFind);
        //回车事件
        $(function(){
            document.onkeydown = function(e){ 
                var ev = document.all ? window.event : e;
                if(ev.keyCode==13) {
                    toFind();
                 }
            }
        }); 
    }


        
    return page;

})
