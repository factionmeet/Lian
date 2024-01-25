import{u as k}from"./vuex.e0a76524.js";import{b as z}from"./baseData.79396e81.js";import{a as E}from"./vue-router.985d69a9.js";import{_ as T}from"./Pagination.ed7e0a4e.js";import{_ as C}from"./index.72653c53.js";import{E as M,a as U}from"./element-plus.b1a13357.js";import{b as h,o as A,w as B,Z as r,d as I,T as Y,_ as i,h as m,l as e,f as t,a2 as b}from"./@vue.1e9fc618.js";import"./request.767cbca8.js";import"./axios.7aed06b8.js";import"./@element-plus.22a54168.js";import"./@kjgl77.9e29188f.js";import"./@vueuse.a698a670.js";import"./lodash.c260b632.js";import"./dayjs.a4bdb7c5.js";import"./@popperjs.a8a4a6a0.js";import"./async-validator.5d25c98b.js";import"./memoize-one.4ee5c96d.js";import"./normalize-wheel-es.9a219a59.js";const q={class:"container"},$={class:"handle-box"},H=b("\u8FFD\u6EAF"),R={class:"dialog-footer"},F=b("\u53D6\u6D88"),K=b("\u786E\u8BA4"),O={style:{"margin-top":"10px","text-align":"right"}},Z={setup(G){const n=h({isShowEdit:!1,isShowAdd:!1}),l=h({searchData:null,tableData:[],editData:{},addData:{}});k();const p=h({total:0,pageSize:5,currentPage:1,iconName:"cascades",pageName:"\u79CD\u690D\u5546"});function f(d){p.currentPage=d}function w(){if(l.searchData==""||l.searchData==null||l.searchData==null)return M.error("\u8BF7\u8F93\u5165\u6EAF\u6E90\u7801"),!1;z.queryAll({saleOnlyKey:l.searchData}).then(d=>{console.log(d),l.tableData=d.data.data,p.total=d.data.total}).catch(()=>{})}A(()=>{});const g=()=>{U.confirm("\u786E\u5B9A\u5173\u95ED?").then(()=>{n.isShowEdit=!1}).catch(()=>{})},D=E();return B(()=>D.path,(d,o)=>{}),(d,o)=>{const c=r("el-input"),u=r("el-button"),j=r("el-col"),v=r("el-row"),_=r("el-form-item"),V=r("el-date-picker"),y=r("el-form"),x=r("el-dialog"),a=r("el-table-column"),S=r("el-table"),N=r("base-table");return I(),Y(N,null,{default:i(()=>[m("div",q,[m("div",$,[e(v,null,{default:i(()=>[e(j,{span:22},{default:i(()=>[e(c,{modelValue:t(l).searchData,"onUpdate:modelValue":o[0]||(o[0]=s=>t(l).searchData=s),placeholder:"\u8BF7\u8F93\u5165\u6EAF\u6E90\u7801",class:"grid-content handle-input mr10"},null,8,["modelValue"]),e(u,{type:"primary",icon:d.Search,onClick:w},{default:i(()=>[H]),_:1},8,["icon"])]),_:1})]),_:1})]),e(x,{modelValue:t(n).isShowEdit,"onUpdate:modelValue":o[6]||(o[6]=s=>t(n).isShowEdit=s),title:"\u7F16\u8F91\u4FE1\u606F",width:"30%","before-close":g},{footer:i(()=>[m("span",R,[e(u,{onClick:o[4]||(o[4]=s=>t(n).isShowEdit=!1)},{default:i(()=>[F]),_:1}),e(u,{type:"primary",onClick:o[5]||(o[5]=s=>d.editData())},{default:i(()=>[K]),_:1})])]),default:i(()=>[e(y,{"status-icon":"","label-width":"100px",ref:(s,P)=>{P.formRef=s},model:t(l).editData},{default:i(()=>[e(_,{label:"\u5546\u573A\u540D\u79F0",prop:"mallName"},{default:i(()=>[e(c,{modelValue:t(l).editData.mallName,"onUpdate:modelValue":o[1]||(o[1]=s=>t(l).editData.mallName=s),placeholder:"\u8BF7\u8F93\u5165\u5546\u573A\u540D\u79F0"},null,8,["modelValue"])]),_:1}),e(_,{label:"\u5546\u54C1\u4EF7\u683C",prop:"price"},{default:i(()=>[e(c,{modelValue:t(l).editData.price,"onUpdate:modelValue":o[2]||(o[2]=s=>t(l).editData.price=s),placeholder:"\u8BF7\u8F93\u5165\u5546\u54C1\u4EF7\u683C(\u5143)"},null,8,["modelValue"])]),_:1}),e(_,{label:"\u4E0A\u67B6\u65F6\u95F4",prop:"saleTime"},{default:i(()=>[e(V,{modelValue:t(l).editData.saleTime,"onUpdate:modelValue":o[3]||(o[3]=s=>t(l).editData.saleTime=s),type:"date",placeholder:"Pick a day","value-format":"YYYY-MM-DD h:m:s a"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"]),e(S,{data:t(l).tableData.slice((t(p).currentPage-1)*t(p).pageSize,t(p).currentPage*t(p).pageSize),border:"",style:{width:"100%"}},{default:i(()=>[e(a,{prop:"tid",label:"Fabric\u4EA4\u6613\u5E8F\u5217\u53F7",width:"180"}),e(a,{prop:"ttime",label:"\u4EA4\u6613\u65F6\u95F4",width:"180"}),e(a,{prop:"role",label:"\u4EA4\u6613\u7528\u6237",width:"180"}),e(a,{prop:"planterName",label:"\u519C\u4EA7\u54C1",width:"130"}),e(a,{prop:"temperature",label:"\u6E29\u5EA6",width:"130"}),e(a,{prop:"envHumidity",label:"\u73AF\u5883\u6E7F\u5EA6",width:"130"}),e(a,{prop:"ph",label:"ph\u503C",width:"130"}),e(a,{prop:"light",label:"\u5149\u7167\u5F3A\u5EA6",width:"130"}),e(a,{prop:"soilHumidity",label:"\u571F\u58E4\u6E7F\u5EA6",width:"130"}),e(a,{prop:"factoryName",label:"\u52A0\u5DE5\u5382\u540D\u79F0",width:"130"}),e(a,{prop:"qualityInspector",label:"\u8D28\u68C0\u4EBA\u5458",width:"130"}),e(a,{prop:"processPerson",label:"\u52A0\u5DE5\u4EBA\u5458",width:"130"}),e(a,{prop:"date",label:"\u52A0\u5DE5\u65F6\u95F4",width:"130"}),e(a,{prop:"location",label:"\u4ED3\u50A8\u5730\u5740",width:"130"}),e(a,{prop:"inTime",label:"\u8FDB\u5165\u65F6\u95F4",width:"130"}),e(a,{prop:"outTime",label:"\u79BB\u5F00\u65F6\u95F4",width:"130"}),e(a,{prop:"transportPerson",label:"\u8FD0\u8F93\u4EBA",width:"130"}),e(a,{prop:"leaveAddress",label:"\u51FA\u53D1\u5730",width:"130"}),e(a,{prop:"arriveAddress",label:"\u76EE\u7684\u5730",width:"130"}),e(a,{prop:"mallName",label:"\u5546\u573A\u540D\u79F0",width:"130"}),e(a,{prop:"price",label:"\u5546\u54C1\u4EF7\u683C(\u5143)",width:"130"}),e(a,{prop:"saleTime",label:"\u4E0A\u67B6\u65F6\u95F4",width:"130"})]),_:1},8,["data"]),m("div",O,[e(T,{"page-size":t(p).pageSize,"page-total":t(p).total,disabled:!1,onPageIndex:f},null,8,["page-size","page-total"])])])]),_:1})}}};var ue=C(Z,[["__scopeId","data-v-55554e5c"]]);export{ue as default};
