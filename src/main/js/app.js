const React = require('react');
const ReactDOM = require('react-dom');
const client = require('./client');

import { Line } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';
import { lineData } from './data/rawLineData';
import { rawDoughnutData } from './data/rawDoughnutData';

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <hr />
                <LineDemo/>
                <hr />
                <DoughnutDemo/>
            </div>
        )
    }
}

class LineDemo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {rawLabels: [], rawData: [], data : {labels: lineData.labels, datasets: lineData.datasets},
                        dataLoaded: false, labelsLoaded: false}
        ;
    }

    componentDidMount() {
        client({method: 'GET', path: '/api/line_months'}).done(response => {
            this.setState({rawLabels: response.entity});
            this.setLabelsState();
        });
        client({method: 'GET', path: '/api/line_points'}).done(response => {
            this.setState({rawData: response.entity});
            this.setDatasetsState();
        });
    }

    setLabelsState() {
        lineData.labels = this.state.rawLabels;
        this.setState({data : {labels: lineData.labels, datasets: lineData.datasets}});
    }

    setDatasetsState() {
        lineData.datasets[0].data = [...this.state.rawData];
        this.setState({data : {labels: lineData.labels, datasets: lineData.datasets}});
    }

    render() {
        return (<div>
                    <h2>Line</h2>
                    <Line ref="chart" data={this.state.data} />
                </div>);
    }
}

class DoughnutDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {rawLabels: [], rawData: [], data : {labels: rawDoughnutData.labels, datasets: rawDoughnutData.datasets},
            dataLoaded: false, labelsLoaded: false};
    }

    componentDidMount() {
        client({method: 'GET', path: '/api/doughnut_data'}).done(response => {
            var keys = [];
            var vals = [];
            for(var k in response.entity) {
                keys.push(k);
                vals.push(response.entity[k]);
            }
            this.setState({rawLabels: keys});
            this.setState({rawData: vals});
            this.setCustomState();
        });
    }

    setCustomState() {
        rawDoughnutData.labels = this.state.rawLabels;
        rawDoughnutData.datasets[0].data = [...this.state.rawData];
        this.setState({data : {labels: rawDoughnutData.labels, datasets: rawDoughnutData.datasets}});
    }

    render() {
        return (<div>
                    <h2>Doughnut</h2>
                    <Doughnut data={this.state.data} />
                </div>);
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('react')
);
