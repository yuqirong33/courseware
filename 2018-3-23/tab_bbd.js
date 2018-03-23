/*
    2.写一个Tab类
*/
class Tab {
    constructor(that){
        this.that = that;
        this.opt = {
            btn:['社会','娱乐','体育'],
            content:['社会我大哥','胡耀祥和一刀不得不说秘密','大喇叭还和一刀xxx']
        }
    }
    init(opt){
        $.extend(this.opt,opt);
        this.createBtn();
        this.createContent();
        this.events();
    }
    createBtn(){
        this.opt.btn.forEach((e,i)=>{
            this.that.append($(`<button class="${i==0?'active':''}">${e}</button>`))
        })
    }
    createContent(){
        this.opt.content.forEach((e,i)=>{
            this.that.append($(`<div class="${i==0?'show':''}">${e}</div>`))
        }) 
    }
    events(evName="click"){
        let btns = this.that.find('button');
        let divs = this.that.find('div');
        btns.click(function(){
            btns.removeClass('active');
            $(this).addClass('active');
            divs.removeClass('show');
            divs.eq($(this).index('button')).addClass('show');
        });
    }
}


/*
    1.创建一个组件
*/

// console.log(1);
$.fn.extend({
    tabs(opt){
        let t = new Tab(this);
        t.init(opt);
        return this;
    }
});