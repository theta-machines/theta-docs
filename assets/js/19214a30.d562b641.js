"use strict";(self.webpackChunkcom_thetamachines_docs=self.webpackChunkcom_thetamachines_docs||[]).push([[995],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function A(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),c=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=c(e.components);return n.createElement(m.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,m=e.parentName,l=A(e,["components","mdxType","originalType","parentName"]),p=c(a),s=r,g=p["".concat(m,".").concat(s)]||p[s]||d[s]||o;return a?n.createElement(g,i(i({ref:t},l),{},{components:a})):n.createElement(g,i({ref:t},l))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=s;var A={};for(var m in t)hasOwnProperty.call(t,m)&&(A[m]=t[m]);A.originalType=e,A[p]="string"==typeof e?e:r,i[1]=A;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},1681:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>A,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const o={title:"Diamond Programmer Guide"},i=void 0,A={unversionedId:"hardware/disco-boards/eth4k/diamond-programmer-guide",id:"hardware/disco-boards/eth4k/diamond-programmer-guide",title:"Diamond Programmer Guide",description:"This guide explains how to flash a single bitmap onto the ETH4K using Diamond Programmer. It assumes that you have already generated a bitmap for the ETH4K.",source:"@site/docs/1-hardware/1-disco-boards/1-eth4k/3-diamond-programmer-guide.mdx",sourceDirName:"1-hardware/1-disco-boards/1-eth4k",slug:"/hardware/disco-boards/eth4k/diamond-programmer-guide",permalink:"/hardware/disco-boards/eth4k/diamond-programmer-guide",draft:!1,editUrl:"https://github.com/theta-machines/theta-docs/blob/main/com.thetamachines.docs/docs/1-hardware/1-disco-boards/1-eth4k/3-diamond-programmer-guide.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Diamond Programmer Guide"},sidebar:"hardwareSidebar",previous:{title:"iCEcube2 Guide",permalink:"/hardware/disco-boards/eth4k/icecube2-guide"}},m={},c=[{value:"Installation",id:"installation",level:2},{value:"Programming the ETH4K",id:"programming-the-eth4k",level:2},{value:"Saving the Programmer Project",id:"saving-the-programmer-project",level:2}],l={toc:c},p="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(p,(0,n.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This guide explains how to flash a single bitmap onto the ETH4K using Diamond Programmer. It assumes that you have already ",(0,r.kt)("a",{parentName:"p",href:"/hardware/disco-boards/eth4k/icecube2-guide"},"generated a bitmap")," for the ETH4K."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This guide uses the standalone ",(0,r.kt)("strong",{parentName:"p"},"Diamond Programmer"),", not Lattice Diamond.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Download Diamond Programmer from ",(0,r.kt)("a",{parentName:"li",href:"https://www.latticesemi.com/programmer"},"https://www.latticesemi.com/programmer"),"."),(0,r.kt)("li",{parentName:"ol"},"Run the installer.")),(0,r.kt)("h2",{id:"programming-the-eth4k"},"Programming the ETH4K"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"We provide a Diamond Programmer project file called ",(0,r.kt)("inlineCode",{parentName:"p"},"eth4k-boilerplate.xcf")," which already contains the ETH4K configuration. We recommend cloning this file whenever creating a new Diamond Programmer project.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Download ",(0,r.kt)("inlineCode",{parentName:"li"},"eth4k-boilerplate.xcf.zip")," from ",(0,r.kt)("a",{parentName:"li",href:"https://www.thetamachines.com/downloads/hardware/eth4k-boilerplate.xcf.zip"},"https://www.thetamachines.com/downloads/hardware/eth4k-boilerplate.xcf.zip"),"."),(0,r.kt)("li",{parentName:"ol"},"Extract the zip file to obtain the ",(0,r.kt)("inlineCode",{parentName:"li"},"eth4k-boilerplate.xcf")," file."),(0,r.kt)("li",{parentName:"ol"},"Launch Diamond Programmer."),(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("inlineCode",{parentName:"li"},"Getting Started")," window, select ",(0,r.kt)("inlineCode",{parentName:"li"},"Open an existing programmer project"),", choose the ",(0,r.kt)("inlineCode",{parentName:"li"},"eth4k-boilerplate.xcf")," file, and click ",(0,r.kt)("inlineCode",{parentName:"li"},"OK"),".")),(0,r.kt)("img",{src:a(3699).Z,className:"img-center"}),(0,r.kt)("br",null),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Under ",(0,r.kt)("inlineCode",{parentName:"li"},"File Name"),", select the bitmap you wish to program the FPGA with. In this example, we're using ",(0,r.kt)("inlineCode",{parentName:"li"},"top_bitmap.bin"),".")),(0,r.kt)("img",{src:a(6849).Z,className:"img-center"}),(0,r.kt)("br",null),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"Make sure the ETH4K is plugged into your computer."),(0,r.kt)("li",{parentName:"ol"},"Click the ",(0,r.kt)("inlineCode",{parentName:"li"},"Detect Cable")," button under ",(0,r.kt)("inlineCode",{parentName:"li"},"Cable Settings"),".")),(0,r.kt)("img",{src:a(2830).Z,className:"img-center"}),(0,r.kt)("br",null),(0,r.kt)("ol",{start:8},(0,r.kt)("li",{parentName:"ol"},"Select the option that says ",(0,r.kt)("inlineCode",{parentName:"li"},"ETH4K A")," and click ",(0,r.kt)("inlineCode",{parentName:"li"},"OK"),".")),(0,r.kt)("img",{src:a(5985).Z,className:"img-center"}),(0,r.kt)("br",null),(0,r.kt)("ol",{start:9},(0,r.kt)("li",{parentName:"ol"},"Finally program the device by clicking the program button (",(0,r.kt)("img",{src:a(6548).Z}),") in the top toolbar.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"You can also click ",(0,r.kt)("inlineCode",{parentName:"li"},"Design > Program"),"."))),(0,r.kt)("li",{parentName:"ol"},"If all goes well, the output terminal will print ",(0,r.kt)("inlineCode",{parentName:"li"},"Operation: successful"),". Your device is now programmed.")),(0,r.kt)("h2",{id:"saving-the-programmer-project"},"Saving the Programmer Project"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"eth4k-boilerplate.xcf")," file is only a starting point for your projects. For that reason, it's good practice to save your own ",(0,r.kt)("inlineCode",{parentName:"p"},".xcf")," file for each project."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In Diamond Programmer, Click ",(0,r.kt)("inlineCode",{parentName:"li"},"File > Save [file-name.xcf] As...")),(0,r.kt)("li",{parentName:"ol"},"Save the file in your project's root directory, naming it something like ",(0,r.kt)("inlineCode",{parentName:"li"},"programming-config.xcf"),".")))}d.isMDXComponent=!0},2830:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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"},6849:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/diamond-programmer-file-name-fabe09c5c6a88c1c4795798c5e3747cc.png"},3699:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/diamond-programmer-open-project-8dda9256a28bf8c646eac251e5e41004.png"},6548:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAQCAYAAAAbBi9cAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAALhSURBVDhPZVNdSFRBGD1377ruausPlZWkkFEmUWnpw0YFoRio9VKWCtJLpkSaQUbhQ0Q/RD9EPkgkCWkoGUYPhpFSsOZWVkaCohZqpW7muqvuart7795pZrze3DrDnTP3m++c+e7MXAH/oKzxxCwls8JeBAJFUBAgAShEgUyZCZYJ4R+q8qvTWMoi9CprUCSd+VLBafwKDMOhODCtzGBKcWKGzMBFx2n6vehs60lV0zXoVNagE/UgkOBW7NRsCKOBfnyVP6NXeo9uyYpZ4oJXltTsv/jfSMeKF+gEbQLvKbN3gUcZjIYQzkvBZy431dgyr+eQkvpjxGTQq+IFE5GzqD46ELpnLmkKBXV5JP1GFmFazcgsrrVUZJdjw6oEnM0qhUTLZ3Ux4UJttKdVsfZGasehzGysXhmDypwKhAmxFs1odMIJx7gJMaYk1HY8hOQzwiCEL6lD5LxGjEeKvBvPbG3YYc7A4ICMKZebWfCFNdQ+t5KEdSLejbzEQUsmvuk/wh4Yw6gyjnlFwiZpF153fcLRzUWwdk2g4ki2pg/a7MkZD5ZHJSElPgP11hZEejciQrcCsWICtnv3wWbrQ25iMYymBDhn51TVArjjhfuPiU+SERUVieTUbZAVBaHEjvaBZhzYuQfTPjda3nYiL7kIDn8koo0GvGjvoFvg4yd45XgePRIKl2ce10ryBUIIPH4ZfY5ZjMxFIz3xMJo7rGi1dSM3uQQ9TgO+ON2Yo4sSqrt1slDweP3MYuFmD9kncaa6gdoQ+AIBnsgeCBHI2VJIo3r0uQQ45r1c5A8ooMlc0/99nMeCNvtqYwuxWFJh9/xWI/Ty6UX6n9G7TsWLiIsIw9PWV7hZnKfpg4z2V94mW9fH8SChPftU3ujqbMyi9EZCpqbDPyfx5GJpkP4/VNY0MRXO3W3gzFBe9YCPz997pMWWIuj4F9E7MoayO3XEbDKqESBUH4JTVXVk8IddjSwF8AfuojcR4wzq5wAAAABJRU5ErkJggg=="},5985:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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"}}]);