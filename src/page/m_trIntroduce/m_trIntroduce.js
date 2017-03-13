
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
        var  select = [];
        $('*[MPhd-id="masknav"]').find('*[li-id="m_trIntroduce"]').css({
            'color' : '#1a6fbf',
            'border-bottom' : '2px solid #1a6fbf'
        });
          

        //分组
       function pushsname(d){
            var bumenname = d.bumenname;
            for(var i = 0; i < select.length; i++){
                var buff = select[i];
                if(bumenname == buff.name){
                    buff.data.push(d);
                    return;
                }
            }
            select.push({
                name : bumenname,
                data : [d]
            })
        }

        E.ajax('hdteacher',function(cb){
            select.push({
                name:'全部',
                data:cb
            });
            for(var i = 0; i< cb.length; i++){
                var buff = cb[i];
                pushsname(buff);
            }
            MPhd.ecInit($dom.search('EC-name','shizijieshao'),{
                data:cb
            });
  

            // console.log(select);
             MPhd.ecInit($dom.search('EC-name','subjectnav'),{
                 data: select,
                 click:function(b){
                    for(var i = 0;i<select.length;i++){
// <<<<<<< .mine
                        if(select[i].name == b){
// ||||||| .r166
//                         console.log(11111,b.name);
//                         if(select[i].name == b.name){

// =======
//                        // console.log(11111,b.name);
//                         if(select[i].name == b.name){

// >>>>>>> .r167
                            MPhd.ecInit($dom.search('EC-name','shizijieshao'),{
                                data:select[i].data
                            });
                        }
                    }
                },
            });   
            //菜单
            //  var ec = E.ecinit_swipeNav({
            //     click:function(b){
            //         b.dom.siblings().css({
            //             'color': '',
            //             'border-bottom' : ''
            //         });

            //         // MPhd.load(b.id);
                    
            //         for(var i = 0;i<select.length;i++){
            //             console.log(11111,b.name);
            //             if(select[i].name == b.name){

            //                 MPhd.ecInit($dom.search('EC-name','shizijieshao'),{
            //                     data:select[i].data
            //                 });
            //             }
            //         }
                    
                  
            //     },
            //     box: $dom.search('ec-box','swipenavbar'),
            //     data: select
            // });     
        });




           /*   for(var i = 0; i< cb.length; i++){
                var buff = cb[i];
                pushsname(buff);
            }

            console.log('select',select);*/


           


        
    }


    return page;

})
