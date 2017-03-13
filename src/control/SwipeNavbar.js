

import Swipe from './Swipe'

class SwipeNavbar extends Swipe{
    constructor(option){
        option = option || {};
        super(option);

        // this._box = option.box;
        // this._data = option.data || [];

        // this._click = option.click;
        this.slidesPerView = option.slidesPerView || 4;
        this._classLi = option.classLi || 'SwipeNav-li';

        // this._boxHeight = this._box.height();
    }

    creat(){
        var classLi = this._classLi;
        var boxHeight = this._boxHeight;
        var html = '';

        html += '<div class="swiper-container fill">';
        html += '<div class="swiper-wrapper">';
        this._data.forEach(function(value){
            html += '<div class="swiper-slide ' + classLi + '" li-id="' + value.id + '" li-name="' + value.name + '" style="line-height: ' + boxHeight + 'px">' + value.name + '</div>'
        });
        html += '</div>';
        html += '</div>';

        var dom = $(html);

        var self = this;
        if(this._click){
            dom.find('.swiper-slide').click(function(e){
                // var self = this;
                // console.log(self,e);
                var me = $(this);
                let id = me.attr('li-id');
                let name = me.attr('li-name');
                self._click({
                    name : name,
                    id : id,
                    dom : me
                })
            })

        }

        return dom;
    }
    render(box){
        var self = this;
        var mySwiper = new Swiper(box[0], {
            slidesPerView: self.slidesPerView,//可设置为数字
            paginationClickable: true,
            spaceBetween: 5,
            freeMode: true,
            // slideActiveClass : 'Eswiper-active-nav',
        });
        this.mySwiper = mySwiper;
    }

}
export default SwipeNavbar;

