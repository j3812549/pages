import{r as T,o as f}from"./@vue-6mcEf2ZC.js";let i=null;const u=(o,c=500)=>{i&&clearTimeout(i),i=setTimeout(()=>{o()},c)},m=o=>{const{dom:c,topMargin:s=50,bottomMargin:r=50,topFnc:t,bottomFnc:e}=o,{scrollTop:l,scrollHeight:n,clientHeight:p}=c,a=n-p;return l<s&&t&&u(t),l>a-r&&e&&u(e),{scrollTop:l,maxScroll:a}},v=(o,c=!1)=>{const s=T(0),r=200;return o.onscroll=()=>{const t=m({dom:o});s.value=t.scrollTop},f(()=>{const t=s.value,e=t/10,l=async()=>{o.scrollTop+50>=t||(o.scrollTop=o.scrollTop+e,await new Promise(n=>{setTimeout(()=>{n()},r/10)}),l())};c?l():o.scrollTop=t}),s};export{v as u};
