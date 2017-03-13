
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
         $('*[MPhd-id="masknav"]').find('*[li-id="m_freeClass"]').css({
            'color' : '#1a6fbf',
            'border-bottom' : '2px solid #1a6fbf'
        });

         var oData = [];//用于排序，会改变
         //获取老师的id
         var nA=window.location.href.indexOf('id=');
         var teacherId=parseInt(window.location.href.substring(nA+3,nA+6)) || 7;
         //获取图片 的地址
         var sUrl=A.get('URL_photo');

         function getDate(){    
            //通过单个老师的id获取数据
             E.ajax('getteacher',{id:teacherId},function(cb){
                var lesson_position = '免费课堂/基础先修阶段/'+cb.name;
                $dom.find('.lesson_position').html(lesson_position);
               for(var i=0;i<cb.course.length;i++){
                    cb.course[i].photo=sUrl+cb.course[i].photo;
               }
               // 传输的数据应该是data.course,现在为null，明天后台加上
                oData = cb.course;
                MPhd.ecInit($dom.search('EC-name','tc_course'),{
                    data:cb.course
                 });

             });
         }
         getDate();
     
        

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

        //点击按钮排序
        var aClass=['dateline','sort','hot'];

         $dom.find('.tc_btn').each(function(index,element){
                $dom.find('.tc_btn a').click(function(){
                    //切换当前
                    $dom.find('.tc_btn a').removeClass('current');
                    $(this).addClass('current');

                    //切换排序方式
                    if($(this).index() == 1){
                        oData = toSort(oData,aClass[$(this).index()],false);
                    }else{
                        oData = toSort(oData,aClass[$(this).index()],true);
                    }
                    console.log('223323',oData);
                     MPhd.ecInit($dom.search('EC-name','tc_course'),{
                        data:oData
                     });
                });
                
         });

         //下拉框切换
         $dom.find('.tc_select').change(function(){
            if($(this).val() != '基础先修阶段'){
                oData = [];
                MPhd.ecInit($dom.search('EC-name','tc_course'),{
                        data:[]
                     });
            }else{
               getDate();
            }
         });

         
        
    }


    return page;

})
