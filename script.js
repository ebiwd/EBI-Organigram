//Tools/notes:
// - [d3-force](https://github.com/d3/d3-force)
// - [XML convert](http://www.utilities-online.info/xmltojson/#.WmCTb5OFh5I)



// we'll eventually want to lod this from a URL
// convert XML to JSON at http://www.utilities-online.info/xmltojson
var rawData = {
  "nodes": {
    "node": [
      {
        "Group": "Administration",
        "Cluster": "Administration",
        "Leader": "Mark Green",
        "Org-chart-options": "parent",
        "Type": "Other",
        "photo": "green_mark_web_2014.jpg",
        "imagevisibility": "Show the image on the public website"
      },
      {
        "Group": "Chemical biology",
        "Cluster": "Chemical biology",
        "Leader": "Andrew Leach",
        "Org-chart-options": "parent",
        "Type": "Service",
        "photo": "leach_andrew_web.jpg",
        "imagevisibility": "Show the image on the public website"
      },
      {
        "Group": "External Relations",
        "Cluster": "External Relations",
        "Leader": "Lindsey Crosswell",
        "Org-chart-options": "parent",
        "Type": "External-Facing Activities",
        "photo": "CROSSWELL_Lindsey_72.jpg",
        "imagevisibility": "Show the image on the public website"
      },
      {
        "Group": "Genes, genomes and variation",
        "Cluster": "Genes, genomes and variation",
        "Leader": "Paul Flicek",
        "Org-chart-options": "parent",
        "Type": "Service",
        "photo": "Flicek_Paul_72.jpg",
        "imagevisibility": "Show the image on the public website"
      },
      {
        "Group": "Industry",
        "Cluster": "Industry",
        "Leader": "Dominic Clark",
        "Org-chart-options": "parent",
        "Type": "External-Facing Activities",
        "photo": "Clark_Dominic_72.jpg",
        "imagevisibility": "Show the image on the public website"
      },
      {
        "Group": "Literature",
        "Cluster": "Literature",
        "Leader": "Johanna McEntyre",
        "Org-chart-options": "parent",
        "Type": "Service",
        "photo": "mcentyre_johanna_500.jpg",
        "imagevisibility": "Show the image on the public website"
      },
      {
        "Group": "Molecular and cellular structures",
        "Cluster": "Molecular and cellular structures",
        "Leader": "Gerard Kleywegt",
        "Org-chart-options": "parent",
        "Type": "Service",
        "photo": "KLEYWEGT_Gerard_220.jpg",
        "imagevisibility": "Show the image on the public website"
      },
      {
        "Group": "Molecular archives",
        "Cluster": "Molecular archives",
        "Leader": "Helen Parkinson",
        "Org-chart-options": "parent",
        "Type": "Service",
        "photo": "parkinson_helen_tree-of-life_2018_web.jpg",
        "imagevisibility": "Show the image on the public website"
      },
      {
        "Group": "Molecular atlas",
        "Cluster": "Molecular atlas",
        "Leader": "Alvis Brazma",
        "Org-chart-options": "parent",
        "Type": "Service",
        "photo": "Brazma_Alvis_72.jpg",
        "imagevisibility": "Show the image on the public website"
      },
      {
        "Group": "Molecular systems",
        "Cluster": "Molecular systems",
        "Leader": "Henning Hermjakob",
        "Org-chart-options": "parent",
        "Type": "Service",
        "photo": "Hermjakob_Henning_72.jpg",
        "imagevisibility": "Show the image on the public website"
      },
      {
        "Group": "Proteins and protein families",
        "Cluster": "Proteins and protein families",
        "Leader": "Alex Bateman",
        "Org-chart-options": "parent",
        "Type": "Service",
        "photo": "bateman_alex_web_2014.jpg",
        "imagevisibility": "Show the image on the public website"
      },
      {
        "Group": "Research: Genomics",
        "Cluster": "Research: Genomics",
        "Org-chart-options": "parent",
        "Type": "Research"
      },
      {
        "Group": "Research: Pathways & Systems",
        "Cluster": "Research: Pathways & Systems",
        "Org-chart-options": "parent",
        "Type": "Research"
      },
      {
        "Group": "Research: Proteins, Structures, & Chemical Biology",
        "Cluster": "Research: Proteins, Structures, & Chemical Biology",
        "Org-chart-options": "parent",
        "Type": "Research"
      },
      {
        "Group": "Scientific Services",
        "Cluster": "Scientific Services",
        "Leader": "Chuck Cook",
        "Org-chart-options": "parent",
        "Type": "Other",
        "photo": "cook_chuck_tie_small.jpg",
        "imagevisibility": "Show the image on the public website"
      },
      {
        "Group": "Technical services",
        "Cluster": "Technical services",
        "Leader": "Steven Newhouse",
        "Org-chart-options": "parent",
        "Type": "Other",
        "photo": "newhouse_steven_web_2014.jpg",
        "imagevisibility": "Show the image on the public website"
      },
      {
        "Group": "Training",
        "Cluster": "Training",
        "Leader": "Cath Brooksbank",
        "Org-chart-options": "parent",
        "Type": "External-Facing Activities",
        "photo": "brookbanks_cath_web_2016.jpg",
        "imagevisibility": "Show the image on the public website"
      },
      {
        "Group": "Human Resources",
        "Cluster": "Administration",
        "Leader": "Sue Lee",
        "Org-chart-options": "show",
        "Type": "Other",
        "url": "https://www.ebi.ac.uk/about/people/sue-lee",
        "serviceshortname": "Human Resources"
      },
      {
        "Group": "Strategic project management",
        "Cluster": "Administration",
        "Leader": "Mary Barlow",
        "Org-chart-options": "show",
        "Type": "Other",
        "url": "https://www.ebi.ac.uk/about/people/mary-barlow",
        "serviceshortname": "Strategic Project Management Office"
      },
      {
        "Group": "Finance",
        "Cluster": "Administration",
        "Leader": "Brian Nsonga",
        "Org-chart-options": "show",
        "Type": "Other",
        "url": "http://www.ebi.ac.uk/about/people/brian-nsonga",
        "serviceshortname": "Finance"
      },
      {
        "Group": "Facilities Management and Health and Safety",
        "Cluster": "Administration",
        "Leader": "Hilary Little",
        "Org-chart-options": "show",
        "Type": "Other",
        "url": "http://www.ebi.ac.uk/about/people/hilary-little",
        "serviceshortname": "Facilities Management and Health and Safety"
      },
      {
        "Group": "Grants Office",
        "Cluster": "Administration",
        "Leader": "Emma Sinha",
        "Org-chart-options": "show",
        "Type": "Other",
        "serviceshortname": "Grants Office"
      },
      {
        "Group": "Leach team: ChEMBL",
        "Cluster": "Chemical biology",
        "Leader": "Andrew Leach",
        "Org-chart-options": "show",
        "Type": "Service",
        "researchtagline": "ChEMBL: A resource of data on bioactive molecules",
        "serviceshortname": "Computational Chemical Biology team"
      },
      {
        "Group": "O'Donovan team: Metabolomics",
        "Cluster": "Chemical biology",
        "Leader": "Claire O’Donovan",
        "Org-chart-options": "show",
        "Type": "Service",
        "serviceshortname": "Metabolomics"
      },
      {
        "Group": "McEntyre team: Literature services",
        "Cluster": "Literature",
        "Leader": "Johanna McEntyre",
        "Org-chart-options": "show",
        "Type": "Service",
        "url": "http://www.ebi.ac.uk/about/literature-services-team",
        "serviceshortname": "Literature services team"
      },
      {
        "Group": "Yates team: Genomics Technology Infrastructure",
        "Cluster": "Genes, genomes and variation",
        "Leader": "Andy Yates",
        "Org-chart-options": "show",
        "Type": "Service",
        "researchtagline": "Providing technical and production support for the Ensembl and Ensembl Genomes projects",
        "serviceshortname": "Genomics Technology Infrastructure"
      },
      {
        "Group": "Zerbino team: Genome Analysis",
        "Cluster": "Genes, genomes and variation",
        "Leader": "Daniel Zerbino",
        "Org-chart-options": "show",
        "Type": "Service",
        "researchtagline": "Functional annotation of sequence variants and non-genic regions",
        "serviceshortname": "Genome Analysis"
      },
      {
        "Group": "Aken team: Vertebrate Annotation",
        "Cluster": "Genes, genomes and variation",
        "Leader": "Bronwen Aken",
        "Type": "Service",
        "url": "http://www.ebi.ac.uk/about/vertebrate-annotation",
        "researchtagline": "Gene annotation and comparative genomics in Ensembl",
        "serviceshortname": "Vertebrate Annotation"
      },
      {
        "Group": "Kersey team: Non-vertebrate Genomics",
        "Cluster": "Genes, genomes and variation",
        "Leader": "Paul Kersey",
        "Org-chart-options": "show",
        "Type": "Service",
        "url": "http://www.ebi.ac.uk/about/nonvertebrate-genomics",
        "researchtagline": "Non-vertebrate genomics",
        "serviceshortname": "Non-vertebrate Genomics team"
      },
      {
        "Group": "Cunningham team: Variation Annotation",
        "Cluster": "Genes, genomes and variation",
        "Leader": "Fiona Cunningham",
        "Type": "Service",
        "researchtagline": "Enriching understanding of genomic variation",
        "serviceshortname": "Variation Annotation"
      },
      {
        "Group": "Flicek team: Vertebrate genomics",
        "Cluster": "Genes, genomes and variation",
        "Leader": "Paul Flicek",
        "Org-chart-options": "show",
        "Type": "Service",
        "url": "http://www.ebi.ac.uk/about/vertebrate-genomics",
        "serviceshortname": "Vertebrate Genomics team"
      },
      {
        "Group": "Velankar team: PDBe",
        "Cluster": "Molecular and cellular structures",
        "Leader": "Sameer Velankar",
        "Org-chart-options": "show",
        "Type": "Service",
        "url": "http://www.ebi.ac.uk/about/pdbe-content-and-integration",
        "serviceshortname": "Protein Data Bank in Europe"
      },
      {
        "Group": "Kleywegt team: Protein Data Bank in Europe",
        "Cluster": "Molecular and cellular structures",
        "Leader": "Gerard Kleywegt",
        "Org-chart-options": "show",
        "Type": "Service",
        "url": "http://www.ebi.ac.uk/about/pdbe-team",
        "serviceshortname": "Protein Data Bank in Europe team"
      },
      {
        "Group": "Patwardhan team: Cellular Structure and 3D Bioimaging",
        "Cluster": "Molecular and cellular structures",
        "Leader": "Ardan Patwardhan",
        "Type": "Service",
        "researchtagline": "Imaging data services",
        "serviceshortname": "Cellular Structure and 3D Bioimaging"
      },
      {
        "Group": "Keane team: EGA, EVA, and ENA archive infrastructure",
        "Cluster": "Molecular archives",
        "Leader": "Thomas Keane",
        "Org-chart-options": "show",
        "Type": "Service",
        "url": "https://www.ebi.ac.uk/about/people/thomas-keane",
        "researchtagline": "Sequence and variation archive infrastructure",
        "serviceshortname": "EGA, EVA, and ENA archive infrastructure"
      },
      {
        "Group": "Parkinson team: Samples, Phenotypes and Ontologies",
        "Cluster": "Molecular archives",
        "Leader": "Helen Parkinson",
        "Org-chart-options": "show",
        "Type": "Service",
        "url": "http://www.ebi.ac.uk/about/spot-team",
        "researchtagline": "Resources for the description of samples, phenotypes and ontology development.",
        "serviceshortname": "Samples, Phenotypes and Ontologies"
      },
      {
        "Group": "Cochrane team: European Nucleotide Archive",
        "Cluster": "Molecular archives",
        "Leader": "Guy Cochrane",
        "Type": "Service",
        "url": "http://www.ebi.ac.uk/about/ena-team",
        "serviceshortname": "European Nucleotide Archive team"
      },
      {
        "Group": "Sarkans team: Functional genomics development",
        "Cluster": "Molecular atlas",
        "Leader": "Ugis Sarkans",
        "Org-chart-options": "show",
        "Type": "Service",
        "url": "http://www.ebi.ac.uk/about/functional-genomics-development",
        "serviceshortname": "Functional Genomics development team"
      },
      {
        "Group": "Petryszak team: Gene Expression",
        "Cluster": "Molecular atlas",
        "Leader": "Robert Petryszak",
        "Org-chart-options": "show",
        "Type": "Service",
        "serviceshortname": "Gene Expression Team"
      },
      {
        "Group": "Brazma team: Functional Genomics",
        "Cluster": "Molecular atlas",
        "Leader": "Alvis Brazma",
        "Org-chart-options": "show",
        "Type": "Service",
        "url": "http://www.ebi.ac.uk/about/functional-genomics-team",
        "serviceshortname": "Functional Genomics team"
      },
      {
        "Group": "Hermjakob team",
        "Cluster": "Molecular systems",
        "Leader": "Henning Hermjakob",
        "Org-chart-options": "show",
        "Type": "Service",
        "url": "http://www.ebi.ac.uk/about/molecular-networks-team",
        "researchtagline": "Molecular Networks, Pathways, Mathematical Models",
        "serviceshortname": "Molecular Networks"
      },
      {
        "Group": "Bateman team: Protein sequence resources",
        "Cluster": "Proteins and protein families",
        "Leader": "Alex Bateman",
        "Org-chart-options": "show",
        "Type": "Service",
        "url": "http://www.ebi.ac.uk/about/people/alex-bateman",
        "serviceshortname": "Protein Sequence Resources team"
      },
      {
        "Group": "Finn team: Sequence families",
        "Cluster": "Proteins and protein families",
        "Leader": "Rob Finn",
        "Org-chart-options": "show",
        "Type": "Service",
        "url": "http://www.ebi.ac.uk/about/sequence-families-team",
        "researchtagline": "Bioinformatics services for RNA, protein and metagenomic sequence data",
        "serviceshortname": "Sequence families"
      },
      {
        "Group": "Orchard team: Protein Function Content",
        "Cluster": "Proteins and protein families",
        "Leader": "Sandra Orchard",
        "Org-chart-options": "show",
        "Type": "Service",
        "url": "http://www.ebi.ac.uk/about/uniprot-content",
        "researchtagline": "Ensuring the quality and accuracy of UniProt, the universal protein resource",
        "serviceshortname": "Protein Function Content team"
      },
      {
        "Group": "Martin team: Protein Function development",
        "Cluster": "Proteins and protein families",
        "Leader": "Maria-Jesus Martin",
        "Org-chart-options": "show",
        "Type": "Service",
        "url": "http://www.ebi.ac.uk/about/uniprot-development",
        "serviceshortname": "Protein Function development team"
      },
      {
        "Group": "Flicek research group",
        "Cluster": "Research: Genomics",
        "Leader": "Paul Flicek",
        "Type": "Research",
        "url": "http://www.ebi.ac.uk/research/flicek",
        "researchtagline": "Evolution of transcriptional regulation",
        "serviceshortname": "Flicek group"
      },
      {
        "Group": "Brazma research group",
        "Cluster": "Research: Genomics",
        "Leader": "Alvis Brazma",
        "Type": "Research",
        "url": "http://www.ebi.ac.uk/research/brazma",
        "researchtagline": "Functional genomics research",
        "serviceshortname": "Brazma group"
      },
      {
        "Group": "Birney research group",
        "Cluster": "Research: Genomics",
        "Leader": "Ewan Birney",
        "Org-chart-options": "show",
        "Type": "Research",
        "url": "http://www.ebi.ac.uk/research/birney",
        "researchtagline": "Sequence algorithms and intra-species variation",
        "serviceshortname": "Birney group"
      },
      {
        "Group": "Gerstung research group",
        "Cluster": "Research: Genomics",
        "Leader": "Moritz Gerstung",
        "Type": "Research",
        "researchtagline": "Computational cancer biology",
        "serviceshortname": "Gerstung group"
      },
      {
        "Group": "Enright research group",
        "Cluster": "Research: Genomics",
        "Leader": "Anton Enright",
        "Type": "Research",
        "url": "http://www.ebi.ac.uk/research/enright",
        "researchtagline": "Functional genomics and analysis of small RNA function",
        "serviceshortname": "Enright group"
      },
      {
        "Group": "Iqbal research group",
        "Cluster": "Research: Genomics",
        "Leader": "Zamin Iqbal",
        "Type": "Research",
        "url": "http://www.ebi.ac.uk/research/iqbal",
        "researchtagline": "Computational microbial genomics",
        "serviceshortname": "Iqbal group"
      },
      {
        "Group": "Zerbino research group",
        "Cluster": "Research: Genomics",
        "Leader": "Daniel Zerbino",
        "Type": "Research",
        "url": "http://www.ebi.ac.uk/about/people/daniel-zerbino",
        "researchtagline": "Cis-regulatory networks and interactions",
        "serviceshortname": "Zerbino group"
      },
      {
        "Group": "Goldman research group",
        "Cluster": "Research: Genomics",
        "Leader": "Nick Goldman",
        "Type": "Research",
        "url": "http://www.ebi.ac.uk/research/goldman",
        "researchtagline": "Evolutionary tools for genomic analysis",
        "serviceshortname": "Goldman group"
      },
      {
        "Group": "Stegle research group",
        "Cluster": "Research: Pathways & Systems",
        "Leader": "Oliver Stegle",
        "Type": "Research",
        "url": "http://www.ebi.ac.uk/research/stegle",
        "researchtagline": "Statistical genomics and systems genetics",
        "serviceshortname": "Stegle group"
      },
      {
        "Group": "Marioni research group",
        "Cluster": "Research: Pathways & Systems",
        "Leader": "John Marioni",
        "Type": "Research",
        "url": "http://www.ebi.ac.uk/research/marioni",
        "researchtagline": "Computational and evolutionary genomics",
        "serviceshortname": "Marioni group"
      },
      {
        "Group": "Petsalaki research group",
        "Cluster": "Research: Pathways & Systems",
        "Leader": "Evangelia Petsalaki",
        "Type": "Research",
        "url": "http://www.ebi.ac.uk/research/petsalaki",
        "researchtagline": "Whole-cell signalling",
        "serviceshortname": "Petsalaki group"
      },
      {
        "Group": "Beltrao research group",
        "Cluster": "Research: Pathways & Systems",
        "Leader": "Pedro Beltrao",
        "Type": "Research",
        "url": "http://www.ebi.ac.uk/research/beltrao",
        "researchtagline": "Evolution of Cellular Networks",
        "serviceshortname": "Beltrao group"
      },
      {
        "Group": "Kleywegt research group",
        "Cluster": "Research: Proteins, Structures, & Chemical Biology",
        "Leader": "Gerard Kleywegt",
        "Type": "Research",
        "url": "http://www.ebi.ac.uk/research/groups/kleywegt",
        "researchtagline": "Protein structure, analysis and validation",
        "serviceshortname": "Kleywegt group"
      },
      {
        "Group": "Bateman research group",
        "Cluster": "Research: Proteins, Structures, & Chemical Biology",
        "Leader": "Alex Bateman",
        "Type": "Research",
        "url": "http://www.ebi.ac.uk/research/bateman",
        "researchtagline": "Analysis of protein and RNA sequence",
        "serviceshortname": "Bateman group"
      },
      {
        "Group": "Thornton research group",
        "Cluster": "Research: Proteins, Structures, & Chemical Biology",
        "Leader": "Janet Thornton",
        "Type": "Research",
        "url": "http://www.ebi.ac.uk/research/thornton",
        "researchtagline": "Proteins: structure, function and evolution",
        "serviceshortname": "Thornton group"
      },
      {
        "Group": "Finn research group",
        "Cluster": "Research: Proteins, Structures, & Chemical Biology",
        "Leader": "Rob Finn",
        "Type": "Research",
        "url": "http://www.ebi.ac.uk/about/research/finn",
        "researchtagline": "Computational microbiome research",
        "serviceshortname": "Finn Group"
      },
      {
        "Group": "Leach research group",
        "Cluster": "Research: Proteins, Structures, & Chemical Biology",
        "Leader": "Andrew Leach",
        "Org-chart-options": "show",
        "Type": "Research",
        "url": "http://www.ebi.ac.uk/about/people/andrew-leach",
        "researchtagline": "Computational modelling and informatics for drug discovery",
        "serviceshortname": "Leach group"
      },
      {
        "Group": "Web development",
        "Cluster": "Technical services",
        "Leader": "Jonathan Hickford",
        "Org-chart-options": "show",
        "Type": "Other",
        "url": "http://www.ebi.ac.uk/about/people/jonathan-hickford",
        "researchtagline": "Maintains the EMBL-EBI website and supports all EMBL-EBI teams",
        "serviceshortname": "Web development"
      },
      {
        "Group": "Technology and Science Integration",
        "Cluster": "Technical services",
        "Leader": "Steven Newhouse",
        "Org-chart-options": "show",
        "Type": "Other",
        "url": "http://www.ebi.ac.uk/about/people/steven-newhouse",
        "researchtagline": "Integrating technology to further develop and support the science taking place at EMBL-EBI.",
        "serviceshortname": "Technology and Science Integration"
      },
      {
        "Group": "Systems applications",
        "Cluster": "Technical services",
        "Leader": "Andy Cafferkey",
        "Type": "Other",
        "researchtagline": "Desktop, Virtualisation & Cloud",
        "serviceshortname": "Systems Applications"
      },
      {
        "Group": "Web production",
        "Cluster": "Technical services",
        "Leader": "Rodrigo Lopez",
        "Org-chart-options": "show",
        "Type": "Other",
        "url": "http://www.ebi.ac.uk/about/people/rodrigo-lopez",
        "researchtagline": "Web infrastructure, collaboration platforms and core website services",
        "serviceshortname": "Web production"
      },
      {
        "Group": "Systems infrastructure",
        "Cluster": "Technical services",
        "Leader": "Petteri Jokinen",
        "Type": "Other",
        "url": "http://www.ebi.ac.uk/about/people/petteri-jokinen",
        "researchtagline": "IT Infrastructure: compute, storage and database administration",
        "serviceshortname": "Systems infrastructure"
      }
    ]
  }
};


