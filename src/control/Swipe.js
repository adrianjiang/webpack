

import Base from './Base'

class Swipe extends Base{
    constructor(option){
        super(option);

        this._box = option.box;
        this._data = option.data || [];

        this._tap = option.tap;
        this._click = option.click;
        // this._classLi = option.classLi || 'SwipeNav-li';

        this._boxHeight = this._box.height();
    }

    init(){
        var dom = this.creat();
        this._box.append(dom);
        this.render(dom);
    }
    creat(){}
    render(box){}

}
export default Swipe;

