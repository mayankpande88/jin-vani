(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,78528,e=>{"use strict";var t=e.i(43476),n=e.i(71645);e.s(["SuggestCorrection",0,function({pageLabel:e,kind:o,className:r}){let[i,a]=(0,n.useState)("");(0,n.useEffect)(()=>{a(window.location.href)},[]);let s=`Correction \xb7 ${e}`,c=`**Page**: ${i||"[paste URL]"}

**What is wrong** (translation / Sanskrit text / doctrinal framing / typo / other${o?` — default: ${o}`:""}):


**Suggested correction**:


**Source / reasoning** (optional but appreciated):

`,l=`https://github.com/mayankpande88/jin-vani/issues/new?title=${encodeURIComponent(s)}&body=${encodeURIComponent(c)}&labels=${encodeURIComponent("correction")}`;return(0,t.jsx)("div",{className:r,children:(0,t.jsxs)("a",{href:l,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 font-ui text-[0.82rem] text-text-3 hover:text-accent transition no-underline",children:[(0,t.jsx)("span",{"aria-hidden":!0,children:"✎"}),(0,t.jsx)("span",{children:"Found something off? Suggest a correction"}),(0,t.jsx)("span",{"aria-hidden":!0,children:"→"})]})})}])}]);