// construct the data structure
function findGroupParent(needle,haystack) {
  // we look for the item with the same cluster name and a parent = 1
  var parent = 'null';
  $.each(haystack.nodes, function(index, value) {
    // console.log(value,index,needle.cluster,needle.parent,"type", needle.type);

    if (parent === 'null') {
      if ((needle.cluster === 'ResearchGroup') && (value.cluster === "DirectorsOffice")){
        parent = value.id;
      // } else if ((needle.cluster === 'ServicesGroup') && (value.cluster === "DirectorsOffice")){
      //   parent = value.id;
      // } else if ((needle.cluster === 'ExternalGroup') && (value.cluster === "DirectorsOffice")){
      //   parent = value.id;
      } else if (needle.type == 'External' && value.cluster === "ExternalGroup" && needle.cluster !== "ExternalGroup"){
        parent = value.id;
      } else if ((needle.parent === 1) && needle.type == 'Research' && value.cluster === "ResearchGroup" && needle.cluster !== "ResearchGroup"){
        // Link research parents to research group
        parent = value.id;
      } else if ((needle.parent === 1) && needle.type == 'Service' && value.cluster === "ServicesGroup" && needle.cluster !== "ServicesGroup"){
        // Link service parents to service group
        parent = value.id;
      } else if ((needle.parent === 1) && (value.cluster === "DirectorsOffice")){
        // for other cases where we are looking up a parent group, link it o directorsoffice
        parent = value.id;
      } else if ((needle.cluster === value.cluster) && (value.name !== needle.name) && value.parent === 1) {
        parent = value.id;
      }
    }

  });

  return parent;
}

