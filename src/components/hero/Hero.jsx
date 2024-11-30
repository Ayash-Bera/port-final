import React, { useState , useEffect } from 'react'
import { Modal, ModalBody, Row } from "reactstrap"
import heroImg from '../../assets/hero-img.png'
import './Hero.css'

const Hero = ({ web3, contract }) => {
    console.log('Hero component rendering');
    const [modal, setModal] = useState(false);
    const [description, setDescription] = useState("")
    const [cid, setCid] = useState("")
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        if (!contract) {
            setError('Please connect your wallet first');
            setIsLoading(false);
            return;
        }
        
        const fetchDescription = async () => {
            try {
                const descriptionText = await contract.methods.description().call();
                console.log('Description fetched:', descriptionText);
                setCid(descriptionText);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching description:', error);
                setError(error.message);
                setIsLoading(false);
            }
        };
        
        fetchDescription();
    }, [contract])

    useEffect(() => {
        if (!contract) {
            return;
        }
        
        const fetchImageCid = async () => {
            try {
                const imageCid = await contract.methods.imageLink().call();
                console.log('Image CID fetched:', imageCid);
                setDescription(imageCid);
            } catch (error) {
                console.error('Error fetching image CID:', error);
                setError(error.message);
            }
        };
        
        fetchImageCid();
    }, [contract])

    if (isLoading) {
        return (
            <section className="hero">
                <div className="container">
                    <div className="hero-text">
                        <h3>Loading...</h3>
                    </div>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="hero">
                <div className="container">
                    <div className="hero-text">
                        <h3>Error: {error}</h3>
                        <p>Please make sure your wallet is connected and you're on the correct network.</p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="hero">
        <div className="container">
            <div className="hero-text">
                <p><span> Ayash </span>
                    is a Full-Stack Blockchain Developer From India.</p>
                <h1>I develop decentralised apps in web3 space.</h1>
                <h3>{description}</h3>
                {/*  =========popup bootstrap==========  */}

                <Modal size='md' isOpen={modal} toggle={() => setModal(!modal)}>
                    <ModalBody>
                            <Row className="text-align">
                                <label htmlFor="" toggle={() => setModal(!modal)}>
                                    Mail Id - ayashbera@gmail.com
                                </label>

                            </Row>
                    </ModalBody>
                </Modal>

                <button className="msg-btn" onClick={() => setModal(true)}>I will touch you</button>
                {/*  =========popup bootstrap end==========  */}

            </div>
            <div className="hero-img">

                <div className="img-container">
                    <img src={heroImg} alt="profilePhoto" />
                </div>
            </div>
        </div>
    </section>
    )
}

export default Hero
