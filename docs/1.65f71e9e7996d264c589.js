"use strict";(self.webpackChunkludum_dare_55=self.webpackChunkludum_dare_55||[]).push([[1],{358:(n,e,t)=>{t.r(e),t.d(e,{GAME_ID:()=>a,MAIN_MENU_ID:()=>d});const d="8aa8d080-b995-4892-b718-829dd717612c",a="cd85bb20-d3c0-42e1-840b-d5dc5f09daef"},357:(n,e,t)=>{t.r(e),t.d(e,{App:()=>i});var d=t(349),a=t(358),r=t(353),l=t(359),o=t(355);const i=()=>{const{scene:n}=(0,d.useContext)(r.EngineContext);return(0,o.jsxs)(o.Fragment,{children:[n.id===a.MAIN_MENU_ID&&(0,o.jsx)(l.MainMenu,{}),n.id===a.GAME_ID&&(0,o.jsx)(l.Game,{})]})}},345:(n,e,t)=>{t.r(e),t.d(e,{onDestroy:()=>s,onInit:()=>i});var d=t(346),a=t(353),r=t(357),l=t(355);let o;function i(n){const e=document.getElementById("ui-root");e&&(o=(0,d.createRoot)(e),o.render((0,l.jsx)(a.EngineProvider,{context:n,children:(0,l.jsx)(r.App,{})})))}function s(){o&&(o.unmount(),o=void 0)}},354:(n,e,t)=>{t.r(e),t.d(e,{EngineContext:()=>r,EngineProvider:()=>l});var d=t(349),a=t(355);const r=d.createContext({}),l=({context:n,children:e})=>(0,a.jsx)(r.Provider,{value:n,children:e})},353:(n,e,t)=>{t.r(e),t.d(e,{EngineContext:()=>d.EngineContext,EngineProvider:()=>d.EngineProvider});var d=t(354)},371:(n,e,t)=>{t.r(e),t.d(e,{Game:()=>a});t(372);var d=t(355);const a=()=>(0,d.jsx)("div",{className:"game",children:"Game Scene"})},359:(n,e,t)=>{t.r(e),t.d(e,{Game:()=>a.Game,MainMenu:()=>d.MainMenu});var d=t(360),a=t(371)},360:(n,e,t)=>{t.r(e),t.d(e,{MainMenu:()=>i});var d=t(349),a=t(11),r=t(353),l=t(358),o=(t(361),t(355));const i=()=>{const{scene:n}=(0,d.useContext)(r.EngineContext),e=(0,d.useCallback)((()=>{n.dispatchEvent(a.LoadScene,{sceneId:l.GAME_ID,clean:!0,loaderId:null,levelId:null})}),[n]);return(0,o.jsxs)("div",{className:"main-menu",children:[(0,o.jsx)("h1",{children:"Ludum Dare 55"}),(0,o.jsx)("button",{className:"main-menu__button",type:"button",onClick:e,children:"Play"})]})}},373:(n,e,t)=>{t.r(e),t.d(e,{default:()=>o});var d=t(369),a=t.n(d),r=t(370),l=t.n(r)()(a());l.push([n.id,".game {\n  color: white;\n}",""]);const o=l},368:(n,e,t)=>{t.r(e),t.d(e,{default:()=>o});var d=t(369),a=t.n(d),r=t(370),l=t.n(r)()(a());l.push([n.id,".main-menu {\n  width: 100%;\n  height: 100%;\n  \n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n\n  background-color: black;\n  color: white;\n}\n\n.main-menu__button {\n  cursor: pointer;\n}",""]);const o=l},372:(n,e,t)=>{t.r(e),t.d(e,{default:()=>b});var d=t(362),a=t.n(d),r=t(363),l=t.n(r),o=t(364),i=t.n(o),s=t(365),c=t.n(s),u=t(366),m=t.n(u),v=t(367),f=t.n(v),h=t(373),x={};x.styleTagTransform=f(),x.setAttributes=c(),x.insert=i().bind(null,"head"),x.domAPI=l(),x.insertStyleElement=m();a()(h.default,x);const b=h.default&&h.default.locals?h.default.locals:void 0},361:(n,e,t)=>{t.r(e),t.d(e,{default:()=>b});var d=t(362),a=t.n(d),r=t(363),l=t.n(r),o=t(364),i=t.n(o),s=t(365),c=t.n(s),u=t(366),m=t.n(u),v=t(367),f=t.n(v),h=t(368),x={};x.styleTagTransform=f(),x.setAttributes=c(),x.insert=i().bind(null,"head"),x.domAPI=l(),x.insertStyleElement=m();a()(h.default,x);const b=h.default&&h.default.locals?h.default.locals:void 0}}]);