// Crosslink bateman research to bateman serivce (make a mess!)
function findGroupParentByName(needle,haystack) {
  // we look for the item with the same cluster name and a parent = 1
  var parent = 'null';
  $.each(haystack.nodes, function(index, value) {
    if (parent === 'null' && needle.leader) {
      if ((needle.leader === value.leader) && (value.name !== needle.name) && (value.type !== needle.type) && value.parent !== 1 && needle.parent !== 1) {
        // console.log(needle.leader,value.leader,'test')
        parent = value.id;
      }
    }

  });

  return parent;
}

  // "links":[
  //   {"source":0,"target":1,"value":1},
  //   {"source":1,"target":2,"value":.5},
  //   {"source":1,"target":3,"value":.5}
  // ]

function constructGroupParents(dataSet) {
  $.each(dataSet.nodes, function(index, value) {
    // console.log(value,index);

    var itemParent = findGroupParent(value,dataSet);
    if (itemParent != 'null' && value.cluster != "DirectorsOffice" && value.id != itemParent) {
      dataSet.links.push({"source":value.id,"target":itemParent,"value": 0.5});
    }

    var itemParentByName = findGroupParentByName(value,dataSet);
    if (itemParentByName != 'null' && value.cluster != "DirectorsOffice" && value.id != itemParentByName) {
      dataSet.links.push({"source":value.id,"target":itemParentByName,"value": 0.1});
    }

  });

  return dataSet;
}

