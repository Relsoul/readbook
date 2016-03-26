/**
 * Created by soul on 10/03/2016.
 */


var Tab=function(config){
    this.setLocalVar(config);
    this.bindEvents();
    this.init();
};

Tab.prototype={
    init: function () {
        if(this.autoPlay){
            this.autoPlayTab()
        }
    },
    setLocalVar:function(config){
        this.root=config.root;
        this.autoPlay=config.autoPlay||false;
        this.tabListElem=$(this.root).find(".tabList");
        this.tabContent=$(this.root).find(".tabContent");
        this.nowTab=0;
        this.nowTabLength=$(this.tabListElem).find("li").length;
        this.timer=null;
    },
    bindEvents:function(){
        $(this.tabListElem).on("click","li",this.changeTab.bind(this));
    },
    clearTimer:function(){
        var _self=this;
        var startTimer=function(){
            setTimeout(function(){
                _self.autoPlayTab()
            },2000)
        };
        return function(){
            clearInterval(_self.timer);
            _self.timer=null;
            startTimer()
        }
    },
    setNowTab:function(e){
        if(e){//这里可以单独封装一个函数 特别处理当鼠标点击时候的事件
            var elem= e.target;
            this.nowTab=$(this.tabListElem).find("li").index(elem);//获取序号
            if(this.timer){//如果开启了自动播放则暂时关闭
                var clearTimer=this.clearTimer.call(this);
                clearTimer();
            }
            return this.nowTab;
        }else{
            if(this.nowTab>=this.nowTabLength-1){
                this.nowTab=-1;
            }
            return  ++this.nowTab;
        }
    },
    changeClass:function(elemIndex){
        var changeClass=function(elem,cls){
            $(elem).siblings().removeClass(cls);
            $(elem).addClass(cls)
        };
        changeClass($(this.tabListElem).find("li").eq(elemIndex),"tabListCurrent");
        changeClass($(this.tabContent).find("div").eq(elemIndex),"istabCurrent");
    },
    changeTab:function(e){
        var elemIndex=this.setNowTab(e);
        this.changeClass(elemIndex);
    },
    autoPlayTab:function(){
        var _self=this;
        if(this.timer){
            return false
        }
        console.log(142,this);
        this.timer=setInterval(function(){
            var elemIndex=_self.setNowTab();
            _self.changeClass(elemIndex);
            console.log(147,_self)
        },1000)
    }

};
var tab1=new Tab({root:"#tab1",autoPlay:false});
var tab2=new Tab({root:"#tab2",autoPlay:true});
