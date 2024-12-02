import React, {useState,useEffect} from 'react'
import { FaDonate } from 'react-icons/fa';
import { Modal, ModalHeader, ModalBody, Row, Button } from "reactstrap"
import "./Projects.css"

const Projects = ({ contract }) => {
    const [modal, setModal] = useState(false);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
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

        // const fetchProjects = async () => {
        //     // Fetch projects initially
        //     await projectDetails();
        // };

        // const subscribeToEvents = () => {
        //     contract.events.allProjects()
        //         .on('data', async (event) => {
        //             console.log("Projects updated event received:", event);
        //             await projectDetails(); // Fetch projects again after update
        //         })
        //         .on('error', console.error);
        // };

        // if (contract) {
        //     fetchProjects();
        //     subscribeToEvents();
        // }
        // checkl for these these are breaking the fucking code 

        contract && projectDetails();
    }, [contract])
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
                            Enter the amount you want to donate!
                        </ModalHeader>
                        <ModalBody>
                            <form >
                                <Row>
                                    <input id="eth" type="text" />
                                        <Button className='mt-4' >
                                            Send
                                        </Button>
                                </Row>
                            </form>
                        </ModalBody>
                    </Modal>
                    {/*  =========popup bootstrap end==========  */}
                    <p className='donate' onClick={() => setModal(true)}>Liked the dummyValue's ? Consider donating Eth's <FaDonate className='icon' /></p>
        </section>
    )
}

export default Projects