function constructData(data) {
  var newData = {"nodes":[],"links":[]};

  // construct the node titles
  $.each(data.node, function(index, value) {
    // console.log(value,index);
    var isParent = 0;
    if (value['Org-chart-options'] === 'parent') {
      isParent = 1;
    }

    var newName = value.Group;
    // if there's "john doe team:", drop it
    // if (value.Group.indexOf(':') > 0) {
    //   newName = value.Group.split(':')[1];
    // }
    if (value.Type == "Research" && value.researchtagline) {
      newName = value.researchtagline + ", " + value.Leader;
    } else if (value.Type == "Service" && value.serviceshortname) {
      newName = value.serviceshortname + ", " + value.Leader;
    } else if (value.Leader) {
      newName = newName + ", " + value.Leader;
    }

    var photo = 'none';
    if (value.imagevisibility == "Show the image on the public website") {
      photo = 'https://www.ebi.ac.uk/sites/ebi.ac.uk/files/styles/medium/public/person/image/' + value.photo;
    }

    newData.nodes.push({"id": value.Group, "name":newName, "cluster": value.Cluster, "type": value.Type, "leader": value.Leader, "photo": photo, "parent": isParent });
  });

  // Special static org chart entries
  newData.nodes.push({"id":"ResearchGroup", "name":"Research", "cluster": "ResearchGroup", "type": "Research", "parent": 1});
  newData.nodes.push({"id":"ServicesGroup", "name":"Services", "cluster": "ServicesGroup", "type": "Service", "parent": 1});
  // newData.nodes.push({"id":"ExternalGroup", "name":"External-Facing Activities", "cluster": "ExternalGroup", "type": "External", "parent": 1});
  newData.nodes.push({"id":"DirectorsOffice", "name":"Director's Office", "cluster": "DirectorsOffice", "type": "none", "parent": 1});

  newData = constructGroupParents(newData);

  // console.table(newData.nodes);
  // console.table(newData.links);

  return newData;
}

