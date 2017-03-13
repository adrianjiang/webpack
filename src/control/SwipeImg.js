

import Swipe from './Swipe'

class SwipeNavbar extends Swipe{
    constructor(option){
        super(option);

        // this._box = option.box;
        // this._data = option.data || [];

        this._click = option.onClick;
        this._classLi = option.classLi || 'SwipeNav-li';

        // this._boxHeight = this._box.height();
        this._tap = option.onTap || function(){};
    }

    creat(){
        var classLi = this._classLi;
        var boxHeight = this._boxHeight;
        var html = '';

        html += '<div class="swiper-container fill">';
        html += '<div class="swiper-wrapper">';
        this._data.forEach(function(value){
            html += '<div class="swiper-slide ' + classLi + '"  style="line-height: ' + boxHeight + 'px">' + value.name;
            html += '<img class="SwipeImg-img" src="' + value.img + '" li-id="' + value.id + '" li-name="' + value.name + '">';
            html += '</div>'
        
        });
        html += '</div>';
        // var paginationId = 'css_' + A.random_id();
        // this._paginationId = paginationId;
        html += '<div class="Aswiper-pagination-center"></div>';

        html += '</div>';

        var dom = $(html);

        var self = this;
        // if(this._click){
        //     dom.find('.swiper-slide').click(function(e){
        //         // var self = this;
        //         // console.log(self,e);
        //         var me = $(this);
        //         let id = me.attr('li-id');
        //         let name = me.attr('li-name');
        //         self._click({
        //             name : name,
        //             id : id
        //         })
        //     })

        // }

        return dom;
    }
    render(box){
        var self = this;
        var mySwiper = new Swiper(box[0], {
            // slidesPerView: 4,//可设置为数字
            paginationClickable: true,
            pagination: '.Aswiper-pagination-center',
            loop: true,
            autoplay: 5000,
            autoplayDisableOnInteraction: false,
            // spaceBetween: 5,
            // freeMode: true
            onTap: function(swiper, event){
                // console.log(swiper, event);
                var dom = $(event.target.outerHTML);
                // console.log(dom[0].tagName);
                if(dom[0].tagName == 'IMG'){
                    var id = dom.attr('li-id');
                    var name = dom.attr('li-name');
                    self._tap({
                        id: id,
                        name: name
                    });                    
                }

            }
        });
        this.mySwiper = mySwiper;
    }

}
export default SwipeNavbar;

