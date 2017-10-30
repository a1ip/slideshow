//---
//#
//# Polyfill for the vw, vh, vm units
//# Requires StyleFix from -prefix-free http://leaverou.github.com/prefixfree/
//# @author Lea Verou
//#
//layout: null
//---
!function(){if(window.StyleFix){var e=document.createElement("_").style,t=["vw","vh","vm"].filter(function(t){return e.width="",e.width="10"+t,!e.width});StyleFix.register(function(e){var n=innerWidth,i=innerHeight,r=Math.min(n,i);return e.replace(RegExp("\\b(\\d+)("+t.join("|")+")\\b","gi"),function(e,t,c){switch(c){case"vw":return t*n/100+"px";case"vh":return t*i/100+"px";case"vm":return t*r/100+"px"}})})}}();
