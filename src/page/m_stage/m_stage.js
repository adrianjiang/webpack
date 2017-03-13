



define(function(){
    let page = E.new_page();
    var oClass={};
    var classData=[];
    /**
     * 页面加载完成后触发
     *
     * @param    {object}  $dom     jquery对象
     *
     */
    page.didLoad = function($dom,option){
        var select = [];

        $('*[MPhd-id="masknav"]').find('*[li-id="m_freeClass"]').css({
            'color' : '#1a6fbf',
            'border-bottom' : '2px solid #1a6fbf'
        });   

        function pushsname(d){
            var bumenname = d.bumenname;
            for(var i = 0; i < select.length; i++){
                var buff = select[i];
                if(bumenname == buff.bumenname){
                    buff.data.push(d);
                    return;
                }
            }
            select.push({
                bumenname : bumenname,
                data : [d]
            })
        }

        E.ajax('hdteacher',function(cb){
            // var oJson={};
            select.push({
                bumenname: '全部',
                data: cb
            });


            for(var i = 0; i< cb.length; i++){
                var buff = cb[i];
                pushsname(buff);
            }



            var str = '';
            for(var i=0;i<select.length;i++){

                str += '<option value="'+select[i].bumenname+'">'+select[i].bumenname+'</option>';

           }

           //将创建的option放入下拉框中
           $dom.find('.stage_sel select').append($(str))

            MPhd.ecInit($dom.search('EC-name','jichuxianxiu'),{data: cb});
            
        });
      

           

      //监听下拉框change事件
        $dom.find('.stage_sel select').change(function(){

            var self = this;
            for(var i = 0; i < select.length;i++){
              if(select[i].bumenname == self.value){
                  MPhd.ecInit($dom.search('EC-name','jichuxianxiu'),{data: select[i].data});
              }
            }
          
            
        });
     

    }


    return page;

})
