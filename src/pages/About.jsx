
import React, { useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { DataPics } from '../data/DataPics/';


function About() {
    const { id } = useParams();
    const image = DataPics.find((h) => String(h.id) === id);

    const videoRef = useRef(null);
    const handlePlay = () => videoRef.current?.play();
    const handlePause = () => videoRef.current?.pause();

    return (
        <div className="aboutPageControl">
            {image ? (
                <>
                    <h3 className="guitar-name">
                        {image.name}
                    </h3>
                    <p className="texGuitarAbout">{image.description}</p>
                    <img src={image.image} alt={image.description} style={{ width: '400px', height: '400px' }} />
                </>
            ) : (
                <div>
                    <h2>About us:</h2>

                    <div className="about-content">
                        <img src="/public/guitars-practice.jpg" alt="About us" style={{ width: '300px', height: 'auto' }} />

                        <p>
                            Here you can learn about our history and love for music.
                            To see details of a specific guitar, select it on the main page!
                            A eum expedita fugiat, illo laudantium maxime nihil odit praesentium
                            quae quos repellat sed velit. Harum nostrum obcaecati quis voluptas.
                            Eaque officiis pariatur sint soluta totam! Ab architecto aspernatur
                            autem blanditiis, delectus dolor, dolorum eius eum excepturi expedita
                            facilis harum in inventore itaque magni modi nulla odit porro possimus
                            quibusdam, sed totam veniam voluptas.
                        </p>
                    </div>


                    <div className="video-player-container">
                        <h3>Our Musical Journey</h3>
                        <video ref={videoRef} width="600" controls>
                            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                            Your browser does not support video.
                        </video>
                        <div className="video-controls">
                            <button onClick={handlePlay}>Play</button>
                            <button onClick={handlePause}>Pause</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default About;