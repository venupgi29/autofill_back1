//tealium universal tag - utag.29 ut4.0.201805202146, Copyright 2018 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={};utag.o[loader].sender[id]=u;if(utag===undefined){utag={};}if(utag.ut===undefined){utag.ut={};}if(utag.ut.loader===undefined){u.loader=function(o){var a,b,c,l;a=document;if(o.type==="iframe"){b=a.createElement("iframe");b.setAttribute("height","1");b.setAttribute("width","1");b.setAttribute("style","display:none");b.setAttribute("src",o.src);}else if(o.type==="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";b.src=o.src;}if(o.id){b.id=o.id;}if(typeof o.cb==="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState==="complete"||this.readyState==="loaded"){this.onreadystatechange=null;o.cb();}};}}l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l==="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}};}else{u.loader=utag.ut.loader;}
u.ev={'view':1};u.initialized=false;u.map={};u.extend=[function(a,b){try{if(1){(function(parent,name,context,definition){if(!context||!context[parent]||!Array.prototype.filter){return;}
context[parent]['plugins'][name]=definition();})('bactm','adobemid',typeof window!=='undefined'?window:null,function(){var parent='bactm',ba=window[parent],win=window,doc=document||{},version='1.1.1',ddo=win.digitalData,LOG_LEVEL={OFF:10,FATAL:5,ERROR:4,WARN:3,INFO:2,DEBUG:1},adobeMID={},adobeMIDLTS,d_orgid="A9893BC75245B1D70A490D4D@AdobeOrg",d_ver="2",pageId,currentUrl=win.location.href,ls=null,adobeMIDSession=new ba.Store('adobeMID',{type:'sessionCookie'}),DISABLE_MID=['homepage:Content:Personal;home_personal','homepage:Content;home_personal','homepage:Content:smbus;homepage_smbus','homepage:Content:Personal;homepage_personal']
if(!ddo)return;var _get=function(key){return adobeMID[key];};var _writeToLocalStorage=function(fn){var httpRequest=new XMLHttpRequest();httpRequest.onreadystatechange=function(){if(httpRequest.readyState===XMLHttpRequest.DONE){if(httpRequest.status===200){adobeMID=JSON.parse(httpRequest.response);if(Object.keys!="undefined"){ls=ls||new bactm.Store("adobeMID",{type:"cookie"});Object.keys(adobeMID).forEach(function(key){ls.set(key,adobeMID[key]);});}
ls.save("adobeMID");ba._log("Adobe MID API request: Success",LOG_LEVEL.INFO);fn();}else{ba._log("Adobe MID API request: Failed - "+httpRequest.status,LOG_LEVEL.ERROR);}}};httpRequest.open('GET',"https://dpm.demdex.net/id?d_orgid="+d_orgid+"&d_ver="+d_ver);httpRequest.send();};var _getFromLocalStorage=function(fn){ls=ls||new bactm.Store("adobeMID",{type:"cookie"});ls.save("adobeMID")
adobeMID=ls.all();fn();};var _adobeMIDSync=function(){adobeMIDLTS=bactm.Store("adobeMID",{type:"cookie"})
if(!pageId||currentUrl.indexOf('/homepage/overview.go')>-1||DISABLE_MID.indexOf(pageId)>-1)return;if(adobeMIDSession.get('adobeImgSync')==true)return;adobeMIDLTS.get('ibs').forEach(function(t){document.URL
if(t.tag=="img"&&t.url!==null&&t.url!==[]){t.url.forEach(function(u){bactm.PixelTag(u);})}});adobeMIDSession.set('adobeImgSync',true);adobeMIDSession.save();};var _getCurrentPageId=function(){if(win.cG7&&win.cG7.cM0&&win.cm_ClientID)return win.cG7.cM0[cm_ClientID];return ba.ddo.pageInfo.get('pageID');}
var _init=function(){ba._log('adobemid plugin v'+version+' initializing.',LOG_LEVEL.INFO);adobeMIDLTS=bactm.Store("adobeMID",{type:"cookie"})
pageId=_getCurrentPageId();if(adobeMIDLTS.get("d_mid")===null||adobeMIDLTS.get("ibs")===null){_writeToLocalStorage(_adobeMIDSync);}else{_getFromLocalStorage(_adobeMIDSync);}
}
_init();return{get:_get};});}}catch(e){utag.DB(e)}},function(a,b){(function(parent,name,context,definition){if(!context||!context[parent]||!Array.prototype.filter){return;}
context[parent]['plugins'][name]=definition();})('bactm','aam',typeof window!=='undefined'?window:null,function(){var parent='bactm',ba=window[parent],win=window,doc=document||{},version='2.2.0',ddo=win.digitalData,aamApiUrl='https://bofa.demdex.net/event?',signals=[],hasSignals=false,LOG_LEVEL={OFF:10,FATAL:5,ERROR:4,WARN:3,INFO:2,DEBUG:1};if(!ddo)return;var _addToSignals=function(key,value,prefix){if(typeof key!=='string'||!key||!value)return;prefix=(typeof prefix==='string')?prefix:'c_';value=(Array.isArray(value)||typeof value==='object')?JSON.stringify(value):value;signals.push(prefix+key+'='+encodeURIComponent(value));hasSignals=true;}
var _clearSignals=function(){signals=[];hasSignals=false;}
var _submit=function(){if(!_isArrayOrStringWithValue(signals))return;_thirdPartyIdToSignal();_adobeMidToSignal();_addToSignals('rtbd','json','d_');_addToSignals('dst','1','d_');signals.reverse();var ajax=new ba.Ajax();ajax.get(aamApiUrl+ba._asArray(signals).join('&'),{withCredentials:true})
.then(function(){ba._log('Signals sent to Adobe Audience Manager.',LOG_LEVEL.INFO);_clearSignals();})
.catch(function(){ba._log('Unable to send signals to Adobe Audience Manager.',LOG_LEVEL.ERROR);});}
var _sitePromotionClickHandler=function(info){_addToSignals('sitePromotionUrlClicked',info.clickedAnchor.href);_submit();}
var _pageviewHandler=function(info){_pageIdToSignal(info.pageInfoArrayIndex);_urlPartsToSignals();_dartToSignals();}
var _pageIdToSignal=function(pageInfoArrayIndex){var pageId=ba._getPageInfo(pageInfoArrayIndex).pageID;if(!pageId&&win.cG7&&win.cG7.cM0&&win.cm_ClientID)pageId=cG7.cM0[cm_ClientID];if(pageId)_addToSignals('pageID',pageId);}
var _thirdPartyIdToSignal=function(){var thirdPartyId=ba.ddo.get('user.olb3rdpartyid');if(!thirdPartyId)return;_addToSignals('thirdPartyID',thirdPartyId);_addToSignals('dpuuid',thirdPartyId,'d_');_addToSignals('dpid','23447','d_');}
var _urlPartsToSignals=function(){var urlParts=_decomposeUri(doc.URL);_objectToSignals(urlParts);}
var _dartToSignals=function(pageInfoArrayIndex){var lang=ba.ddo.pageInfo.get('language',pageInfoArrayIndex),lang=lang&&lang.toLowerCase()==='es'?'es':'en',dartKey=lang==='en'?'standardDART':'standardDARTes',piDart=ba.ddo.pageInfo.get(dartKey,pageInfoArrayIndex)||[],attrDart=ba.ddo.get('page.attributes.'+dartKey)||[];if(piDart)piDart=ba._asArray(piDart);if(attrDart)attrDart=ba._asArray(attrDart);var dartUrls=piDart.concat(attrDart).join(',');_addToSignals('dartTagUrls',dartUrls);}
var _adobeMidToSignal=function(){if(!ba.plugins.adobemid)return;var mid=ba.plugins.adobemid.get('d_mid');_addToSignals('mid',mid,'d_');}
var _sitePromotionsToSignal=function(){var allAnchorTags=doc.getElementsByTagName('a'),locUrl=win.location.href.split('#')[0].toLowerCase(),spUrls=[];for(var len=allAnchorTags.length,i=0;i<len;i++){var url=allAnchorTags[i].href,cm_sp=new ba.QueryString(url).get('cm_sp');if(!cm_sp)continue;if(locUrl!==url.split('#')[0].toLowerCase())spUrls.push(url);}
if(spUrls.length>0)_addToSignals('sitePromotionUrls',spUrls.join(','));_submit();}
var _objectToSignals=function(obj){if(Array.isArray(obj)||typeof obj!=='object'){ba._log('Argument type mismatch. Expected object.',LOG_LEVEL.ERROR);return;}
for(key in obj)if(obj.hasOwnProperty(key))_addToSignals(key,obj[key]);}
var _decomposeUri=function(uri){var a=doc.createElement('a');a.href=uri||doc.referrer;var pathname=a.pathname.replace(/^\//,'');return{url:a.host+'/'+pathname,hash:a.hash,host:a.host,hostname:a.hostname,pathname:pathname,protocol:a.protocol,uriParams:(function(retVal,s){ba.polyfills.array.map(s.split('&'),function(elem){var k=elem.split('=');retVal[k.shift()]=k.shift();});return retVal;}({},a.search.replace(/^(\/|\?)?|\/$/g,'')))};}
var _isStringWithValue=function(value){return typeof value==='string'&&value.trim().length>0;}
var _isArrayWithValue=function(value){return Array.isArray(value)&&value.length>0;}
var _isArrayOrStringWithValue=function(value){return _isArrayWithValue(value)||_isStringWithValue(value);}
var _isIE=function(){var ua=window.navigator.userAgent,msie=ua.indexOf('MSIE '),trident=ua.indexOf('Trident/'),edge=ua.indexOf('Edge/');return(msie||trident||edge)?true:false;}
var _init=function(){ba._log('bactm.plugin.aam v'+version+' initializing.',LOG_LEVEL.INFO);ba.on('sitePromotionClicked',_sitePromotionClickHandler);ba.on('sitePromotionsProcessed',_sitePromotionsToSignal);_pageviewHandler({pageInfoArrayIndex:0});}
_init();win['bactm_aamApi']={addToSignals:_addToSignals,clearSignals:_clearSignals,hasSignals:hasSignals,signals:signals,submit:_submit}
return{version:version,addToSignals:_addToSignals,clearSignals:_clearSignals,submit:_submit};});}];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f,i;u.data={};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.data[e[f]]=b[d];}}}
}};utag.o[loader].loader.LOAD(id);})("29","bofa.main");}catch(error){utag.DB(error);}