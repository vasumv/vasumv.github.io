(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"16l3":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return E}));var n=a("q1tI"),r=a.n(n),i=a("Wbzz"),o=a("Bl7J"),s=(a("UaTi"),a("E9XD"),a("r/6O")),c=a.n(s);function l(e){var t;return t=void 0!==e.titlenolink?r.a.createElement("p",{className:"titlenolink-text"}," ",e.titlenolink," "):r.a.createElement(i.a,{to:e.link}," ",e.title," "),r.a.createElement("li",{className:c.a.projectitem},r.a.createElement("img",{className:"project",src:e.img,alt:e.alt}),r.a.createElement("div",{className:"project-item-text"},t,r.a.createElement("p",{className:"authors-text"},e.authors.split(", ").map((function(e,t){return"Vasudev Vikram"===e.trim()?r.a.createElement("strong",{key:t},e):e})).reduce((function(e,t){return[e,", ",t]}))),r.a.createElement("p",{className:"event-text"},e.event),e.children))}var u=a("EHjY"),p=a.n(u),m=a("tceT"),d=a.n(m),h=a("ydGo"),f=a.n(h),g=a("NQQG"),v=a.n(g),y=a("F10R"),b=a.n(y),w=a("wtAs"),z=a.n(w);a("431T");function E(){return r.a.createElement(o.a,null,r.a.createElement("h2",null,"Publications"),r.a.createElement("div",{id:"project-container"},r.a.createElement("ul",{style:{listStyle:"none",float:"left",display:"block"}},r.a.createElement(l,{img:b.a,alt:"Fray",title:"Fray: An Efficient General-Purpose Concurrency Testing Platform for the JVM",authors:"Ao Li, Byeongjee Kang, Vasudev Vikram, Isabella Laybourn, Samvid Dharanikota, Shrey Tiwari, Rohan Padhye",event:"Under review"},r.a.createElement("p",{className:"project-summary"},"This paper presents Fray, a platform for performing push-button concurrency testing of arbitrary JVM programs. Fray’s novel concurrency control mechanism called shadow locking identifies a sweet spot on the abstraction trade-off curve, enabling it to optimize the search space, achieve high performance, and maximize general-purpose applicability. In mature open source projects, Fray successfully discovered 11 real-world concurrency bugs that can cause 168 tests to fail reproducibly.")),r.a.createElement(l,{img:z.a,alt:"Havoc Effect",title:"The Havoc Paradox in Generator-Based Fuzzing",link:"/pdfs/havoc.pdf",authors:"Ao Li, Madonna Huang, Vasudev Vikram, Caroline Lemieux, Rohan Padhye",event:"Under review"},r.a.createElement("p",{className:"project-summary"},"Parametric generators are a simple way to combine coverage-guided and generator-based fuzzing. However, this technique is prone to the havoc effect, where small mutations on the parametric byte sequence cause large, destructive mutations to the structured input. This registered report first provides a preliminary investigation of the paradoxical nature of the havoc effect for generator-based fuzzing in Java. In particular, we measure mutation characteristics and confirm the existence of the havoc effect, as well as scenarios where it may be more detrimental. The proposed evaluation extends this investigation over more benchmarks, with the tools Zest, JQF’s EI, BeDivFuzz, and Zeugma.")),r.a.createElement(l,{img:v.a,alt:"Proptest AI",title:"Can Large Language Models Write Good Property-Based Tests?",link:"https://arxiv.org/abs/2307.04346",authors:"Vasudev Vikram, Caroline Lemieux, Rohan Padhye",event:"Preprint"},r.a.createElement("p",{className:"project-summary"},"Property-based testing (PBT), while an established technique in the software testing research community, is still relatively underused in real-world software. Pain points in writing property-based tests include implementing diverse random input generators and thinking of meaningful properties to test. Developers, however, are more amenable to writing documentation; plenty of library API documentation is available and can be used as natural language specifications for property-based tests. As large language models (LLMs) have recently shown promise in a variety of coding tasks, we explore the potential of using LLMs to synthesize property-based tests. We call our approach Proptest AI, and propose three different strategies of prompting the LLM for PBT. We characterize various failure modes of Proptest AI and detail an evaluation methodology for automatically synthesized property-based tests. A prototype of our website can be found ",r.a.createElement(i.a,{to:"https://proptest.ai"},"here"),".")),r.a.createElement(l,{img:f.a,alt:"Pinning is Sinning",title:"Pinning is Sinning: Towards Upgrading Maven Dependencies",link:"/pdfs/unpin.pdf",authors:"Vasudev Vikram, Yuvraj Agarwal, Rohan Padhye",event:"Preprint"},r.a.createElement("p",{className:"project-summary"},"In this paper, we look to understand the frequency and consequences of dependency pinning. We conduct an empirical study to show that over 60% of consumers of popular Maven libraries pin their dependencies to outdated versions, some over a year old. Furthermore, these pinned versions often miss out on security fixes; we find that upgrading dependencies to the latest minor or patch version is 3.45x as likely to reduce security vulnerabilities rather than introduce new ones. We propose Unpin, a novel tool that computes a confidence score for a dependency upgrade by leveraging crowdsourced tests of peer projects and simulating the upgrade for them. Our evaluation on real-world pins to the top 500 popular libraries in Maven shows that Unpin (with a minimum confidence score of 5) can provide confidence to over 3,000 consumers to safely perform an upgrade that reduces security vulnerabilities.")),r.a.createElement(l,{img:d.a,alt:"Mu2",title:"Guiding Greybox Fuzzing with Mutation Testing",link:"/pdfs/mu2-issta23.pdf",authors:"Vasudev Vikram, Isabella Laybourn, Ao Li, Nicole Nair, Kelton OBrien, Rafaello Sanna, Rohan Padhye",event:"ISSTA 2023 (Distinguished Paper Award)"},r.a.createElement("p",{className:"project-summary"},"In this paper, we develop and evaluate Mu2, a Java-based framework for incorporating mutation analysis in the greybox fuzzing loop, with the goal of producing a test-input corpus with a high mutation score. Mu2 makes use of a differential oracle for identifying inputs that exercise interesting program behavior without causing crashes. This paper describes several dynamic optimizations implemented in Mu2 to overcome the high cost of performing mutation analysis with every fuzzer-generated input. These optimizations introduce trade-offs in fuzzing throughput and mutation killing ability, which we evaluate empirically on five real-world Java benchmarks. Overall, variants of Mu2 are able to synthesize test-input corpora with a higher mutation score than state-of-the-art Java fuzzer Zest.")),r.a.createElement(l,{img:p.a,alt:"Bonsai Graph",title:"Growing a Test Corpus with Bonsai Fuzzing",link:"/pdfs/bonsai-icse21.pdf",authors:"Vasudev Vikram, Rohan Padhye, Koushik Sen",event:"ICSE 2021"},r.a.createElement("p",{className:"project-summary"},"  This paper presents a coverage-guided grammar based fuzzing technique for automatically generating a corpus of concise test inputs for programs such as compilers. We walk through a case study of a compiler designed for education and the corresponding problem of generating meaningful test cases to provide to students. Our key insight is that instead of attempting to minimize convoluted fuzzer-generated test inputs, we can instead grow concise test inputs by construction using a form of iterative deepening. We call this approach bonsai fuzzing.")))))}},"431T":function(e,t,a){e.exports=a.p+"static/picassoImg-6e049171f05946cfcabb808a83a0c8cd.png"},Bl7J:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a("q1tI"),r=a.n(n),i=a("Wbzz"),o=function(e){return r.a.createElement("li",{style:{fontSize:"xx-large",display:"inline-block",marginRight:"2rem"}},r.a.createElement(i.a,{to:e.to},e.children))};function s(e){var t=e.children;return r.a.createElement("div",{style:{margin:"3rem auto",maxWidth:1e3,padding:"0 1rem"}},r.a.createElement("header",{style:{marginBottom:"1.5rem",paddingBottom:"2rem"}},r.a.createElement("ul",{style:{listStyle:"none",float:"right"}},r.a.createElement(o,{to:"/"},"Home"),r.a.createElement(o,{to:"/work/"},"Work"),r.a.createElement(o,{to:"/projects/"},"Publications"))),t)}},EHjY:function(e,t,a){e.exports=a.p+"static/bonsai-a81a3596d45655ed73431c9b8fefd0e8.png"},F10R:function(e,t,a){e.exports=a.p+"static/fray-cbf26e844eee92686cebb987e047dd2e.png"},NQQG:function(e,t,a){e.exports=a.p+"static/proptestai-18157288a6207f2e5aa572f1af2785fc.png"},UaTi:function(e,t,a){},"r/6O":function(e,t,a){e.exports={projectitem:"project-item-module--projectitem--36r7B"}},tceT:function(e,t,a){e.exports=a.p+"static/mu2-85a571396ea5347625240252c421b40f.png"},wtAs:function(e,t,a){e.exports=a.p+"static/havoc-4b846e5ff76421f2f9710de6a9969880.png"},ydGo:function(e,t,a){e.exports=a.p+"static/unpin-6016fbb3e1f89553bea5604fd0133a67.png"}}]);
//# sourceMappingURL=component---src-pages-projects-js-754c726684673c36a283.js.map