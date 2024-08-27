(()=>{var e,n,s=Object.defineProperty,o=(e,t)=>{for(var n in t)s(e,n,{get:t[n],enumerable:!0})},t={};o(t,{custom_param:()=>e,default:()=>n}),e={domain:"againdev.top",name:"test"},n={custom_param:e},myFun(15),console.log("params :>> ",t)})()
;
function myFun(count){
    for (let index = 0; index < count; index++) {
        console.log(count);
    }
}