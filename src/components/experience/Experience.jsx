import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { SlCalender } from "react-icons/sl";
import "./Experience.css";

const Experience = ({ state }) => {
const [experience, setExperience] = useState([]);

useEffect(() => {
    if (state && state.contract) {
    const fetchExperience = async () => {
    const experienceData = await state.contract.methods.allExperienceDetails().call();
    setExperience(experienceData);
    };
    fetchExperience();
    }
}, [state]);

return (
    <section className="exp-section">
    <h1 className="title">Experience</h1>
    <div className="container">
        <div className="experience">
        {/* <h1 className="edu-tittle">Experience</h1> */}
        {experience.length > 0 ? (
            experience.map((exp) => (
            <div className="edu-card" key={exp.date}>
                <p className="card-text1">
                <SlCalender className="icon" /> {exp.date}
                </p>
                <h3 className="card-text2">{exp.post}</h3>
                <p className="card-text3">{exp.knowledgeAcquired}</p>
                <p className="card-text4">{exp.companyName}</p>
            </div>
            ))
        ) : (
            <p>No experience data available.</p>
        )}
        </div>
    </div>
    </section>
    );
};

Experience.propTypes = {
    state: PropTypes.shape({
        contract: PropTypes.object.isRequired,
    }).isRequired,
};

export default Experience;
