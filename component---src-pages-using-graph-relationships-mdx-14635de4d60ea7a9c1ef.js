"use strict";(self.webpackChunkst4sd_overview=self.webpackChunkst4sd_overview||[]).push([[170],{7319:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return s},default:function(){return k}});var a=n(5987),i=(n(7294),n(3905)),r=n(3461);const o=["components"],s={},p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},l=p("PageDescription"),m=p("AnchorLinks"),h=p("AnchorLink"),u=p("InlineNotification"),c=p("Row"),f=p("Column"),d={_frontmatter:s},g=r.Z;function k(e){let{components:t}=e,n=(0,a.Z)(e,o);return(0,i.kt)(g,Object.assign({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(l,{mdxType:"PageDescription"},(0,i.kt)("p",null,"Use this page to learn how to use define relationships between virtual experiment graphs.\nReaders should be familiar with the ",(0,i.kt)("a",{parentName:"p",href:"/overview/workflow-specification"},"FlowIR")," specification of components.")),(0,i.kt)(m,{mdxType:"AnchorLinks"},(0,i.kt)(h,{mdxType:"AnchorLink"},"What is a relationship?"),(0,i.kt)(h,{mdxType:"AnchorLink"},"Structure of a relationship"),(0,i.kt)(h,{mdxType:"AnchorLink"},"Pushing a relationship to the runtime"),(0,i.kt)(h,{mdxType:"AnchorLink"},"Automatically synthesize new parameterised packages")),(0,i.kt)("h2",null,"What is a relationship?"),(0,i.kt)("p",null,"A core concept in ST4SD is the virtual experiment. A virtual experiment defines its execution logic in the form of a computational graph. This enables ST4SD to apply graph operations on the graphs of virtual experiments."),(0,i.kt)("p",null,"For example the runtime support of ST4SD for surrogate models performs a wide range of graph operations on the graphs of virtual experiments. It extracts sub-graphs from one or more virtual experiments, modifies them. Finally, it uses the transformed sub-graphs to update the graphs of different virtual experiment and even generate novel virtual experiments."),(0,i.kt)("h2",null,"Structure of a relationship"),(0,i.kt)("p",null,"ST4SD currently features one type of relationship which we term the ",(0,i.kt)("inlineCode",{parentName:"p"},"transformation")," relationship."),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"transformation")," explains how to replace the ",(0,i.kt)("inlineCode",{parentName:"p"},"$outputGraph")," nodes in a ",(0,i.kt)("inlineCode",{parentName:"p"},"target")," graph with ",(0,i.kt)("inlineCode",{parentName:"p"},"transform($inputGraph)")," nodes from a ",(0,i.kt)("inlineCode",{parentName:"p"},"source")," graph. Where ",(0,i.kt)("inlineCode",{parentName:"p"},"transform()")," produces a graph that produces the same outputs as ",(0,i.kt)("inlineCode",{parentName:"p"},"$outputGraph"),"."),(0,i.kt)("p",null,"To achieve this, the transformation relationship defines how to:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Map each of ",(0,i.kt)("inlineCode",{parentName:"li"},"$inputGraph")," to a parameter of ",(0,i.kt)("inlineCode",{parentName:"li"},"$outputGraph")," (or a default value evaluated in the scope of ",(0,i.kt)("inlineCode",{parentName:"li"},"target"),")"),(0,i.kt)("li",{parentName:"ol"},"Map each result of ",(0,i.kt)("inlineCode",{parentName:"li"},"$outputGraph")," to a result of ",(0,i.kt)("inlineCode",{parentName:"li"},"$inputGraph")," (or a default value evaluated in the scope of ",(0,i.kt)("inlineCode",{parentName:"li"},"source"),").")),(0,i.kt)("p",null,"Parameters of the ",(0,i.kt)("inlineCode",{parentName:"p"},"inputGraph")," are ",(0,i.kt)("inlineCode",{parentName:"p"},"variables")," and ",(0,i.kt)("a",{parentName:"p",href:"/overview/workflow-specification#datareference"},(0,i.kt)("inlineCode",{parentName:"a"},"DataReferences"))," that ",(0,i.kt)("inlineCode",{parentName:"p"},"$inputGraph")," references which are not produced by nodes in the ",(0,i.kt)("inlineCode",{parentName:"p"},"$inputGraph")," subset of the source graph.\nThe results of the ",(0,i.kt)("inlineCode",{parentName:"p"},"$outputGraph")," are ",(0,i.kt)("inlineCode",{parentName:"p"},"DataReferences")," which leftover nodes in the ",(0,i.kt)("inlineCode",{parentName:"p"},"target")," graph consume which point to ",(0,i.kt)("inlineCode",{parentName:"p"},"$outputGraph")," nodes."),(0,i.kt)("p",null,"Notice that parameters and results can be either DataReferences, variables, or strings which contain references to 0 or more variables. This means that the schema enables you to replace a DataReference in one graph with a string containing 0 or more references to variables of the other graph. In some cases this is a valid transformation action, but this is not the general case."),(0,i.kt)("p",null,"To this end, when you submit/update a transformation to the runtime service, the service will run tests to ensure that transformation can produce a valid experiment.\nHere are the rules that parameter and result mappings must follow:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"It is a ",(0,i.kt)("strong",{parentName:"li"},"valid")," operation to substitute a variable in one of the graphs with the value of another variable, or a ",(0,i.kt)("inlineCode",{parentName:"li"},"value")," that contains 0 or more references to variables in the other graph."),(0,i.kt)("li",{parentName:"ol"},"It is a ",(0,i.kt)("strong",{parentName:"li"},"valid")," operation to substitute a DataReference ",(0,i.kt)("inlineCode",{parentName:"li"},"A")," in one of the graphs with a DataReference ",(0,i.kt)("inlineCode",{parentName:"li"},"B")," in the other graph provided that ",(0,i.kt)("inlineCode",{parentName:"li"},"B")," is valid in the scope of the resulting experiment graph."),(0,i.kt)("li",{parentName:"ol"},"It is an ",(0,i.kt)("strong",{parentName:"li"},"invalid")," operation to substitute a variable in one of the graphs which is used in a place other than the command-line arguments of components with a DataReference")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"schema")," of the relationship transformation (in YAML) is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'relationship:\n  identifier: name of relationship\n  transform: # there is currently only 1 type of relationship\n    inputGraph: # required\n      components: # required\n      - component identifiers to include\n      # must set exactly 1 of identifier or source\n      identifier: |\n        the string identifier of an existing ParameterisedPackage\n        This syntax sugar field is mutually exclusive with "source" field below\n        When set, the runtime sets source to base.packages[0].source\n        of the existing ParameterisedPackage\n      source: # same schema as ParameterisedPackage.base.packages[idx].source\n        git:\n          location:\n            url: https://url/to/clone\n            # one of branch, tag, or commit\n            branch: branch mane (mutually exclusive with tag and commit)\n            tag: branch mane (mutually exclusive with branch and commit)\n            commit: branch mane (mutually exclusive with branch and tag)\n        dataset:\n          location: dataset name\n    outputGraph: identical to relationship.transform.inputGraph (required)\n      components:\n      - component identifiers to exclude from outputGraph\n    relationship: # required\n      inferParameters: true/false (default is true)\n      inferResults: true/false (default is true)\n      graphParameters: # Optional\n      - inputGraphParameter:\n          name: parameter name\n        outputGraphParameter:\n          # name and value are mutually exclusive\n          name: parameter name\n          value: a string which may contain references to variables\n            in the context of the OutputGraph\n      graphResults: # Optional\n      - inputGraphResult:\n          # name and value are mutually exclusive\n          name: parameter\n          value: a string which may contain references to variables\n            in the context of the InputGraph\n        outputGraphResult:\n          name: parameter\n\n')),(0,i.kt)(u,{kind:"info",mdxType:"InlineNotification"},"The runtime inspects the graphs and how they are used to infer obvious mappings between parameters (if inferParameters is true) and results (if inferResults is true)."),(0,i.kt)("p",null,"The runtime validates the transformation relationships by testing that:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"All inputGraph parameters have a relationship to an outputGraph parameter"),(0,i.kt)("li",{parentName:"ol"},"All outputGraph results have a relationship to an inputGraph result")),(0,i.kt)("h3",null,"Pushing a relationship to the runtime"),(0,i.kt)("p",null,"You can submit a ",(0,i.kt)("inlineCode",{parentName:"p"},"relationship")," to the ST4SD runtime-service API using the method ",(0,i.kt)("inlineCode",{parentName:"p"},"experiment.service.db.ExperimentRestAPI.api_relationship_push()"),"."),(0,i.kt)(u,{kind:"info",mdxType:"InlineNotification"},'The schema above is in YAML format. If you are using python (i.e. an instance of experiment.service.db.ExperimentRestAPI) you should either create an equivalent python dictionary OR a python string that contains the yaml definition and then convert the string into a dictionary using "yaml.loads(the_string)".'),(0,i.kt)("h4",null,"Example: push a relationship"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from __future__ import typing\nimport json\ndef relationship_push(api: experiment.service.db.ExperimentRestAPI):\n    """Creates a Transformation relationship between 2 parameterised\n    packages from the ST4SD global registry\n\n    Arguments:\n      api: An instance of ExperimentRestAPI that has connected to your\n           private ST4SD registry\n\n    Notes:\n\n      The method expects that you have already imported 2 parameterised\n      packages from the ST4SD global registry into your private registry.\n      The parameterised packages are: ::\n\n        1. configuration-generator-ani (contains the inputGraph)\n        2. band-gap-dft-gamess-us (contains the outputGraph)\n    """\n\n    relationship = {\n      "identifier": "optimizedconfiguration-to-smilesinput",\n      "transform": {\n        "inputGraph": {\n          "identifier": "configuration-generator-ani:latest",\n          "components": [\n            "stage0.GenerateOptimizedConfiguration"\n          ]\n        },\n        "outputGraph": {\n          "identifier": "band-gap-dft-gamess-us:latest",\n          "components": [\n            "stage0.SMILESToGAMESSInput"\n          ]\n        }\n      }\n    }\n\n    relationship_fleshed_out = api.api_relationship_push(relationship)\n\n    # The runtime system infers mappings between parameters and results\n    print(json.dumps(relationship_fleshed_out, indent=2)\n')),(0,i.kt)("h3",null,"Automatically synthesize new parameterised packages"),(0,i.kt)("p",null,"You can use a ",(0,i.kt)("inlineCode",{parentName:"p"},"transformation")," relationship to automatically synthesize a novel virtual parameterised virtual experiment package like so:"),(0,i.kt)(c,{mdxType:"Row"},(0,i.kt)(f,{colMd:8,colLg:8,noGutterSm:!0,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"44.79166666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAADLAAAAywAEoZFrbAAACW0lEQVQoz11RXUhTYRh+vnO2s193nGfOeTY0tS10TqkVVoTTFEZB08jtNAla+JOGZelVN1FQF5bQftoWSoVEN2FEXZgmS1A0sy2SMqLoJqguopBuI058ZxbUCw/v+/E97wPP+wCABoADgJ0Qxg6gNP9mRQCFAEEef8tAGLYMgJVyCcPSXcotB1ACYqmkbB3D6fQAtO7WEO/sGCmNdkOYHYW4dhOYPA9Y+A01wc5SnudAf3Fd4AQV1cJgpbsGqgMMLVgwvLRffCWz3p4YeidWS5pj3xvkLKrkeU3TrwUj/i+vdBadY29qpfTr+k1DGcA2BC39UOkADDw2qwczzab+e9y+6CrCV+fE5ssfdn96YHF+m+Yb/S3VAJgCQlADoJZVa+qp1dD1NU8kuuTmexM7HQPpGtPwQ/DhiwTqc+953Zmney1zMuMbfYljiWmj85Is/Mww5V8fFe0CgvSGpQTYDmArYdgdVDh8+7NwYXy2wHbybqNjcMJlPD0DYfC+cmyTETCDsEaazq0qkB9vvVif0rvlJ/DJMv4JhTCM0mVZRvHIPEr6x3zW41GXtu8O+L4bBFBxmjJjkaFJdKq3dV/BkYmPYjCe8x8c/yJ2pN/tsYanUNE1Q9SqfNx1gVNsz+Q6gvFsQ/vosrcrueg5mlh0RVIriCSXCcByUIMU2ghjLgbMlRUeW5s/YvV6W+3VLYfqAFj0+WSVkpIrCkKJZ4bO9BIXiGWFtljW1B7Poi2eVTgcoBx8CwjZrHTA/sehtkDglGHD9eF0ToGUfA4ptYxQMofQtRyk1AtIyRx+AzaNnTnXqj7aAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("picture",{parentName:"span"},"\n          ",(0,i.kt)("source",{parentName:"picture",srcSet:["/overview/static/0617c3789009898bbbe5f0f45f523cbe/0eda2/transformation-synthesize.webp 288w","/overview/static/0617c3789009898bbbe5f0f45f523cbe/460e2/transformation-synthesize.webp 576w","/overview/static/0617c3789009898bbbe5f0f45f523cbe/e0ca3/transformation-synthesize.webp 1152w","/overview/static/0617c3789009898bbbe5f0f45f523cbe/d02be/transformation-synthesize.webp 1728w","/overview/static/0617c3789009898bbbe5f0f45f523cbe/c1f4c/transformation-synthesize.webp 2304w","/overview/static/0617c3789009898bbbe5f0f45f523cbe/3fed7/transformation-synthesize.webp 2740w"],sizes:"(max-width: 1152px) 100vw, 1152px",type:"image/webp"}),"\n          ",(0,i.kt)("source",{parentName:"picture",srcSet:["/overview/static/0617c3789009898bbbe5f0f45f523cbe/7fc1e/transformation-synthesize.png 288w","/overview/static/0617c3789009898bbbe5f0f45f523cbe/a5df1/transformation-synthesize.png 576w","/overview/static/0617c3789009898bbbe5f0f45f523cbe/3cbba/transformation-synthesize.png 1152w","/overview/static/0617c3789009898bbbe5f0f45f523cbe/0b124/transformation-synthesize.png 1728w","/overview/static/0617c3789009898bbbe5f0f45f523cbe/4ea69/transformation-synthesize.png 2304w","/overview/static/0617c3789009898bbbe5f0f45f523cbe/c730b/transformation-synthesize.png 2740w"],sizes:"(max-width: 1152px) 100vw, 1152px",type:"image/png"}),"\n          ",(0,i.kt)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/overview/static/0617c3789009898bbbe5f0f45f523cbe/3cbba/transformation-synthesize.png",alt:"Use a transformation relationship to synthesize a new parameterised package",title:"Use a transformation relationship to synthesize a new parameterised package",loading:"lazy",decoding:"async",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,i.kt)("p",null,"A user can trigger the runtime to synthesize a new parameterised package by submitting a ",(0,i.kt)("inlineCode",{parentName:"p"},"synthesis-from-transformation-relationship")," payload to the runtime service using the method ",(0,i.kt)("inlineCode",{parentName:"p"},"experiment.service.db.ExperimentRestAPI.api_relationship_synthesize()"),"."),(0,i.kt)("p",null,"The structure (in ",(0,i.kt)("inlineCode",{parentName:"p"},"YAML"),") of the payload is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'parameterisation:\n  presets:  # optional\n    # Fields defined here *cannot* be overridden by `executionOptions`.\n    # All fields are optional\n    variables: #A list of preset values for variables in the virtual experiment\n    - name: $name of variable\n      value: $variableValue\n    data:\n      - name: name of a file in the "data" directory\n        value: contents of file - utf8 string (not suitable for binary files)\n    runtime:\n      args:\n      - array of `elaunch.py` command line strings\n    platform:  #Value for the experiment platform.\n  executionOptions: # optional\n    # users may override values within constraints that workflow developers set\n    variables:\n    # Variables that the developer allows the user to override.\n    # These CANNOT appear in presets.variables\n    - name: $variable name\n      valueFrom: #Optional: An array of possible values for the variable\n      # If a user does set a value for the variable the 1st entry is used\n      # If valueFrom is not given then user can set any value for the variable.\n      # if they do not set any value then the variable\n      # receives the value that the workflow definition contains in\n      # the platform definition\n      - value: value of variable\n    data: #A list of data files whose contents the user can set.\n    - name: filename under `data` directory, the file must already exist\n    runtime: # Arguments to pass to `elaunch.py`\n             # (cannot include -i -a -d --instanceName)\n      args:\n      - array of elaunch.py command line strings\n    platform: #Default for experiment platform or choice.\n              # Cannot be specified here if in `presets`\n    - an array of platform names. # If the user does not specifying one on start\n                                  # then the 1st entry is used. If no platform\n                                  # is specified the `default` platform is used\n\n\n')),(0,i.kt)(u,{kind:"info",mdxType:"InlineNotification"},'The "parameterisation" field is identical to the "parameterisation" field of parameterised packages. You can find more details about it in our [parameterised package documentation](/creating-a-parameterised-package#the-parameterisation-section).'),(0,i.kt)(u,{kind:"info",mdxType:"InlineNotification"},'The schema above is in YAML format. If you are using python (i.e. an instance of experiment.service.db.ExperimentRestAPI) you should either create an equivalent python dictionary OR a python string that contains the yaml definition and then convert the string into a dictionary using "yaml.loads(the_string)".'),(0,i.kt)("p",null,"Side effects of synthesis step:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The runtime service will create a novel parameterised package on the registry."),(0,i.kt)("li",{parentName:"ol"},"The new parameterised package:",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"will contain all components from the virtual experiment that contains ",(0,i.kt)("inlineCode",{parentName:"li"},"outputGraph")," except for those in the ",(0,i.kt)("inlineCode",{parentName:"li"},"outputGraph"),". The runtime system will substitute those for the components of the transformed ",(0,i.kt)("inlineCode",{parentName:"li"},"inputGraph"),"."),(0,i.kt)("li",{parentName:"ol"},"will have the parameterisation options specified in the ",(0,i.kt)("inlineCode",{parentName:"li"},"parameterisation")," field of the schema above."),(0,i.kt)("li",{parentName:"ol"},"inherits the ",(0,i.kt)("a",{parentName:"li",href:"/overview/using-a-virtual-experiment-interface"},(0,i.kt)("inlineCode",{parentName:"a"},"interface"))," of the virtual experiment that contains the ",(0,i.kt)("inlineCode",{parentName:"li"},"outputGraph"))))),(0,i.kt)("h3",null,"Example: use a transformation relationship to auto-generate a new parameterised package"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from __future__ import typing\nimport json\ndef relationship_synthesize(api: experiment.service.db.ExperimentRestAPI):\n    """Uses a transformation relationship to synthesize a new parameterised\n    package.\n\n    Arguments:\n      api: An instance of ExperimentRestAPI that has connected to your\n           private ST4SD registry\n\n    Notes:\n\n      The method expects that you have already created the transformation\n      relationship "optimizedconfiguration-to-smilesinput" in your\n      ST4SD registry.\n    """\n\n    config = {\n        "parameterisation": {\n            "presets": {\n                "platform": "openshift",\n            },\n            "executionOptions": {\n                "runtime": {\n                    "args": [\n                        "--registerWorkflow=yes"\n                    ]\n                },\n                "variables": [\n                    {\n                        "name": "n_conformers"\n                    },\n                    {\n                        "name": "max_iterations"\n                    }\n                ]\n            }\n        }\n    }\n\n    synthetic_pvep = api.api_relationship_synthesize(\n        # relationship identifier\n        "optimizedconfiguration-to-smilesinput",\n        config,\n        # name of new PVEP\n        "synthetic")\n    print(json.dumps(synthetic_pvep, indent=2))\n')))}k.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-using-graph-relationships-mdx-14635de4d60ea7a9c1ef.js.map