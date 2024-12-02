import React, {useState,useEffect} from 'react'
import { FaDonate } from 'react-icons/fa';
import { Modal, ModalHeader, ModalBody, Row, Button } from "reactstrap"
import "./Projects.css"

const Projects = ({ contract }) => {
    const [modal, setModal] = useState(false);
    const [projects, setProjects] = useState([]);
    const [web3, setWeb3] = useState(null);

    useEffect(() => {
        const initWeb3 = async () => {
            // Initialize web3 here
            if (window.ethereum) {
                const Web3 = (await import('web3')).default; // Dynamically import Web3
                const web3Instance = new Web3(window.ethereum);
                setWeb3(web3Instance);
            } else {
                console.error("Avax object not found. Install a Wallet.");
            }
        };

        initWeb3();

        const projectDetails = async () => {
            try {
                console.log("Attempting to fetch projects from contract...");
                const projects = await contract.methods.allProjects().call();
                console.log("Projects fetched:", projects);
                setProjects(projects);
            } catch (error) {
                console.error("Error fetching projects:", error);
            }
        }

        contract && projectDetails();
    }, [contract])

    const donate = async (event) => {
        event.preventDefault();
        const eth = document.getElementById('eth').value;
        console.log("Donating", eth, "ETH to the contract...");
        try {
            if (!web3) {
                throw new Error("Web3 is not initialized.");
            }
            const accounts = await web3.eth.getAccounts();
            const account = accounts[0];
            const weiValue = web3.utils.toWei(eth, "ether");
            await contract.methods.donate().send({ from: account, value: weiValue });
            alert("Donation successful!");
        } catch (error) {
            console.error("Error donating:", error);
        }
    }
    return (
        <section className="project-section">
            <h1 className="title">Projects </h1>
            <div className="card-wrapper">
                { projects.length > 0 ? (
                    projects.map((project)=>{
                        const githubLink = `https://github.com/Ayash-Bera/${project.github}`;
                        return ( <a href= {githubLink} className="project-card" target='_blank' rel="noopener noreferrer" >
                        <div className="card-img">
                            <img src={`https://gateway.pinata.cloud/ipfs/${project.image}`} alt="" /></div>
                        <div className="card-text">
                            <h3>{project.name}</h3>
                            <p>{project.description}</p>
                        </div>
                    </a>)
                    })
                ) : (
                    <p>No projects available.</p>
                )}
            </div>
 {/*  =========popup bootstrap==========  */}

<Modal size='md' isOpen={modal} toggle={() => setModal(!modal)}>
                        <ModalHeader toggle={() => setModal(!modal)}>
                            Enter the amount you want to send in wei !
                        </ModalHeader>
                        <ModalBody>
                            <form onSubmit={donate}>
                                <Row>
                                    <input id="eth" type="text" />
                                        <Button className='mt-4' >
                                            Sign & Send
                                        </Button>
                                </Row>
                            </form>
                        </ModalBody>
                    </Modal>
                    {/*  =========popup bootstrap end==========  */}
                    <p className='donate' onClick={() => setModal(true)}>Liked the projects ? Consider contributing  <FaDonate className='icon' /></p>
        </section>
    )
}

export default Projects
