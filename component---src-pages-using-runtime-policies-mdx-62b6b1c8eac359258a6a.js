"use strict";(self.webpackChunkst4sd_overview=self.webpackChunkst4sd_overview||[]).push([[6305],{3891:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return s},default:function(){return y}});var n=t(45),r=(t(6540),t(5680)),i=t(8027);const o=["components"],s={},p=e=>function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.yg)("div",a)},l=p("PageDescription"),m=p("AnchorLinks"),u=p("AnchorLink"),g={_frontmatter:s},h=i.A;function y(e){let{components:a}=e,t=(0,n.A)(e,o);return(0,r.yg)(h,Object.assign({},g,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)(l,{mdxType:"PageDescription"},(0,r.yg)("p",null,"Use this page to learn how to use the ST4SD runtime policies, for example to execute parameterised packages that contain surrogate models.")),(0,r.yg)(m,{mdxType:"AnchorLinks"},(0,r.yg)(u,{mdxType:"AnchorLink"},"What is a runtime policy?"),(0,r.yg)(u,{mdxType:"AnchorLink"},"How to use a runtime policy?"),(0,r.yg)(u,{mdxType:"AnchorLink"},"Policy: prefer-surrogate"),(0,r.yg)(u,{mdxType:"AnchorLink"},"Policy: random-canary-surrogate")),(0,r.yg)("h2",null,"What is a runtime policy?"),(0,r.yg)("p",null,"Runtime policies are algorithms which modify the default behaviour of ST4SD when its asked to run a parameterised package."),(0,r.yg)("h2",null,"How to use a runtime policy?"),(0,r.yg)("p",null,"You can use a runtime policy by configuring the ",(0,r.yg)("inlineCode",{parentName:"p"},"runtimePolicy")," field of the ",(0,r.yg)("inlineCode",{parentName:"p"},"api_experiment_start()")," ",(0,r.yg)("a",{parentName:"p",href:"/overview/running-workflows-on-openshift#running-a-virtual-experiment"},"payload"),"."),(0,r.yg)("h3",null,"Example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},'from __future__ import typing\nimport json\ndef experiment_start(api: experiment.service.db.ExperimentRestAPI) -> str:\n    """Start an experiment that uses the prefer-surrogate runtime policy\n\n    Arguments:\n      api: An instance of ExperimentRestAPI that has connected to your\n           private ST4SD registry\n\n    Notes:\n\n      The method expects that you have already created the band-gap-dft-gamess-us\n      parameterised package on your ST4SD registry and have synthesized (or imported)\n      a surrogate parameterised package that can substitute band-gap-dft-gamess-us.\n\n    Returns:\n        The UID of the resulting instance\n    """\n\n    payload = {\n        "inputs": [\n            {"filename": "input_smiles.csv", "content": "label,smiles\\nmy_molecule,CCC"}\n        ],\n        "runtimePolicy": {\n          "name": "prefer-surrogate"\n        }\n    }\n\n    return api.api_experiment_start(\n        # the identifier of the parameterised virtual experiment package\n        "band-gap-dft-gamess-us",\n        payload)\n')),(0,r.yg)("h2",null,"Policy: prefer-surrogate"),(0,r.yg)("p",null,"The algorithm of the policy is:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Find a suitable surrogate package of the requested parameterised package in the ",(0,r.yg)("inlineCode",{parentName:"li"},"api_experiment_start()")," payload",(0,r.yg)("ol",{parentName:"li"},(0,r.yg)("li",{parentName:"ol"},"Find parameterised packages that are the result of synthesizing a ",(0,r.yg)("a",{parentName:"li",href:"/overview/using-graph-relationships#automatically-synthesize-new-parameterised-packages"},"transformation relationship"),", AND"),(0,r.yg)("li",{parentName:"ol"},"The ",(0,r.yg)("a",{parentName:"li",href:"/overview/using-graph-relationships#structure-of-a-relationship"},"outputGraph")," of the associated ",(0,r.yg)("inlineCode",{parentName:"li"},"transformation relationship")," matches a subGraph of the requested parameterised package."))),(0,r.yg)("li",{parentName:"ol"},"If there is a suitable surrogate parameterised package then start it and return the UID of the resulting run."),(0,r.yg)("li",{parentName:"ol"},"Otherwise, start and return the UID of the requested parameterised packages.")),(0,r.yg)("p",null,"The schema of the ",(0,r.yg)("inlineCode",{parentName:"p"},"runtimePolicy")," field in the ",(0,r.yg)("inlineCode",{parentName:"p"},"api_experiment_start()")," payload (in ",(0,r.yg)("inlineCode",{parentName:"p"},"YAML")," format) is:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"runtimePolicy:\n  name: prefer-surrogate\n")),(0,r.yg)("h2",null,"Policy: random-canary-surrogate"),(0,r.yg)("p",null,"In a future version the runtime system will automatically invoke this runtime-policy. However, users can also switch it on manually for their virtual experiment runs."),(0,r.yg)("p",null,"The algorithm of the policy is:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Toss a weighted coin which shows heads with probability ",(0,r.yg)("inlineCode",{parentName:"li"},"probabilitySurrogate"),". If the coin shows heads when it lands then attempt to start 2 virtual experiment instances. The requested one AND a surrogate of the requested one (if available).",(0,r.yg)("ol",{parentName:"li"},(0,r.yg)("li",{parentName:"ol"},"If coin shows ",(0,r.yg)("inlineCode",{parentName:"li"},"heads"),": then attempt to start 2 virtual experiment instances. An instance using the requested parameterised package from the ",(0,r.yg)("inlineCode",{parentName:"li"},"api_experiment_start()")," payload and a second one of a suitable surrogate parameterised package (if present). If there is no suitable surrogate parameterised package then start just one run of the requested parameterised package."),(0,r.yg)("li",{parentName:"ol"},"Use the same logic as the “prefer-surrogate” to identify one surrogate parameterised package."))),(0,r.yg)("li",{parentName:"ol"},"If the coin shows ",(0,r.yg)("inlineCode",{parentName:"li"},"tails")," then start just the requested parameterised package"),(0,r.yg)("li",{parentName:"ol"},"Return the UID of the instance for the parameterised package.")),(0,r.yg)("p",null,"The schema of the ",(0,r.yg)("inlineCode",{parentName:"p"},"runtimePolicy")," field in the ",(0,r.yg)("inlineCode",{parentName:"p"},"api_experiment_start()")," payload (in ",(0,r.yg)("inlineCode",{parentName:"p"},"YAML")," format) is:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"runtimePolicy:\n  name: random-canary-surrogate\n  config: # optional\n    probabilitySurrogate: float from 0.0 to 1.0 (optional, default is 0.5)\n")))}y.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-using-runtime-policies-mdx-62b6b1c8eac359258a6a.js.map