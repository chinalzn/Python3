(function(k,l,Q){try{var R=location.protocol.replace(/file/,"http"),S=navigator.userAgent.toLowerCase(),w=function(a,b){if(a)if(a.length>=0)for(var c=0,e=a.length;c<e;c++)b(c,a[c]);else for(c in a)b(c,a[c])},F=function(a,b){if(a&&b)for(var c in b)a[c]=b[c];return a},J=function(a){return(a=RegExp(a+"[ /](\\d+(\\.\\d+)?)","i").exec(S))?+a[1]:0},T=J("msie"),x=function(a){return a.replace(/^\s+|\s+$/g,"")},K=function(a){if(typeof a=="object")return a;var b={};w(a.split(";"),function(a,e){var d=e.split("=");
b[d[0]]=d[1]});(k.aanParams=k.aanParams||{})[b.slot]=a;return b},L=function(a){return"DA"+a.replace(/([a-z])[a-z]+(-|$)/g,"$1")},G=function(a){var b=a.iframeId||a.c,c=a.c,e=a.a?decodeURIComponent(a.a):{},d=[],d=a.ifp?[b,e,c,a.ifp]:[b,e];U(d)},r=function(a){var b=V;a.marketplaceId=W;var c={};for(key in a)c[key]=encodeURIComponent(a[key]);a='{"programId":"DisplayAds","data":{"mysqlData":'+JSON.stringify(c)+"}}";c=k.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");c.open("POST",
b,!0);c.setRequestHeader("Content-Type","application/json;charset=UTF-8");c.send(a)},M=function(a){var b=a;b||(b="");for(var a=[],c=b.length,e=0;e<c;e++){var d=b.charCodeAt(e);d<128?a.push(d):(d<=2047?a.push(d>>6|192):(d<=65535?a.push(d>>12|224):d<=1114111?(a.push(d>>18|240),a.push(d>>12&63|128)):(d=65533,a.push(d>>12|224)),a.push(d>>6&63|128)),a.push(d&63|128))}for(var b="",c=a.length,e=0,h,f,i,m,u;e<c;)h=a[e++],d=a[e++],f=a[e++],i=h>>2,h=(h&3)<<4|d>>4,m=(d&15)<<2|f>>6,u=f&63,isNaN(d)?m=u=64:isNaN(f)&&
(u=64),b+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(i),b+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(h),b+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(m),b+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(u);return b};k.d16g_showFeedbackDialog=G;var j=function(a,b){return typeof a=="string"?(b||l).getElementById(a):a},v=function(a,b){return(b=j(b||l))?b.getElementsByTagName(a):
[]},s=function(a,b,c,e,d){a=(s[a]||(s[a]=l.createElement(a))).cloneNode(!0);F(a,b);q(a,c);e&&N(e,a,d);return a},q=function(a,b){var c=b.opacity;isNaN(c)||F(b,{filter:"alpha(opacity="+c*100+")",mozOpacity:b.opacity});(a=j(a))&&F(a.style,b)},N=function(a,b,c){a=j(a);b=j(b);a&&b&&(typeof c=="number"&&(c=j(a).childNodes[c]),a.insertBefore(b,c||null))},B=function(a){if(a=j(a)){var b=j(a).parentNode;b&&b.removeChild(a)}},t=function(a,b){if(a=j(a))a.innerHTML=b},H=function(a,b){if(a=j(a)){var c=0,e=0,d=
a;do c+=d.offsetLeft,e+=d.offsetTop;while(!b&&(d=d.offsetParent));return[c,e,a.clientWidth,a.clientHeight]}return[0,0,0,0]},p=function(a,b,c,e){if(a=j(a)){var d=function(h){if(h=h||k.event){var f=h.target||h.srcElement;if(f){if(e){var i=a,m=d;if(i=j(i))i.removeEventListener?i.removeEventListener(b,m,!1):i.detachEvent?i.detachEvent("on"+b,m):delete i["on"+b]}return c(h,f,d)}}};a.addEventListener?a.addEventListener(b,d,!1):a.attachEvent?a.attachEvent("on"+b,d):a["on"+b]=d;return d}},C=(R=="http:"?"//g-ecx.":
"//images-na.ssl-")+"images-amazon.com/images/G/01/",W="ATVPDKIKX0DER",V="//fls-na.amazon.com/1/ad-feedback/1/OE/",X=["Yes","No"];k.foresterRegion="na";var O=function(a,b,c,e){b=a.a?decodeURIComponent(a.a):{};b=K(b);inlineFeedback={};inlineFeedback.question=a.ifp.qt&&typeof a.ifp.qt==="string"?a.ifp.qt:"Is this ad appropriate?";inlineFeedback.options=X;inlineFeedback.ad={};inlineFeedback.ad.adId="";inlineFeedback.ad.adNetwork="";inlineFeedback.ad.creativeId="";inlineFeedback.ad.hostName="";if(typeof k.DAsf!==
"undefined"&&k.DAsf.isSafeframeAd(b.arid))inlineFeedback.ad=k.DAsf.getAdDetails(b.arid);t(c,"");var d=s("div",0,{top:"1px",font:"normal 12px Arial",display:"inline-block",verticalAlign:"middle"},c),h="",f="",i="margin-right:5px;",m="margin-right:5px;",u="",j="&nbsp;&nbsp;";if(a&&b&&b.slot&&b.slot=="auto-left-advertising"||a&&a.height&&a.width&&a.height==600&&a.width==160)h="<br>",u="margin-top:5px;",f="margin-top:2px;",i="margin-right:3px;",m="margin-right:10px;",j="<br>";var l="";l+='<label style="font:normal 12px Arial;vertical-align:middle;margin-right:5px;display:inline-block">'+
inlineFeedback.question+"</label>"+h;w(inlineFeedback.options,function(a,b){l+=e=="T1"||e=="T3"?'&nbsp<input type="button" name="ad-feedback-'+b+'" value="'+b+'" style="font:normal 11px Arial; margin-bottom:0;vertical-align:middle;'+f+'margin-right:5px">':'<input type="radio" name="ad-feedback-option" value="'+b+'" style="font:normal 11px Arial; margin-bottom:0;vertical-align:middle;'+i+'margin-top:2px"><label style="font:normal 11px Arial; margin-bottom:0;vertical-align:middle;'+u+m+' display:inline-block">'+
b+"</label>"});t(d,l);var o={impressionId:b.arid,pagetype:b.pt,pagesubtype:"",slot:b.slot,adId:inlineFeedback.ad.adId,adNet:inlineFeedback.ad.adNetwork,cid:inlineFeedback.ad.creativeId,hostName:inlineFeedback.ad.hostName,userAction:"widgetOpened"};o.treatmentType=a.ifp.wid+"-"+e;r(o);p(d,"click",function(b){var d=b.target?b.target:b.srcElement;if(d&&d.nodeName==="INPUT"){b="";a.ifp.at=d.value;t(c,"");d=s("div",0,{position:"absolute",top:"1px",left:0,font:"normal 12px Arial",display:"inline-block",
verticalAlign:"middle"},c);b+='<span style="position:relative">Thank you for your feedback.</span>'+j;t(d,b);b=s("a",0,{font:"normal 12px Arial",cursor:"pointer"},d);t(b,"Leave a comment");o.userAction="widgetSubmitted";o.questionGroupId="2";if(a.ifp.qid)o[a.ifp.qid]=a.ifp.at;r(o);p(b,"click",function(){o.treatmentType=a.ifp.wid+"-"+e+"; Comment link hit";o.userAction="widgetOpened";r(o);G(a)})}})};k.d16g_addFeedbackLink=function(a){var b=j(a).parentNode,c=b.ad||a,e=/nsm/.test(b.id),d=typeof c.fi===
"undefined"?!0:c.fi,h=typeof c.ifp==="undefined"?!1:c.ifp.sif,f=h&&c.ifp.wid&&c.ifp.tid?c.ifp.tid:"";c.iframeId=a.id.replace(/[^0-9]/g,"");c.c=c.c||c.iframeId;var i=T>0&&(!l.documentMode||l.documentMode<8);if(i&&h)h=!1,c.ifp.sif=0;var m='<b style="display:inline-block;vertical-align:top;margin:1px 0;width:14px;height:12px;background:url('+C+'productAds/ad_feedback_icon_1Xsprite.png)"></b>',u="0 -13px";i&&(m='<b style="display:inline-block;font-size:9px;vertical-align:top;margin:1px 0;width:12px;height:12px;background:url('+
C+'da/js/bubble._V1_.png)"></b>',u="0 -12px");var k,g;c.g&&c.g!="right"?(i=parseInt(a.width)+5+"px",k="0",g="Ad<br>"):(i="0px",k="4px",g="Ad ");var o=v("div",b)[0]||s("div",0,{position:e?"absolute":"relative",top:"2px",right:e?i:0,margin:0,height:e?"14px":"20px"},b);if(!v("a",o)[0]||!v("div",o)[0]){var z=s("a",0,{position:e?"relative":"absolute",top:e?0:"2px",right:e?k:"0px",display:"inline-block",font:"normal 11px Arial",color:"#0066C0",cursor:"pointer"},o);d?t(z,(e?g:"Ad feedback ")+m):t(z,e?g:
"Ad feedback ");p(z,"click",function(){h&&(f=="T1"||f=="T2")?O(c,a,o,f):G(c)});e=function(b){h&&(f=="T3"||f=="T4")?O(c,a,o,f):(b=/r/.test(b.type),q(z,{color:b?"#e47911":"#004b91",textDecoration:b?"underline":"none"}),q(v("b",z)[0],{backgroundPosition:b?u:"0 0"}))};p(z,"mouseover",e);p(z,"mouseout",e);h||e({})}c.isSafeframeGoldbox&&(q(b,{textAlign:"center"}),q(o,{margin:"0 auto",width:"900px"}))};var D=100;k.DAlocale="en_US";var P=function(a){var b="",c=g("a","Customer Service","font-size:10px",'id="DAcs"href=https://www.amazon.com/gp/help/customer/display.html?ie=UTF8&nodeId=508510'),
e=g("a","Amazon Advertising Programs","font-size:10px",'id="DAaap"href=http://www.amazon.com/advertising'),d=g("a","Interest-Based-Ads","font-size:10px",'id="DAiba"href=http://www.amazon.com/b/?&node=5160028011');b+=g("div",c,"padding:0 5px 0 0;display:inline-block; zoom:1; *display:inline; text-align:center");b+=g("div",e,"padding:0 5px;display:inline-block; zoom:1; *display:inline; text-align:center");b+=g("div",d,"padding:0 0 0 5px;display:inline-block; zoom:1; *display:inline; text-align:center");
return a?g("div",a.qt+" <b>"+a.at+"</b>")+I("<br>"+DA.ifText("afb18","<b>Comments</b>")+"",0,'id="DAfq"')+g("div","Feedback received! Thank you for your feedback on this ad. Over time, this information helps us to show more helpful ads.","display:none;font-weight:bold;padding:8px 0",'id="DAft"')+g("div",'<br><input type="button" id="DAcb" value="Cancel" style="position:relative;font:bold;left:130px;cursor:pointer"> <input type="button" id="DAfb" value="Send comments" style="position:relative;font:bold;left:130px;cursor:pointer">')+
g("div","<br>")+g("div",b,"margin-top:18px; text-align:center"):I(""+DA.choice("afb16","How relevant is this ad?","Relevant","Neutral","Not <br /> Relevant","1","2","3","4","5")+DA.choice("afb17","How appropriate is this ad for Amazon?","Appropriate","Neutral","Not <br />Appropriate","1","2","3","4","5")+DA.text("afb18","Additional comments:")+"",0,'id="DAfq"')+g("div","Feedback received! Thank you for your feedback on this ad. Over time, this information helps us to show more helpful ads.","display:none;font-weight:bold;padding:8px 0",
'id="DAft"')+g("div",'<span id="DAfb" style="display:inline-block;width:111px;height:32px;background:transparent url('+C+'da/js/sprite2.gif) no-repeat 0 5px;cursor:pointer"></span>',"text-align:center;margin-bottom:4px")+g("div",b,"margin-top:18px; text-align:center")};DA.choice=function(a,b,c,e,d){var h="180px",f="23px",i="255px",m="40px";DAlocale=="zh_CN"&&(h="200px",f="3px",i="225px",m="35px");var k=[].slice.call(arguments,5),j="";w(k,function(b,c){j+=n('<input type="radio" name="'+a+'" value="'+
c+'" tabindex="'+D++ +'">',"text-align:center;width:"+m)});return A(n(I(A(n(c,"font-weight:bold;font-size:8pt;vertical-align:bottom;width:33%;text-align:center;padding-top:0;padding-bottom:0")+n(e,"font-weight:bold;font-size:8pt;vertical-align:bottom;width:33%;text-align:center;padding-top:0;padding-bottom:0")+n(d,"font-weight:bold;font-size:8pt;vertical-align:bottom;width:33%;text-align:center;padding-top:0;padding-bottom:0")),"width:"+i+";float:right"),"padding:0",'colspan="8"'))+A(n(b,"text-align:left;width:"+
h)+n("","width:15px")+j+n("","width:"+f))};DA.text=function(a,b){return A(n(b+'<br><textarea name="'+a+'" style="width:427px;color:#999;border:solid 1px" onfocus="if(!this.X++){this.value=\'\';this.style.color=\'#000\'}" tabindex='+D++ +">Your comments will be aggregated and reviewed and not replied to directly.</textarea>",0,'colspan="8"'))};DA.ifText=function(a,b){return A(n(b+'<br><textarea name="'+a+'" style="width:427px;height:85px;color:#999;resize:vertical;border:solid 1px" onfocus="if(!this.X++){this.value=\'\';this.style.color=\'#000\'}" tabindex='+
D++ +">Your comments will be aggregated and reviewed and not replied to directly.</textarea>",0,'colspan="8"'))};DA.check=function(a,b,c){try{if(k.localStorage)return A(n('<div style="padding:12px 0"><label><input type="checkbox" name="'+a+'" value="'+c+'" tabIndex="'+D++ +'" style="margin:0"> '+b+"</label></div>",0,'colspan="8"'))}catch(e){}return""};var g=function(a,b,c,e){return"<"+a+" "+(e||"")+' style="font:normal 12px Verdana,Helvetica,Arial,sans-serif;'+(c||"")+'">'+(b||"")+"</"+a+">"},I=function(a,
b,c){return g("table",a,"border:0;border-collapse:collapse;"+(b||""),c)},A=function(a){return g("tr",a)},n=function(a,b,c){return g("td",a,"padding:5px 0;"+(b||""),c)},Y=function(a,b,c){clearTimeout(DA.pt);y();var e=J("MSIE"),d=e&&e<7,h=d||e&&l.compatMode=="BackCompat",f=function(a,b){var c="";w(b,function(b,d){c+=a.replace(/@/g,d)});return c},i=v("body")[0],m=s("div",{id:"DAf"},{position:h?"absolute":"fixed",zIndex:9999,width:"460px"},i);t(m,'<table width="100%" style="background:#fff;border-spacing:0;'+
(e&&e<9?"border:1px solid #999;border-collapse:collapse;filter:progid:DXImageTransform.Microsoft.Shadow(color='#333333',Direction=135,Strength=8)":"border:1px solid #bdf;"+f("@border-radius:7px;@box-shadow:0 3px 10px #333;",["","-webkit-","-moz-"]))+'"><tr><td id="DAfh" style="position:relative;background:#eaf3fe;border:1px solid #fff;border-bottom-color:#bdf;padding:6px 15px;'+f("border-top-@-radius:5px;-moz-border-radius-top@:5px;",["left","right"])+'font:bold 14px Verdana,Arial,Helvetica,sans-serif;cursor:move"><a href="#" onclick="return false" id="DAfx" style="position:absolute;display:block;right:0;padding:0 6px;font-weight:normal;font-size:12px;text-decoration:none;line-height:19px;cursor:pointer">Close<b style="display:inline-block;vertical-align:top;width:19px;height:19px;background:url('+
C+'da/js/sprite2.gif) -222px 0"></b></a>'+a+'</td></tr><tr><td id="DAfc" style="padding:6px 16px 20px 16px;font:normal 12px Verdana,Arial,Helvetica,sans-serif">'+b+"</td></tr></table>");a=H(m);b=function(a){return k["inner"+a]||l.compatMode=="CSS1Compat"&&l.documentElement["client"+a]||l.body["client"+a]};q(m,{left:(b("Width")-a[2])/2+(h?l.body.scrollLeft:0)+"px",top:Q.max(0,(b("Height")-a[3])/2+(h?l.body.scrollTop:0))+"px"});var g=m.cloneNode(!0);g.id="DAfk";g.style.zIndex=98;t(g,d?"<b></b>":'<iframe frameborder="0"></iframe>');
q(j(g).childNodes[0],{width:a[2]-4+"px",height:a[3]-4+"px",margin:"2px",background:"#fff"});N(i,g);p("DAfx","click",y);var n,r,o,d=j("DAfh");p(d,"mousedown",function(a){var b=H(m,1);r=b[0]-a.clientX;o=b[1]-a.clientY;n=1});p(l,"mouseup",function(){n=0});p(l,"mousemove",function(a){n&&(a={left:r+a.clientX+"px",top:o+a.clientY+"px"},q(m,a),q(g,a))});p(l,"keydown",function(a){a.keyCode==27&&y()});d.unselectable="on";d.onselectstart=function(){return!1};q(d,{MozUserSelect:"none"});c()},y=function(){B("DAfk");
B("DAf");return!1},Z=function(){var a=H("DAfq");s("div",0,{position:"absolute",opacity:0.5,background:"#ccc",width:a[2],height:a[3]},"DAfc",0);q("DAfb",{backgroundPosition:"-111px 5px"});q("DAft",{display:"block"})},E=DA.fasm=DA.fasm||{},U=function(a){var b=a[0],c=K(a[1]),e=a[2]||a[0],d=c.slot,h=a.length>3&&a[3].sif||!1,f={impressionId:c.arid,pagetype:c.pt,pagesubtype:"",slot:d,questionGroupId:2,screenRes:"h="+screen.height+",w="+screen.width,adContentId:e,cid:"",adId:"",adNet:"",hostName:"",userAction:"widgetOpened"};
try{if(typeof k.DAsf!=="undefined"&&k.DAsf.isSafeframeAd(c.arid)){var i=k.DAsf.getAdDetails(c.arid);if(typeof i==="object")f.cid=x(i.creativeId||""),f.adId=x(i.adId||""),f.adNet=x(i.adNetwork||""),f.hostName=x(i.hostName||"")}else{var g=j("DA"+b+"i").contentWindow,c=d+"adData";f.hostName=g.location.hostname;var n=g.aanResponse||(l.aanResponse?l.aanResponse[c]:{});n?(f.cid=x(n.creativeId||""),f.adId=x(n.adId||""),f.adNet=x(n.adNetwork||"")):w(v("span",g.document),function(a,b){var c={cid:"cid",adId:"aid"},
d;for(d in c)b.className=="d16g-"+c[d]&&(f[d]=x(b.innerHTML))})}}catch(q){}g=function(){var c=E[b]?"You have already submitted feedback for this ad.  Thank you.":h?P(a[3]):P();Y("Ad feedback: Tell us what you think",c,function(){!E[b]&&!h&&r(f);if(h){if(l.getElementById("DAfc"))l.getElementById("DAfc").style.padding="16px 16px 16px 16px";p(j("DAcb"),"click",function(){y()})}p(j("DAcs"),"click",function(){f.treatmentType="Customer search Link Hit";f.userAction="widgetOpened";r(f)});p(j("DAaap"),"click",
function(){f.treatmentType="Amazon Advertisement Programs Link Hit";f.userAction="widgetOpened";r(f)});p(j("DAiba"),"click",function(){f.treatmentType="Internet Based Ads Link Hit";f.userAction="widgetOpened";r(f)});p(j("DAfb"),"click",function(){if(h){w(v("textarea","DAf"),function(a,b){f[b.name]=M(b.value.substring(0,1E3))});y();var a=L(d),a=l.getElementById(a),a=v("div",a)[0]||s("div",0,{position:"relative",top:"2px",right:"0px",margin:0,height:"14px"},a);t(a,"");a=s("div",0,{position:"absolute",
top:"1px",left:"0px",font:"normal 12px Arial",display:"inline-block",verticalAlign:"middle"},a);t(a,'<span style="position:relative">Thank you for your feedback.</span>');f.userAction="widgetSubmitted";r(f)}else E[b]?y():(Z(),w(v("input","DAf"),function(a,b){if(b.checked&&(f[b.name]=b.value,b.type=="checkbox"))try{var c=L(d),g=c+"_t",h=new Date;h.setTime((new Date).getTime()+864E5);localStorage[g]=h.getTime();var i=d.replace(/-/g,"_");!k.d16g||!k.d16g.ads||!k.d16g.ads[i+"_"+e]?B(c):(jQuery("[id]").filter(function(){return this.id.match(i+
"*")}).hide(),c=="DAnsm"&&B("navSwmSlot"))}catch(j){}}),w(v("textarea","DAf"),function(a,b){f[b.name]=M(b.value.substring(0,1E3))}),DA.pt=setTimeout(y,5E3),E[b]=1,f.userAction="widgetSubmitted",r(f))})})};j("DAfb")?(y(),setTimeout(g,50)):g()}}catch($){k.ueLogError&&k.ueLogError($,{logLevel:"ERROR",attribution:"Ad Feedback",message:"Error in Feedback js "})}})(window,document,Math);