rawData = constructData(rawData.nodes);

/// ---------- display script ------- ///
var svg = d3.select("svg"),
    $svg = $('svg#visulisation');
    width = $svg.width();

// if (width > 900) width = 900;

var height = 1500;
$svg.height(height); // make visulisation square
$svg.width(width); // make visulisation square

var color = d3.scaleOrdinal(d3.schemeCategory20);
var graph = rawData;

//add zoom capabilities
//add encompassing group for the zoom
var g = svg.append("g")
    .attr("class", "everything");
function zoom_actions(){
    g.attr("transform", d3.event.transform)
}
var zoom_handler = d3.zoom()
    .on("zoom", zoom_actions);
zoom_handler(svg);

var simulation = d3.forceSimulation()
      .force("link", d3.forceLink()
        .id(function(d) { return d.id; })
        .iterations(10)

      .distance( function(d) {
        if (d.id == "DirectorsOffice")
          return 1;
        if (d.id == "ResearchGroup" || d.id == "ServicesGroup" || d.id == "Technical services")
          return 1;
        if (d.parent == 1)
          return 5;

        return 90;
      })
      .strength(function(d) {
        if (d.value == 0.1) {
          // crosslinks are information only
          return 0.1;
        }
        if (d.id == "DirectorsOffice")
          return null;
        if (d.parent == 1)
          return .1;

        return .2;
      })
     )
