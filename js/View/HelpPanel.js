function HelpPanel()
{var Event=laya.events.Event;HelpPanel.super(this);var btnReturn;this.OpenPanel=function()
{btnReturn=CreateFruitButton(this.posReturn,g_AssetsMgr.zihuan,g_AssetsMgr.fanhuizhuye,this.onReturn,topContext);btnReturn.Show();this.ShowRender();}
this.ClosePanel=function()
{btnReturn.Hide();}
this.onReturn=function(){g_SceneMgr.ChangeScene("PreparePanel");}
this.ShowRender=function(data)
{this.list.vScrollBarSkin="";this.list.renderHandler=new Handler(this,onListRender);var data=[];for(var key in fruitConfig)
{if(key!="airbubbles"&&key!="gift")
data.push(key);}
this.list.array=data;};function onListRender(item,index)
{var name=item.dataSource;var data=fruitConfig[name];var txtDes=item.getChildByName("txtDes");txtDes.text=data.des;var imgHead=item.getChildByName("imgHead");imgHead.skin="fruits/"+name+"-w.png";}}
Laya.class(HelpPanel,"HelpPanel",HelpUI);