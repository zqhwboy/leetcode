(window.nojMonomainwebpackJsonpproduction=window.nojMonomainwebpackJsonpproduction||[]).push([[14],{"+1Cl":function(e,t,r){"use strict";var n,i=this&&this.__assign||function(){return(i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var o=r("ERkP"),s=r("LcNk"),a=r("AdB3");t.ResizerProvider=(n=o.createContext({createID:function(){return-1},populateInstance:a.noop,triggerBarAction:a.noop,vertical:!1,sizeRelatedInfo$:s.EMPTY})).Provider,t.ResizerConsumer=n.Consumer,t.withResizerContext=function(e){return function(r){return o.createElement(t.ResizerConsumer,null,(function(t){var n=i(i({},r),{context:t});return o.createElement(e,i({},n))}))}}},"/zBh":function(e,t,r){"use strict";var n,i=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var s=r("ERkP"),a=r("LcNk"),c=r("YfSF"),u=r("+1Cl"),f=r("AdB3"),p=r("NlWe"),l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.defaultInnerRef=s.createRef(),t.id=t.props.context.createID(t.props),t.subscription=new a.Subscription,t.flexGrowRatio=0,t.resize$=t.props.context.sizeRelatedInfo$.pipe(c.map((function(e){var r=e.sizeInfoArray,n=e.flexGrowRatio;return{sizeInfo:r[t.id],flexGrowRatio:n}})),c.filter((function(e){return!!e.sizeInfo})),c.tap((function(e){var r=e.sizeInfo,n=e.flexGrowRatio;if(t.sizeInfo=r,t.flexGrowRatio=n,t.ref.current){var i=t.getStyle(r,n),o=i.flexGrow,s=i.flexShrink,a=i.flexBasis;t.ref.current.style.flexGrow=""+o,t.ref.current.style.flexShrink=""+s,t.ref.current.style.flexBasis=a+"px",t.onSizeChanged(r.currentSize)}}))),t}return i(t,e),Object.defineProperty(t.prototype,"ref",{get:function(){return this.props.innerRef||this.defaultInnerRef},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"childProps",{get:function(){return o(o({},f.omit(this.props,["defaultSize","size","disableResponsive","innerRef","onSizeChanged"])),this.getStyle())},enumerable:!0,configurable:!0}),t.prototype.componentDidMount=function(){this.subscription.add(this.resize$.subscribe()),this.props.context.populateInstance(this.id,this.ref)},t.prototype.componentWillUnmount=function(){this.subscription.unsubscribe()},t.prototype.render=function(){return s.createElement(p.StyledSection,o({},this.childProps,{ref:this.ref}))},t.prototype.onSizeChanged=function(e){"function"===typeof this.props.onSizeChanged&&this.props.onSizeChanged(e)},t.prototype.getFlexShrink=function(){return f.isValidNumber(this.props.size)?0:this.props.disableResponsive?1:0},t.prototype.getStyle=function(e,t){void 0===e&&(e=this.sizeInfo),void 0===t&&(t=this.flexGrowRatio);var r=this.getFlexShrink();if(e){var n=e.disableResponsive,i=e.currentSize;return{flexShrink:r,flexGrow:n?0:t*i,flexBasis:n?i:0}}var o=this.props.size||this.props.defaultSize;return f.isValidNumber(o)?{flexShrink:r,flexGrow:0,flexBasis:o}:{flexShrink:r,flexGrow:1,flexBasis:0}},t}(s.PureComponent);t.Section=u.withResizerContext(l)},"1h25":function(e,t,r){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},i=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r};Object.defineProperty(t,"__esModule",{value:!0});var o=r("ERkP");t.StyledContainer=o.forwardRef((function(e,t){var r=e.vertical,s=e.style,a=i(e,["vertical","style"]);return o.createElement("div",n({},a,{ref:t,style:n({display:"flex",flexDirection:r?"column":"row"},s)}))}))},"3pMj":function(e,t,r){"use strict";var n,i=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var s=r("ERkP"),a=r("LcNk"),c=r("YfSF"),u=r("5dEO"),f=r("AdB3"),p=r("+1Cl"),l=r("MbRG");t.Resizer=l.Resizer;var h=r("T7dw"),d=r("sJM4"),y=r("1h25"),v=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.childrenProps=[],t.childrenInstance=[],t.barActions$=new a.Subject,t.sizeRelatedInfoAction$=new a.Subject,t.sizeRelatedInfo$=a.merge(t.sizeRelatedInfoAction$,t.barActions$.pipe(h.scanBarAction({calculateOffset:function(e,r){return d.calculateCoordinateOffset(e,r)[t.axis]},getSizeRelatedInfo:function(){return t.makeSizeInfos()}}),c.tap((function(e){return t.monitorBarStatusChanges(e)})))).pipe(c.filter((function(e){return!e.discard})),c.map((function(e){if("function"===typeof t.props.beforeApplyResizer){var r=new l.Resizer(e);return t.props.beforeApplyResizer(r),r.getResult()}return e})),c.filter((function(e){return!e.discard})),c.observeOn(a.animationFrameScheduler),c.share()),t.triggerBarAction=function(e){t.barActions$.next(e)},t.createID=function(e){return t.childrenProps.push(e),t.childrenProps.length-1},t.populateChildInstance=function(e,r){r.current&&(t.childrenInstance[e]=r.current)},t}return i(t,e),Object.defineProperty(t.prototype,"axis",{get:function(){return this.props.vertical?"y":"x"},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"dimension",{get:function(){return this.props.vertical?"height":"width"},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"contextValue",{get:function(){return{vertical:!!this.props.vertical,sizeRelatedInfo$:this.sizeRelatedInfo$,createID:this.createID,populateInstance:this.populateChildInstance,triggerBarAction:this.triggerBarAction}},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"containerProps",{get:function(){return f.omit(this.props,["onActivate","beforeApplyResizer","afterResizing"])},enumerable:!0,configurable:!0}),t.prototype.componentDidMount=function(){this.refreshSizeInfos()},t.prototype.render=function(){return s.createElement(p.ResizerProvider,{value:this.contextValue},s.createElement(y.StyledContainer,o({},this.containerProps),this.props.children))},t.prototype.getResizer=function(){return new l.Resizer(this.makeSizeInfos())},t.prototype.applyResizer=function(e){this.sizeRelatedInfoAction$.next(e.getResult())},t.prototype.monitorBarStatusChanges=function(e){switch(e.type){case u.BarActionType.ACTIVATE:return void("function"===typeof this.props.onActivate&&this.props.onActivate());case u.BarActionType.DEACTIVATE:return void("function"===typeof this.props.afterResizing&&this.props.afterResizing());default:return}},t.prototype.refreshSizeInfos=function(){this.sizeRelatedInfoAction$.next(this.makeSizeInfos())},t.prototype.makeSizeInfos=function(){var e=this,t=d.collectSizeRelatedInfo(),r=t.collect,n=t.getResult;return this.childrenProps.forEach((function(t,n){var i=e.childrenInstance[n];r({maxSize:t.maxSize,minSize:t.minSize,disableResponsive:d.isDisabledResponsive(t),isSolid:d.isSolid(t),currentSize:i.getBoundingClientRect()[e.dimension]})})),n()},t}(s.PureComponent);t.Container=v},"5dEO":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.ACTIVATE="activate",e.MOVE="move",e.DEACTIVATE="deactivate"}(t.BarActionType||(t.BarActionType={}))},AdB3:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isValidNumber=function(e){return"number"===typeof e&&e===e},t.noop=function(){},t.omit=function(e,t){var r=t.reduce((function(e,t){return e[t]=!0,e}),{});return Object.keys(e).reduce((function(t,n){return r[n]||(t[n]=e[n]),t}),{})}},MbRG:function(e,t,r){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var i=r("sJM4");function o(e){return 2*e+1}function s(e){return 2*e}var a=function(){function e(e){this.resizeResult=e,this.isDiscarded=!1}return e.prototype.resizeSection=function(e,t){if(!this.isDiscarded){var r=s(e),n=this.getSize(r);if(n>=0&&t.toSize>=0){var i=t.toSize-n;r===this.resizeResult.sizeInfoArray.length-1||t.preferMoveLeftBar?this.moveBar(e-1,{withOffset:-i}):this.moveBar(e,{withOffset:i})}}},e.prototype.moveBar=function(e,t){this.isDiscarded||(this.resizeResult=i.getNextSizeRelatedInfo(o(e),t.withOffset,this.resizeResult.sizeInfoArray))},e.prototype.discard=function(){this.isDiscarded=!0},e.prototype.isSectionResized=function(e){var t=s(e);return"defaultSizeInfoArray"in this.resizeResult&&this.getSize(t)!==this.resizeResult.defaultSizeInfoArray[t].currentSize},e.prototype.isBarActivated=function(e){return"barID"in this.resizeResult&&this.resizeResult.barID===o(e)},e.prototype.getSectionSize=function(e){return this.getSize(s(e))},e.prototype.getResult=function(){return n(n({},this.resizeResult),{discard:this.isDiscarded})},e.prototype.getTotalSize=function(){return this.resizeResult.sizeInfoArray.filter((function(e,t){return e&&t%2===0})).reduce((function(e,t){return e+t.currentSize}),0)},e.prototype.getSize=function(e){var t=this.resizeResult.sizeInfoArray[e];return t?t.currentSize:-1},e}();t.Resizer=a},NlWe:function(e,t,r){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},i=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r};Object.defineProperty(t,"__esModule",{value:!0});var o=r("ERkP");t.StyledSection=o.forwardRef((function(e,t){var r,s=e.context,a=e.maxSize,c=e.minSize,u=e.flexGrow,f=e.flexShrink,p=e.flexBasis,l=e.style,h=i(e,["context","maxSize","minSize","flexGrow","flexShrink","flexBasis","style"]);return o.createElement("div",n({},h,{ref:t,style:n((r={overflow:"hidden"},r[s.vertical?"maxHeight":"maxWidth"]=a,r[s.vertical?"minHeight":"minWidth"]=c,r.flexGrow=u,r.flexShrink=f,r.flexBasis=p,r),l)}))}))},Nyd1:function(e,t,r){"use strict";function n(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}Object.defineProperty(t,"__esModule",{value:!0}),n(r("3pMj")),n(r("/zBh")),n(r("c763")),n(r("5dEO"))},QNFB:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.disablePassive=!0;try{window.addEventListener("test",null,{get passive(){return t.disablePassive={passive:!1},!0}})}catch(e){}},T7dw:function(e,t,r){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var i=r("YfSF"),o=r("5dEO"),s=r("sJM4"),a={barID:-1,offset:0,type:o.BarActionType.DEACTIVATE,originalCoordinate:s.DEFAULT_COORDINATE_OFFSET,defaultSizeInfoArray:[],sizeInfoArray:[],discard:!0,flexGrowRatio:0};t.scanBarAction=function(e){return i.scan((function(t,r){var i={barID:r.barID,type:r.type};switch(r.type){case o.BarActionType.ACTIVATE:var c=e.getSizeRelatedInfo(),u=c.sizeInfoArray,f=c.flexGrowRatio;return n(n(n({},a),i),{originalCoordinate:r.coordinate,defaultSizeInfoArray:u,sizeInfoArray:u,flexGrowRatio:f});case o.BarActionType.MOVE:var p=e.calculateOffset(r.coordinate,t.originalCoordinate);return n(n(n({},i),s.getNextSizeRelatedInfo(r.barID,p,t.defaultSizeInfoArray)),{offset:p,originalCoordinate:t.originalCoordinate,defaultSizeInfoArray:t.defaultSizeInfoArray,discard:!1});case o.BarActionType.DEACTIVATE:return a}}),a)}},W4Qw:function(e,t,r){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},i=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r};Object.defineProperty(t,"__esModule",{value:!0});var o=r("ERkP");t.StyledBar=o.forwardRef((function(e,t){var r=e.size,s=e.style,a=i(e,["size","style"]);return o.createElement("div",n({},a,{ref:t,style:n({position:"relative",flex:"0 0 "+r+"px"},s)}))})),t.StyledInteractiveArea=o.forwardRef((function(e,t){var r=e.top,s=void 0===r?0:r,a=e.right,c=void 0===a?0:a,u=e.bottom,f=void 0===u?0:u,p=e.left,l=void 0===p?0:p,h=e.vertical,d=e.style,y=i(e,["top","right","bottom","left","vertical","style"]);return o.createElement("div",n({},y,{style:n({position:"absolute",top:-s,left:-l,right:-c,bottom:-f,cursor:h?"row-resize":"col-resize",WebkitTapHighlightColor:"transparent",userSelect:"none"},d),ref:t}))}))},c763:function(e,t,r){"use strict";var n,i=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var s=r("ERkP"),a=r("5dEO"),c=r("AdB3"),u=r("+1Cl"),f=r("W4Qw"),p=r("QNFB"),l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.defaultInnerRef=s.createRef(),t.interactiveAreaRef=s.createRef(),t.id=t.props.context.createID(t.props),t.isValidClick=!0,t.isActivated=!1,t.onMouseDown=t.triggerMouseAction(a.BarActionType.ACTIVATE),t.onMouseMove=t.triggerMouseAction(a.BarActionType.MOVE),t.onMouseUp=t.triggerMouseAction(a.BarActionType.DEACTIVATE),t.onTouchStart=t.triggerTouchAction(a.BarActionType.ACTIVATE),t.onTouchMove=t.triggerTouchAction(a.BarActionType.MOVE),t.onTouchEnd=t.triggerTouchAction(a.BarActionType.DEACTIVATE),t.onTouchCancel=t.triggerTouchAction(a.BarActionType.DEACTIVATE),t}return i(t,e),Object.defineProperty(t.prototype,"ref",{get:function(){return this.props.innerRef||this.defaultInnerRef},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"childProps",{get:function(){return c.omit(this.props,["context","innerRef","onClick","expandInteractiveArea","onStatusChanged"])},enumerable:!0,configurable:!0}),t.prototype.componentDidMount=function(){this.props.context.populateInstance(this.id,this.ref),document.addEventListener("mousemove",this.onMouseMove),document.addEventListener("mouseup",this.onMouseUp),document.addEventListener("touchmove",this.onTouchMove,p.disablePassive),document.addEventListener("touchend",this.onTouchEnd),document.addEventListener("touchcancel",this.onTouchCancel),this.interactiveAreaRef.current&&(this.interactiveAreaRef.current.addEventListener("mousedown",this.onMouseDown),this.interactiveAreaRef.current.addEventListener("touchstart",this.onTouchStart,p.disablePassive))},t.prototype.componentWillUnmount=function(){document.removeEventListener("mousemove",this.onMouseMove),document.removeEventListener("mouseup",this.onMouseUp),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd),document.removeEventListener("touchcancel",this.onTouchCancel),this.interactiveAreaRef.current&&(this.interactiveAreaRef.current.removeEventListener("mousedown",this.onMouseDown),this.interactiveAreaRef.current.removeEventListener("touchstart",this.onTouchStart))},t.prototype.render=function(){return s.createElement(f.StyledBar,o({},this.childProps,{ref:this.ref}),this.props.children,s.createElement(f.StyledInteractiveArea,o({},this.props.expandInteractiveArea,{ref:this.interactiveAreaRef,vertical:this.props.context.vertical})))},t.prototype.onStatusChanged=function(e){this.isActivated!==e&&(this.isActivated=e,"function"===typeof this.props.onStatusChanged&&this.props.onStatusChanged(e))},t.prototype.updateStatusIfNeed=function(e){e===a.BarActionType.ACTIVATE?this.onStatusChanged(!0):e===a.BarActionType.DEACTIVATE&&this.onStatusChanged(!1)},t.prototype.triggerAction=function(e,t){(this.isActivated||e===a.BarActionType.ACTIVATE)&&this.props.context.triggerBarAction({type:e,coordinate:t,barID:this.id}),this.isActivated&&e===a.BarActionType.DEACTIVATE&&this.onClick(),this.updateStatusIfNeed(e),this.updateClickStatus(e)},t.prototype.triggerMouseAction=function(e){var t=this;return function(r){t.disableUserSelectIfResizing(r,e);var n=r.clientX,i=r.clientY;t.triggerAction(e,{x:n,y:i})}},t.prototype.triggerTouchAction=function(e){var t=this;return function(r){t.disableUserSelectIfResizing(r,e);var n=r.touches[0]||{clientX:0,clientY:0},i=n.clientX,o=n.clientY;t.triggerAction(e,{x:i,y:o})}},t.prototype.disableUserSelectIfResizing=function(e,t){(this.isActivated||t===a.BarActionType.ACTIVATE)&&e.preventDefault()},t.prototype.updateClickStatus=function(e){this.isActivated&&(e===a.BarActionType.ACTIVATE?this.isValidClick=!0:e===a.BarActionType.MOVE&&(this.isValidClick=!1))},t.prototype.onClick=function(){this.isValidClick&&"function"===typeof this.props.onClick&&(this.isValidClick=!1,this.props.onClick())},t}(s.PureComponent);t.Bar=u.withResizerContext(l)},sJM4:function(e,t,r){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var i=r("AdB3");function o(e){var t=e.size;return i.isValidNumber(t)}function s(){var e=[],t=0,r=0;return{collect:function(n){e.push(n),n.disableResponsive||(t+=1,r+=n.currentSize)},getResult:function(){return{sizeInfoArray:e,flexGrowRatio:t/r}}}}function a(e,t){if(t.isSolid)return{remainingOffset:e,sizeInfo:t};var r=function(e,t){var r=t.maxSize,n=t.minSize,o=void 0===n?0:n;return e<o?{nextSize:o,remainingOffset:e-o}:i.isValidNumber(r)&&e>r?{nextSize:r,remainingOffset:e-r}:{nextSize:e,remainingOffset:0}}(t.currentSize+e,t),o=r.nextSize,s=r.remainingOffset;return{sizeInfo:n(n({},t),{currentSize:o}),remainingOffset:s}}function c(e,t,r,n){for(var i=[],o=t,s=e+r;p(s);s+=r)if(o){var c=a(o,n[s]),u=c.sizeInfo;o=c.remainingOffset,f(u)}else f(n[s]);function f(e){-1===r?i.unshift(e):i.push(e)}function p(e){return-1===r?e>=0:e<=n.length-1}return{sizeInfoArray:i,remainingOffset:o}}t.DEFAULT_COORDINATE_OFFSET={x:0,y:0},t.isSolid=o,t.isDisabledResponsive=function(e){var t=e.disableResponsive;return!(!o(e)||void 0!==t)||!!t},t.calculateCoordinateOffset=function(e,r){return r?{x:e.x-r.x,y:e.y-r.y}:t.DEFAULT_COORDINATE_OFFSET},t.collectSizeRelatedInfo=s,t.getNextSizeRelatedInfo=function(e,t,r){var n=s(),i=n.collect,o=n.getResult,a=c(e,t,-1,r),u=c(e,-t,1,r),f=t-a.remainingOffset,p=-t-u.remainingOffset;function l(t,n){t.forEach(i),i(r[e]),n.forEach(i)}if(f===-p)l(a.sizeInfoArray,u.sizeInfoArray);else if(Math.abs(f)<Math.abs(p)){var h=c(e,-f,1,r);l(a.sizeInfoArray,h.sizeInfoArray)}else{l(c(e,-p,-1,r).sizeInfoArray,u.sizeInfoArray)}return o()}}}]);