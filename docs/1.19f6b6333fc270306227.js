"use strict";(self.webpackChunkludum_dare_55=self.webpackChunkludum_dare_55||[]).push([[1],{383:(n,e,t)=>{t.r(e),t.d(e,{GAME_ID:()=>i,MAIN_MENU_ID:()=>a});const a="8aa8d080-b995-4892-b718-829dd717612c",i="cd85bb20-d3c0-42e1-840b-d5dc5f09daef"},382:(n,e,t)=>{t.r(e),t.d(e,{App:()=>l});var a=t(374),i=t(383),s=t(378),o=t(384),r=t(380);const l=()=>{const{scene:n}=(0,a.useContext)(s.EngineContext);return(0,r.jsxs)(r.Fragment,{children:[n.id===i.MAIN_MENU_ID&&(0,r.jsx)(o.MainMenu,{}),n.id===i.GAME_ID&&(0,r.jsx)(o.Game,{})]})}},370:(n,e,t)=>{t.r(e),t.d(e,{onDestroy:()=>d,onInit:()=>l});var a=t(371),i=t(378),s=t(382),o=t(380);let r;function l(n){const e=document.getElementById("ui-root");e&&(r=(0,a.createRoot)(e),r.render((0,o.jsx)(i.EngineProvider,{context:n,children:(0,o.jsx)(s.App,{})})))}function d(){r&&(r.unmount(),r=void 0)}},379:(n,e,t)=>{t.r(e),t.d(e,{EngineContext:()=>s,EngineProvider:()=>o});var a=t(374),i=t(380);const s=a.createContext({}),o=({context:n,children:e})=>(0,i.jsx)(s.Provider,{value:n,children:e})},378:(n,e,t)=>{t.r(e),t.d(e,{EngineContext:()=>a.EngineContext,EngineProvider:()=>a.EngineProvider});var a=t(379)},398:(n,e,t)=>{t.r(e),t.d(e,{HealthBar:()=>l});var a=t(374),i=t(378),s=t(26),o=t(3),r=(t(399),t(380));const l=()=>{const{scene:n,gameStateObserver:e}=(0,a.useContext)(i.EngineContext),[t,l]=(0,a.useState)(100),[d,c]=(0,a.useState)(100);return(0,a.useEffect)((()=>{const t=()=>{const e=n.getEntityById(s.PLAYER_ID),t=e?.getComponent(o.Health);l(t?.points??0),c(t?.maxPoints??100)};return e.subscribe(t),()=>e.unsubscribe(t)}),[]),(0,r.jsx)("div",{className:"health-bar",children:(0,r.jsx)("div",{className:"health-bar__points",style:{width:(d?t/d*100:0)+"%"}})})}},397:(n,e,t)=>{t.r(e),t.d(e,{HealthBar:()=>a.HealthBar,ManaBar:()=>i.ManaBar,ResurrectButton:()=>s.ResurrectButton});var a=t(398),i=t(401),s=t(404)},401:(n,e,t)=>{t.r(e),t.d(e,{ManaBar:()=>l});var a=t(374),i=t(378),s=t(26),o=t(3),r=(t(402),t(380));const l=()=>{const{scene:n,gameStateObserver:e}=(0,a.useContext)(i.EngineContext),[t,l]=(0,a.useState)(100),[d,c]=(0,a.useState)(100);return(0,a.useEffect)((()=>{const t=()=>{const e=n.getEntityById(s.PLAYER_ID),t=e?.getComponent(o.Mana);l(t?.points??0),c(t?.maxPoints??100)};return e.subscribe(t),()=>e.unsubscribe(t)}),[]),(0,r.jsx)("div",{className:"mana-bar",children:(0,r.jsx)("div",{className:"mana-bar__points",style:{width:(d?t/d*100:0)+"%"}})})}},404:(n,e,t)=>{t.r(e),t.d(e,{ResurrectButton:()=>l});var a=t(374),i=t(378),s=t(26),o=t(3),r=(t(405),t(380));const l=()=>{const{scene:n,gameStateObserver:e}=(0,a.useContext)(i.EngineContext),[t,l]=(0,a.useState)(!1);return(0,a.useEffect)((()=>{const t=()=>{const e=n.getEntityById(s.PLAYER_ID),t=e?.getComponent(o.Spellbook);l(t?.canResurrect??!1)};return e.subscribe(t),()=>e.unsubscribe(t)}),[]),t?(0,r.jsxs)("div",{className:"action-button",children:[(0,r.jsx)("div",{className:"action-button__key",children:"E"}),(0,r.jsx)("div",{className:"action-button__label",children:"Resurrect"})]}):null}},396:(n,e,t)=>{t.r(e),t.d(e,{Game:()=>u});var a=t(374),i=t(11),s=t(378),o=t(26),r=t(383),l=t(25),d=t(397),c=(t(407),t(380));const u=()=>{const{scene:n}=(0,a.useContext)(s.EngineContext),[e,t]=(0,a.useState)(!1),u=(0,a.useCallback)((()=>{n.dispatchEvent(i.LoadScene,{sceneId:r.GAME_ID,loaderId:null,levelId:null,unloadCurrent:!0,clean:!0})}),[]);return(0,a.useEffect)((()=>{const e=n.getEntityById(o.PLAYER_ID),a=()=>{t(!0)};return e?.addEventListener(l.Kill,a),()=>e?.removeEventListener(l.Kill,a)}),[]),(0,c.jsxs)("div",{className:"game",children:[(0,c.jsx)("div",{className:"game__header",children:(0,c.jsx)(d.HealthBar,{})}),(0,c.jsx)("div",{className:"game__footer",children:(0,c.jsx)(d.ResurrectButton,{})}),e&&(0,c.jsx)("div",{className:"game-over__overlay",children:(0,c.jsxs)("div",{className:"game-over__content",children:[(0,c.jsx)("h1",{className:"game-over__title",children:"Game Over"}),(0,c.jsx)("button",{className:"game-over__button",type:"button",onClick:u,children:"Restart"})]})})]})}},384:(n,e,t)=>{t.r(e),t.d(e,{Game:()=>i.Game,MainMenu:()=>a.MainMenu});var a=t(385),i=t(396)},385:(n,e,t)=>{t.r(e),t.d(e,{MainMenu:()=>l});var a=t(374),i=t(11),s=t(378),o=t(383),r=(t(386),t(380));const l=()=>{const{scene:n}=(0,a.useContext)(s.EngineContext),e=(0,a.useCallback)((()=>{n.dispatchEvent(i.LoadScene,{sceneId:o.GAME_ID,clean:!0,loaderId:null,levelId:null})}),[n]);return(0,r.jsxs)("div",{className:"main-menu",children:[(0,r.jsx)("img",{src:"./images/logo.png",alt:"Alumnus of Darkness",className:"main-menu__logo"}),(0,r.jsx)("button",{className:"main-menu__button",type:"button",onClick:e,children:"Play"}),(0,r.jsxs)("ul",{className:"action-list",children:[(0,r.jsx)("li",{className:"action-list__item",children:(0,r.jsxs)("div",{className:"action-button",children:[(0,r.jsx)("span",{className:"action-button__key",children:"W"}),(0,r.jsx)("span",{className:"action-button__key",children:"A"}),(0,r.jsx)("span",{className:"action-button__key",children:"S"}),(0,r.jsx)("span",{className:"action-button__key",children:"D"}),(0,r.jsx)("div",{className:"action-button__label",children:"Move"})]})}),(0,r.jsx)("li",{className:"action-list__item",children:(0,r.jsxs)("div",{className:"action-button",children:[(0,r.jsx)("span",{className:"action-button__key",children:"E"}),(0,r.jsx)("div",{className:"action-button__label",children:"Resurrect"})]})}),(0,r.jsx)("li",{className:"action-list__item",children:(0,r.jsxs)("div",{className:"action-button",children:[(0,r.jsx)("span",{className:"action-button__key",children:"Q"}),(0,r.jsx)("div",{className:"action-button__label",children:"Summon"})]})}),(0,r.jsx)("li",{className:"action-list__item",children:(0,r.jsxs)("div",{className:"action-button",children:[(0,r.jsx)("span",{className:"action-button__key action-button__key--space",children:"SPACE"}),(0,r.jsx)("div",{className:"action-button__label",children:"Jump"})]})})]})]})}},400:(n,e,t)=>{t.r(e),t.d(e,{default:()=>r});var a=t(394),i=t.n(a),s=t(395),o=t.n(s)()(i());o.push([n.id,".health-bar {\n  height: 24px;\n  width: 30%;\n  min-width: 200px;\n  max-width: 300px;\n\n  background-color: #202020;\n  border: 4px solid #202020;\n}\n\n.health-bar__points {\n  background-color: #682c32;\n\n  height: 100%;\n}\n\n@media screen and (max-height: 481px), screen and (max-width: 768px) {\n  .health-bar {\n    height: 16px;\n  }\n}",""]);const r=o},403:(n,e,t)=>{t.r(e),t.d(e,{default:()=>r});var a=t(394),i=t.n(a),s=t(395),o=t.n(s)()(i());o.push([n.id,".mana-bar {\n  height: 24px;\n  width: 30%;\n  min-width: 200px;\n  max-width: 300px;\n\n  background-color: #202020;\n  border: 4px solid #202020;\n\n  margin-top: 4px;\n}\n\n.mana-bar__points {\n  background-color: #2f4063;\n\n  height: 100%;\n}\n\n@media screen and (max-height: 481px), screen and (max-width: 768px) {\n  .mana-bar {\n    height: 16px;\n  }\n}",""]);const r=o},406:(n,e,t)=>{t.r(e),t.d(e,{default:()=>r});var a=t(394),i=t.n(a),s=t(395),o=t.n(s)()(i());o.push([n.id,".action-button {\n  display: flex;\n  align-items: center;\n\n  color: white;\n}\n\n.action-button__key {\n  display: inline-block;\n  width: 40px;\n  height: 40px;\n  border: 4px solid white;\n  border-radius: 4px;\n  font-size: 32px;\n  margin: 0 4px;\n  text-align: center;\n  line-height: 40px;\n}\n\n.action-button__label {\n  margin-left: 8px;\n}\n\n.action-button__label {\n  font-size: 24px;\n}\n",""]);const r=o},408:(n,e,t)=>{t.r(e),t.d(e,{default:()=>r});var a=t(394),i=t.n(a),s=t(395),o=t.n(s)()(i());o.push([n.id,".game {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  box-sizing: border-box;\n  height: 100%;\n  padding: 10px;\n}\n\n.game__header {\n  display: flex;\n  flex-direction: column;\n}\n\n.game__footer {\n  display: flex;\n  justify-content: flex-end;\n}\n\n@keyframes gameOver {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n.game-over__overlay {\n  position: fixed;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(32, 32, 32, 0.5);\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  animation-duration: 3s;\n  animation-name: gameOver;\n}\n\n.game-over__content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: auto;\n  padding: 24px;\n  background-color: rgba(32, 32, 32, 0.5);\n  border: 4px solid white;\n}\n\n.game-over__title {\n  color: white;\n  margin-top: 0;\n}\n\n.game-over__button {\n  border: 4px solid white;\n  padding: 10px 24px;\n  font-size: 24px;\n  color: white;\n  background: none;\n  text-transform: uppercase;\n  cursor: pointer;\n}",""]);const r=o},393:(n,e,t)=>{t.r(e),t.d(e,{default:()=>r});var a=t(394),i=t.n(a),s=t(395),o=t.n(s)()(i());o.push([n.id,".main-menu {\n  width: 100%;\n  height: 100%;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  background-color: rgba(32, 32, 32, 0.25);\n  color: white;\n}\n\n@keyframes slide {\n  0% {\n      transform: translateY(-10px);\n  }\n  100% {\n    transform: translateY(10px);\n  }\n}\n\n.main-menu__logo {\n  position: relative;\n  animation: slide 2s linear infinite alternate;\n\n  image-rendering: pixelated;\n  margin-bottom: 24px;\n\n  width: 480px;\n\n  @media screen and (max-height: 481px), screen and (max-width: 768px) {\n    width: 240px;\n  }\n}\n\n.main-menu__button {\n  border: 4px solid white;\n  padding: 10px 24px;\n  font-size: 24px;\n  color: white;\n  background: none;\n  text-transform: uppercase;\n  cursor: pointer;\n}\n\n.action-list {\n  position: absolute;\n  list-style: none;\n  left: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.2);\n  padding: 16px;\n  backdrop-filter: blur(0.5px);\n  margin: 24px;\n}\n\n.action-list .action-button__key {\n  font-size: 24px;\n}\n\n.action-list__item:not(:last-child) {\n  margin-bottom: 8px;\n}\n\n.action-list .action-button__key {\n  width: 20px;\n  height: 20px;\n  font-size: 16px;\n  line-height: 20px;\n  padding: 4px;\n  border-width: 2px;\n}\n\n.action-list .action-button__key--space {\n  width: 60px;\n}\n\n.action-list .action-button__label {\n  font-size: 16px;\n  margin-left: 4px;\n}\n\n@media screen and (max-height: 481px) {\n  .action-list {\n    padding: 8px;\n  }\n}\n\n@media (max-width: 768px) {\n  .action-list {\n    left: 0;\n    right: 0;\n    margin: 0;\n  }\n}\n",""]);const r=o},399:(n,e,t)=>{t.r(e),t.d(e,{default:()=>g});var a=t(387),i=t.n(a),s=t(388),o=t.n(s),r=t(389),l=t.n(r),d=t(390),c=t.n(d),u=t(391),m=t.n(u),x=t(392),h=t.n(x),p=t(400),b={};b.styleTagTransform=h(),b.setAttributes=c(),b.insert=l().bind(null,"head"),b.domAPI=o(),b.insertStyleElement=m();i()(p.default,b);const g=p.default&&p.default.locals?p.default.locals:void 0},402:(n,e,t)=>{t.r(e),t.d(e,{default:()=>g});var a=t(387),i=t.n(a),s=t(388),o=t.n(s),r=t(389),l=t.n(r),d=t(390),c=t.n(d),u=t(391),m=t.n(u),x=t(392),h=t.n(x),p=t(403),b={};b.styleTagTransform=h(),b.setAttributes=c(),b.insert=l().bind(null,"head"),b.domAPI=o(),b.insertStyleElement=m();i()(p.default,b);const g=p.default&&p.default.locals?p.default.locals:void 0},405:(n,e,t)=>{t.r(e),t.d(e,{default:()=>g});var a=t(387),i=t.n(a),s=t(388),o=t.n(s),r=t(389),l=t.n(r),d=t(390),c=t.n(d),u=t(391),m=t.n(u),x=t(392),h=t.n(x),p=t(406),b={};b.styleTagTransform=h(),b.setAttributes=c(),b.insert=l().bind(null,"head"),b.domAPI=o(),b.insertStyleElement=m();i()(p.default,b);const g=p.default&&p.default.locals?p.default.locals:void 0},407:(n,e,t)=>{t.r(e),t.d(e,{default:()=>g});var a=t(387),i=t.n(a),s=t(388),o=t.n(s),r=t(389),l=t.n(r),d=t(390),c=t.n(d),u=t(391),m=t.n(u),x=t(392),h=t.n(x),p=t(408),b={};b.styleTagTransform=h(),b.setAttributes=c(),b.insert=l().bind(null,"head"),b.domAPI=o(),b.insertStyleElement=m();i()(p.default,b);const g=p.default&&p.default.locals?p.default.locals:void 0},386:(n,e,t)=>{t.r(e),t.d(e,{default:()=>g});var a=t(387),i=t.n(a),s=t(388),o=t.n(s),r=t(389),l=t.n(r),d=t(390),c=t.n(d),u=t(391),m=t.n(u),x=t(392),h=t.n(x),p=t(393),b={};b.styleTagTransform=h(),b.setAttributes=c(),b.insert=l().bind(null,"head"),b.domAPI=o(),b.insertStyleElement=m();i()(p.default,b);const g=p.default&&p.default.locals?p.default.locals:void 0}}]);