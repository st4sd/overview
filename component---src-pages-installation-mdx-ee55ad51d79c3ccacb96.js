"use strict";(self.webpackChunkst4sd_overview=self.webpackChunkst4sd_overview||[]).push([[8751],{7833:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return p},default:function(){return N}});var o=t(45),a=(t(6540),t(5680)),i=t(8027),l=t(9167),r=t(786);const s=["components"],p={},u=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.yg)("div",n)},c=u("PageDescription"),g=u("AnchorLinks"),y=u("AnchorLink"),m=u("InlineNotification"),d=u("ExpressiveList"),h={_frontmatter:p},f=i.A;function N(e){let{components:n}=e,t=(0,o.A)(e,s);return(0,a.yg)(f,Object.assign({},h,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)(c,{mdxType:"PageDescription"},(0,a.yg)("p",null,"Learn how to install ST4SD on a variety of platforms")),(0,a.yg)(g,{mdxType:"AnchorLinks"},(0,a.yg)(y,{mdxType:"AnchorLink"},"Set Up Local Client"),(0,a.yg)(y,{mdxType:"AnchorLink"},"Install on OpenShift Local"),(0,a.yg)(y,{mdxType:"AnchorLink"},"Install on Kubernetes and OpenShift"),(0,a.yg)(y,{mdxType:"AnchorLink"},"Install on Classic HPC")),(0,a.yg)(m,{kind:"warning",mdxType:"InlineNotification"},(0,a.yg)("p",null,"If you are not an administrator then, depending on your\n",(0,a.yg)("a",{parentName:"p",href:"/overview/user-environments"},"user environment"),", you may not have to install anything.\nIts recommended you check ",(0,a.yg)("a",{parentName:"p",href:"/overview/"},"first steps")," to determine if you need to do so.")),(0,a.yg)("h2",null,"Set Up Local Client"),(0,a.yg)(m,{mdxType:"InlineNotification"},(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"For"),": Researchers & Developers"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Use When:"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"You want to run workflows on a Kubernetes/OpenShift instance of the workflow\nstack ",(0,a.yg)("strong",{parentName:"li"},"from your laptop")," via e.g. a jupyter-notebook"),(0,a.yg)("li",{parentName:"ul"},"You want to develop workflows"),(0,a.yg)("li",{parentName:"ul"},"You want to test writing/running some simple workflows that can run on your\nlaptop/desktop"))))),(0,a.yg)("p",null,"The local client install only requires ",(0,a.yg)("inlineCode",{parentName:"p"},"st4sd-runtime-core"),". You can install\n",(0,a.yg)("inlineCode",{parentName:"p"},"st4sd-runtime-core")," directly on your laptop using ",(0,a.yg)("inlineCode",{parentName:"p"},"pip"),"."),(0,a.yg)("h3",null,"Requirements"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"python3"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"We recommend that you use python 3.9 although versions 3.7 through 3.10\nshould work.")))),(0,a.yg)("h3",null,"Installing"),(0,a.yg)("p",null,"A simple pip install suffices:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'pip install "st4sd-runtime-core[develop]"\n')),(0,a.yg)("h2",null,"Install on OpenShift Local"),(0,a.yg)(m,{mdxType:"InlineNotification"},(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"For"),": Developers"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Use When"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"You want to test, develop and run small-scale virtual experiments on your\nlaptop."),(0,a.yg)("li",{parentName:"ul"},"You want to develop or examine the ST4SD micro-services on your laptop"))))),(0,a.yg)("h3",null,"Requirements"),(0,a.yg)(m,{kind:"warning",mdxType:"InlineNotification"},(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"OpenShift Local ",(0,a.yg)("strong",{parentName:"li"},"is only officially supported")," on:",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"RedHat Enterprise Linux 7+"),(0,a.yg)("li",{parentName:"ul"},"CentOS 7+"),(0,a.yg)("li",{parentName:"ul"},"The two latest stable Fedora releases"),(0,a.yg)("li",{parentName:"ul"},"Windows 10"),(0,a.yg)("li",{parentName:"ul"},"macOS 11.0 Big Sur or later"))),(0,a.yg)("li",{parentName:"ul"},"Ubuntu 18.04 LTS or later and Debian 10 or later ",(0,a.yg)("strong",{parentName:"li"},"are not officially\nsupported")," and may require manual setup.")),(0,a.yg)("p",null,"We recommend using a x86 device.")),(0,a.yg)("p",null,"You can deploy a small scale version of\n",(0,a.yg)("a",{parentName:"p",href:"/overview/st4sd-cloud-getting-started"},"ST4SD Cloud")," on your personal device using ",(0,a.yg)("a",{href:"https://developers.redhat.com/products/openshift-local/overview",target:"_blank"}," Red Hat OpenShift Local"),". To get started with Red Hat\nOpenShift Local, download the “OpenShift Local” binary (crc) from the ",(0,a.yg)("a",{href:"https://console.redhat.com/openshift/create/local",target:"_blank"}," Red\nHat Console")," website."),(0,a.yg)(m,{kind:"info",mdxType:"InlineNotification"},"You need a Red Hat account to use OpenShift Local. If you do not have one, you can get one for free on the",(0,a.yg)("a",{href:"https://developers.redhat.com/register?intcmp=701f20000012ngPAAQ",target:"_blank"},"Red Hat Developer"),"website."),(0,a.yg)("h3",null,"One time Setup"),(0,a.yg)("p",null,"After you install OpenShift Local you will get access to the ",(0,a.yg)("inlineCode",{parentName:"p"},"crc")," binary.\nEnsure the ",(0,a.yg)("inlineCode",{parentName:"p"},"crc")," binary is in your ",(0,a.yg)("inlineCode",{parentName:"p"},"${PATH}")," for example when you run\n",(0,a.yg)("inlineCode",{parentName:"p"},"crc version")," in your terminal you get similar output to:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"CRC version: 2.22.1+e8068b4\nOpenShift version: 4.13.3\nPodman version: 4.4.4\n")),(0,a.yg)("p",null,"Below we use ",(0,a.yg)("inlineCode",{parentName:"p"},"crc")," in a script to:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"create and configure the Virtual Machine that will host OpenShift Local"),(0,a.yg)("li",{parentName:"ol"},"Set the password of the ",(0,a.yg)("b",null,"kubeadmin")," account to ",(0,a.yg)("inlineCode",{parentName:"li"},"fun")," - do not use\ninsecure passwords in production."),(0,a.yg)("li",{parentName:"ol"},"Deploy ST4SD Cloud on the ",(0,a.yg)("inlineCode",{parentName:"li"},"st4sd-local")," namespace"),(0,a.yg)("li",{parentName:"ol"},"Wait for the ST4SD microservices to go online"),(0,a.yg)("li",{parentName:"ol"},"Open a browser to visit your instance of the Registry UI!",(0,a.yg)("ol",{parentName:"li"},(0,a.yg)("li",{parentName:"ol"},"Login as the user ",(0,a.yg)("inlineCode",{parentName:"li"},"developer")," with the password ",(0,a.yg)("inlineCode",{parentName:"li"},"developer")," - this is the\ndefault non-admin user that ",(0,a.yg)("inlineCode",{parentName:"li"},"crc")," creates for you.")))),(0,a.yg)("p",null,"Copy the text below and execute it in your terminal:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'cat <<\'EOF\'>one_time_setup.sh\nset -e\ncrc config set consent-telemetry no\ncrc setup\n# Increase default resource limits for the Virtual Machine\ncrc config set cpus 8\ncrc config set memory 14336\ncrc config set disk-size 50\n# Set the password to "fun" - do not use insecure passwords in production\ncrc start\neval $(crc oc-env)\necho "Login details for your OpenShift Local installation"\ncrc console --credentials\noc login -u kubeadmin -p fun https://api.crc.testing:6443\noc new-project st4sd-local\necho "Installing ST4SD Cloud"\noc apply -f https://raw.githubusercontent.com/st4sd/st4sd-deployment/main/manifests/openshift-local-minimal-release.yaml\necho "Waiting for the ST4SD services to go online - this will take a couple of minutes"\n\nwait_pod_running() {\n    echo -n "Waiting for pod ${1} "\n    until oc get pod -n st4sd-local -l deploymentconfig=${1} | grep Running > /dev/null\n    do\n    echo -n "."\n        sleep 5\n    done\n    echo "Running"\n}\n\nwait_pod_running st4sd-authentication\nwait_pod_running st4sd-registry-backend\nwait_pod_running st4sd-registry-ui\nwait_pod_running st4sd-runtime-service\nwait_pod_running st4sd-runtime-k8s\nwait_pod_running st4sd-datastore-mongodb\nwait_pod_running st4sd-datastore-nexus\nwait_pod_running st4sd-datastore-cloud-instance\n\necho "Your ST4SD root URL is https://local.apps-crc.testing"\necho "Access your Registry UI at https://local.apps-crc.testing/registry-ui/"\necho "  You will be asked to login with your OpenShift account."\necho "  Use the developer account."\necho "   username: developer"\necho "   password: developer"\necho "Opening the website now"\nopen https://local.apps-crc.testing/registry-ui/\nEOF\nchmod +x one_time_setup.sh\n\n./one_time_setup.sh\n')),(0,a.yg)("p",null,"The script will take 5-15 minutes to complete. While it is building your local\nST4SD Cloud deployment, consider exploring the\n",(0,a.yg)("a",{parentName:"p",href:"/overview/running-workflows-on-openshift"},"ST4SD Services")," and\n",(0,a.yg)("a",{parentName:"p",href:"/overview/st4sd-registry-getting-started"},"ST4SD Registry")," webpages. You can use the\ninformation in there to populate your catalog of experiments and more!"),(0,a.yg)("p",null,"Continue reading if you would like to get more information about the individual\nsteps above."),(0,a.yg)("h3",null,"Setting up your Virtual Machine for OpenShift Local"),(0,a.yg)("p",null,"Red Hat OpenShift Local runs as a Virtual Machine on your device. There is a\none-time setup that you need to do using the ",(0,a.yg)("inlineCode",{parentName:"p"},"crc")," command-line utility that you\ndownloaded in the above step. The default installation of OpenShift Local\nproduces a local OpenShift cluster with:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"4 virtual CPU cores,"),(0,a.yg)("li",{parentName:"ul"},"9 GB of RAM, and"),(0,a.yg)("li",{parentName:"ul"},"31 GB of storage space")),(0,a.yg)("p",null,"We recommend increasing the defaults with the following:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'# one time command\ncrc setup\n# if OpenShift Local is already running, execute "crc stop" first\ncrc config set cpus 8\ncrc config set memory 14336\ncrc config set disk-size 50\n')),(0,a.yg)("p",null,"Below we also change the default password for the ",(0,a.yg)("b",null,"kubeadmin")," so that the\ninstructions are easier to follow."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'# Set the password to "fun" - do not use insecure passwords in production\ncrc config kubeadmin-password fun\n')),(0,a.yg)("p",null,"If you ever want to view the credentials for accessing your OpenShift Local\ninstance, you can run"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"crc console --credentials\n")),(0,a.yg)("h3",null,"Starting and Stopping the OpenShift Local Virtual Machine"),(0,a.yg)("p",null,"Recall that OpenShift Local runs as a small scale Virtual Machine on your\npersonal device. We recommend starting it before you experiment with ST4SD and\nstopping it when you are done running experiments to release the compute\nresources that the Virtual Machine is taking up."),(0,a.yg)("p",null,"To start the virtual machine type:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"crc start\n# Use the `oc` command line interface\neval $(cr oc-env)\n# Open a browser to login to OpenShift Web Console\ncrc console\n")),(0,a.yg)(m,{kind:"info",mdxType:"InlineNotification"},"The command ",(0,a.yg)("b",null,"crc start")," prints useful information on the terminal including how to access the OpenShift Web Console as well as the credentials for the ",(0,a.yg)("b",null,"kubeadmin")," and ",(0,a.yg)("b",null,"developer")," users. In our instructions below we login using the ",(0,a.yg)("b",null,"kubeadmin")," user."),(0,a.yg)("p",null,"To stop the virtual machine type:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"crc stop\n")),(0,a.yg)("h3",null,"Installing ST4SD Cloud"),(0,a.yg)("p",null,"When ",(0,a.yg)("inlineCode",{parentName:"p"},"crc start")," finishes printing information on the terminal, your OpenShift\nLocal cluster has started running. You may now connect using the"),(0,a.yg)("b",null,"kubeadmin")," account:",(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'# Use the `oc` command line interface\neval $(crc oc-env)\n# Ask crc to print the `oc login` commands for you\ncrc console --credentials\n# Now login as the kubeadmin, recall that we set the password to "fun"\noc login -u kubeadmin -p fun https://api.crc.testing:6443\n# Open a browser to login to OpenShift Web Console\ncrc console\n')),(0,a.yg)("h3",null,"Installing"),(0,a.yg)("p",null,"After your OpenShift Local is up and running (i.e. ",(0,a.yg)("inlineCode",{parentName:"p"},"crc start")," has finished).\nFollow the instructions on your terminal to login in as an administrator into\nOpenShift."),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Run ",(0,a.yg)("inlineCode",{parentName:"li"},"crc console --credentials")," to see the ",(0,a.yg)("inlineCode",{parentName:"li"},"oc login")," commands you can type\nin your terminal."),(0,a.yg)("li",{parentName:"ol"},"Create the project ",(0,a.yg)("inlineCode",{parentName:"li"},"st4sd-local"),": ",(0,a.yg)("inlineCode",{parentName:"li"},"oc new-project st4sd-local"),"."),(0,a.yg)("li",{parentName:"ol"},"Deploy the minimal version of ST4SD:\n",(0,a.yg)("inlineCode",{parentName:"li"},"oc apply -f https://raw.githubusercontent.com/st4sd/st4sd-deployment/main/manifests/openshift-local-minimal-release.yaml"),"."),(0,a.yg)("li",{parentName:"ol"},"The url to your local instance of ST4SD is ",(0,a.yg)("a",{parentName:"li",href:"https://local.apps-crc.testing"},"https://local.apps-crc.testing"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"You can access your local ST4SD registry-ui at\n",(0,a.yg)("a",{parentName:"li",href:"https://local.apps-crc.testing/registry-ui/"},"https://local.apps-crc.testing/registry-ui/")),(0,a.yg)("li",{parentName:"ul"},"The very first time you login, OpenShift will inform you that ST4SD wishes\nto know that you are an authorized user of the system. Accept the OpenShift\nprompt on your browser."),(0,a.yg)("li",{parentName:"ul"},"Both default OpenShift accounts (",(0,a.yg)("inlineCode",{parentName:"li"},"developer")," and ",(0,a.yg)("inlineCode",{parentName:"li"},"kubeadmin")," will have\naccess to your ST4SD microservices).",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"By default, the ",(0,a.yg)("inlineCode",{parentName:"li"},"developer")," account has the password ",(0,a.yg)("inlineCode",{parentName:"li"},"developer"),"."),(0,a.yg)("li",{parentName:"ul"},"You can print the administrator credentials using\n",(0,a.yg)("inlineCode",{parentName:"li"},"crc console --credentials"),".")))))),(0,a.yg)(m,{kind:"info",mdxType:"InlineNotification"},(0,a.yg)("p",null,"You can see the credentials of the default accounts that OpenShift Local creates\nfor you by running ",(0,a.yg)("inlineCode",{parentName:"p"},"crc console --credentials")," in your terminal.")),(0,a.yg)("h2",null,"Install on Kubernetes and OpenShift"),(0,a.yg)(m,{mdxType:"InlineNotification"},(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"For"),": Administrators"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Use When"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"You want to install an instance of the workflow stack on a k8s/OpenShift\ncluster"))))),(0,a.yg)("p",null,"First, add the ",(0,a.yg)("strong",{parentName:"p"},"Simulation Toolkit for Scientific Discovery (ST4SD)")," operator\nto the Operator Catalog of your OpenShift cluster:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"oc apply -f https://raw.githubusercontent.com/st4sd/st4sd-olm/main/examples/deploy.yaml\n")),(0,a.yg)("p",null,"Then follow our ",(0,a.yg)("a",{href:"https://github.com/st4sd/st4sd-olm",target:"_blank"},"instructions")," to configure and install. For comprehensive details on customizing ST4SD deployments\nusing ",(0,a.yg)("inlineCode",{parentName:"p"},"helm")," post-installation see ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/st4sd/st4sd-deployment"},"https://github.com/st4sd/st4sd-deployment"),"."),(0,a.yg)("h2",null,"Install on Classic HPC"),(0,a.yg)(m,{mdxType:"InlineNotification"},(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"For"),": Administrators"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Use When:"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"You want to run workflows on a classic HPC infrastructure that uses the LSF\nscheduler"))))),(0,a.yg)("h3",null,"Requirements"),(0,a.yg)("p",null,"The following installation instructions assume you have"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Internet access")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"swig is in your $PATH"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("em",{parentName:"li"},"swig")," is a program for creating scripting language wrappers. Required for\nbuilding the LSF wrappers"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"python3 (3.7 to 3.10) is in your $PATH")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"The command ",(0,a.yg)("inlineCode",{parentName:"strong"},"tox")," is available"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Check by typing ",(0,a.yg)("inlineCode",{parentName:"li"},"tox")," and pressing return")))),(0,a.yg)("h3",null,"Installing"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Clone the ST4SD runtime core repository",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"run ",(0,a.yg)("inlineCode",{parentName:"li"},"git clone https://github.com/st4sd/st4sd-runtime-core.git")))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("inlineCode",{parentName:"li"},"cd")," into the cloned repository"),(0,a.yg)("li",{parentName:"ol"},"run ",(0,a.yg)("inlineCode",{parentName:"li"},"DEPLOY_VENV=$MYVENV tox -e py37-deploy-lsf --site-packages")," where",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"$MYVENV")," is where you want the virtual environment to be created")))),(0,a.yg)("h2",null,"Learn more"),(0,a.yg)("div",{className:"expressive-content-list-group"},(0,a.yg)(d,{title:"User management",background:"true",pictogram:(0,a.yg)(r.Arw,{mdxType:"AccessManagement"}),mdxType:"ExpressiveList"},(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/overview/cloud-manage-users"},"Manage")," the access permissions of users in your ST4SD Cloud instance using standard Kubernetes mechanisms.")),(0,a.yg)(d,{title:"Exploring the Registry UI",background:"true",pictogram:(0,a.yg)(r.LCQ,{mdxType:"CarbonForIbmDotcom"}),mdxType:"ExpressiveList"},(0,a.yg)("p",null,"Install successful? You can now learn about all the features of\n",(0,a.yg)("a",{parentName:"p",href:"/overview/using-the-virtual-experiments-registry-ui"},"our web interface")," for browsing and\nexamining virtual experiments packages and runs.")),(0,a.yg)(d,{title:"Use the APIs",background:"true",pictogram:(0,a.yg)(l.TNV,{mdxType:"ServerOperatingSystems"}),mdxType:"ExpressiveList"},(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/overview/running-workflows-on-openshift"},"Learn")," how to use the ST4SD python client API\nto run, query, and interact with virtual experiments. The APIs also offer access\nto a trove of experiment metadata and files such as logs and outputs. You can\nfind more examples in our Jupyter Notebooks\n",(0,a.yg)("a",{parentName:"p",href:"https://github.com/st4sd/st4sd-examples"},"example repository"),"."))))}N.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-installation-mdx-ee55ad51d79c3ccacb96.js.map