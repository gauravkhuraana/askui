"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[50608],{35318:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(27378);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),h=p(a),d=o,m=h["".concat(l,".").concat(d)]||h[d]||c[d]||i;return a?n.createElement(m,s(s({ref:t},u),{},{components:a})):n.createElement(m,s({ref:t},u))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,s=new Array(i);s[0]=h;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:o,s[1]=r;for(var p=2;p<i;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},73909:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var n=a(25773),o=(a(27378),a(35318));const i={custom_edit_url:null},s="Desktop App Automation Tutorial",r={unversionedId:"general/Tutorials/spotify-tutorial",id:"version-0.2.2/general/Tutorials/spotify-tutorial",title:"Desktop App Automation Tutorial",description:"The following tutorial shows how to automate a desktop application. As an example we will automatically like songs in the Spotify desktop application.",source:"@site/versioned_docs/version-0.2.2/general/06-Tutorials/spotify-tutorial.md",sourceDirName:"general/06-Tutorials",slug:"/general/Tutorials/spotify-tutorial",permalink:"/docs/0.2.2/general/Tutorials/spotify-tutorial",draft:!1,editUrl:null,tags:[],version:"0.2.2",frontMatter:{custom_edit_url:null},sidebar:"docsSidebar",previous:{title:"Online Shop Test Tutorial",permalink:"/docs/0.2.2/general/Tutorials/shop-demo"},next:{title:"askui UI Controller",permalink:"/docs/0.2.2/general/Troubleshooting/askui-ui-controller"}},l={},p=[{value:"Setup",id:"setup",level:2},{value:"Test",id:"test",level:2},{value:"1. Navigate to the Search Page",id:"1-navigate-to-the-search-page",level:3},{value:"2. Search for a Song",id:"2-search-for-a-song",level:3},{value:"3. Open Menu for a Song",id:"3-open-menu-for-a-song",level:3},{value:"4. Check Whether the Song was Added to Liked Songs",id:"4-check-whether-the-song-was-added-to-liked-songs",level:3},{value:"5. Remove Song from Like Songs",id:"5-remove-song-from-like-songs",level:3},{value:"Result",id:"result",level:2}],u={toc:p};function c(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"desktop-app-automation-tutorial"},"Desktop App Automation Tutorial"),(0,o.kt)("p",null,"The following tutorial shows how to automate a desktop application. As an example we will automatically like songs in the Spotify desktop application."),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create a new npm project (create an empty folder and run ",(0,o.kt)("inlineCode",{parentName:"li"},"npm init -y"),")"),(0,o.kt)("li",{parentName:"ul"},"Follow the ",(0,o.kt)("a",{parentName:"li",href:"/docs/0.2.2/general/Getting%20Started/getting-started"},"askui installation guide")),(0,o.kt)("li",{parentName:"ul"},"Generate the askui example project files with ",(0,o.kt)("inlineCode",{parentName:"li"},"npx askui init")),(0,o.kt)("li",{parentName:"ul"},"Open the Spotify desktop application on your screen",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If you have multiple screens, configure the used display by setting the display variable at ",(0,o.kt)("inlineCode",{parentName:"li"},"helpers/askui-helper.ts"))))),(0,o.kt)("h2",{id:"test"},"Test"),(0,o.kt)("p",null,"After running the ",(0,o.kt)("inlineCode",{parentName:"p"},"npx askui init")," command as described in the setup you will have a file ",(0,o.kt)("inlineCode",{parentName:"p"},"specs/my-first-askui-test-suite.spec.ts"),". In this file add a new test inside the body of the callback passed to the ",(0,o.kt)("inlineCode",{parentName:"p"},"describe")," function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"describe(/* a string identifying the test suite */, () => {\n    ... (other tests)\n\n    it('should like spotify song', async () => {\n\n    });\n});\n")),(0,o.kt)("h3",{id:"1-navigate-to-the-search-page"},"1. Navigate to the Search Page"),(0,o.kt)("p",null,"First, we need to open the search page where we can look for a song:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"it('should like spotify song', async () => {\n    await aui.click().icon().withText('search').exec();\n});\n")),(0,o.kt)("h3",{id:"2-search-for-a-song"},"2. Search for a Song"),(0,o.kt)("p",null,"Then we can use the search field (a textfield) to search a song:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"it('should like spotify song', async () => {\n    ...\n    await aui.typeIn('Bohemian Rhapsody').textfield().exec();\n    await aui.pressKey('enter').exec();\n});\n")),(0,o.kt)("h3",{id:"3-open-menu-for-a-song"},"3. Open Menu for a Song"),(0,o.kt)("p",null,"On the search result page we need to right click a song to open the menu for the song:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"it('should like spotify song', async () => {\n    ...\n    await aui.moveMouseTo().text().withText('Bohemian Rhapsody').below().text().withText('Songs').exec();\n    await aui.mouseRightClick().exec();\n    await aui.click().text().withText('Save to your Liked Songs').exec();\n});\n")),(0,o.kt)("p",null,'As the text "Bohemian Rhapsody" is present on the page multiple times, we are specifying the position of the text we want to click further by saying that it is the one below the text "Songs".'),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"We expect that the song has not yet been liked (although we totally understand if this is the case - we like it, too \ud83d\ude09 - but just for the sake of this test, let's unlike it or use another song)."))),(0,o.kt)("h3",{id:"4-check-whether-the-song-was-added-to-liked-songs"},"4. Check Whether the Song was Added to Liked Songs"),(0,o.kt)("p",null,"Finally, we want to check whether the song was actually added to the liked songs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"it('should like spotify song', async () => {\n    ...\n    await aui.click().text().withText('Liked Songs').exec();\n    await aui.expect().text().withText('Bohemian Rhapsody').exists().exec();\n});\n")),(0,o.kt)("h3",{id:"5-remove-song-from-like-songs"},"5. Remove Song from Like Songs"),(0,o.kt)("p",null,"To be able to run the test again, it is necessary to reset the state of Spotify, or more specifically, your liked songs. One option would be to add the following commands to your test in order to remove the song from the liked songs."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"it('should like spotify song', async () => {\n    ...\n    await aui.moveMouseTo().text().withText('Bohemian Rhapsody').below().text().withText('Title').exec();\n    await aui.mouseRightClick().exec();\n    await aui.click().text().withText('Remove from your Liked Songs').exec();\n});\n")),(0,o.kt)("h2",{id:"result"},"Result"),(0,o.kt)("p",null,"The following code block shows the complete code for the spotify automation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"it('should like spotify song', async () => {\n    await aui.click().icon().withText('search').exec();\n    await aui.typeIn('Bohemian Rhapsody').textfield().exec();\n    await aui.pressKey('enter').exec();\n    await aui.moveMouseTo().text().withText('Bohemian Rhapsody').below().text().withText('Songs').exec();\n    await aui.mouseRightClick().exec();\n    await aui.click().text().withText('Save to your Liked Songs').exec();\n    await aui.click().text().withText('Liked Songs').exec();\n    await aui.expect().text().withText('Bohemian Rhapsody').exists().exec();\n    await aui.moveMouseTo().text().withText('Bohemian Rhapsody').below().text().withText('Title').exec();\n    await aui.mouseRightClick().exec();\n    await aui.click().text().withText('Remove from your Liked Songs').exec();\n});\n")),(0,o.kt)("p",null,"To run this test use the ",(0,o.kt)("inlineCode",{parentName:"p"},"npx jasmine --config=specs/support/jasmine.json")," command."))}c.isMDXComponent=!0}}]);