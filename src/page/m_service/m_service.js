
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
        $('*[MPhd-id="masknav"]').find('*[li-id="m_service"]').css({
            'color' : '#1a6fbf',
            'border-bottom' : '2px solid #1a6fbf'
        });
        $dom.find(".kefu_c").eq(0).show();
        $dom.find(".kefu").click(function(){            
            var index = $dom.find(this).parent().index();
            $dom.find(".kefu").removeClass("active");
            $dom.find(this).addClass("active");
            $dom.find(".kefu_c").hide();
            $dom.find(".kefu_c").eq(index).show();
        });

        MPhd.ecInit($dom.search('EC-name','hdfaqlist'),{
             data: [
            {                
                title: '据了解发的据了解发的飞‘是否'
            },
            {                
                title: '据了解发的据了解发的飞‘是否'
            },
            {                
                title: '据了解发的据了解发的飞‘是否'
            },
            {                
                title: '据了解发的据了解发的飞‘是否'
            },
            {                
                title: '据了解发的据了解发的飞‘是否'
            },
            {                
                title: '据了解发的据了解发的飞‘是否'
            },
            {                
                title: '据了解发的据了解发的飞‘是否'
            },
            {                
                title: '据了解发的据了解发的飞‘是否'
            },
            {                
                title: '据了解发的据了解发的飞‘是否'
            },
            {                
                title: '据了解发的据了解发的飞‘是否'
            },
            {                
                title: '据了解发的据了解发的飞‘是否'
            },
            {                
                title: '据了解发的据了解发的飞‘是否'
            },
            {                
                title: '据了解发的据了解发的飞‘是否'
            },
            {                
                title: '据了解发的据了解发的飞‘是否'
            }
            
             ]
            }
        );
        
    }


    return page;

})
