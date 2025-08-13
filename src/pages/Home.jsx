import React from 'react';
import './Header.css';
import {DataPics} from '../data/DataPics/';
import {Link} from "react-router-dom";



function Home() {

    return (
        <div>
            <h2 className="guitarHomepage">Your favourite guitar is<br/>
                here</h2>

            <div className="home-layout">
            <p className="textHome"> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusantium asperiores aspernatur debitis et eum ex harum
                inventore modi molestias nam provident quaerat, ratione recusandae
                saepe voluptatibus! Aperiam asperiores aspernatur assumenda beatae,
                consequuntur delectus distinctio ducimus earum eius eligendi,
                eos et ipsam laborum modi nemo nihil nisi obcaecati pariatur
                perferendis placeat porro provident quae quam quo ratione saepe
                sapiente suscipit tenetur, velit voluptas voluptate voluptatem
                voluptatibus voluptatum. Doloremque eaque earum laudantium magnam
                nam possimus qui. Accusamus adipisci aut dicta distinctio dolor,
                doloremque doloribus ea eaque eius et ex exercitationem iure libero
                magnam natus nesciunt nihil obcaecati officia omnis perspiciatis
                porro possimus quae qui quibusdam quisquam ratione reprehenderit
                rerum saepe sapiente similique sint ut voluptatem voluptatum.
                A eum expedita fugiat, illo laudantium maxime nihil odit praesentium
                quae quos repellat sed velit. Harum nostrum obcaecati quis voluptas.
                Eaque officiis pariatur sint soluta totam! Ab architecto aspernatur
                autem blanditiis, delectus dolor, dolorum eius eum excepturi expedita
                facilis harum in inventore itaque magni modi nulla odit porro possimus
                quibusdam, sed totam veniam voluptas. A accusantium at consequuntur
                culpa cumque dolore, doloremque doloribus dolorum ea eaque eius eligendi,
                enim et eum eveniet exercitationem illo inventore laborum maiores modi nihil
                numquam, perferendis quos rem repellendus reprehenderit sunt. Alias
                architecto, asperiores aut commodi dignissimos ducimus et labore nemo,
                nisi obcaecati perspiciatis quam sit, ut.Accusamus adipisci aut dicta distinctio dolor,
                doloremque doloribus ea eaque eius et ex exercitationem iure libero
                magnam natus nesciunt nihil obcaecati officia omnis perspiciatis
                porro possimus quae qui quibusdam quisquam ratione reprehenderit
                rerum saepe sapiente similique sint ut voluptatem voluptatum.
                A eum expedita fugiat, illo laudantium maxime nihil odit praesentium
                quae quos repellat sed velit. Harum nostrum obcaecati quis voluptas.
                Eaque officiis pariatur sint soluta totam! Ab architecto aspernatur
                autem blanditiis, delectus dolor, dolorum eius eum excepturi expedita
                facilis harum in inventore itaque magni modi nulla odit porro possimus
                quibusdam, sed totam veniam voluptas. A accusantium at consequuntur
                culpa cumque dolore, doloremque doloribus dolorum ea eaque eius eligendi,
                enim et eum eveniet exercitationem illo inventore laborum maiores modi nihil
                numquam, perferendis quos rem repellendus reprehenderit sunt. Alias
                architecto, asperiores aut commodi dignissimos ducimus et labore nemo,
                nisi obcaecati perspiciatis quam sit, ut.Doloremque eaque earum laudantium magnam
                nam possimus qui. Accusamus adipisci aut dicta distinctio dolor,
                doloremque doloribus ea eaque eius et ex exercitationem iure libero
                magnam natus nesciunt nihil obcaecati officia omnis perspiciatis
                porro possimus quae qui quibusdam quisquam ratione reprehenderit
                rerum saepe sapiente similique sint ut voluptatem voluptatum.
                A eum expedita fugiat, illo laudantium maxime nihil odit praesentium
                quae quos repellat sed velit. Harum nostrum obcaecati quis voluptas.
                Eaque officiis pariatur sint soluta totam!
               </p>
                <div className="image-content">
                    <p className="click-message">Click on the picture <br/>   choose you Dream...</p>
                    <div className="image-grid">
                        {DataPics.map((guitar) => (
                            <Link to={`/about/${guitar.id}`} key={guitar.id}>
                                <img src={guitar.image} alt={guitar.name} />
                            </Link>
                ))}

        </div>
            </div>
        </div>
        </div>
    );
}

export default Home;