
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
         //获取数据
         // 视频网址前缀
         var sUrl=A.get('URL_video');
         //记录当前课程信息的Json
         var curPlay=null;

         //老师的id
         var nA=window.location.href.indexOf('teacherid=');
         var teacherId=parseInt(window.location.href.substring(nA+10,nA+13)) || 6;
         //课程id
         var nB=window.location.href.indexOf('course=');
         var nCourse=parseInt(window.location.href.substring(nB+7,nB+10)) || 81;

         E.ajax('getteacher',{id:teacherId},function(cb){
              //标题
            var teacher = cb.bumenname+'&nbsp;'+cb.name;
            $dom.find('.play_teacher').html(teacher);
            for(var i=0;i<cb.course.length;i++){
                    cb.course[i].padpath=sUrl+cb.course[i].padpath;
                    if(cb.course[i].id==nCourse){
                        console.log('当前播放课程',cb.course[i].padpath);
                        $dom.find('.player_video').attr('src',cb.course[i].padpath);
                        cb.course[i].curClass='active';
                    }else{
                         cb.course[i].curClass='';
                    }
               }

            //console.log('=====',cb.course)
            //视频列表
            MPhd.ecInit($dom.search('EC-name','play_xuanzhangjie'),{
                        data:cb.course
                  
                    });

            

        });




         
    }


    return page;

})
