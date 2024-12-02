// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Portfolio {
    struct Project {
        uint256 id;
        string name;
        string description;
        string image;
        string github;
    }

    struct Education {
        uint256 id;
        string date;
        string degree;
        string knowledgeAcquired;
        string institution;
    }

    struct Experience{
        uint id;
        string date;
        string post;
        string knowledgeAcquired;
        string companyName;
    }
    Education[3] public educationArr;
    Project[3] public projectArr;

    string public imageLink;
    string public description;
    string public resumeLink;
    
    uint256 public educationCount;
    uint256 public projectCount;

    address public immutable owner;

    event ProjectAdded(uint256 indexed id, string name);
    event ProjectUpdated(uint256 indexed id, string name);
    event EducationAdded(uint256 indexed id, string institution);
    event EducationUpdated(uint256 indexed id, string institution);
    event ProfileUpdated(string field);
    event DonationReceived(address indexed donor, uint256 amount);

    error InvalidCount(string message);
    error Unauthorized();
    error InvalidValue();
    error InvalidExperienceCount(string message);

    Experience[3] public experienceDetails;
    uint256 public experienceCount;

    constructor(
        string memory _imageLink,
        string memory _description,
        string memory _resumeLink
    ) {
        owner = msg.sender;
        imageLink = _imageLink;
        description = _description;
        resumeLink = _resumeLink;
    }

    modifier onlyOwner() {
        if (msg.sender != owner) revert Unauthorized();
        _;
    }

    function changeImageLink(string calldata _imageLink) external onlyOwner {
        imageLink = _imageLink;
        emit ProfileUpdated("imageLink");
    }

    function changeDescription(string calldata _description) external onlyOwner {
        description = _description;
        emit ProfileUpdated("description");
    }

    function changeResumeLink(string calldata _resumeLink) external onlyOwner {
        resumeLink = _resumeLink;
        emit ProfileUpdated("resumeLink");
    }

    function donate() external payable {
        if (msg.value == 0) revert InvalidValue();
        emit DonationReceived(msg.sender, msg.value);
    }

    function insertProject(
        string calldata _name,
        string calldata _description,
        string calldata _image,
        string calldata _github
    ) external onlyOwner {
        if (projectCount >= 3) revert InvalidCount("No more than 3 projects");

        projectArr[projectCount] = Project({
            id: projectCount,
            name: _name,
            description: _description,
            image: _image,
            github: _github
        });

        emit ProjectAdded(projectCount, _name);
        unchecked {
            projectCount++;
        }
    }

    function changeProject(
        string calldata _name,
        string calldata _description,
        string calldata _image,
        string calldata _github,
        uint256 _projectCount
    ) external onlyOwner {
        if (_projectCount >= 3) 
            revert InvalidCount("Invalid project count");

        projectArr[_projectCount] = Project({
            id: _projectCount,
            name: _name,
            description: _description,
            image: _image,
            github: _github
        });

        emit ProjectUpdated(_projectCount, _name);
    }

    function insertEducation(
        string calldata _date,
        string calldata _degree,
        string calldata _knowledgeAcquired,
        string calldata _institution
    ) external onlyOwner {
        if (educationCount >= 3)
            revert InvalidCount("No more than 3 education entries");

        educationArr[educationCount] = Education({
            id: educationCount,
            date: _date,
            degree: _degree,
            knowledgeAcquired: _knowledgeAcquired,
            institution: _institution
        });

        emit EducationAdded(educationCount, _institution);
        unchecked {
            educationCount++;
        }
    }

    function changeEducation(
        string calldata _date,
        string calldata _degree,
        string calldata _knowledgeAcquired,
        string calldata _institution,
        uint256 _educationCount
    ) external onlyOwner {
        if (_educationCount >= 3)
            revert InvalidCount("Invalid education count");
        educationArr[_educationCount] = Education({
            id: _educationCount,
            date: _date,
            degree: _degree,
            knowledgeAcquired: _knowledgeAcquired,
            institution: _institution
        });

        emit EducationUpdated(_educationCount, _institution);
    }

    function insertExperience(
        string calldata _date,
        string calldata _post,
        string calldata _knowledgeAcquired,
        string calldata _companyName
    ) external onlyOwner {
        if (experienceCount >= 3) 
            revert InvalidExperienceCount("No more than 3 experience entries");

        experienceDetails[experienceCount] = Experience({
            id: experienceCount,
            date: _date,
            post: _post,
            knowledgeAcquired: _knowledgeAcquired,
            companyName: _companyName
        });

        unchecked {
            experienceCount++;
        }
    }

    function changeExperience(
        string calldata _date,
        string calldata _post,
        string calldata _knowledgeAcquired,
        string calldata _companyName,
        uint256 _experienceCount
    ) external onlyOwner {
        if (_experienceCount >= 3)
            revert InvalidExperienceCount("Invalid experience count");

        experienceDetails[_experienceCount] = Experience({
            id: _experienceCount,
            date: _date,
            post: _post,
            knowledgeAcquired: _knowledgeAcquired,
            companyName: _companyName
        });
    }
    
    function allExperienceDetails() external view returns(Experience[3] memory) {
        return experienceDetails;
    }

    function allProjects() external view returns (Project[3] memory) {
        return projectArr;
    }

    function allEducation() external view returns (Education[3] memory) {
        return educationArr;
    }

    receive() external payable {
        emit DonationReceived(msg.sender, msg.value);
    }

}
