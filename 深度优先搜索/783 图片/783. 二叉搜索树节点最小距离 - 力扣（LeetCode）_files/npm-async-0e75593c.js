(window.nojMonomainwebpackJsonpproduction=window.nojMonomainwebpackJsonpproduction||[]).push([[8],{"+1CV":function(e,l,o){"use strict";var r=o("p8ei");e.exports={QRCode:r.QRCode}},p8ei:function(e,l,o){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var r=Object.assign||function(e){for(var l=1;l<arguments.length;l++){var o=arguments[l];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e};l.QRCode=d;var n=a(o("ERkP")),t=a(o("aWzz"));function a(e){return e&&e.__esModule?e:{default:e}}function i(e,l){var o={};for(var r in e)l.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(o[r]=e[r]);return o}var u=o("1PNn"),s=o("FFk3");function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},l=e.value,o=void 0===l?"":l,t=e.level,a=void 0===t?"L":t,d=e.bgColor,c=void 0===d?"#FFFFFF":d,f=e.fgColor,v=void 0===f?"#000000":f,p=e.cellClassPrefix,g=void 0===p?"":p,C=i(e,["value","level","bgColor","fgColor","cellClassPrefix"]),h=new u(-1,s[a]);h.addData(o),h.make();var m=h.modules,w=g&&g+"-cell",b=g&&w+" "+g+"-cell-empty",y=g&&w+" "+g+"-cell-filled",F=0;return n.default.createElement("svg",r({shapeRendering:"crispEdges",viewBox:[0,0,m.length,m.length].join(" ")},C),m.map((function(e,l){return e.map((function(e,o){var t=e?y:b,a=t?{className:t}:null,i=!a&&(e?v:c),u=i?{style:{fill:i}}:null;return n.default.createElement("rect",r({height:1,key:F++},u,a,{width:1,x:o,y:l}))}))})))}d.propTypes={value:t.default.string.isRequired,size:t.default.number,level:t.default.oneOf(["L","M","Q","H"]),bgColor:t.default.string,fgColor:t.default.string,cellClassPrefix:t.default.string}}}]);