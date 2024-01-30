(function(){Lottery=function()
{var date=getToday();var config=deepClone(giftConfig);var reward=[];var record=localStorage.getItem("lottery")?JSON.parse(localStorage.getItem("lottery")):{};for(var key in record)
{if(key!=date)
{record[key]=null;}}
if(!record[date])
record[date]={};for(var key in config)
{let con=config[key];if(con)
{if(!con.max||!record[date][key]||record[date][key]<con.max)
{reward.push([key,con.chance]);}}}
var max=0;var chance=[];for(var i=0;i<reward.length;i++)
{max+=reward[i][1];chance.push(max);}
var index=0;var random=Math.random()*max;for(var i=0;i<chance.length;i++)
{if(random<=chance[i])
{index=i;break;}}
var conindex=parseInt(reward[index][0]);var times=(record[date][conindex]?record[date][conindex]:0)+1;if(!record[date])
record[date]={};record[date][conindex]=times;record=JSON.stringify(record);localStorage.setItem("lottery",record);var awd=config[conindex].awd;g_EventMgr.Event(Notifition.GetLottery,[awd]);if(awd){for(var key in awd)
{switch(key)
{case "money":g_NetWorkMgr.AddItem(1,awd[key]);break;case "diamond":g_NetWorkMgr.AddItem(2,awd[key]);break;case "item":g_NetWorkMgr.AddItem(3,awd[key]);break;}}}}
const getToday=()=>{const date=new Date();return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();}}());