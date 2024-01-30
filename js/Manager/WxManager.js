FruitGame.WxManager=function()
{var wx=Laya.Browser.window.wx;this.bWx=true
this.Init=function()
{wx.showShareMenu({withShareTicket:!0});var sharedata=SSSGameConfig.getRandomShareUnit();wx.onShareAppMessage(function(){return{title:sharedata.title,imageUrl:sharedata.imageUrl,query:"uid="+g_PlayerData.uid};});}
this.PostMessage=function(message,caller,callback)
{if(wx!=undefined){let openDataContext=wx.getOpenDataContext();openDataContext.postMessage(message);if(callback){Laya.timer.once(400,this,function(){if(caller==null||caller==undefined){callback(message);}else{caller.callback(message);}});}}}
this.SendUserData=function(data)
{if(wx!=undefined){wx.setUserCloudStorage({KVDataList:[{key:"score",value:String(data.score)},{key:"updateTime",value:String(new Date().getTime())}],success:function(){},fail:function(){}});}}
this.ShareGame=function(type,callback)
{if(wx!=undefined){wx.updateShareMenu({withShareTicket:type==2,success:function(){var sharedata=SSSGameConfig.getRandomShareUnit();wx.shareAppMessage({title:sharedata.title,imageUrl:sharedata.imageUrl,query:g_PlayerData.uid,success:function(info){console.log("分享成功")
if(type==2){info.shareTickets&&callback();if(1)return;info.shareTickets?wx.getShareInfo({shareTicket:info.shareTickets[0],success:function(group){console.log("获取分享信息成功,开始解析");var t=group.iv,i=group.encryptedData;try{var n=c.decrypt(tywx.UserInfo.wxgame_session_key,t,i);if(console.log(n),n){n=JSON.parse(n);var r="";n.openGId&&(r=n.openGId),console.log("分享群ID:",r),null!=a&&a(r,c.shareTicket);}else s&&s();}catch(e){null!=a&&a(o.shareTickets[0],c.shareTicket);}}}):wx.showModal({title:'提示',content:'请分享到群!',});}}});}});}}
var decrypt=function(e,t,i){var n=l("crypto");i=new a(i,"base64"),t=new a(t,"base64"),e=new a(e,"base64");var r=n.createDecipheriv("aes-128-cbc",e,t),o=r.update(i,"binary","utf8");return o+=r.final("utf8");};};var RankType={Resize:0,Friend:1,Group:2,World:3,Page:4};