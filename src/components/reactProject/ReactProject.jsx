import React from 'react';

const ReactProject = () => {
    return (
        <section id="reactproject">
            <h5>Projets</h5>
            <h2>Symfony</h2>
            <div className="symfony__container">
                <div className="symfony__intro">

                    <div className="symfony__intro--present">
                        <h4>Pour mon premier stage, j'ai eu comme mission de concevoir un site Web avec le framework Symfony.</h4>
                        <div className="symfonyproject__vaya">
                            <img src="" alt="" />
                        </div>
                        <div className="symfony__intro--para">
                            <p>La cliente est une illustratrice qui a besoin d'un site vitrine de ses oeuvres</p>
                            <p>Un portefolio pour les dessins et les livres</p>
                            <p>Une page de presentation</p>
                            <p>Un market avec des liens sur divers sites marchands</p>
                            <p>Un formulaire de contact</p>
                            <p>Une interface simple pour la gestion des images</p>
                            <p>Le site doit être classe et simple d'utlisation !</p>
                        </div>
                    </div>

                    <div className="symfonyproject__logo">
                        <img src="" alt="" />
                    </div>

                    <div className="symfony__intro--techno">
                        <h2>Technologie</h2>
                        <h3>Framework Symfony</h3>
                        <p>Symfony est un ensemble de composants PHP ainsi qu'un framework MVC libre écrit en PHP. Il fournit des fonctionnalités modulables et adaptables qui permettent de faciliter et d’accélérer le développement d'un site web.</p>
                
                        <h3>Composer</h3>
                        <p>Composer est un logiciel gestionnaire de dépendances libre écrit en PHP. Il permet à ses utilisateurs de déclarer et d'installer les bibliothèques dont le projet principal a besoin.</p>

                        <h3>Doctrine</h3>
                        <p>Doctrine est un ORM pour PHP. Il s'agit d'un logiciel libre sous licence GNU LGPL. Doctrine est l'ORM par défaut du framework Symfony.</p>

                        <h3>Webpack Encore</h3>
                        <p>Webpack est un outil logiciel open-source de type « module bundler » (littéralement, « groupeur de modules »), conçu pour faciliter le développement et la gestion de sites et d'applications web modernes.</p>

                        <h3>En savoir plus</h3>
                        <a href="https://symfony.com/" target='_blank' className='btn btn-primary right' rel="noreferrer">Symfony</a>
                        <a href="https://getcomposer.org/doc/" target='_blank' className='btn btn-primary right' rel="noreferrer">Composer</a>
                        <a href="https://www.doctrine-project.org/" target='_blank' className='btn btn-primary right' rel="noreferrer">Doctrine</a>
                        <a href="https://symfony.com/doc/current/frontend/encore/installation.html" target='_blank' className='btn btn-primary right' rel="noreferrer">Webpack</a>
                    </div>

                    <div className="gallery__title">
                        <h2>Images du projet</h2>
                    </div>

                    {/* <div className="symfony__gallery">
                        {
                            data.map(({id, image, title}) => {
                                return (
                                    
                                <div key={id}className="symfony__grille">
                                    <div className="symfony__grille--item">
                                        <a href={image} target='_blank' rel="noreferrer"><img src={image} alt={title} /></a>
                                    </div>
                                </div>
               
                        )
                        })
                        }
                    </div> */}

                </div>
            </div>
        </section>
    );
};

export default ReactProject;