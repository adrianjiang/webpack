import Base from './Base'

class SwipePage extends Base{
    constructor(option){
        super(option);

    }

    init(box,option){

    }
    // refresh(){

    // }
    render($dom){
        // console.log('$dom',$dom);
        var mySwiper = new Swiper($dom[0]);
        this.mySwiper = mySwiper; 
    }
    // get img(){
    //     return this._img;
    // }
    // set img(a){
    //     if(a instanceof Array){
    //         this._img = a;
    //     }else{
    //         console.error('img属性必须为数组');
    //     }
    // }
    // get init(){
    //     console.warn('该方法拒绝访问');
    //     return {};
    // }
    // set init(){
    //     console.warn('该方法拒绝重置');
    //     return {};
    // }

}
export default SwipePage;
