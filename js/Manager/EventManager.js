var EventManager=(function(_super)
{function EventManager(){EventManager.super(this);}
Laya.class(EventManager,"EventManager",_super);EventManager.EventDispatcher=new Laya.EventDispatcher();EventManager.Event=function(strEvent,agv){EventManager.EventDispatcher.event(strEvent,agv);}
EventManager.On=function(strEvent,caller,listener,arg){EventManager.EventDispatcher.on(strEvent,caller,listener,(arg==null)?null:([arg]));}
EventManager.Off=function(strEvent,caller,listener){EventManager.EventDispatcher.off(strEvent,caller,listener);}
return EventManager;})(Laya.EventDispatcher);var Notifition={UpdateScore:0,UpdateLife:1,UpdateItem:2,UpdateKnife:3,SetKnife:4,UpdateBuff:5,GetLottery:6};