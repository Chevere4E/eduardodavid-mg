import React from 'react';
import _ from 'lodash';

import { Layout } from '../components/index';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { htmlToReact, markdownify } from '../utils';

export default class Page extends React.Component {
    render() {
        const data = _.get(this.props, 'data');
        const config = _.get(data, 'config');
        const header = _.get(config, 'header');
        const page = _.get(this.props, 'page');
        const title = _.get(page, 'title');
        const subtitle = _.get(page, 'subtitle');
        const headerImage = _.get(page, 'img_path') ? _.get(page, 'img_path') : _.get(header, 'background_img');
        const markdownContent = _.get(page, 'markdown_content');

        return (
            <Layout page={page} config={config}>
                <Header config={config} page={page} image={headerImage} />
                <div id="content" className="site-content">
                    <main id="main" className="site-main inner">
                        <div className="post-meta">
                            Experiencia Profesional
                        </div>
                        <br />.<br />.<br />.<br />.<br />.<br />.<br />.<br />.<br />.<br />.<br />.<br />.<br />.<br />.<br />.<br />.<br />.<br />.<br />.<br />.<br />.<br />.<br />.<br />.<br />.<br />.<br />.<br />.<br />.<br />.<br />.
                            
                        <div className="post-meta">
                            Formación Académica
                            <a name="formacion-academica"></a>
                        </div>
                        <br />.<br />.<br />.<br />.<br />.<br />.<br />.<br />.<br />.<br />.<br />.<br />.<br />.<br />.<br />.<br />.<br />.<br />.<br />.<br />.<br />.<br />.<br />.<br />.<br />.<br />.<br />.<br />.<br />.<br />.<br />.

                        
                    </main>
                    <Footer config={config} />
                </div>
            </Layout>
        );
    }
}
