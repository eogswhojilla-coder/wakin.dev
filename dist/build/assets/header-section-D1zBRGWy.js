import{R as m,r as f,j as o}from"./app-DEE3zINd.js";var j={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},y=m.createContext&&m.createContext(j),z=["attr","size","title"];function E(e,r){if(e==null)return{};var t,n,s=P(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)===-1&&{}.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}function P(e,r){if(e==null)return{};var t={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(r.indexOf(n)!==-1)continue;t[n]=e[n]}return t}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)({}).hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},p.apply(null,arguments)}function w(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),t.push.apply(t,n)}return t}function b(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?w(Object(t),!0).forEach(function(n){S(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function S(e,r,t){return(r=N(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function N(e){var r=_(e,"string");return typeof r=="symbol"?r:r+""}function _(e,r){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var n=t.call(e,r);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function k(e){return e&&e.map((r,t)=>m.createElement(r.tag,b({key:t},r.attr),k(r.child)))}function C(e){return r=>m.createElement(I,p({attr:b({},e.attr)},r),k(e.child))}function I(e){var r=t=>{var{attr:n,size:s,title:c}=e,x=E(e,z),d=s||t.size||"1em",u;return t.className&&(u=t.className),e.className&&(u=(u?u+" ":"")+e.className),m.createElement("svg",p({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,x,{className:u,style:b(b({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),c&&m.createElement("title",null,c),e.children)};return y!==void 0?m.createElement(y.Consumer,null,t=>r(t)):r(j)}function D(e){return C({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"},child:[]}]})(e)}const g=[{label:"Home",href:"home"},{label:"About",href:"about"},{label:"Projects",href:"projects"},{label:"Experience",href:"experience"},{label:"Contact",href:"contact"}];function B(){const[e,r]=f.useState("Home"),[t,n]=f.useState(!1),[s,c]=f.useState(!1),[x,d]=f.useState(null);f.useEffect(()=>{const a=()=>n(window.scrollY>60);window.addEventListener("scroll",a);const l=setTimeout(()=>c(!0),100);return()=>{window.removeEventListener("scroll",a),clearTimeout(l)}},[]),f.useEffect(()=>{const a=g.map(({href:i})=>document.getElementById(i)).filter(Boolean),l=new IntersectionObserver(i=>{i.forEach(v=>{if(v.isIntersecting){const h=g.find(({href:O})=>O===v.target.id);h&&r(h.label)}})},{rootMargin:"-40% 0px -55% 0px",threshold:0});return a.forEach(i=>l.observe(i)),()=>l.disconnect()},[]);const u=(a,l)=>{var i;r(a),(i=document.getElementById(l))==null||i.scrollIntoView({behavior:"smooth"})};return o.jsxs(o.Fragment,{children:[o.jsx("style",{children:`
                @keyframes slideDown {
                    from { opacity: 0; transform: translateX(-50%) translateY(-20px); }
                    to   { opacity: 1; transform: translateX(-50%) translateY(0px); }
                }
                @keyframes pulseBorder {
                    0%, 100% { box-shadow: 0 0 24px rgba(168,85,247,0.15), 0 0 60px rgba(168,85,247,0.08), inset 0 1px 0 rgba(168,85,247,0.2); }
                    50%       { box-shadow: 0 0 32px rgba(168,85,247,0.3),  0 0 80px rgba(168,85,247,0.15), inset 0 1px 0 rgba(168,85,247,0.35); }
                }
                @keyframes shimmer {
                    0%   { background-position: -200% center; }
                    100% { background-position:  200% center; }
                }
                @keyframes starSpin {
                    from { transform: rotate(0deg); }
                    to   { transform: rotate(360deg); }
                }
                .nav-entrance {
                    animation: slideDown 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
                }
                .nav-pill {
                    animation: pulseBorder 4s ease-in-out infinite;
                }
                .logo-shimmer {
                    background: linear-gradient(90deg, #e9d5ff, #a855f7, #7c3aed, #a855f7, #e9d5ff);
                    background-size: 200% auto;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    animation: shimmer 3s linear infinite;
                }
                .star-spin {
                    display: inline-block;
                    animation: starSpin 6s linear infinite;
                }
                .nav-link-btn {
                    position: relative;
                    overflow: hidden;
                }
                .nav-link-btn::after {
                    content: '';
                    position: absolute;
                    inset: 0;
                    border-radius: 999px;
                    background: radial-gradient(circle at center, rgba(168,85,247,0.25), transparent 70%);
                    opacity: 0;
                    transition: opacity 0.2s ease;
                }
                .nav-link-btn:hover::after {
                    opacity: 1;
                }
            `}),o.jsx("div",{className:`fixed top-5 left-1/2 z-50 w-full max-w-6xl px-4 ${s?"nav-entrance":"opacity-0"}`,style:{transform:"translateX(-50%)"},children:o.jsxs("nav",{className:`
                        nav-pill
                        flex items-center justify-between
                        px-5 py-2.5
                        rounded-full
                        border border-purple-500/30
                        backdrop-blur-xl
                        transition-all duration-500
                        ${t?"bg-[#09090b]/90 border-purple-500/20 shadow-[0_8px_32px_rgba(0,0,0,0.4)]":"bg-purple-950/20"}
                    `,children:[o.jsxs("span",{className:"font-semibold text-sm tracking-wide select-none flex items-center gap-2",children:[o.jsx(D,{className:"star-spin text-purple-300 text-lg"}),o.jsx("span",{className:"logo-shimmer",children:"Wacky D. Hojilla"})]}),o.jsx("ul",{className:"flex items-center gap-1",children:g.map(({label:a,href:l},i)=>o.jsx("li",{style:{opacity:s?1:0,transform:s?"translateY(0)":"translateY(-8px)",transition:`opacity 0.4s ease ${.2+i*.07}s, transform 0.4s ease ${.2+i*.07}s`},children:o.jsx("button",{onClick:()=>u(a,l),onMouseEnter:()=>d(a),onMouseLeave:()=>d(null),className:`
                                        nav-link-btn
                                        px-4 py-1.5 rounded-full text-sm font-medium
                                        transition-all duration-200 cursor-pointer
                                        ${e===a?"text-white bg-purple-500/20 shadow-[0_0_12px_rgba(168,85,247,0.4)]":"text-white/60 hover:text-white"}
                                    `,children:a})},a))})]})})]})}export{B as default};
