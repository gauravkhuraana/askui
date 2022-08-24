"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[92131],{35318:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>k});var l=t(27378);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,l,r=function(e,n){if(null==e)return{};var t,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=l.createContext({}),u=function(e){var n=l.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return l.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},d=l.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(t),k=r,m=d["".concat(p,".").concat(k)]||d[k]||c[k]||a;return t?l.createElement(m,i(i({ref:n},s),{},{components:t})):l.createElement(m,i({ref:n},s))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<a;u++)i[u]=t[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,t)}d.displayName="MDXCreateElement"},83763:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var l=t(25773),r=(t(27378),t(35318));const a={custom_edit_url:null},i="askui UI Control Client",o={unversionedId:"api/Configuration/askui-ui-control-client",id:"version-0.2.3/api/Configuration/askui-ui-control-client",title:"askui UI Control Client",description:"Log Level",source:"@site/versioned_docs/version-0.2.3/api/06-Configuration/askui-ui-control-client.md",sourceDirName:"api/06-Configuration",slug:"/api/Configuration/askui-ui-control-client",permalink:"/docs/0.2.3/api/Configuration/askui-ui-control-client",draft:!1,editUrl:null,tags:[],version:"0.2.3",frontMatter:{custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"notExists",permalink:"/docs/0.2.3/api/Checks/notexists"},next:{title:"askui UI Controller",permalink:"/docs/0.2.3/api/Configuration/askui-ui-controller"}},p={},u=[{value:"Log Level",id:"log-level",level:2},{value:"Properties",id:"properties",level:2},{value:"uiControllerUrl",id:"uicontrollerurl",level:3},{value:"inferenceClientUrl",id:"inferenceclienturl",level:3},{value:"annotationLevel",id:"annotationlevel",level:3},{value:"Example",id:"example",level:4},{value:"credentials",id:"credentials",level:3}],s={toc:u};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,l.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"askui-ui-control-client"},"askui UI Control Client"),(0,r.kt)("h2",{id:"log-level"},"Log Level"),(0,r.kt)("p",null,"Set the log level of the askui UI Control Client using the ",(0,r.kt)("inlineCode",{parentName:"p"},"LOG_LEVEL")," environment variable.\nThe following log levels are available:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"fatal"')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"error"')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"warn"')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"info"')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"debug"')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"trace"')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"silent"')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"verbose"'),".")),(0,r.kt)("p",null,"The log level defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},'"info"'),". and it can be changed with the following command:"),(0,r.kt)("p",null,"Bash or similar:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export LOG_LEVEL=verbose\n")),(0,r.kt)("p",null,"Powershell"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},'$env:LOG_LEVEL="verbose"\n')),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"uicontrollerurl"},"uiControllerUrl"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"uiControllerUrl"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," - Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"http://127.0.0.1:6769"))),(0,r.kt)("p",null,"The url of the askui UI Controller controlling the OS."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"inferenceclienturl"},"inferenceClientUrl"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"inferenceClientUrl"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," - Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"https://inference.askui.com"))),(0,r.kt)("p",null,"The address of the askui Inference server."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"annotationlevel"},"annotationLevel"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"annotationLevel"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"AnnotationLevel")," - Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"AnnotationLevel.DISABLED"))),(0,r.kt)("p",null,"AnnotationLevel is implemented as an enum. You have three options: ",(0,r.kt)("inlineCode",{parentName:"p"},"DISABLED"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ON_FAILURE"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ALL"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ALL"),":  Runs the ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.2.3/general/Tooling/annotate-image"},"annotate")," command after the execution of each test step."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ON_FAILURE"),": Runs the annotate command if the test step fails"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"DISABLED"),": Never runs the annotate command after test steps"),(0,r.kt)("h4",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"}," let aui = await UiControlClient.build({\n    annotationLevel: AnnotationLevel.DISABLED\n  });\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"credentials"},"credentials"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"credentials"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"Credentials")," Your user credentials - Optional.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"workspaceId"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," Your workspace id"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"email"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," Your e-mail address"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"token"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," An access token for authentication with the askui Inference Server")))),(0,r.kt)("p",null,"Provide credentials for authentication with the askui Inference Server if you would like to use dedicated, more powerful and stable resources instead of public resources. Credentials can also be provided using the environment variables ",(0,r.kt)("inlineCode",{parentName:"p"},"ASKUI_WORKSPACE_ID"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ASKUI_EMAIL")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ASKUI_TOKEN")," but in-code configuration takes precedence over these environment variables. Independent of how you configure the credentials, make sure to use one way to configure all the credentials, i.e., if you set the workspace Id via setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"ASKUI_WORKSPACE_ID")," environment variable, you need to set email and token with environment variables as well."),(0,r.kt)("p",null,"Setting credentials in code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"}," let aui = await UiControlClient.build({\n    credentials: {\n      workspaceId: 'workspace_id',\n      email: 'user@mail.com',\n      token: 'userToken',\n    }\n  });\n")),(0,r.kt)("p",null,"Setting credentials using environment variables (Powershell):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"$env:ASKUI_WORKSPACE_ID = <workspace_id>\n$env:ASKUI_TOKEN = <token>\n$env:ASKUI_EMAIL = <email>\n")),(0,r.kt)("p",null,"Setting credentials using environment variables (Bash or similar):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export ASKUI_WORKSPACE_ID=<workspace_id>\nexport ASKUI_TOKEN=<token>\nexport ASKUI_EMAIL=<email>\n")),(0,r.kt)("hr",null))}c.isMDXComponent=!0}}]);