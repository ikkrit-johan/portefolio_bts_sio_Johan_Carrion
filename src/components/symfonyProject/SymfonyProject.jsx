import React from 'react';
import './symfonyProject.css';
import IMG0 from '../../assets/portfolio1.jpg';
import IMG1 from '../../assets/capture_vaya/capture_about.png';
import IMG2 from '../../assets/capture_vaya/capture_boutique.png';
import IMG3 from '../../assets/capture_vaya/capture_header_1.png';
import IMG4 from '../../assets/capture_vaya/capture_header_2.png';
import IMG5 from '../../assets/capture_vaya/capture_header_3.png';
import IMG6 from '../../assets/capture_vaya/capture_header_4.png';
import IMG7 from '../../assets/capture_vaya/capture_header_5.png';
import IMG8 from '../../assets/capture_vaya//capture_contact.png';
import IMG9 from '../../assets/capture_vaya/capture_portefolio_1.png';
import IMG10 from '../../assets/capture_vaya/capture_portefolio_2.png';

const SymfonyProject = () => {
    return (
        <section id="symfonyproject">
            <h5>Projets</h5>
            <h2>Symfony</h2>
            <div className="symfony__container">
                <div className="symfony__intro">

                    <div className="symfony__intro--present">
                        <h4>Pour mon premier stage en entreprise, j'ai eu comme mission de concevoir un site Web pour une cliente avec le framework Symfony.</h4>
                        <p>La cliente est une illustratrice qui a besoin d'un site vitrine de ses oeuvres</p>
                        <p>Un portefolio pour les dessins et les livres</p>
                        <p>Une page de presentation</p>
                        <p>Un market avec des liens sur divers sites marchands</p>
                        <p>Un formulaire de contact</p>
                        <p>Une interface simple pour la gestion des images</p>
                        <p>Le site doit être classe et simple d'utlisation !</p>
                    </div>

                    <div className="symfony__intro--techno">
                        <h2>Technologie : </h2>
                        <h3>Framework Symfony</h3>
                        <p>Symfony est un ensemble de composants PHP ainsi qu'un framework MVC libre écrit en PHP. Il fournit des fonctionnalités modulables et adaptables qui permettent de faciliter et d’accélérer le développement d'un site web.</p>
                    </div>

                    <div className="symfony__intro--img">
                        <img src={IMG0} alt="" />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SymfonyProject;