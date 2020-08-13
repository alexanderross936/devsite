import React, { Component } from 'react';
import SITES from './data/sites';

class Site extends Component {
    render(){
        console.log('this.props', this.props);

        const { site, url } = this.props.site;

        
        return (
            <div style={{ display: 'inline-block', width: 300, margin: 30 }}>
            <h3>{site}</h3>
            <p>{url}</p>
            <a href={url} target="_blank">View</a>
            <br></br>
            </div>
        )
    }
}

class Sites extends Component {
    render(){
        return (
            <div>
                <h2>Links:</h2>
            <div>
                {
                    SITES.map(site => {
                        return (
                            <Site key={site.id} site={site.url} />
                        );
                    })
                }
            </div>
        </div>
        )
    }

}

export default Sites;