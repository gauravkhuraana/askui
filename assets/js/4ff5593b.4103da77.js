"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1768],{5318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(7378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(n),k=a,c=m["".concat(p,".").concat(k)]||m[k]||d[k]||l;return n?r.createElement(c,i(i({ref:t},u),{},{components:n})):r.createElement(c,i({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5945:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=n(5773),a=(n(7378),n(5318));const l={custom_edit_url:null},i="askui UI Controller",o={unversionedId:"api/Configuration/askui-ui-controller",id:"api/Configuration/askui-ui-controller",title:"askui UI Controller",description:"Table of Contents",source:"@site/docs/api/06-Configuration/askui-ui-controller.md",sourceDirName:"api/06-Configuration",slug:"/api/Configuration/askui-ui-controller",permalink:"/docs/next/api/Configuration/askui-ui-controller",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"notExists",permalink:"/docs/next/api/Checks/notexists"}},p={},s=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"binaryVersion",id:"binaryversion",level:3},{value:"display",id:"display",level:3},{value:"host",id:"host",level:3},{value:"logFilePath",id:"logfilepath",level:3},{value:"logLevel",id:"loglevel",level:3},{value:"minimize",id:"minimize",level:3},{value:"overWriteBinary",id:"overwritebinary",level:3},{value:"port",id:"port",level:3},{value:"Example",id:"example",level:2}],u={toc:s};function d(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"askui-ui-controller"},"askui UI Controller"),(0,a.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#binaryversion"},"binaryVersion")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#display"},"display")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#host"},"host")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#logfilepath"},"logFilePath")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#loglevel"},"logLevel")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#minimize"},"minimize")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#overwritebinary"},"overWriteBinary")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#port"},"port"))),(0,a.kt)("h2",{id:"properties-1"},"Properties"),(0,a.kt)("h3",{id:"binaryversion"},"binaryVersion"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"binaryVersion"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," - Default: ",(0,a.kt)("inlineCode",{parentName:"p"},"latest")),(0,a.kt)("p",null,"There are different versions of the askui UI Controller. Not all versions are supported for all operating systems.\nYou can specify which binary version of server you want to download and use. The default value is ",(0,a.kt)("inlineCode",{parentName:"p"},"latest")," which will\ndownload the newest version."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null},"v0.8.0"),(0,a.kt)("th",{parentName:"tr",align:null},"v0.9.0"),(0,a.kt)("th",{parentName:"tr",align:null},"v0.9.1"),(0,a.kt)("th",{parentName:"tr",align:null},"v0.10.0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"linux x64")),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"darwin arm64")),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"darwin x64")),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"win32 x64")),(0,a.kt)("td",{parentName:"tr",align:null},"\u2715"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2715"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"win32 ia32")),(0,a.kt)("td",{parentName:"tr",align:null},"\u2715"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2715"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2715"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713")))),(0,a.kt)("p",null,"Availability of binary version by OS and CPU architecture."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"display"},"display"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"display"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," - Default: ",(0,a.kt)("inlineCode",{parentName:"p"},"0")),(0,a.kt)("p",null,"You can choose on which display you want to excecute all\ntests. You can only perform all tests on one display.\nThe application which you want to test should be open and selected on your chosen display."),(0,a.kt)("p",null,"The default value of display is ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," which is your main monitor. If you want to use your\nsecond monitor you can change the value to ",(0,a.kt)("inlineCode",{parentName:"p"},"1")," (",(0,a.kt)("inlineCode",{parentName:"p"},"2")," for your third monitor etc.)."),(0,a.kt)("p",null,"There is also a possibility to detect the value of your monitors.\nAfter the start of the askui UI Controller you should see an askui icon. After clicking on this icon you can choose the option ",(0,a.kt)("inlineCode",{parentName:"p"},"Show"),".\nYou will see the same window as the following image."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Select Monitor Option",src:n(7329).Z,width:"512",height:"358"})),(0,a.kt)("p",null," Now you can identify the order of your monitors and you can also select the monitor in this configuration."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"host"},"host"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"host"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," - Default: ",(0,a.kt)("inlineCode",{parentName:"p"},"127.0.0.1")),(0,a.kt)("p",null,"The host the askui UI Controller is running on."),(0,a.kt)("h3",{id:"logfilepath"},"logFilePath"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"logFilePath"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," - Default: ",(0,a.kt)("inlineCode",{parentName:"p"},"stdout")),(0,a.kt)("p",null,"It is possible to specify a path for your log files. Logs are written to the stdout per default."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"loglevel"},"logLevel"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"logLevel"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"LogLevels")," - Default: ",(0,a.kt)("inlineCode",{parentName:"p"},"debug")),(0,a.kt)("p",null,"You can use different types of Log Level. We provide this options: ",(0,a.kt)("inlineCode",{parentName:"p"},'"fatal"'),", ",(0,a.kt)("inlineCode",{parentName:"p"},'"error"'),", ",(0,a.kt)("inlineCode",{parentName:"p"},'"warn"'),", ",(0,a.kt)("inlineCode",{parentName:"p"},'"info"'),", ",(0,a.kt)("inlineCode",{parentName:"p"},'"debug"'),", ",(0,a.kt)("inlineCode",{parentName:"p"},'"trace"'),", ",(0,a.kt)("inlineCode",{parentName:"p"},'"silent"'),", ",(0,a.kt)("inlineCode",{parentName:"p"},'"verbose"'),". All loglevel are defined in an ",(0,a.kt)("inlineCode",{parentName:"p"},"LogLevels")," enum."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"minimize"},"minimize"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"minimize"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," - Default: ",(0,a.kt)("inlineCode",{parentName:"p"},"true")),(0,a.kt)("p",null,"The default value of this property is ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),". This means that\naskui UI Controller will be started as minimized window. "),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"overwritebinary"},"overWriteBinary"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"overWriteBinary"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," - Default: ",(0,a.kt)("inlineCode",{parentName:"p"},"false")),(0,a.kt)("p",null,"Download the provided Version of askui UI Controller. If a version is already downloaded. This version will be overwritten."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"port"},"port"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"port"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," - Default: ",(0,a.kt)("inlineCode",{parentName:"p"},"6769")),(0,a.kt)("p",null,"The port the askui UI Controller is running on."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { AskuiClient, AskuiControlServer, LogLevels } from 'askui';\n\ndescribe('jest with askui', () => {\n  \n  // Server for controlling the operating system\n  let askuiControlServer: AskuiControlServer;\n  \n  beforeAll(async () => {\n    askuiControlServer = new AskuiControlServer({\n    \n    // choosing the second monitor \n    display: 1,\n\n    // download the latest version of the server\n    binaryVersion: 'latest',\n\n    // start askui UI Controller as minimized application\n    minimize: true,\n\n    // using error loglevel\n    logLevel: LogLevels.ERROR,\n\n    });\n  })\n})\n")))}d.isMDXComponent=!0},7329:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/select-monitor-7fb53b3c1759a29abc877c37097c9022.png"}}]);