import{d as C,u as I,r as i,o as S,h as w,a as v,c as f,b as t,f as _,t as n,i as r,j as k,k as y,g as c,_ as A}from"./index-D6SgIP2T.js";import{a as g}from"./axios-upsvKRUO.js";import{u as h}from"./user-TZ7tRP2b.js";const z={style:{"background-color":"#000",width:"100vw",height:"100vh"}},D={class:"profile"},E={class:"info-item"},M={class:"info-item"},N={class:"info-item"},q={class:"info-item balance"},R={key:0,class:"message"},T={key:1,class:"modal"},j={class:"modal-content"},L={class:"info-item"},P={class:"info-item"},F={key:0,class:"message"},V="http://ponzs.com",G=C({__name:"useradmin",setup(H){const d=h(),$=I();d.isAuthenticated||$.push("/login");const a=i({email:"",steamId:"",nickname:"",balance:0}),o=i(""),m=i(!1),l=i({toEmail:"",amount:0}),p=i("");S(async()=>{try{const s=await g.get(`${V}/api/auth/profile`,{headers:{Authorization:`Bearer ${d.token}`}});a.value=s.data}catch{o.value="获取个人信息失败"}});const U=async()=>{try{const s=await g.put(`${V}/api/auth/update-profile`,{nickname:a.value.nickname},{headers:{Authorization:`Bearer ${d.token}`}});o.value="个人信息更新成功"}catch(s){s.response&&s.response.status===409?o.value="昵称已存在，请更换昵称":o.value="更新个人信息失败"}},x=async()=>{try{const s=await g.post(`${V}/api/auth/transfer`,l.value,{headers:{Authorization:`Bearer ${d.token}`}});p.value="转账成功",a.value.balance-=l.value.amount,m.value=!1}catch{p.value="转账失败"}};return(s,e)=>{const b=w("UButton"),B=w("UInput");return v(),f("div",z,[e[15]||(e[15]=t("br",null,null,-1)),e[16]||(e[16]=t("br",null,null,-1)),e[17]||(e[17]=t("br",null,null,-1)),t("div",D,[e[14]||(e[14]=t("h2",null,"个人信息",-1)),t("form",{onSubmit:_(U,["prevent"])},[t("div",E,[e[4]||(e[4]=t("label",null,"邮箱:",-1)),t("span",null,n(a.value.email),1)]),t("div",M,[e[5]||(e[5]=t("label",null,"Steam ID:",-1)),t("span",null,n(a.value.steamId),1)]),t("div",N,[e[6]||(e[6]=t("label",null,"昵称:",-1)),t("span",null,n(a.value.nickname),1)]),t("div",q,[e[7]||(e[7]=t("label",null,"美金余额:",-1)),t("span",null,n(a.value.balance),1)]),r(b,{type:"submit"},{default:k(()=>e[8]||(e[8]=[y("刷新")])),_:1})],32),o.value?(v(),f("div",R,n(o.value),1)):c("",!0),r(b,{onClick:e[0]||(e[0]=u=>m.value=!0)},{default:k(()=>e[9]||(e[9]=[y("转账")])),_:1}),m.value?(v(),f("div",T,[t("div",j,[t("span",{class:"close",onClick:e[1]||(e[1]=u=>m.value=!1)},"×"),e[13]||(e[13]=t("h2",null,"转账",-1)),t("form",{onSubmit:_(x,["prevent"])},[t("div",L,[e[10]||(e[10]=t("label",null,"对方的账户邮箱:",-1)),r(B,{modelValue:l.value.toEmail,"onUpdate:modelValue":e[2]||(e[2]=u=>l.value.toEmail=u),type:"email",required:""},null,8,["modelValue"])]),t("div",P,[e[11]||(e[11]=t("label",null,"转账金额:",-1)),r(B,{modelValue:l.value.amount,"onUpdate:modelValue":e[3]||(e[3]=u=>l.value.amount=u),type:"number",required:""},null,8,["modelValue"])]),r(b,{type:"submit"},{default:k(()=>e[12]||(e[12]=[y("转账")])),_:1})],32),p.value?(v(),f("div",F,n(p.value),1)):c("",!0)])])):c("",!0)])])}}}),Q=A(G,[["__scopeId","data-v-4e077a33"]]);export{Q as default};