//     .force("r", d3.forceRadial( function(d) {
//       if (d.id == "DirectorsOffice")
//         return 0;
//       if (d.id == "ResearchGroup" || d.id == "ServicesGroup" || d.id == "Technical services")
//         return 100;
//       if (d.type != "Service" && d.type != "Research")
//         return height/6;
//       // if (d.parent == 1)
//       //   return width/6;
//       // if (Math.random() > 0.5)
//       //   return width/2.1;

//       return height/2.5;

//       // return 400;
//     },width / 2, height / 2).strength(.5))
    .force("force", d3.forceCollide( function(d) {
         if (d.id == "DirectorsOffice")
           return 100;
         if (d.id == "ResearchGroup" || d.id == "ServicesGroup" || d.id == "Technical services")
           return 100;
         if (d.parent == 1)
           return 70
         return 40
       })
      .strength(.2)
       // .iterations(20)
     );
//     .force("charge", d3.forceManyBody()
//        .strength( function(d) {
//         if (d.id == "DirectorsOffice")
//           return 0;
//         if (d.parent == 1)
//           return -100;

//         return -500;
//       })
//       // .distanceMax(200)
//       // .distanceMin(20)
//     )
    // .force("center", d3.forceCenter(width / 2, height / 2));


  var link = g.append("g")
      .attr("class", "link")
    .selectAll("line")
    .data(graph.links)
    .enter().append("line")
      .attr("class", function(d) {
        if (d.value == 0.1) {
          return "crosslink";
        }
        return "parent";
      });
      // .attr("stroke-width", function(d) {
      //   return Math.sqrt(d.value);
      // });

  var node = g.selectAll(".node")
    .data(graph.nodes.filter(function(d) { return d.id; }))
    .enter().append("g")
      .attr("class", "node")
      .call(d3.drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended));

  simulation
      .nodes(graph.nodes)
      .on("tick", ticked);

  simulation.force("link")
      .links(graph.links);


  function ticked() {
    link
      .attr("x1", function(d) { return d.source.x; })
      .attr("y1", function(d) { return d.source.y; })
      .attr("x2", function(d) { return d.target.x; })
      .attr("y2", function(d) { return d.target.y; });

    node
      .attr("transform", positionNode);

  }


  node.append("circle")
      .attr("class", function(d) {
        if (d.type === "Research" || d.type === "Service")
          return d.type.toLowerCase();
        return d.cluster.toLowerCase();
      })
      .on('mouseover', mouseOver)
      .on('mouseout', mouseOut)
      .on("mouseup", function(d) {
         if (d.leader) {
           var urlToOpen = 'https://www.ebi.ac.uk/about/people/'+d.leader.replace(" ","-").toLowerCase();
           window.open(urlToOpen,'_blank');
         }

       })
      // RADIUS BE HERE
      .attr("r", function(d) {
        if (d.id == "DirectorsOffice")
          return 20;
        if (d.id == "ResearchGroup" || d.id == "ServicesGroup" || d.id == "XXTechnical services")
          return 20;
        if (d.parent) {
          return 12
        }
        return 8;
      })

      node.append('foreignObject')
        .attr("width",160)
        .attr("height",160)
        .attr("requiredFeatures","http://www.w3.org/TR/SVG11/feature#Extensibility")
        // .attr("requiredExtensions","http://www.w3.org/1999/xhtml")
        .attr("class","circle-photo")
        .append('xhtml:div')
        .html(function(d) {
          if (d.photo != "none" && d.photo) {
            if (d.type === "Research" || d.type === "Service")
              return '<div class="photo-bubble '+ d.type.toLowerCase()+'" style="background-image: url(\'' + d.photo + '\');"></div>';
            return '<div class="photo-bubble '+ d.cluster.toLowerCase()+'" style="background-image: url(\'' + d.photo + '\');"></div>';
          }
          return "<!-- no-photo -->";
        });



      // node.append("svg:image")
      //   .attr("xlink:href",  function(d) { return d.photo;})
      //   .attr("x", function(d) { return -25;})
      //   .attr("y", function(d) { return -25;})
      //   .attr("height", 50)
      //   .attr("width", 50);



   node.append("text")
      .attr("class", "label")
      // .attr("dx", 25)
      // .attr("dy", "-.35em")
      .text(function(d) { return d.name })
      ;



    // create a text wrapping function
    // https://github.com/vijithassar/d3-textwrap
    var wrap = d3.textwrap().bounds({height: 50, width: 100});
    // wrap all text
    d3.selectAll('text.label').call(wrap);

    function mouseOut(d) {
      $(".node circle").removeClass("fade").removeClass("highlight");
      $(".link line").removeClass("fade").removeClass("highlight");
    }

    function mouseOver(d) {
      //first make all the nodes/links black(reset).
      $(".node circle").addClass("fade");
      $(".link line").addClass("fade");

      //color the node which is hovered.
      $(this).addClass("highlight");

      //iterate over the imports which is the targets of the node(on which it is hovered) and color them.
      link.each( function(links) {
          var matchesNodes = node.filter(function(item){
            return ((d.index == links.target.index) && item.index == links.source.index) || ((d.index == links.source.index) && item.index == links.target.index);
          });
          matchesNodes.selectAll("circle").classed('highlight', true);

          var matchesLinks = link.filter(function(item){
            // console.log(item)
            return ((d.index == item.target.index)) || ((d.index == item.source.index));
          });
          matchesLinks.classed('highlight', true);
      });
    }



    function positionNode(d) {
      return "translate(" + d.x + "," + d.y + ")";
    }

    function dragstarted(d) {
      if (!d3.event.active) simulation.alphaTarget(0.3).restart();
      // d.fx = d.x;
      // d.fy = d.y;
    }

    function dragged(d) {
      d.fx = d3.event.x;
      d.fy = d3.event.y;
    }

    function dragended(d) {
      if (!d3.event.active) simulation.alphaTarget(0);
      console.log('if (item.id == "'+d.id+'") fixPosition(item,'+d.fx/width+','+d.fy/height+');')
      // d.fx = null;
      // d.fy = null;
    }

  // assign a position relative to width/height
  function fixPosition(item,x,y) {
      item.fixed = true;
      item.fx = x * width;
      item.fy = y * height;
  }

  // set initial static positions for nodes
  node.filter(function(item){
if (item.id == "DirectorsOffice") fixPosition(item,0.31462219828632776,0.4687243931602307);
if (item.id == 'Technical services') fixPosition(item,0.24231081521840256,0.09158575634308014);
if (item.id == 'Brazma research group') fixPosition(item,0.35267747104299935,0.5499841578212626);
if (item.id == 'Genes, genomes and variation') fixPosition(item,0.7964204125027443,0.26203177551802953);
if (item.id == 'Chemical biology') fixPosition(item,0.9126747073294614,0.5887743768955644);
if (item.id == 'Research: Proteins, Structures, & Chemical Biology') fixPosition(item,0.5438387824666225,0.8377721539454963);
if (item.id == 'Birney research group') fixPosition(item,0.41400460633055636,0.6888125919918794);
if (item.id == 'ResearchGroup') fixPosition(item,0.16308323125871135,0.6895599793660604);
if (item.id == 'ServicesGroup') fixPosition(item,0.44821746833117815,0.28230497419758666);
if (item.id == 'Research: Pathways & Systems') fixPosition(item,0.23009317192954767,0.8676036457360858);
if (item.id == 'Proteins and protein families') fixPosition(item,0.7658191461309349,0.54121443655706);
if (item.id == 'Molecular and cellular structures') fixPosition(item,0.877823059502588,0.45708326184317555);
if (item.id == 'Literature') fixPosition(item,0.6497144761320804,0.12947255354826248);
if (item.id == 'Molecular archives') fixPosition(item,0.5616585344566832,0.07156699099761765);
if (item.id == 'Molecular systems') fixPosition(item,0.8452901854881177,0.12376671384977264);
if (item.id == 'Hermjakob team') fixPosition(item,0.8870538251067257,0.06832297733946552);
if (item.id == 'Administration') fixPosition(item,0.19482871340503513,0.2692779450871903);
if (item.id == 'Industry') fixPosition(item,0.13353926269912703,0.5344389862762151);
if (item.id == 'Training') fixPosition(item,0.11173750621133659,0.42042311959429784);
if (item.id == 'External Relations') fixPosition(item,0.09728182405494777,0.47376376416504523);
if (item.id == 'Research: Genomics') fixPosition(item,0.4725737792422832,0.6085143057153536);
if (item.id == 'Leach research group') fixPosition(item,0.8765487020384563,0.8387176342761945);
if (item.id == 'Finn research group') fixPosition(item,0.5875207085440103,0.7374753383660939);
if (item.id == 'Kleywegt research group') fixPosition(item,0.8018829159205045,0.7635639747833873);
if (item.id == 'Bateman research group') fixPosition(item,0.7027427223415257,0.7557788891195832);
if (item.id == 'Molecular atlas') fixPosition(item,0.46903700927330527,0.42229878302672486);
if (item.id == 'Scientific Services') fixPosition(item,0.36032879452126126,0.30608882783688895);
if (item.id == 'O\'Donovan team: Metabolomics') fixPosition(item,0.9114937731420658,0.5353041986398296);
if (item.id == 'Sarkans team: Functional genomics development') fixPosition(item,0.5349356626308261,0.3718670485278065);
if (item.id == 'Petryszak team: Gene Expression') fixPosition(item,0.4816941219930267,0.3378558730464741);
if (item.id == 'Zerbino team: Genome Analysis') fixPosition(item,0.7494908877505634,0.3156349127875803);
if (item.id == 'Flicek team: Vertebrate genomics') fixPosition(item,0.673602318431032,0.2793581579545089);

  });
