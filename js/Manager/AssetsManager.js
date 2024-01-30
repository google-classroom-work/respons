FruitGame.AssetsManager=function()
{SPP.EventDispatcher.call(this);var _this=this,i=0,j=0;var fruitsDir="fruits/";var fruitStateLabels=["w","l","r"];var fruitImageType=".png";this.fruitsObj={};this.fruitsArray=[];this.images={};this.sounds={};var handleComplete=function()
{console.log("资源加载完成");var fruits=FruitGame.assets.fruits;for(i=0;i<fruits.length;i++)
{var obj={};for(j=0;j<fruitStateLabels.length;j++)
{obj[fruitStateLabels[j]]=Laya.loader.getRes(fruitsDir+fruits[i]+"-"+fruitStateLabels[j]+fruitImageType);}
obj.name=fruits[i];g_AssetsMgr.fruitsArray.push(obj);g_AssetsMgr.fruitsObj[fruits[i]]=obj;}
var other=FruitGame.assets.other;for(i=0;i<other.length;i++)
{g_AssetsMgr[other[i].id]=Laya.loader.getRes(other[i].src);};_this.dispatchEvent(new SPP.Event("complete"));};this.start=function()
{var fruits=FruitGame.assets.fruits;var other=[];var fruitsArr=[];for(i=0;i<fruits.length;i++)
{for(j=0;j<fruitStateLabels.length;j++)
{fruitsArr.push({id:fruits[i]+fruitStateLabels[j],src:fruitsDir+fruits[i]+"-"+fruitStateLabels[j]+fruitImageType});}};var assetsArr=[];var assetsLoadArr=[];for(i=0;i<assetsArr.length;i++)
{if(assetsArr[i])
assetsLoadArr.push(assetsArr[i].src);}
var res=Laya.ResourceVersion.manifest;var ui=FruitGame.assets.ui;var url;for(i=0;i<ui.length;i++)
{url=ui[i];assetsLoadArr.push(url);}
var atlas=FruitGame.assets.atlas;for(i=0;i<atlas.length;i++)
{url=atlas[i];assetsLoadArr.push(url);}
var music=FruitGame.assets.music;for(i=0;i<music.length;i++)
{url=music[i];assetsLoadArr.push(url);}
registerBitmapFont("bitmapFont/num30.fnt","num30");registerBitmapFont("bitmapFont/num45.fnt","num45");registerBitmapFont("bitmapFont/num50.fnt","num50");registerBitmapFont("bitmapFont/num70.fnt","num70");Laya.Sprite3D.load("eff/eff_wujiaoxing.lh")
Laya.Sprite3D.load("eff/eff_zhadan.lh")
if(Laya.Browser.window.PlatformAPI.platform=="FBInstant"){Laya.loader.load(assetsLoadArr,Handler.create(null,()=>{Laya.Browser.window.PlatformAPI.startGameAsync().then(handleComplete);}),Handler.create(null,(progress)=>{Laya.Browser.window.PlatformAPI.setLoadingProgress(Math.floor(progress*100));}));}else{Laya.loader.load(assetsLoadArr,Handler.create(null,handleComplete));}};this.getRandomFruit=function(type=1)
{var fruit=this.fruitsArray[this.fruitsArray.length*Math.random()>>0];var config=JSON.parse(JSON.stringify(fruitConfig[fruit.name]));if(config.type==type){if(fruit.name&&fruit.w)
{if((g_GameData.gameState==GAME_PLAYING&&(!config.scene||config.scene.indexOf(g_GameData.model)>-1))||g_GameData.gameState!=GAME_PLAYING)
{return fruit;}else{return this.getRandomFruit(type);}}
else
return this.getRandomFruit(type);}else{return this.getRandomFruit(type);}};};SPP.inherit(FruitGame.AssetsManager,SPP.EventDispatcher);