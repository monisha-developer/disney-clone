var popup;(function($){popup=function(args){var me=this;var $body=$('body');var $window=$(window);var $document=$(document);me.status='closed';me.wrapper=null;me.container=null;me.overlay=null;me.options={"id":null,"overlayClickable":true};me.options=$.extend(me.options,args);me.open=function(callback){me.wrapper.addClass('open').fadeIn(function(){me.status='opened';if(callback){callback(me);}
if(me.options.afterOpen){me.options.afterOpen(me);}});if(me.options.onOpen){me.options.onOpen(me);}};me.close=function(callback){me.wrapper.removeClass('open').fadeOut(function(){me.status='closed';if(callback){callback(me);}
if(me.options.afterClose){me.options.afterClose(me);}});if(me.options.onClose){me.options.onClose(me);}};me.destroy=function(){me.wrapper.remove();if(me.options.onDestroy){me.options.onDestroy(me);}};me.clear=function(){me.container.empty();if(me.options.onClear){me.options.onClear(me);}};me.getId=function(){return options.id;};var init=function(){if(!me.options.id){me.options.id=generateUniqueId();}
me.wrapper=$('<div>').addClass('popup').attr('id',me.options.id).hide().appendTo('body');if(me.options.classes){if(typeof me.options.classes=='array'){me.wrapper.addClass(me.options.classes.join(' '));}else{me.wrapper.addClass(me.options.classes);}}
me.container=$('<div>').addClass('popup--container').appendTo(me.wrapper);me.overlay=$('<div>').addClass('popup--overlay').appendTo(me.wrapper);if(me.options.overlayClickable){me.overlay.click(function(event){me.close();});}
if(me.options.onInit){me.options.onInit(me);}};var generateUniqueId=function(){string='';for(var i=0;i<10;i++){string=string+String.fromCharCode(65+Math.floor(Math.random()*26));}
return string;};init();};}(jQuery));/*!
* jQuery Cookie Plugin v1.4.1
* https://github.com/carhartl/jquery-cookie
*
* Copyright 2006, 2014 Klaus Hartl
* Released under the MIT license
*/(function(factory){if(typeof define==='function'&&define.amd){define(['jquery'],factory);}else if(typeof exports==='object'){factory(require('jquery'));}else{factory(jQuery);}}(function($){var pluses=/\+/g;function encode(s){return config.raw?s:encodeURIComponent(s);}
function decode(s){return config.raw?s:decodeURIComponent(s);}
function stringifyCookieValue(value){return encode(config.json?JSON.stringify(value):String(value));}
function parseCookieValue(s){if(s.indexOf('"')===0){s=s.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,'\\');}
try{s=decodeURIComponent(s.replace(pluses,' '));return config.json?JSON.parse(s):s;}catch(e){}}
function read(s,converter){var value=config.raw?s:parseCookieValue(s);return $.isFunction(converter)?converter(value):value;}
var config=$.cookie=function(key,value,options){if(arguments.length>1&&!$.isFunction(value)){options=$.extend({},config.defaults,options);if(typeof options.expires==='number'){var days=options.expires,t=options.expires=new Date();t.setTime(+t+days*864e+5);}
return(document.cookie=[encode(key),'=',stringifyCookieValue(value),options.expires?'; expires='+options.expires.toUTCString():'',options.path?'; path='+options.path:'',options.domain?'; domain='+options.domain:'',options.secure?'; secure':''].join(''));}
var result=key?undefined:{};var cookies=document.cookie?document.cookie.split('; '):[];for(var i=0,l=cookies.length;i<l;i++){var parts=cookies[i].split('=');var name=decode(parts.shift());var cookie=parts.join('=');if(key&&key===name){result=read(cookie,value);break;}
if(!key&&(cookie=read(cookie))!==undefined){result[name]=cookie;}}
return result;};config.defaults={};$.removeCookie=function(key,options){if($.cookie(key)===undefined){return false;}
$.cookie(key,'',$.extend({},options,{expires:-1}));return!$.cookie(key);};}));