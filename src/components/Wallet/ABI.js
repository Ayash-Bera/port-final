export const ABI = [{
        "inputs": [{
            "internalType": "string",
            "name": "_description",
            "type": "string"
        }],
        "name": "changeDescription",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "string",
                "name": "_date",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_degree",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_knowledgeAcquired",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_institution",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_educationCount",
                "type": "uint256"
            }
        ],
        "name": "changeEducation",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "string",
                "name": "_date",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_post",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_knowledgeAcquired",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_companyName",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_experienceCount",
                "type": "uint256"
            }
        ],
        "name": "changeExperience",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "string",
            "name": "_imageLink",
            "type": "string"
        }],
        "name": "changeImageLink",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "string",
                "name": "_name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_description",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_image",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_github",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_projectCount",
                "type": "uint256"
            }
        ],
        "name": "changeProject",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "string",
            "name": "_resumeLink",
            "type": "string"
        }],
        "name": "changeResumeLink",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "donate",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "string",
                "name": "_imageLink",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_description",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_resumeLink",
                "type": "string"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [{
            "internalType": "string",
            "name": "message",
            "type": "string"
        }],
        "name": "InvalidCount",
        "type": "error"
    },
    {
        "inputs": [{
            "internalType": "string",
            "name": "message",
            "type": "string"
        }],
        "name": "InvalidExperienceCount",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "InvalidValue",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "Unauthorized",
        "type": "error"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": true,
                "internalType": "address",
                "name": "donor",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "DonationReceived",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": true,
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "institution",
                "type": "string"
            }
        ],
        "name": "EducationAdded",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": true,
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "institution",
                "type": "string"
            }
        ],
        "name": "EducationUpdated",
        "type": "event"
    },
    {
        "inputs": [{
                "internalType": "string",
                "name": "_date",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_degree",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_knowledgeAcquired",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_institution",
                "type": "string"
            }
        ],
        "name": "insertEducation",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "string",
                "name": "_date",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_post",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_knowledgeAcquired",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_companyName",
                "type": "string"
            }
        ],
        "name": "insertExperience",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "string",
                "name": "_name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_description",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_image",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_github",
                "type": "string"
            }
        ],
        "name": "insertProject",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [{
            "indexed": false,
            "internalType": "string",
            "name": "field",
            "type": "string"
        }],
        "name": "ProfileUpdated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": true,
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "name",
                "type": "string"
            }
        ],
        "name": "ProjectAdded",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": true,
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "name",
                "type": "string"
            }
        ],
        "name": "ProjectUpdated",
        "type": "event"
    },
    {
        "stateMutability": "payable",
        "type": "receive"
    },
    {
        "inputs": [],
        "name": "allEducation",
        "outputs": [{
            "components": [{
                    "internalType": "uint256",
                    "name": "id",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "date",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "degree",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "knowledgeAcquired",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "institution",
                    "type": "string"
                }
            ],
            "internalType": "struct Portfolio.Education[3]",
            "name": "",
            "type": "tuple[3]"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "allExperienceDetails",
        "outputs": [{
            "components": [{
                    "internalType": "uint256",
                    "name": "id",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "date",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "post",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "knowledgeAcquired",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "companyName",
                    "type": "string"
                }
            ],
            "internalType": "struct Portfolio.Experience[3]",
            "name": "",
            "type": "tuple[3]"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "allProjects",
        "outputs": [{
            "components": [{
                    "internalType": "uint256",
                    "name": "id",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "name",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "description",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "image",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "github",
                    "type": "string"
                }
            ],
            "internalType": "struct Portfolio.Project[3]",
            "name": "",
            "type": "tuple[3]"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "description",
        "outputs": [{
            "internalType": "string",
            "name": "",
            "type": "string"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "name": "educationArr",
        "outputs": [{
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "date",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "degree",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "knowledgeAcquired",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "institution",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "educationCount",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "experienceCount",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "name": "experienceDetails",
        "outputs": [{
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "date",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "post",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "knowledgeAcquired",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "companyName",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "imageLink",
        "outputs": [{
            "internalType": "string",
            "name": "",
            "type": "string"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "name": "projectArr",
        "outputs": [{
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "description",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "image",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "github",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "projectCount",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "resumeLink",
        "outputs": [{
            "internalType": "string",
            "name": "",
            "type": "string"
        }],
        "stateMutability": "view",
        "type": "function"
    }
]