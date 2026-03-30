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
                        <br />Senior Data Engineer
                        <br />Developed business - focused data products in the logistics, supply chain, and warehouse domains to enable fast and informed decision - making. Delivered KPIs and results for semi - annual and annual reporting.
Designed and developed ETL processes in Azure Data Factory following the Medallion architecture, integrating data from multiple sources including APIs, SQL and NoSQL servers, manual inputs, Blob Storage, Data Warehouses, and Lakehouses.
Performed data and big data processing, cleansing, and transformation in Azure Databricks using Python and Spark, including both batch and real - time processing scenarios.
Managed and optimized SQL tables within the internal platform by implementing partitioning strategies and best practices, achieving up to an 80% reduction in read/write operations in Goldlayer processes.
Ensured 98% data accuracy, reliability, consistency, and completeness across developed data tables.
Successfully led and contributed to the migration and adoption of the Internal Platform 3.0, encouraging and supporting team members throughout the transition.
                         <br />
                         <br />
                         <br />Frontend Web Developer
                         <br />Designed and developed UX/UI for the LabTak educational gaming platform, aimed at children up to 12 years old, using Angular . Integrated plugins supporting Java and Unity based games.
Developed a web module for live sessions, integrating the Zoom API.
Implemented responsive web designs using Bootstrap and jQuery, supporting four screen sizes : mobile devices, tablets, desktops, and large monitors up to 42 inches.
Developed the corporate website for INOMA using WordPress, including features such as a comment section, user forums, and a blog for articles of interest.
Designed and implemented an SQL database to manage the comment section within forums dedicated to LabTak games.
                            
                        <div className="post-meta">
                            Formación Académica
                            <a name="formacion-academica"></a>
                        </div>
                        <br />TELEMATICS ENGINEER
INSTITUTO POLITECNICO NACIONAL (UPIITA - IPN)
Completed : 2022 (Degree Certificate in Process )
RIGA TECHNICAL UNIVERSITY – LATVIA
International Exchange Program (Masters Electronics and Telecommunications department)

                        
                    </main>
                    <Footer config={config} />
                </div>
            </Layout>
        );
    }
}
