const React = require('react');
const ReactDOM = require('react-dom');
const client = require('./client');
import { Line } from 'react-chartjs-2';
import { VRD } from './rawData';

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <LineDemo/>
        )
    }
}

class LineDemo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {rawLabels: [], rawData: [], data : {labels: VRD.labels, datasets: VRD.datasets},
                        dataLoaded: false, labelsLoaded: false}
        ;
    }

    componentDidMount() {
        client({method: 'GET', path: '/api/months'}).done(response => {
            this.setState({rawLabels: response.entity});
            this.setLabelsState();
        });
        client({method: 'GET', path: '/api/points'}).done(response => {
            this.setState({rawData: response.entity});
            this.setDatasetsState();
        });
    }

    setLabelsState() {
        VRD.labels = this.state.rawLabels;
        this.setState({data : {labels: VRD.labels, datasets: VRD.datasets}});
    }

    setDatasetsState() {
        VRD.datasets[0].data = [...this.state.rawData];
        this.setState({data : {labels: VRD.labels, datasets: VRD.datasets}});
    }

    render() {
        return (<div>
                    <h2>Line Example</h2>
                    <Line ref="chart" data={this.state.data} />
                </div>);
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('react')
);
