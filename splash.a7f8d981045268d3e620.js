!function(){var i={2618:function(i,e,o){"use strict";var t=o(9601),n=o.n(t),a=o(2609),r=o.n(a)()(n());r.push([i.id,"#splash_screen{display:flex;justify-content:center;width:100%;height:100%;pointer-events:none}@media(orientation: landscape){.voodoo_logo{width:33vw;height:calc(100% - 22px);transform:rotate(-90deg)}}@media(orientation: portrait){.voodoo_logo{width:33vh;height:calc(100% - 22px)}}.voodoo_logo_portrait_mode_on_desktop{width:33vw;height:calc(100% - 22px)}.fade-in-splash{opacity:1;animation-name:fadeInOpacity;animation-iteration-count:1;animation-duration:.7s}.fade-out-splash{animation-name:fadeOutOpacity;animation-iteration-count:1;animation-duration:.7s;opacity:0}@keyframes fadeInOpacity{0%{opacity:0}100%{opacity:1}}@keyframes fadeOutOpacity{0%{opacity:1}100%{opacity:0}}",""]),e.Z=r},2609:function(i){"use strict";i.exports=function(i){var e=[];return e.toString=function(){return this.map((function(e){var o="",t=void 0!==e[5];return e[4]&&(o+="@supports (".concat(e[4],") {")),e[2]&&(o+="@media ".concat(e[2]," {")),t&&(o+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),o+=i(e),t&&(o+="}"),e[2]&&(o+="}"),e[4]&&(o+="}"),o})).join("")},e.i=function(i,o,t,n,a){"string"==typeof i&&(i=[[null,i,void 0]]);var r={};if(t)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(r[c]=!0)}for(var l=0;l<i.length;l++){var d=[].concat(i[l]);t&&r[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),o&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=o):d[2]=o),n&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=n):d[4]="".concat(n)),e.push(d))}},e}},9601:function(i){"use strict";i.exports=function(i){return i[1]}},6062:function(i){"use strict";var e=[];function o(i){for(var o=-1,t=0;t<e.length;t++)if(e[t].identifier===i){o=t;break}return o}function t(i,t){for(var a={},r=[],s=0;s<i.length;s++){var c=i[s],l=t.base?c[0]+t.base:c[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=o(u),b={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(b);else{var w=n(b,t);t.byIndex=s,e.splice(s,0,{identifier:u,updater:w,references:1})}r.push(u)}return r}function n(i,e){var o=e.domAPI(e);o.update(i);return function(e){if(e){if(e.css===i.css&&e.media===i.media&&e.sourceMap===i.sourceMap&&e.supports===i.supports&&e.layer===i.layer)return;o.update(i=e)}else o.remove()}}i.exports=function(i,n){var a=t(i=i||[],n=n||{});return function(i){i=i||[];for(var r=0;r<a.length;r++){var s=o(a[r]);e[s].references--}for(var c=t(i,n),l=0;l<a.length;l++){var d=o(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=c}}},6793:function(i){"use strict";var e={};i.exports=function(i,o){var t=function(i){if(void 0===e[i]){var o=document.querySelector(i);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(i){o=null}e[i]=o}return e[i]}(i);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(o)}},1173:function(i){"use strict";i.exports=function(i){var e=document.createElement("style");return i.setAttributes(e,i.attributes),i.insert(e,i.options),e}},7892:function(i,e,o){"use strict";i.exports=function(i){var e=o.nc;e&&i.setAttribute("nonce",e)}},4036:function(i){"use strict";i.exports=function(i){var e=i.insertStyleElement(i);return{update:function(o){!function(i,e,o){var t="";o.supports&&(t+="@supports (".concat(o.supports,") {")),o.media&&(t+="@media ".concat(o.media," {"));var n=void 0!==o.layer;n&&(t+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),t+=o.css,n&&(t+="}"),o.media&&(t+="}"),o.supports&&(t+="}");var a=o.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(t,i,e.options)}(e,i,o)},remove:function(){!function(i){if(null===i.parentNode)return!1;i.parentNode.removeChild(i)}(e)}}}},2464:function(i){"use strict";i.exports=function(i,e){if(e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}},6353:function(i,e,o){var t;!function(n,a){"use strict";var r="function",s="undefined",c="object",l="string",d="model",u="name",p="type",b="vendor",w="version",m="architecture",f="console",h="mobile",v="tablet",g="smarttv",x="wearable",y="embedded",k="Amazon",_="Apple",S="ASUS",M="BlackBerry",T="Firefox",O="Google",z="Huawei",A="LG",C="Microsoft",P="Motorola",q="Opera",N="Samsung",j="Sony",E="Xiaomi",B="Zebra",F="Facebook",U=function(i){for(var e={},o=0;o<i.length;o++)e[i[o].toUpperCase()]=i[o];return e},L=function(i,e){return typeof i===l&&-1!==I(e).indexOf(I(i))},I=function(i){return i.toLowerCase()},V=function(i,e){if(typeof i===l)return i=i.replace(/^\s\s*/,"").replace(/\s\s*$/,""),typeof e===s?i:i.substring(0,255)},R=function(i,e){for(var o,t,n,s,l,d,u=0;u<e.length&&!l;){var p=e[u],b=e[u+1];for(o=t=0;o<p.length&&!l;)if(l=p[o++].exec(i))for(n=0;n<b.length;n++)d=l[++t],typeof(s=b[n])===c&&s.length>0?2===s.length?typeof s[1]==r?this[s[0]]=s[1].call(this,d):this[s[0]]=s[1]:3===s.length?typeof s[1]!==r||s[1].exec&&s[1].test?this[s[0]]=d?d.replace(s[1],s[2]):a:this[s[0]]=d?s[1].call(this,d,s[2]):a:4===s.length&&(this[s[0]]=d?s[3].call(this,d.replace(s[1],s[2])):a):this[s]=d||a;u+=2}},D=function(i,e){for(var o in e)if(typeof e[o]===c&&e[o].length>0){for(var t=0;t<e[o].length;t++)if(L(e[o][t],i))return"?"===o?a:o}else if(L(e[o],i))return"?"===o?a:o;return i},Z={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},H={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[w,[u,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[w,[u,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[u,w],[/opios[\/ ]+([\w\.]+)/i],[w,[u,"Opera Mini"]],[/\bopr\/([\w\.]+)/i],[w,[u,q]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([-\w\.]+)/i,/(weibo)__([\d\.]+)/i],[u,w],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[w,[u,"UCBrowser"]],[/\bqbcore\/([\w\.]+)/i],[w,[u,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[w,[u,"WeChat"]],[/konqueror\/([\w\.]+)/i],[w,[u,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[w,[u,"IE"]],[/yabrowser\/([\w\.]+)/i],[w,[u,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[u,/(.+)/,"$1 Secure Browser"],w],[/\bfocus\/([\w\.]+)/i],[w,[u,"Firefox Focus"]],[/\bopt\/([\w\.]+)/i],[w,[u,"Opera Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[w,[u,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[w,[u,"Dolphin"]],[/coast\/([\w\.]+)/i],[w,[u,"Opera Coast"]],[/miuibrowser\/([\w\.]+)/i],[w,[u,"MIUI Browser"]],[/fxios\/([-\w\.]+)/i],[w,[u,T]],[/\bqihu|(qi?ho?o?|360)browser/i],[[u,"360 Browser"]],[/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],[[u,/(.+)/,"$1 Browser"],w],[/(comodo_dragon)\/([\w\.]+)/i],[[u,/_/g," "],w],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[u,w],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i],[u],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[u,F],w],[/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/ ]([-\w\.]+)/i],[u,w],[/\bgsa\/([\w\.]+) .*safari\//i],[w,[u,"GSA"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[w,[u,"Chrome Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[u,"Chrome WebView"],w],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[w,[u,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[u,w],[/version\/([\w\.]+) .*mobile\/\w+ (safari)/i],[w,[u,"Mobile Safari"]],[/version\/([\w\.]+) .*(mobile ?safari|safari)/i],[w,u],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[u,[w,D,{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\/([\w\.]+)/i],[u,w],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[u,"Netscape"],w],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[w,[u,"Firefox Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i],[u,w]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[m,"amd64"]],[/(ia32(?=;))/i],[[m,I]],[/((?:i[346]|x)86)[;\)]/i],[[m,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[m,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[m,"armhf"]],[/windows (ce|mobile); ppc;/i],[[m,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[m,/ower/,"",I]],[/(sun4\w)[;\)]/i],[[m,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[m,I]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[d,[b,N],[p,v]],[/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[d,[b,N],[p,h]],[/\((ip(?:hone|od)[\w ]*);/i],[d,[b,_],[p,h]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[d,[b,_],[p,v]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[d,[b,z],[p,v]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}-[atu]?[ln][01259x][012359][an]?)\b(?!.+d\/s)/i],[d,[b,z],[p,h]],[/\b(poco[\w ]+)(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[d,/_/g," "],[b,E],[p,h]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[d,/_/g," "],[b,E],[p,v]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[d,[b,"OPPO"],[p,h]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[d,[b,"Vivo"],[p,h]],[/\b(rmx[12]\d{3})(?: bui|;|\))/i],[d,[b,"Realme"],[p,h]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[d,[b,P],[p,h]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[d,[b,P],[p,v]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[d,[b,A],[p,v]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[d,[b,A],[p,h]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[d,[b,"Lenovo"],[p,v]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[d,/_/g," "],[b,"Nokia"],[p,h]],[/(pixel c)\b/i],[d,[b,O],[p,v]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[d,[b,O],[p,h]],[/droid.+ ([c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[d,[b,j],[p,h]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[d,"Xperia Tablet"],[b,j],[p,v]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[d,[b,"OnePlus"],[p,h]],[/(alexa)webm/i,/(kf[a-z]{2}wi)( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[d,[b,k],[p,v]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[d,/(.+)/g,"Fire Phone $1"],[b,k],[p,h]],[/(playbook);[-\w\),; ]+(rim)/i],[d,b,[p,v]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[d,[b,M],[p,h]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[d,[b,S],[p,v]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[d,[b,S],[p,h]],[/(nexus 9)/i],[d,[b,"HTC"],[p,v]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic|sony)[-_ ]?([-\w]*)/i],[b,[d,/_/g," "],[p,h]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[d,[b,"Acer"],[p,v]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[d,[b,"Meizu"],[p,h]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[d,[b,"Sharp"],[p,h]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[b,d,[p,h]],[/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[b,d,[p,v]],[/(surface duo)/i],[d,[b,C],[p,v]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[d,[b,"Fairphone"],[p,h]],[/(u304aa)/i],[d,[b,"AT&T"],[p,h]],[/\bsie-(\w*)/i],[d,[b,"Siemens"],[p,h]],[/\b(rct\w+) b/i],[d,[b,"RCA"],[p,v]],[/\b(venue[\d ]{2,7}) b/i],[d,[b,"Dell"],[p,v]],[/\b(q(?:mv|ta)\w+) b/i],[d,[b,"Verizon"],[p,v]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[d,[b,"Barnes & Noble"],[p,v]],[/\b(tm\d{3}\w+) b/i],[d,[b,"NuVision"],[p,v]],[/\b(k88) b/i],[d,[b,"ZTE"],[p,v]],[/\b(nx\d{3}j) b/i],[d,[b,"ZTE"],[p,h]],[/\b(gen\d{3}) b.+49h/i],[d,[b,"Swiss"],[p,h]],[/\b(zur\d{3}) b/i],[d,[b,"Swiss"],[p,v]],[/\b((zeki)?tb.*\b) b/i],[d,[b,"Zeki"],[p,v]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[b,"Dragon Touch"],d,[p,v]],[/\b(ns-?\w{0,9}) b/i],[d,[b,"Insignia"],[p,v]],[/\b((nxa|next)-?\w{0,9}) b/i],[d,[b,"NextBook"],[p,v]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[b,"Voice"],d,[p,h]],[/\b(lvtel\-)?(v1[12]) b/i],[[b,"LvTel"],d,[p,h]],[/\b(ph-1) /i],[d,[b,"Essential"],[p,h]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[d,[b,"Envizen"],[p,v]],[/\b(trio[-\w\. ]+) b/i],[d,[b,"MachSpeed"],[p,v]],[/\btu_(1491) b/i],[d,[b,"Rotor"],[p,v]],[/(shield[\w ]+) b/i],[d,[b,"Nvidia"],[p,v]],[/(sprint) (\w+)/i],[b,d,[p,h]],[/(kin\.[onetw]{3})/i],[[d,/\./g," "],[b,C],[p,h]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[d,[b,B],[p,v]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[d,[b,B],[p,h]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[b,d,[p,f]],[/droid.+; (shield) bui/i],[d,[b,"Nvidia"],[p,f]],[/(playstation [345portablevi]+)/i],[d,[b,j],[p,f]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[d,[b,C],[p,f]],[/smart-tv.+(samsung)/i],[b,[p,g]],[/hbbtv.+maple;(\d+)/i],[[d,/^/,"SmartTV"],[b,N],[p,g]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[b,A],[p,g]],[/(apple) ?tv/i],[b,[d,"Apple TV"],[p,g]],[/crkey/i],[[d,"Chromecast"],[b,O],[p,g]],[/droid.+aft(\w)( bui|\))/i],[d,[b,k],[p,g]],[/\(dtv[\);].+(aquos)/i],[d,[b,"Sharp"],[p,g]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i],[[b,V],[d,V],[p,g]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[p,g]],[/((pebble))app/i],[b,d,[p,x]],[/droid.+; (glass) \d/i],[d,[b,O],[p,x]],[/droid.+; (wt63?0{2,3})\)/i],[d,[b,B],[p,x]],[/(quest( 2)?)/i],[d,[b,F],[p,x]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[b,[p,y]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[d,[p,h]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[d,[p,v]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[p,v]],[/(phone|mobile(?:[;\/]| safari)|pda(?=.+windows ce))/i],[[p,h]],[/(android[-\w\. ]{0,9});.+buil/i],[d,[b,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[w,[u,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[w,[u,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i],[u,w],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[w,u]],os:[[/microsoft (windows) (vista|xp)/i],[u,w],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[u,[w,D,Z]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[u,"Windows"],[w,D,Z]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/cfnetwork\/.+darwin/i],[[w,/_/g,"."],[u,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[u,"Mac OS"],[w,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86)/i],[w,u],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[u,w],[/\(bb(10);/i],[w,[u,M]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[w,[u,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[w,[u,"Firefox OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[w,[u,"webOS"]],[/crkey\/([\d\.]+)/i],[w,[u,"Chromecast"]],[/(cros) [\w]+ ([\w\.]+\w)/i],[[u,"Chromium OS"],w],[/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[u,w],[/(sunos) ?([\w\.\d]*)/i],[[u,"Solaris"],w],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,/(unix) ?([\w\.]*)/i],[u,w]]},W=function(i,e){if(typeof i===c&&(e=i,i=a),!(this instanceof W))return new W(i,e).getResult();var o=i||(typeof n!==s&&n.navigator&&n.navigator.userAgent?n.navigator.userAgent:""),t=e?function(i,e){var o={};for(var t in i)e[t]&&e[t].length%2==0?o[t]=e[t].concat(i[t]):o[t]=i[t];return o}(H,e):H;return this.getBrowser=function(){var i,e={};return e.name=a,e.version=a,R.call(e,o,t.browser),e.major=typeof(i=e.version)===l?i.replace(/[^\d\.]/g,"").split(".")[0]:a,e},this.getCPU=function(){var i={};return i.architecture=a,R.call(i,o,t.cpu),i},this.getDevice=function(){var i={};return i.vendor=a,i.model=a,i.type=a,R.call(i,o,t.device),i},this.getEngine=function(){var i={};return i.name=a,i.version=a,R.call(i,o,t.engine),i},this.getOS=function(){var i={};return i.name=a,i.version=a,R.call(i,o,t.os),i},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return o},this.setUA=function(i){return o=typeof i===l&&i.length>255?V(i,255):i,this},this.setUA(o),this};W.VERSION="1.0.2",W.BROWSER=U([u,w,"major"]),W.CPU=U([m]),W.DEVICE=U([d,b,p,f,h,g,v,x,y]),W.ENGINE=W.OS=U([u,w]),typeof e!==s?(i.exports&&(e=i.exports=W),e.UAParser=W):o.amdO?(t=function(){return W}.call(e,o,e,i))===a||(i.exports=t):typeof n!==s&&(n.UAParser=W);var G=typeof n!==s&&(n.jQuery||n.Zepto);if(G&&!G.ua){var $=new W;G.ua=$.getResult(),G.ua.get=function(){return $.getUA()},G.ua.set=function(i){$.setUA(i);var e=$.getResult();for(var o in e)G.ua[o]=e[o]}}}("object"==typeof window?window:this)},8492:function(i){"use strict";i.exports=JSON.parse('{"extensions":{"physics2dDebugger":{"enabled":false},"physics3dDebugger":{"enabled":false},"legologger":{"enabled":false},"stats":{"enabled":false,"panel":0},"gui":{"enabled":false}},"orientation":"portrait","size":{"ratio":{"min":0.42,"max":0.74},"portrait":{"width":750,"height":750},"landscape":{"width":750,"height":750}},"compression":{"images":{"assets/**/*.jpeg":{"quant":{"numColors":128,"dither":1},"mozjpeg":{"quality":40}},"assets/**/*.jpg":{"quant":{"numColors":128,"dither":1},"mozjpeg":{"quality":40}},"assets/**/*.png":{"quant":{"numColors":256,"dither":1},"oxipng":{"level":1}}},"sounds":{"assets/**/*.mp3":{"bitrate":32}}},"params":{"language":"en"},"load":{"main":{"generic":{"sounds":[],"fonts":["AeroMaticsDisplay"]},"pixi":{"atlases":["main"],"images":[],"sounds":[],"spines":[],"fonts":[]},"three":{"models":["saw-basic","saw-unicorn","saw-superhero"],"textures":["grass","half-grass-1","half-grass-2","half-grass-3","half-grass-4","sand","grey-checker","sky","hand","saw-unicorn-01","saw-unicorn-02","saw-superhero","arm-unicorn","arm-superhero"]}},"extra":{"generic":{"sounds":["out-of-fuel","level-completed","tap","dig-0","dig-1","dig-2","dig-3","dig-4"]},"pixi":{"atlases":["extra"],"sounds":[],"images":[],"spines":[],"fonts":{}},"three":{"models":[],"textures":["coin-025","coin-05","coin-1","coin-3","coin-5"]}}}}')}},e={};function o(t){var n=e[t];if(void 0!==n)return n.exports;var a=e[t]={id:t,exports:{}};return i[t].call(a.exports,a,a.exports,o),a.exports}o.amdO={},o.n=function(i){var e=i&&i.__esModule?function(){return i.default}:function(){return i};return o.d(e,{a:e}),e},o.d=function(i,e){for(var t in e)o.o(e,t)&&!o.o(i,t)&&Object.defineProperty(i,t,{enumerable:!0,get:e[t]})},o.o=function(i,e){return Object.prototype.hasOwnProperty.call(i,e)},o.nc=void 0,function(){"use strict";var i=o(6062),e=o.n(i),t=o(4036),n=o.n(t),a=o(6793),r=o.n(a),s=o(7892),c=o.n(s),l=o(1173),d=o.n(l),u=o(2464),p=o.n(u),b=o(2618),w={};w.styleTagTransform=p(),w.setAttributes=c(),w.insert=r().bind(null,"head"),w.domAPI=n(),w.insertStyleElement=d();e()(b.Z,w),b.Z&&b.Z.locals&&b.Z.locals;var m=/iPhone/i,f=/iPod/i,h=/iPad/i,v=/\biOS-universal(?:.+)Mac\b/i,g=/\bAndroid(?:.+)Mobile\b/i,x=/Android/i,y=/(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,k=/Silk/i,_=/Windows Phone/i,S=/\bWindows(?:.+)ARM\b/i,M=/BlackBerry/i,T=/BB10/i,O=/Opera Mini/i,z=/\b(CriOS|Chrome)(?:.+)Mobile/i,A=/Mobile(?:.+)Firefox\b/i,C=function(i){return void 0!==i&&"MacIntel"===i.platform&&"number"==typeof i.maxTouchPoints&&i.maxTouchPoints>1&&"undefined"==typeof MSStream};var P=o(6353);let q,N,j,E,B,F,U,L,I,V,R,D;!function(i){i[i.north=0]="north",i[i.south=1]="south",i[i.east=2]="east",i[i.west=3]="west"}(q||(q={})),function(i){i.landscape="landscape",i.portrait="portrait"}(N||(N={})),function(i){i.desktop="desktop",i.mobile="mobile"}(j||(j={})),function(i){i.fat="fat",i.normal="normal",i.tall="tall"}(E||(E={})),function(i){i[i.light=30]="light",i[i.medium=48.5410196625]="medium",i[i.heavy=78.54101966250705]="heavy",i[i.extreme=127.08203932501846]="extreme"}(B||(B={})),function(i){i[i.wall=0]="wall",i[i.crusher=1]="crusher",i[i.collector=2]="collector",i[i.coins=3]="coins",i[i.camera=4]="camera"}(F||(F={})),function(i){i.user="user",i.crusher="crusher",i.statistics="statistics",i.skins="skins"}(U||(U={})),function(i){i.base="base",i.simple="simple",i.head="head"}(L||(L={})),function(i){i.idle="idle",i.shopUpgrades="shopUpgrades",i.shopSkins="shopSkins",i.play="play"}(I||(I={})),function(i){i.idle="idle",i.play="play",i.reviving="reviving",i.complete="complete"}(V||(V={})),function(i){i.abort="abort",i.clear="clear",i.outOfFuel="outOfFuel"}(R||(R={})),function(i){i.coin0="coin0",i.coin1="coin1",i.coin2="coin2",i.coin3="coin3",i.coin4="coin4"}(D||(D={}));Object.freeze({coin0:.25,coin1:.5,coin2:1,coin3:3,coin4:5});let Z,H,W;!function(i){i[i.settings=0]="settings",i[i.outOfFuel=1]="outOfFuel",i[i.levelCompleted=2]="levelCompleted",i[i.failedOffBoarding=3]="failedOffBoarding",i[i.abort=4]="abort",i[i.skinUnlock=5]="skinUnlock"}(Z||(Z={})),function(i){i.unknown="unknown",i.init="init",i.show="show",i.idle="idle",i.hide="hide",i.destroy="destroy"}(H||(H={})),function(i){i.idle="idle",i.warning="warning",i.outOfFuel="outOfFuel"}(W||(W={}));const{box2d:G,analytics:$,splashScreen:X}=window.globals;var J=o(8492);const K=()=>function(i){var e={userAgent:"",platform:"",maxTouchPoints:0};i||"undefined"==typeof navigator?"string"==typeof i?e.userAgent=i:i&&i.userAgent&&(e={userAgent:i.userAgent,platform:i.platform,maxTouchPoints:i.maxTouchPoints||0}):e={userAgent:navigator.userAgent,platform:navigator.platform,maxTouchPoints:navigator.maxTouchPoints||0};var o=e.userAgent,t=o.split("[FBAN");void 0!==t[1]&&(o=t[0]),void 0!==(t=o.split("Twitter"))[1]&&(o=t[0]);var n=function(i){return function(e){return e.test(i)}}(o),a={apple:{phone:n(m)&&!n(_),ipod:n(f),tablet:!n(m)&&(n(h)||C(e))&&!n(_),universal:n(v),device:(n(m)||n(f)||n(h)||n(v)||C(e))&&!n(_)},amazon:{phone:n(y),tablet:!n(y)&&n(k),device:n(y)||n(k)},android:{phone:!n(_)&&n(y)||!n(_)&&n(g),tablet:!n(_)&&!n(y)&&!n(g)&&(n(k)||n(x)),device:!n(_)&&(n(y)||n(k)||n(g)||n(x))||n(/\bokhttp\b/i)},windows:{phone:n(_),tablet:n(S),device:n(_)||n(S)},other:{blackberry:n(M),blackberry10:n(T),opera:n(O),firefox:n(A),chrome:n(z),device:n(M)||n(T)||n(O)||n(A)||n(z)},any:!1,phone:!1,tablet:!1};return a.any=a.apple.device||a.android.device||a.windows.device||a.other.device,a.phone=a.apple.phone||a.android.phone||a.windows.phone,a.tablet=a.apple.tablet||a.android.tablet||a.windows.tablet,a}().any,Q=(i,e)=>window.matchMedia("(orientation: portrait)").matches?e:window.matchMedia("(orientation: landscape)").matches?i:e;Math.PI,Math.PI,(new P.UAParser).getResult();window.globals.splashScreen=new class{constructor(){var i,e,o;o=void 0,(e="_splash")in(i=this)?Object.defineProperty(i,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):i[e]=o,this._splash=document.getElementById("splash_screen"),this._splash.innerHTML='\n<svg id="voodoo_logo" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"\nxmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 307.9 62"\nstyle="enable-background:new 0 0 307.9 62;" xml:space="preserve">\n<style type="text/css">\n    .stVoodoo {\n        fill: #FFFFFF;\n    }\n</style>\n<g>\n    <path class="stVoodoo" d="M52.3,39c0-12.6,10.8-22.9,23.9-22.9s24.1,10.4,24.1,22.9c0,12.8-10.9,23-24.1,23S52.3,51.8,52.3,39z M64.1,39\nc0,7.3,5.2,12.6,12.1,12.6S88.3,46.2,88.3,39c0-6.7-5.4-12.1-12.1-12.1S64.1,32.3,64.1,39z" />\n    <path class="stVoodoo" d="M104.1,39c0-12.6,10.8-22.9,23.9-22.9s24,10.4,24,22.9c0,12.8-10.9,23-24.1,23S104.1,51.8,104.1,39z M115.8,39\nc0,7.3,5.2,12.6,12.1,12.6c6.9,0,12.1-5.4,12.1-12.6c0-6.7-5.4-12.1-12.1-12.1S115.9,32.3,115.8,39z" />\n    <path class="stVoodoo" d="M208.2,39c0-12.6,10.8-22.9,23.9-22.9s24.1,10.4,24.1,22.9c0,12.8-10.9,23-24.1,23S208.2,51.8,208.2,39z\nM220,39c0,7.3,5.2,12.6,12.1,12.6s12.1-5.4,12.1-12.6c0-6.7-5.4-12.1-12.1-12.1S220,32.3,220,39z" />\n    <path class="stVoodoo" d="M260,39c0-12.6,10.7-22.9,23.9-22.9s24,10.4,24,22.9c0,12.8-10.9,23-24.1,23S260,51.8,260,39z M271.8,39\nc0,7.3,5.2,12.6,12.1,12.6S296,46.2,296,39c0-6.7-5.4-12.1-12.1-12.1C277.2,26.9,271.8,32.3,271.8,39L271.8,39z" />\n    <path class="stVoodoo" d="M30.3,42.8L12.6,0H0l25.1,61h10.4L60.8,0H48L30.3,42.8z" />\n    <path class="stVoodoo" d="M192,1.9v17.5c-3.7-2.1-7.9-3.2-12.2-3.2c-13.2,0-23.9,10.4-23.9,22.9c0,12.8,10.7,23,23.9,23\nc4.3,0,8.5-1.1,12.2-3.2V61h11.9V1.8L192,1.9z M179.8,51.6c-6.9,0-12.1-5.3-12.1-12.6c0-6.7,5.4-12.1,12.1-12.1s12.1,5.4,12.1,12.1\nC191.9,46.2,186.6,51.6,179.8,51.6L179.8,51.6z" />\n</g>\n</svg>\n',this._setLogoStyle(),this.show()}async show(){this._splash.classList.add("fade-in-splash")}async hide(){return new Promise((i=>{this._splash.classList.add("fade-out-splash"),setTimeout((()=>{i(),document.body.removeChild(this._splash)}),750)}))}_setLogoStyle(){const i=K()||Q(N.landscape,N.portrait)!==N.landscape||J.orientation!==N.portrait?"voodoo_logo":"voodoo_logo_portrait_mode_on_desktop";document.getElementById("voodoo_logo").classList.add(i)}}}()}();