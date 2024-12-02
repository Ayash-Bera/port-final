import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Contact.css';

const Contact = ({state}) => {
    const [resume, setResume] = useState("");
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!state || !state.contract) {
            console.error("Contract is not available");
            return; // Exit early if state or contract is undefined
        }
        const resumeDetails = async () => {
            try {
                // const resumeCid = await state.contract.methods.resumeLink().call();
                const resumeCid ="Qmdg6kW9PunmKG1Enkh8EMTAcy5HXS7iK82Pugy1B1v2zW"; // Replace with a valid CID
                console.log("Fetched Resume CID:", resumeCid); // Debugging log
                setResume("https://gateway.pinata.cloud/ipfs/"+resumeCid);
                console.log("https://gateway.pinata.cloud/ipfs/"+resumeCid); // Correct URL construction
            } catch (err) {
                setError("Failed to load resume.");
                console.error("Error fetching resume:", err); // Log the error object
            }
        };
        resumeDetails();
    }, [state]);

    return (
        <section className="contact-section">
            <h1 className="title">
                Interested?
                Let's Get In Touch!
            </h1>
            {error && <p className="error-message">{error}</p>}
            <a href={resume} target='_blank' rel="noopener noreferrer">
                <button className="downloadBTN">
                    View Resume
                </button>
            </a>
        </section>
    );
};

Contact.propTypes = {
    state: PropTypes.shape({
        contract: PropTypes.object.isRequired,
    }).isRequired,
};

export default Contact;
