"use strict";(self.webpackChunkst4sd_overview=self.webpackChunkst4sd_overview||[]).push([[88],{1651:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return l},default:function(){return k}});var o=t(5987),a=(t(7294),t(3905)),r=t(3461);const i=["components"],l={},p=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",n)},s=p("PageDescription"),c=p("AnchorLinks"),u=p("AnchorLink"),m={_frontmatter:l},d=r.Z;function k(e){let{components:n}=e,t=(0,o.Z)(e,i);return(0,a.kt)(d,Object.assign({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)(s,{mdxType:"PageDescription"},(0,a.kt)("p",null,"This page will teach you how to write and run a workflow that uses application containers via a toy-example.\nWe advise users becoming familiar with the ",(0,a.kt)("a",{parentName:"p",href:"/overview/workflow-specification#component"},"component specification")," before continuing.")),(0,a.kt)(c,{mdxType:"AnchorLinks"},(0,a.kt)(u,{mdxType:"AnchorLink"},"Using containers locally"),(0,a.kt)(u,{mdxType:"AnchorLink"},"Using containers on Kubernetes"),(0,a.kt)(u,{mdxType:"AnchorLink"},"Using containers in multi-platform workflows")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/overview/st4sd-core-getting-started"},(0,a.kt)("strong",{parentName:"a"},"ST4SD core"))," supports using application containers to execute component tasks.\nApplication containers enable developers to have reproducible experiments that they can share with their community."),(0,a.kt)("h2",null,"Using containers locally"),(0,a.kt)("p",null,"Workflows can use ",(0,a.kt)("inlineCode",{parentName:"p"},"docker"),"-like runtimes (e.g. ",(0,a.kt)("a",{parentName:"p",href:"https://www.docker.com/"},"docker"),", ",(0,a.kt)("a",{parentName:"p",href:"https://podman.io/"},"podman"),")\nfor components which execute containerized applications."),(0,a.kt)("p",null,"Here is a minimal example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"components:\n- name: hello\n  command:\n    executable: python3\n    arguments: -c \"print('Hello world!')\"\n    expandArguments: none\n  resourceManager:\n    config:\n      backend: docker\n    docker:\n      image: quay.io/fedora/python-311\n")),(0,a.kt)("p",null,"Check out the ",(0,a.kt)("a",{parentName:"p",href:"/overview/workflow-specification#component"},"component specification")," for the full schema of component definition.\nBy default, ST4SD will use ",(0,a.kt)("inlineCode",{parentName:"p"},"docker")," to execute components whose ",(0,a.kt)("inlineCode",{parentName:"p"},"resourceManager.config.backend")," is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"docker"),".\nUse the ",(0,a.kt)("inlineCode",{parentName:"p"},"elaunch.py")," parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"--dockerExecutableOverride")," to use a different ",(0,a.kt)("inlineCode",{parentName:"p"},"docker"),"-like backend.\nFor example, if the ",(0,a.kt)("inlineCode",{parentName:"p"},"$PATH")," environment variable on your terminal is configured such that you can run the ",(0,a.kt)("inlineCode",{parentName:"p"},"podman"),"\nexecutable you can use it for your ",(0,a.kt)("inlineCode",{parentName:"p"},"docker")," components by setting ",(0,a.kt)("inlineCode",{parentName:"p"},"--dockerExecutableOverride=podman"),".\nIf the executable is not in ",(0,a.kt)("inlineCode",{parentName:"p"},"$PATH")," you can still use it, you just need to use the full path to it when you set\nthe value of the ",(0,a.kt)("inlineCode",{parentName:"p"},"--dockerExecutableOverride")," parameter (",(0,a.kt)("a",{parentName:"p",href:"https://github.com/st4sd/nanopore-geometry-experiment/blob/main/docker-example/run.sh"},"example"),")."),(0,a.kt)("p",null,"Additionally, ST4SD mounts the instance directory in containers it executes.\nYou may need to configure your container runtime system to have read/write access to the instance directory (e.g. by enabling read/write access to the parent directory of the workflow instance)."),(0,a.kt)("h2",null,"Using containers on Kubernetes"),(0,a.kt)("p",null,"Workflows which are running on a Kubernetes environment (e.g. ",(0,a.kt)("a",{parentName:"p",href:"/overview/st4sd-cloud-getting-started"},(0,a.kt)("strong",{parentName:"a"},"ST4SD Cloud"))," on OpenShift)  can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"kubernetes")," backend to run containers."),(0,a.kt)("p",null,"Here is a minimal example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"components:\n- name: hello\n  command:\n    executable: python3\n    arguments: -c \"print('Hello world')\"\n    expandArguments: none\n  resourceManager:\n    config:\n      backend: kubernetes\n    kubernetes:\n      image: quay.io/fedora/python-311\n")),(0,a.kt)("p",null,"To run this, deploy ",(0,a.kt)("a",{parentName:"p",href:"/overview/st4sd-cloud-getting-started"},(0,a.kt)("strong",{parentName:"a"},"ST4SD Cloud"))," then use the ",(0,a.kt)("a",{parentName:"p",href:"/overview/running-workflows-on-openshift/"},"Python client API")," to execute the experiment."),(0,a.kt)("h2",null,"Using containers in multi-platform workflows"),(0,a.kt)("p",null,"Often, workflows have support for multiple execution environments such as Cloud (e.g. Kubernetes/OpenShift), HPC, or even personal devices like laptops.\nST4SD uses the concept of ",(0,a.kt)("a",{parentName:"p",href:"/overview/workflow-specification#platforms"},"platforms")," to help workflow developers define how their workflows should execute under different execution environments.\nTypically developers use a ",(0,a.kt)("a",{parentName:"p",href:"/overview/workflow-specification#variables"},"variable")," as the value of the field ",(0,a.kt)("inlineCode",{parentName:"p"},"resourceManager.config.backend"),".\nAt execution time, a user configures the workflow to run using one of the available ",(0,a.kt)("inlineCode",{parentName:"p"},"platforms")," by specifying the\n",(0,a.kt)("inlineCode",{parentName:"p"},"--platform")," parameter to ",(0,a.kt)("inlineCode",{parentName:"p"},"elaunch.py"),".\nThe components then use the appropriate backend for the desired ",(0,a.kt)("inlineCode",{parentName:"p"},"platform"),"."),(0,a.kt)("p",null,"For example, here is a single workflow that uses a backend based on the platform that the user decides at execution time:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'variables:\n # The "default" platform configures the component to use the "docker" backend\n default:\n   global:\n     backend: docker\n     # All platforms inherit variables of "default" and may override their value\n     image: quay.io/fedora/python-311\n # The k8s platform has the component use the "kubernetes" backend\n k8s:\n   global:\n     backend: kubernetes\n\ncomponents:\n- name: hello\n command:\n   executable: python3\n   arguments: -c "print(\'Hello world\')"\n   expandArguments: none\n resourceManager:\n   config:\n     backend: "%(backend)s"\n   docker:\n     image: "%(image-python)s"\n   kubernetes:\n     image: "%(image-python)s"\n')),(0,a.kt)("p",null,"To run this on a laptop, place the above in a file called ",(0,a.kt)("inlineCode",{parentName:"p"},"workflow.yaml"),"."),(0,a.kt)("p",null,"Next, ",(0,a.kt)("inlineCode",{parentName:"p"},'pip install "st4sd-runtime-core[develop]"')," and then execute:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"elaunch.py -l40 --platform default workflow.yaml\n")))}k.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-using-containers-mdx-25f864cd4a358bc37bbb.js.map