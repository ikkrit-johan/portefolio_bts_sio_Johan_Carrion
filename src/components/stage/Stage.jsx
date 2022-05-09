import React from 'react';
import './stage.css';
import IMG1 from '../../assets/portfolio4.jpg';

const Stage = () => {
    return (
        <section id="stage">
                <div className="container stage__container">
                    <h1>Stages</h1>
                    <h5 className="text-light">Mes stages en entreprises</h5>
                    <div className="stage__vaya">
                            <img src={IMG1} alt="" />
                        </div>
                        <a href="#portfolio" className='btn right plus'>Retour portefolio</a>
                </div>
        </section>
    );
};

export default Stage;