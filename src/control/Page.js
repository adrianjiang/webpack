class Page {
    constructor (){
        this._img = [];
        this._box = {};//jquery对象
        this._willLoad = function(){}
        this._didLoad = function(){}

    }
    willInit(){

    }
    init(box,option){
        
        this.willInit(box,option);
        this._didLoad(box,option);

        if(!option)return

        var fn = option.init;
        if(fn){
            if(typeof fn == 'function'){
                fn(this);
            }
        }
    }

    get img(){
        return this._img;
    }
    set img(a){
        if(a instanceof Array){
            this._img = a;
        }else{
            console.error('img属性必须为数组');
        }
    }
    get willLoad(){
        return this._willLoad;
    }
    set willLoad(fn){
        if(typeof fn == 'function'){
            this._willLoad = fn;
        }else{
            console.error('willLoad方法必须为函数',f);
        }
    }
    get didLoad(){
        return this._didLoad;
    } 
    set didLoad(fn){
        if(typeof fn == 'function'){
            this._didLoad = fn;
        }else{
            console.error('didLoad方法必须为函数',f);
        }
    }
    get box(){
        return this._box;
    }
    set box(dom){
        if(dom instanceof HTMLElement){
            this._box = $(dom);
            return dom;
        }
        if(dom instanceof jQuery){
            this._box = dom;
            return dom;
        }
        console.error('box为dom对象或jquery对象',dom);
    }
    // get init(){
    //     console.warn('该方法拒绝访问');
    //     return {};
    // }
    // set init(){
    //     console.warn('该方法拒绝重置');
    //     return {};
    // }

}
export default Page;
