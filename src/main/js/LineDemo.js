import {Component} from 'react';
import { Line } from 'react-chartjs-2';
const React = require('react');

class LineDemo extends React.Component {

    state = {
        rawLabels: {},
        rawData: {}
    };

    componentDidMount() {
        client({method: 'GET', path: '/api/months'}).done(response => {
            this.setState({rawLabels: response});
        });
        client({method: 'GET', path: '/api/points'}).done(response => {
            this.setState({rawData: response});
        });
    }

    render() {
        return (
           <div>
               <div>
                   {this.state.rawData}
               </div>
               <div>
                   {this.state.rawLabels}
               </div>
           </div>
        );
    }
}