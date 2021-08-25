import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';

import { Layout } from '../components/index';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getPageUrl, Link, withPrefix } from '../utils';

export default class Home extends React.Component {
    renderPost(post, index, hasMoreLink, moreLinkText) {
        const title = _.get(post, 'title');
        const thumbImage = _.get(post, 'thumb_img_path');
        const thumbImageAlt = _.get(post, 'thumb_img_alt', '');
        const excerpt = _.get(post, 'excerpt');
        const date = _.get(post, 'date');
        const dateTimeAttr = moment(date).strftime('%Y-%m-%d %H:%M');
        const formattedDate = moment(date).strftime('%B %d, %Y');
        const postUrl = getPageUrl(post, { withPrefix: true });

        return (
            <article key={index} className="post">
                <header className="post-header">
                    <h2 className="post-title">
                        <Link href={postUrl}>{title}</Link>
                    </h2>
                    <div className="post-meta">
                        Published on <time className="published" dateTime={dateTimeAttr}>{formattedDate}</time>
                    </div>
                </header>
                {thumbImage && (
                    <Link className="post-thumbnail" href={postUrl}>
                        <img className="thumbnail" src={withPrefix(thumbImage)} alt={thumbImageAlt} />
                    </Link>
                )}
                {excerpt && (
                    <div className="post-content">
                        <p>{excerpt}</p>
                    </div>
                )}
                {hasMoreLink && moreLinkText && (
                    <p className="read-more">
                        <Link className="read-more-link" href={postUrl}>{moreLinkText} <span className="icon-arrow-right" aria-hidden="true" /></Link>
                    </p>
                )}
            </article>
        );
    }

