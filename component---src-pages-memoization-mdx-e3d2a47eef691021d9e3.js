"use strict";(self.webpackChunkst4sd_overview=self.webpackChunkst4sd_overview||[]).push([[355],{4133:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return s},default:function(){return h}});var i=n(5987),o=(n(7294),n(3905)),a=n(3461);const r=["components"],s={},l=(m="InlineNotification",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var m;const u={_frontmatter:s},p=a.Z;function h(e){let{components:t}=e,n=(0,i.Z)(e,r);return(0,o.kt)(p,Object.assign({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"ST4SD can automatically reuse results of previous calculations rather than executing them again. This feature is called ",(0,o.kt)("strong",{parentName:"p"},"memoization"),". "),(0,o.kt)("p",null,"Memoization can dramatically increase efficiency as many virtual experiments internally perform the same calculations on input systems, even if they measure different properties.  "),(0,o.kt)("p",null,"An example is molecule geometry optimization via Density Functional Theory. Using memoization ST4SD can recognise when an experiment instance wants to perform a geometry optimization on a molecule that has already been completed, even if this was executed in a different type of experiment. Instead of running this potentially expensive calculation again, ST4SD uses the existing results. "),(0,o.kt)(l,{kind:"warning",mdxType:"InlineNotification"},(0,o.kt)("p",null,"Its is easy to use memoization in ST4SD. However for production runs please read the details of how  memoization works in order to understand the expected behaviour under various scenarios.")),(0,o.kt)(l,{kind:"info",mdxType:"InlineNotification"},(0,o.kt)("p",null,"Although you can use memoization with all experiments,  some can be more susceptible to issues than. In ST4SD 2.0 we will provide information on the memoization suitability of virtual experiments in the registry as part of the ","[best practices]","(/virtual experiment-developer-best-practices)")),(0,o.kt)("h2",null,"How to use memoization"),(0,o.kt)("p",null,"To use memoization you simply add the following information when ",(0,o.kt)("a",{parentName:"p",href:"/overview/running-workflows-on-openshift/#running-a-virtual-experiment"},"starting a virtual experiment")," i.e. to the ",(0,o.kt)("inlineCode",{parentName:"p"},"api.api_experiment_start()")," payload:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"payload['additionalOptions'] = ['--useMemoization=true']\n")),(0,o.kt)("p",null,"When this option is specified before executing each component in the virtual experiment the ",(0,o.kt)("inlineCode",{parentName:"p"},"st4sd-runtime")," will check if that component has executed before. If it has, then it will use the already computed results rather than executing the component. "),(0,o.kt)("p",null,"The key concept users need to understand is how the ",(0,o.kt)("inlineCode",{parentName:"p"},"st4sd-runtime"),"decides when components are the same. This is covered in the next sections. "),(0,o.kt)(l,{kind:"success",mdxType:"InlineNotification"},(0,o.kt)("p",null,"Developers do not have to do anything to enable memoization in their virtual experiments.")),(0,o.kt)(l,{kind:"warning",mdxType:"InlineNotification"},(0,o.kt)("p",null,"If you query the detailed-status of a virtual experiment instance that had memoized components, those components will have state ",(0,o.kt)("inlineCode",{parentName:"p"},"Finished"),", exit-status ",(0,o.kt)("inlineCode",{parentName:"p"},"Killed")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"N/A")," for all time related properties e.g. launch time and runtime. This is because the component was never run. This can be confusing so in a future release we will make it more evident these components have been memoized.")),(0,o.kt)("h2",null,"How the runtime decides if a component has run before"),(0,o.kt)("h3",null,"Objective"),(0,o.kt)("p",null,"The objective of the ST4SD memoization system is, given a ready-to-execute component, to reuse the result of a previously executed component if that component had:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The same program version"),(0,o.kt)("li",{parentName:"ul"},"With the same command line arguments"),(0,o.kt)("li",{parentName:"ul"},"With the same input data")),(0,o.kt)("h3",null,"Additional Requirements"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"A match should be found if the previous execution was on a different architecture or if the resource request was different (number CPUs or CPU v GPU)."),(0,o.kt)("li",{parentName:"ol"},"Support matching even if inconsequential environment or time specific information e.g. timestamps, are in the inputs making them not strictly equivalent"),(0,o.kt)("li",{parentName:"ol"},"Memoization should be significantly faster than executing the component. In particular we want to avoid directly comparing the contents of directories with many large input files e.g. simulation outputs 10-100GBs size, which could be computationally expensive"),(0,o.kt)("li",{parentName:"ol"},"The system should be transparent i.e. developers do not need to perform additional development tasks to enable it.   ")),(0,o.kt)("h3",null,"Method"),(0,o.kt)("p",null,"ST4SD uses a fast and transparent method to generate a high-fidelity memoization key for each component. If the runtime finds a previously run component has a matching key then that component’s results are re-used."),(0,o.kt)("p",null,"Briefly, for all nodes the memoization key includes information on"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The command line"),(0,o.kt)("li",{parentName:"ul"},"The container image name (if using a container)"),(0,o.kt)("li",{parentName:"ul"},"Hash of directly referenced input files"),(0,o.kt)("li",{parentName:"ul"},"For a reference to component directories: The memoization key of the producer node, followed by the relative path of the reference to the working directory of the component")),(0,o.kt)(l,{kind:"warning",mdxType:"InlineNotification"},(0,o.kt)("p",null,"Currently references that point to non-component directories are not included in the memoization key. We recommend developers directly reference files in these directories")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note"),": Resource requests are not included in the memoization key. This satisfies additional requirement (1). "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note"),": The contents of component directories are ",(0,o.kt)("strong",{parentName:"p"},"not")," hashed if the directory as whole is referenced. This directly fulfils additional requirement (3). It also fulfils additional requirement (2) as you can reference the directory instead of the files if you have this issue."),(0,o.kt)("p",null,"Our algorithm provides high-fidelity even without inspecting the contents of directories because"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In this case a component’s memoization key includes the keys of a component’s producer nodes."),(0,o.kt)("li",{parentName:"ul"},"The input files references by source nodes are hashed")),(0,o.kt)("p",null,"This means if a component matches a previously executed one, then they are part of the same execution chain and the inputs to the source of the chain are identical."),(0,o.kt)("p",null,"You can read more details of our method in ",(0,o.kt)("a",{parentName:"p",href:"https://ieeexplore.ieee.org/document/9860151"},"this paper.")),(0,o.kt)("h3",null,"Potential Vulnerabilities"),(0,o.kt)("p",null,"We call the cases where our memoization key will not correctly identify reuse opportunities w.r.t. the stated objectives ",(0,o.kt)("em",{parentName:"p"},"vulnerabilities"),". These either cause false-negatives (did not reuse previous results when it could have) or false-positives (reused previous results when it shouldn’t have), which are of greater concern. "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"False-Positive: If the code of a program changes e.g. version change without any indication of the change, results produced with previous executions will be identified as equivalent. ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"To avoid this developers should ensure they indicate changes in versions of codes in their virtual experiment by modifying e.g. a version tag in the container name or adding the component to program name"),(0,o.kt)("li",{parentName:"ul"},"If you use full sha for images this cannot happen. However this would not allow memoization with multi-arch images "))),(0,o.kt)("li",{parentName:"ol"},"False-Positive: If a component consumes non-component directories then, if the contents of those directories change and no-other inputs change, two runs of this will match",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"As mentioned above developers should avoid references to non-component directories"))),(0,o.kt)("li",{parentName:"ol"},"False-Negative: If a component consumes the same information (e.g. a molecule SMILE) from of one of its producer components, but references the producer  directory rather than a specific file in that directory, previous calculations it has performed on this molecule may not be reused. ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"This is because the memoization key of the producer changes when its inputs change. "),(0,o.kt)("li",{parentName:"ul"},"For example if the same molecule appears in two different lists provided to the producer then its memoization key will be different. This in turn leads to a different  memoization key for the consumer and hence no match."))),(0,o.kt)("li",{parentName:"ol"},"False-Negative: If a component can itself process multiple systems e.g. molecules, then if a subset of the same molecules are passed to the same component there will be no match.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"This is because the input to the component has changed and its output will be different even though partially similar to previous runs"),(0,o.kt)("li",{parentName:"ul"},"This situation lies outside the bounds of ST4SDs memoization objective. If developers want memoization to function in this case they need to split the inputs in the workflow. "),(0,o.kt)("li",{parentName:"ul"},"Technically this requires knowledge of how the specific component functions which is counter to ST4SDs adoption of a black-box scope and aim of transparent memoization - see ",(0,o.kt)("a",{parentName:"li",href:"https://ieeexplore.ieee.org/document/9860151"},"this paper for more."))))),(0,o.kt)("h2",null,"How memoization is implemented"),(0,o.kt)("p",null,"The memoization mechanism of ST4SD is built on top of the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/st4sd/st4sd-datastore/"},"st4sd-datastore")," microservices."),(0,o.kt)("p",null,"At runtime the ",(0,o.kt)("inlineCode",{parentName:"p"},"st4sd-runtime-core"),"  always generates a memoization key for each component in the virtua experiment it executes. This is regardless if memoization is on or not. "),(0,o.kt)("p",null,"By default every virtual experiment you run is registered to the ",(0,o.kt)("inlineCode",{parentName:"p"},"st4sd-datastore"),". Part of the information stored for each component in the run is its generated memoization key."),(0,o.kt)("p",null,"When memoization is switched on, after generating the memoization key for a to-be-executed component, the ",(0,o.kt)("inlineCode",{parentName:"p"},"st4sd-runtime-core")," queries the ",(0,o.kt)("inlineCode",{parentName:"p"},"st4sd-datastore")," to see if any previous component has the same key. If it does then ",(0,o.kt)("inlineCode",{parentName:"p"},"st4sd-runtime-core")," fetches the output of the previous component from the ",(0,o.kt)("inlineCode",{parentName:"p"},"st4sd-datastore")," and places it in the working directory of the to-be-executed component. It then skips execution of that component and moves to its dependencies."))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-memoization-mdx-e3d2a47eef691021d9e3.js.map