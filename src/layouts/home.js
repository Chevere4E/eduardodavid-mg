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
                                    <div class="card text-white bg-secondary mb-3">
                                        <div class="card-header">Header</div>
                                        <div class="card-body">
                                            <h5 class="card-title">Secondary card title</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 text-center">
                                    <img src="/images/header-me.jpg" alt="..." class="img-thumbnail m-2" style={{'max-height':'200px'}}/>
                                    <img src="/images/header-me.jpg" alt="..." class="img-thumbnail m-2" style={{'max-height':'200px'}}/>
                                    <img src="/images/header-me.jpg" alt="..." class="img-thumbnail m-2" style={{'max-height':'200px'}}/>
                                </div>
                            </div>
                            
                            <br />.<br />.<br />.<br />.<br />.<br />.<br />.<br />.<br />.<br />.<br />.<br />.<br />.<br />.<br />.<br />.<br />.<br />.<br />.<br />.<br />.<br />.<br />.<br />.<br />.<br />.<br />.<br />.<br />.<br />.<br />.
                            
                            <div className="post-meta">
                                Mis Proyectos
                                <a name="mis-proyectos"></a>
                            </div>
                            <div className="mt-3">
                                <p>
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
                                                Implementacion de traductor al ingles.<br />
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
                                <div className="col-12 col-sm-12 col-md-6">
                                    <div class="card border-light  mb-3 mb-3 bs-card">
                                        <div class="card-header">Corporativo Uptown</div>
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
                                        <div class="card-header">Hive Cancun</div>
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
                                        <div class="card-header">El cielo Tulum</div>
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
                                        <div class="card-header">Accra Tulum</div>
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
                                        <div class="card-header">Nuue Tulum</div>
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
                            </div>
                             
                        </div>
                    </main>
                    <Footer config={config} />
                </div>
            </Layout>
        );
    }
}