    render() {
        const data = _.get(this.props, 'data');
        const config = _.get(data, 'config');
        const header = _.get(config, 'header');
        const headerImage = _.get(header, 'background_img');
        const page = _.get(this.props, 'page');
        const hasMoreLink = _.get(page, 'has_more_link');
        const moreLinkText = _.get(page, 'more_link_text');
        const posts = _.orderBy(_.get(this.props, 'posts', []), 'date', 'desc');

        return (
            <Layout page={page} config={config}>
                <Header config={config} page={page} image={headerImage} />
                <div id="content" className="site-content">
                    <main id="main" className="site-main inner">
                        <div className="post-feed">
                            <a name="sobre-mi"></a>
                            <header className="post-header">
                               <span className="post-meta">
                                    Ingeniero en Telemática
                                </span> 
                                <p className="post-title h1">
                                    Eduardo David Muñoz Gonzalez
                                </p>
                            </header>
                        
                            <div className="post-meta">
                                Sobre mi
                            </div>
                            <blockquote>
                                <p>
                                    El diseño es inteligencia que se hace visible
                                    <cite>-Alina Wheeler</cite>
                                </p>
                            </blockquote>

                            
                            <div className="row">
                                <div className="col-12 col-sm-12 col-md-6">
                                    <p>
                                    Soy chico de 24 nacido en la ciudad de mexico, cuyos mejores amigos son de Léon,
                                    Toluca, Puerto Vallarta, con mi novia en Ocotlán, Jalisco. Como se podran imaginar
                                    disfruto mucho de viajar y pasearme.<br /><br />
                                    Amante del baseball, futbol (americano y soccer), la musica Punk y de la banda como
                                    de que no, fierro!.<br /><br />
                                    No sere el mejor fotografo pero disfruto mucho de fotografiar lugares que visito de 
                                    tal forma y proporcion que me sirvan para 
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 text-center">
                                    <img src="/images/header-me.jpg" alt="..." class="img-thumbnail m-2" style={{'max-height':'200px'}}/>
                                    <img src="/images/header-me.jpg" alt="..." class="img-thumbnail m-2" style={{'max-height':'200px'}}/>
                                    <img src="/images/header-me.jpg" alt="..." class="img-thumbnail m-2" style={{'max-height':'200px'}}/>
                                </div>
                            </div>

                            <div className="post-meta">
                                Mis Proyectos
                                <a name="mis-proyectos"></a>
                            </div>
                            <div className="mt-3">
                                <p className="h6 fw-bold">
                                    Como parte de mi experiencia laboral, he sido parte de diversos desarrollos.
                                    Siendo el mas reciente con la empresa INOMA C.A. donde forme parte del 90%-100%
                                    del desarrollo de cada proyecto.
                                </p>
                            </div>
                            <div className="row mt-4">
                                <div className="col-12 col-sm-12 col-md-6">
                                    <div class="card border-light  mb-3 mb-3 bs-card">
                                        <div class="card-header">Sistema LabTak</div>
                                        <div class="card-body text-dark">
                                            <p class="card-text">
                                                Desarrollo con Angular y NodeJS del sistema para la generacion de reportes, modulo
                                                de Blog, Foro, capacitaciones (webinars y moocs).<br />
                                                -Cumplimiento del 100% de los objetivos y funcionalidades.<br />
                                                -Desarrollo 100% responsivo.
                                            </p>
                                            <h5 class="card-title">
                                                <a href="https://labtak.takflics.com/home" className="text-info">
                                                https://labtak.takflics.com/
                                                </a>
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-6">
                                    <div class="card border-light  mb-3 mb-3 bs-card">
                                        <div class="card-header">INOMA C.A.</div>
                                        <div class="card-body text-dark">
                                            <p class="card-text">
                                                Desarrollo con Wordpress y Elementor de la pagina corporativa de INOMA.
                                                Implementacion de traductor al ingles en todo el desarrollo.<br />
                                                -Mejora en diseño y optimizacion en un 40%.<br />
                                                -Desarrollo 100% responsivo.
                                            </p>
                                            <h5 class="card-title">
                                                <a href="https://dev.inoma.mx/" className="text-info">
                                                https://dev.inoma.mx/
                                                </a>
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 mt-3 mb-3">
                                    <p className="h6 fw-bold">
                                        Como parte de mi de mis labores en THOI Agency estruture, maquete y
                                        adapte templates HTML para desarrollar SPA a diversos clientes. 
                                        A continuacion algunos de los desarrollos en los que participe.
                                    </p>
                                </div>
                                <div className="col-12 col-sm-12 col-md-6">
                                    <div class="card border-light  mb-3 mb-3 bs-card">
                                        <div class="card-header">Corporativo Uptown</div>
                                        <div class="card-body text-dark">
                                            <p class="card-text">
                                                Desarrollo con PHP y Laravel de la pagina para el corporativo 
                                                Uptown 2. Implementacion de libreria Revolution Slider.<br />
                                                -Participacion en el desarrollo 90%
                                            </p>
                                            <h5 class="card-title">
                                                <a href="https://torre2.corporativouptown.com/" className="text-info">
                                                https://torre2.corporativouptown.com/
                                                </a>
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-6">
                                    <div class="card border-light  mb-3 mb-3 bs-card">
                                        <div class="card-header">Hive Cancun</div>
                                        <div class="card-body text-dark">
                                            <p class="card-text">
                                                Desarrollo con PHP y Laravel de la pagina web y sistema
                                                de reservas para el Hotel Hive.<br />
                                                -Participacion en el desarrollo 90%
                                            </p>
                                            <h5 class="card-title">
                                                <a href="https://hivecancun.com/" className="text-info">
                                                https://hivecancun.com/
                                                </a>
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-6">
                                    <div class="card border-light  mb-3 mb-3 bs-card">
                                        <div class="card-header">El cielo Tulum</div>
                                        <div class="card-body text-dark">
                                            <p class="card-text">
                                                Desarrollo con PHP y Laravel de la pagina web y sistema
                                                de reservas para el Hotel El cielo. Implementacion de un Chatbot<br />
                                                -Participacion en el desarrollo 85% <br />                                                
                                                -coherencia en las respuestas del chat bot 90%
                                            </p>
                                            <h5 class="card-title">
                                                <a href="https://elcielotulum.com/" className="text-info">
                                                https://elcielotulum.com/
                                                </a>
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-6">
                                    <div class="card border-light  mb-3 mb-3 bs-card">
                                        <div class="card-header">Accra Tulum</div>
                                        <div class="card-body text-dark">
                                            <p class="card-text">
                                                Desarrollo con PHP y Laravel de la pagina web y mapa interactivo de
                                                la zona Residencial Accra<br />
                                                -Participacion en el desarrollo 60%
                                            </p>
                                            <h5 class="card-title">
                                                <a href="https://accratulum.com/" className="text-info">
                                                https://accratulum.com/
                                                </a>
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-6">
                                    <div class="card border-light  mb-3 mb-3 bs-card">
                                        <div class="card-header">Nuue Tulum</div>
                                        <div class="card-body text-dark">
                                            <p class="card-text">
                                                Desarrollo con PHP y Laravel de la pagina web y sistema
                                                de reservas para el Hotel Nuue.<br />
                                                -Participacion en el desarrollo 65%
                                            </p>
                                            <h5 class="card-title">
                                                <a href="https://www.nueetulum.com/" className="text-info">
                                                https://www.nueetulum.com/
                                                </a>
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                             
                        </div>
                    </main>
                    <Footer config={config} />
                </div>
            </Layout>
        );
    }
}
