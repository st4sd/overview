"use strict";(self.webpackChunkst4sd_overview=self.webpackChunkst4sd_overview||[]).push([[392],{1059:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return p},default:function(){return k}});var a=n(5987),o=(n(7294),n(3905)),i=n(3461);const r=["components"],p={},l=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},s=l("PageDescription"),u=l("AnchorLinks"),h=l("AnchorLink"),c=l("InlineNotification"),m={_frontmatter:p},d=i.Z;function k(e){let{components:t}=e,n=(0,a.Z)(e,r);return(0,o.kt)(d,Object.assign({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(s,{mdxType:"PageDescription"},(0,o.kt)("p",null,"Use this page to learn how to write a virtual experiment interface.")),(0,o.kt)(u,{mdxType:"AnchorLinks"},(0,o.kt)(h,{mdxType:"AnchorLink"},"Interface Definition"),(0,o.kt)(h,{mdxType:"AnchorLink"},"Input Extraction Methods"),(0,o.kt)(h,{mdxType:"AnchorLink"},"Property Extraction Methods"),(0,o.kt)(h,{mdxType:"AnchorLink"},"Example")),(0,o.kt)("p",null,"A core-concept in ST4SD is a virtual experiment. This is a computational workflow that takes as input one or more systems of a given type, and produces as output values of ",(0,o.kt)("inlineCode",{parentName:"p"},"properties")," of those systems."),(0,o.kt)("p",null,"This document descries how ST4SD developers can describe this information in their virtual experiments via an ",(0,o.kt)("inlineCode",{parentName:"p"},"interface")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"interface")," of a virtual experiment defines:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The specification used to describe ",(0,o.kt)("inlineCode",{parentName:"li"},"input")," systems it processes e.g. SMILEs for small molecules"),(0,o.kt)("li",{parentName:"ul"},"Instructions to extract the ",(0,o.kt)("inlineCode",{parentName:"li"},"input")," systems from input data"),(0,o.kt)("li",{parentName:"ul"},"Instructions to extract the values of ",(0,o.kt)("inlineCode",{parentName:"li"},"properties")," that the virtual experiment computes")),(0,o.kt)("p",null,"Once a virtual experiment has an ",(0,o.kt)("inlineCode",{parentName:"p"},"interface"),"  ST4SD can return a ",(0,o.kt)("inlineCode",{parentName:"p"},"pandas.DataFrame"),"  containing the properties calculated by instances of the virtual experiment, as well as the ids of the ",(0,o.kt)("inlineCode",{parentName:"p"},"input")," systems that an instance processed. This functionality is provided via the ",(0,o.kt)("inlineCode",{parentName:"p"},"st4sd-datastore")," API and the ",(0,o.kt)("inlineCode",{parentName:"p"},"st4sd-runtime-service")," API. See ",(0,o.kt)("a",{parentName:"p",href:"/overview/using-a-virtual-experiment-interface"},"using a virtual experiment interface")," for further information. "),(0,o.kt)("h2",null,"Interface Definition"),(0,o.kt)("p",null,"An ",(0,o.kt)("inlineCode",{parentName:"p"},"interface")," is an optional top-level ",(0,o.kt)("inlineCode",{parentName:"p"},"FlowIR")," key which describes what ",(0,o.kt)("inlineCode",{parentName:"p"},"input")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"properties")," of a virtual experiment, as well as how to extract their values. "),(0,o.kt)(c,{mdxType:"InlineNotification"},(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"/overview/tutorial"},"tutorial")," for a refresher on virtual experiment definitions and FlowIR.")),(0,o.kt)("p",null,"The general scheme of an ",(0,o.kt)("inlineCode",{parentName:"p"},"interface")," is  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'interface:\n  description: #A description of the virtual experiment. Optional\n  inputSpec:\n    namingScheme: #The scheme/specification used to define your inputs e.g. SMILES\n    inputExtractionMethod: \n      $INPUT_EXTRACTION_METHOD_NAME: #The name of an input extraction method - see "Input Extraction Method" section for possibilities\n        source:  #Optional source method used to provide input to the extraction method.. See the "Source Methods" section for potential values.\n          ...\n        args: #Optional arguments for the extraction method\n          ...\n  propertiesSpec: # A list of properties to extract\n  - name: #The name of the property\n    propertyExtractionMethod:\n      $PROPERTY_EXTRACTION_METHOD_NAME: #The name of a property extraction method - see the "Property Extraction Method" section for possibilities\n        source:  #Optional source method used to provide input to the extraction method. See the "Source Methods" section for potential values.\n          ...\n        args: #Optional arguments for the extraction method\n          ...\n')),(0,o.kt)("p",null,"The 2 main fields are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"interface.inputSpec"),": A dictionary that describes the inputs of the virtual experiment and how to extract them"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"interface.propertiesSpec"),": An array of dictionaries (one per ",(0,o.kt)("inlineCode",{parentName:"li"},"property"),") that describes how to extract the values of the ",(0,o.kt)("inlineCode",{parentName:"li"},"property"))),(0,o.kt)("p",null,"Within both fields the developer defines  extraction methods which tell ST4SD how to extract values that the virtual experiment reads (",(0,o.kt)("inlineCode",{parentName:"p"},"input")," ids) and writes (",(0,o.kt)("inlineCode",{parentName:"p"},"property")," values). "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"See ",(0,o.kt)("a",{parentName:"li",href:"#input-extraction-methods"},"input extraction methods")," for details on choices for that field"),(0,o.kt)("li",{parentName:"ul"},"See ",(0,o.kt)("a",{parentName:"li",href:"#property-extraction-methods"},"property extraction methods")," for details on choices for that field")),(0,o.kt)("p",null,"Both input extraction methods and property extraction methods can have 2 sub-fields, ",(0,o.kt)("inlineCode",{parentName:"p"},"source")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"args")," which may be optional.  If the ",(0,o.kt)("inlineCode",{parentName:"p"},"source")," method is present it must be one of the options outlined in ",(0,o.kt)("a",{parentName:"p",href:"#source-methods"},"source methods")),(0,o.kt)("h2",null,"Input Extraction Methods"),(0,o.kt)("p",null,"Input extraction methods are used by to retrieve a list of the input system ids"),(0,o.kt)("h3",null,"csvColumn"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"csvColumn")," extraction method if the input ids of your experiment are defined in a column of an input CSV file ",(0,o.kt)("strong",{parentName:"p"},"which has column headers"),"."),(0,o.kt)("h4",null,"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"source:\n  path: #The path SOURCE-METHOD. See source-methods for more\nargs:\n  column: #The name of the column in the CSV file containing the ids (the column header)\n")),(0,o.kt)("h4",null,"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-YAML"},"interface:\n  inputSpec:\n    namingScheme: 'SMILES'\n    inputExtractionMethod: \n      csvColumn:\n        source:\n          path: 'input/input_smiles.csv'\n        args:\n          column: \"SMILES\"\n")),(0,o.kt)("h3",null,"hookGetInputIds"),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"hookGetInputIds")," when you want to provide your own python function for getting the input ids."),(0,o.kt)(c,{mdxType:"InlineNotification"},(0,o.kt)("p",null,"To use this method the developer must provide an implementation of the following python function and place it in a file called ",(0,o.kt)("inlineCode",{parentName:"p"},"interface.py")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"hooks")," directory of their virtual experiment. Note: this file can contain other functions also.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def get_input_ids(input_id_file: str, variables: Dict[str, str]) -> List[str]:\n   '''\n       Params: \n            input_id_file (str): The path to the location of the file that contains input ids of the inputs systems. This comes from the `source.path` option in the interface YAML.\n            variables (dict): A dictionary of the global and user variables passed to the virtual experiment instance\n            \n       Returns: \n            A list of strings each of which is the id of an input system\n   '''\n     pass\n")),(0,o.kt)("h4",null,"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"source:\n  path: #A path relative to the root directory of the virtual experiment instance. It points to the CSV file that contains the `input-ids`.\n")),(0,o.kt)("h4",null,"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"interface:\n  inputSpec:\n    namingScheme: 'SMILES'\n    inputExtractionMethod: \n      hookGetInputIds:\n        source:\n          path: 'input/input_smiles.csv'\n")),(0,o.kt)(c,{mdxType:"InlineNotification"},(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/st4sd/band-gap-gamess"},"band-gap-gamess")," virtual experiment uses ",(0,o.kt)("inlineCode",{parentName:"p"},"hookGetInputIds")," to describe the extraction of input ids.")),(0,o.kt)("h2",null,"Property Extraction Methods"),(0,o.kt)("p",null,"Property extraction methods conceptually produce a properties table which contains at least 2 columns: ",(0,o.kt)("inlineCode",{parentName:"p"},"(input-id, $propertyName)"),"where $propertyName is the name of the property in the ",(0,o.kt)("inlineCode",{parentName:"p"},"propertiesSpec")," element using the extraction method. Note: in practice ",(0,o.kt)("inlineCode",{parentName:"p"},"propertyName")," will be transformed to lowercase."),(0,o.kt)("h3",null,"csvDataFrame"),(0,o.kt)("p",null,"Use this method if "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"there is a single CSV file to extract the values of a particular property from for all input"),(0,o.kt)("li",{parentName:"ul"},"The properties are stored in a column of this CSV file"),(0,o.kt)("li",{parentName:"ul"},"The input ids are stored in a column of this CSV file")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")),(0,o.kt)("p",null,"The table created by this method must have column headers ",(0,o.kt)("inlineCode",{parentName:"p"},"input-id")," and $PROPERTYNAME.  The ",(0,o.kt)("inlineCode",{parentName:"p"},"csvDataFrame")," property extractor can change the column names to these correct values using the ",(0,o.kt)("inlineCode",{parentName:"p"},"renameColumns")," option (see Example)"),(0,o.kt)("h4",null,"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'source:\n   $SOURCE_METHOD_NAME # Name of the source methods and its options. See below. \nargs:\n   renameColumns: #Optional: Dictionary whose keys are column names in the CSV file and values are the names to rename the associated key columns. Output column names are implicitly converted to `lowercase`\n   `${name}: ${value}`: #(Optional) Arguments to the `pandas.read_csv()` method. The default arguments are `engine="python"` and `sep=None`.\n')),(0,o.kt)("h4",null,"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'propertiesSpec:\n- name: \'band-gap\'\n  propertyExtractionMethod:\n    csvDataFrame:\n      source:\n        keyOutput: \'FinalEnergies\'\n      args:\n        renameColumns:\n          SMILE: "input-id"\n        usecols:\n        - "SMILE"\n        - "band-gap"\n')),(0,o.kt)("h3",null,"hookGetProperties"),(0,o.kt)("p",null,"Use",(0,o.kt)("inlineCode",{parentName:"p"},"hookGetProperties")," when you want to provide your own python function for getting the property values. "),(0,o.kt)(c,{mdxType:"InlineNotification"},(0,o.kt)("p",null,"To use this method the developer must provide an implementation of the following python function and place it in a file called ",(0,o.kt)("inlineCode",{parentName:"p"},"interface.py")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"hooks")," directory of their virtual experiment. Note: this file can contain other functions also.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def get_properties(property_name:str, property_output_file: str, input_id_file: str, variables: Dict[str, str]) -> pandas.DataFrame\n   '''\n       Params: \n            property_name (str): The name of the property the function should return the values of.  \n            property_output_file (str): The path to the file containing the properties \n            input_id_file (str): The path to the file containing the input_ids\n            variables (dict): A dictionary of the global and user variables passed to the virtual experiment instance\n            \n       Returns: \n            A `pandas.DataFrame` that contains at least 2 columns: `input-id`, `${propertyName}`. \n   '''\n     pass\n")),(0,o.kt)("p",null,"If ",(0,o.kt)("inlineCode",{parentName:"p"},"hookGetProperties")," is defined as the propertyExtractionMethod for property ",(0,o.kt)("inlineCode",{parentName:"p"},"idx")," the values passed to the parameters of this function are determined as follows"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"property_name")," : The value of ",(0,o.kt)("inlineCode",{parentName:"li"},"interface.propertiesSpec[idx].name")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"property_output_file"),": The value returned by the",(0,o.kt)("inlineCode",{parentName:"li"},"interface.propertiesSpec[idx].propertyExtractionMethod.hookGetProperties.source")," method"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"input_id_file"),":  The value of ",(0,o.kt)("inlineCode",{parentName:"li"},"interface.inputSpec.inputExtractionMethod.$METHOD.source"))),(0,o.kt)("p",null,"Note: The column headers in the returned pandas DataFrame will be converted to lowercase by ST4SD. "),(0,o.kt)("h4",null,"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"hookGetInputIds:\n  source: #A source method - see below for details\n")),(0,o.kt)("h4",null,"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"propertiesSpec:\n- name: 'band-gap'\n  propertyExtractionMethod:\n    hookGetProperties:\n      source:\n        keyOutput: 'FinalEnergies'\n")),(0,o.kt)(c,{mdxType:"InlineNotification"},(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/st4sd/band-gap-gamess"},"band-gap-gamess")," virtual experiment uses ",(0,o.kt)("inlineCode",{parentName:"p"},"hookGetProperties")," to describe the extraction of properties.")),(0,o.kt)("h2",null,"Source methods"),(0,o.kt)("p",null,"Source methods define different ways of defining a source file-path that is used by input or property extraction methods"),(0,o.kt)("h3",null,"path"),(0,o.kt)("p",null,"Use this method if you know the full path of the source file. "),(0,o.kt)("h4",null,"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-YAML"},"path: $PATH #A path relative to the root directory of the virtual experiment instance. It points to the CSV file that contains the `input-ids`.\n")),(0,o.kt)("h4",null,"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-YAML"},'propertyExtractionMethod:\n  hookGetProperties:\n    source:\n      path: "stages/stage1/EnergiesExtraction/energies.csv"\n')),(0,o.kt)("h3",null,"keyOutput"),(0,o.kt)("p",null,"Use this method if the properties are in a key-output of the experiment. This method avoids having to know the path to the file (which could change if storage methods change)"),(0,o.kt)("h4",null,"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-YAML"},"# The name of a key-output in the experiment.\n# These are keys of the top-level FlowIR field `output`.\nkeyOutput: $KEYOUTPUT\n")),(0,o.kt)("h4",null,"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-YAML"},'propertyExtractionMethod:\n  hookGetProperties:\n    source:\n      keyOutput: "FinalEnergies"\n')),(0,o.kt)("h2",null,"Example"),(0,o.kt)("p",null,"In this example we have a simple virtual experiment that counts vowels and letters in strings. Here is the FlowIR definition:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"output:\n  vowels:\n    data-in: stage0.count-vowels/vowels.csv:ref\n  letters:\n    data-in: stage0.count-letters/letters.csv:ref\n\ncomponents:\n- name: count-vowels\n  references:\n  - input/words.csv:ref\n  command:\n    executable: bin/count_vowels.py\n    arguments: input/words.csv:ref\n\n- name: count-letters\n  references:\n  - input/words.csv:ref\n  command:\n    executable: bin/count_letters.py\n    arguments: input/words.csv:ref\n")),(0,o.kt)("p",null,"Here is an input ",(0,o.kt)("inlineCode",{parentName:"p"},"words.csv")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"word;\nhello;\nawesome;\nworld;\n")),(0,o.kt)("p",null,"When we process the above ",(0,o.kt)("inlineCode",{parentName:"p"},"input")," file with this workflow we get 2 outputs:"),(0,o.kt)("p",null,"The output ",(0,o.kt)("inlineCode",{parentName:"p"},"vowels")," contains the CSV file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"a;e;i;o;u;word;vowels\n0;1;0;1;0;hello;2\n1;2;0;1;0;awesome;4\n0;0;0;1;0;world;1\n")),(0,o.kt)("p",null,"The output ",(0,o.kt)("inlineCode",{parentName:"p"},"letters")," contains the CSV file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"word;letters\nhello;5\nawesome;7\nworld;5\n")),(0,o.kt)("h3",null,"Interface"),(0,o.kt)("p",null,"An interface to this experiment is shown below. This interface used ",(0,o.kt)("inlineCode",{parentName:"p"},"csvColumn")," input extraction method and the ",(0,o.kt)("inlineCode",{parentName:"p"},"csvDataFrame")," property extraction method. These methods mean the developer does not have to write any other code. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"interface:\n  description: Counts vowels in words\n  inputSpec:\n    namingScheme: words\n    inputExtractionMethod:\n      csvColumn:\n        source:\n          path: input/words.csv\n        args:\n          column: word\n  propertiesSpec:\n  - name: Vowels\n    propertyExtractionMethod:\n      csvDataFrame:\n        source:\n          keyOutput: vowels\n        args:\n          renameColumns:\n            word: input-id\n          usecols:\n          - word\n          - vowels\n  - name: Letters\n    propertyExtractionMethod:\n      csvDataFrame:\n        source:\n          keyOutput: letters\n        args:\n          renameColumns:\n            word: input-id\n          usecols:\n          - word\n          - letters\n")),(0,o.kt)("h3",null,"Run Details"),(0,o.kt)("p",null,"Adding the ",(0,o.kt)("inlineCode",{parentName:"p"},"interface")," definition will cause instances of the virtual experiment to generate 2 new files:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"${INSTANCE_DIR}/output/properties.csv"),": This is a ",(0,o.kt)("inlineCode",{parentName:"li"},";")," delimited ",(0,o.kt)("inlineCode",{parentName:"li"},"CSV")," file that contains the ",(0,o.kt)("inlineCode",{parentName:"li"},"properties")," columns produced by each property defined in ",(0,o.kt)("inlineCode",{parentName:"li"},"propertySpec"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"${INSTANCE_DIR}/outputs/input-ids.json"),": A JSON file that contains an array of strings. Each string is the id of an input system.")),(0,o.kt)("p",null,"For the above example we would get the following in  ",(0,o.kt)("inlineCode",{parentName:"p"},"${INSTANCE_DIR}/output/properties.csv"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"input-id;vowels;letters\nhello;2;5\nawesome;4;7\nworld;1;5\n")),(0,o.kt)("p",null,"The input ids file (",(0,o.kt)("inlineCode",{parentName:"p"},"${INSTANCE_DIR}/outputs/input-ids.json"),") looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[\n    "hello",\n    "awesome",\n    "world"\n]\n')))}k.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-writing-a-virtual-experiment-interface-mdx-8d81058765d3db72e0fb.js.map