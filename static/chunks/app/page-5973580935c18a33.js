(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{4942:function(e,t,a){Promise.resolve().then(a.bind(a,4045))},1594:function(e,t,a){"use strict";a.d(t,{Z:function(){return c}});var s=a(7437),r=a(6648),i=a(5574),l=a(7138),d=function(e){var t,a,d,o,c,n,u;let{product:p}=e;return(0,s.jsx)(l.default,{href:"/product-details/".concat(null==p?void 0:p.id),children:(0,s.jsxs)("article",{className:"cursor-pointer border-2 border-gray-600 hover:border-gray-200  transition-all duration-300 overflow-hidden rounded-lg bg-gray-900 shadow-lg max-w-[300px] mx-auto sm:mx-0 p-3",children:[(0,s.jsx)(r.default,{src:null==p?void 0:null===(o=p.attributes)||void 0===o?void 0:null===(d=o.banner)||void 0===d?void 0:null===(a=d.data)||void 0===a?void 0:null===(t=a.attributes)||void 0===t?void 0:t.url,alt:"banner-card",width:500,height:350,className:"rounded-lg h-[150px] w-full object-cover"}),(0,s.jsxs)("div",{className:"py-3 px-2  sm:py-4",children:[(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[(0,s.jsx)("a",{href:"#",children:(0,s.jsx)("h3",{className:"text-lg font-medium text-white line-clamp-1",children:null==p?void 0:null===(c=p.attributes)||void 0===c?void 0:c.title})}),(0,s.jsxs)("strong",{children:[null==p?void 0:null===(n=p.attributes)||void 0===n?void 0:n.price,"$"]})]}),(0,s.jsx)("p",{className:"mt-2 line-clamp-3 text-sm/relaxed text-stone-300",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?"}),(0,s.jsxs)("div",{className:"flex items-center justify-between mt-4",children:[(0,s.jsxs)("span",{className:"text-blue-100 flex items-center space-x-2",children:[(0,s.jsx)(i.Z,{className:"text-sm w-5 h-5"}),(0,s.jsx)("span",{className:"text-sm",children:null==p?void 0:null===(u=p.attributes)||void 0===u?void 0:u.category})]}),(0,s.jsxs)("a",{href:"#",className:" transition-all inline-flex items-center gap-1 text-sm font-medium text-cyan-500 hover:text-cyan-400",children:["Find out more",(0,s.jsx)("span",{"aria-hidden":"true",className:"block  rtl:rotate-180",children:"→"})]})]})]})]})})};a(2265);var o=function(){return(0,s.jsx)("div",{className:"grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5",children:[1,2,3,4,5,6,7,8].map(e=>(0,s.jsx)("article",{className:"cursor-pointer border-2 w-[300px] h-[400px] sm:w-[250px] md:w-[300px]  xl:w-[270px] border-gray-600 hover:border-gray-200  transition-all duration-300 overflow-hidden rounded-lg bg-gray-900 shadow-lg mx-auto sm:mx-0 p-3",children:(0,s.jsx)("div",{className:"rounded-lg  h-full w-full bg-gray-500 object-cover animate-pulse"})},e))})},c=function(e){var t;let{productList:a}=e;return(null===(t=a[0])||void 0===t?void 0:t.id)===void 0?(0,s.jsx)(o,{productList:a}):(0,s.jsx)("div",{className:"grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 pb-20",children:a.map(e=>(0,s.jsx)(d,{product:e},e.id))})}},5142:function(e,t,a){"use strict";let{default:s}=a(2759);t.Z={getLatestProducts:()=>s.get("/products?populate=*"),getProductById:e=>s.get("/products/".concat(e,"?populate=*")),getProductByCategory:e=>s.get("/products?filters[category][$eq]=".concat(e,"&populate=*"))}},2759:function(e,t,a){"use strict";a.r(t);let{default:s}=a(4681),r=s.create({baseURL:"http://localhost:1337/api",headers:{Authorization:"Bearer ".concat("d747c05efe2c6e46b6ea36b5d7d4853c90e3ed231e4b8b695963e67af0a8dc83327d3e0af829f00db0ac71371146f0d8c5637fdf6862996a259637357c4b36eaa94cca2c4be7ddb0e75af9b9b8beca7b35e2d38d26c32f6f18731f26f6ce797bfa37fd42a9a6dea02b6f8162a086020bb2760cc696512c0a9977c752993f3a11")}});t.default=r},4045:function(e,t,a){"use strict";a.r(t);var s=a(7437),r=a(2265),i=a(5142),l=a(1594);t.default=function(){let[e,t]=(0,r.useState)([]);(0,r.useEffect)(()=>{a()},[]);let a=()=>{i.Z.getLatestProducts().then(e=>{t(e.data.data)})};return(0,s.jsxs)("div",{className:"bg-gray-900 px-4 pb-20",id:"header",children:[(0,s.jsx)("h2",{className:"bg-gradient-to-r from-blue-500  to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl py-10  text-center",children:"Courses"}),(0,s.jsx)(l.Z,{productList:e})]})}}},function(e){e.O(0,[681,231,684,971,23,744],function(){return e(e.s=4942)}),_N_E=e.O()}]);