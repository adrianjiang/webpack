
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
        var self = this;
        $('*[MPhd-id="masknav"]').find('*[li-id="m_textbook"]').css({
            'color' : '#1a6fbf',
            'border-bottom' : '2px solid #1a6fbf'
        });

        this.refreshdata = [];
        var oData=[];
        var select=[];
        var refreshdata = this.refreshdata;

        function pushsname(d){
            var sname = d.sname;
            if(d.yushou == 1){
                d.shangpin = '预售';
            }else{
                d.shangpin = '有货';
            }
            for(var i = 0; i < refreshdata.length; i++){
                var buff = refreshdata[i];
                if(sname == buff.sname){
                    buff.data.push(d);
                    return;
                }
            }

            refreshdata.push({
                sname : sname,
                data : [d]
            })
        }

         //数组排序函数
        function toSort(arr,str,br){
            function compare(property){
                return function(a,b){
                    var value1 = a[property];
                    var value2 = b[property];
                    if(br){
                        return value2 - value1;
                    }else{
                        return value1 - value2;
                    }
                    
                }
            }
            return arr.sort(compare(str));
        }


        E.ajax('hdbooklist',function(cb){
            self.bookdata = cb;
            select = cb;
            refreshdata.push({
                sname: '全部',
                data: cb
            })
            //图书数据分组
            for(var i = 0; i < cb.length; i++){
                pushsname(cb[i]);
            }
            //初始化图书列表
            oData = cb;
            MPhd.ecInit($dom.search('EC-name','hdbooklist'),{
                data: cb
            });

            //初始化下拉选择
            //oData = refreshdata;
            MPhd.ecInit($dom.search('EC-name','ec_select'),{
                data: refreshdata,
                onChange: function(e){
                    for(var ii = 0; ii < refreshdata.length; ii++){

                        if(refreshdata[ii].sname == e){
                            oData =  refreshdata[ii].data;
                            $dom.find('.textbook_new').css({"background":"#fff","color":"#5b5b5b"});
                             $dom.find('.textbook_return').css({"background":"#1a6fbf","color":"#fff"});
                            MPhd.ecInit($dom.search('EC-name','hdbooklist'),{
                                data: refreshdata[ii].data
                            });
                        }
                    }
                }
            })

        })

        //点击排序
        $dom.find('.textbook_new').click(function(){
            $dom.find('.textbook_return').css({"background":"#fff","color":"#5b5b5b"});
            $(this).css({"background":"#1a6fbf","color":"#fff"});
            MPhd.ecInit($dom.search('EC-name','hdbooklist'),{data:toSort(oData,'dateline',true)});
        });

        $dom.find('.textbook_return').click(function(){
            $dom.find('.textbook_new').css({"background":"#fff","color":"#5b5b5b"});
            $(this).css({"background":"#1a6fbf","color":"#fff"});
            MPhd.ecInit($dom.search('EC-name','hdbooklist'),{data:toSort(oData,'sort',false)});

        });

        //搜索函数
        
        function toFind(){
            var str =  $dom.find('.book_txt')[0].value;
            var oData3 = [];
            for(var i = 0; i < select.length; i++){
                var sKey=select[i].name+select[i].press+select[i].title;
                if(sKey.indexOf(str) != -1){
                    oData3.push(select[i]);
                }
            }
            oData = oData3;
            MPhd.ecInit($dom.search('EC-name','hdbooklist'),{data:toSort(oData,'sort',false)});
        }
        //
        //点击搜索按钮
        $dom.find('.book_search').click(function(){
            toFind();
        });

        //回车事件
        $(function(){
            document.onkeydown = function(e){ 
                var ev = document.all ? window.event : e;
                if(ev.keyCode==13) {
                    toFind();
                 }
            }
        }); 
//




    }


    return page;

})
