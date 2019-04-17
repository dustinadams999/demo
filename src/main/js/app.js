const React = require('react');
const ReactDOM = require('react-dom');
const client = require('./client');
import { Line } from 'react-chartjs-2';

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

const veryRawData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
    {
        label: 'Values',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40]
    }
]
};

class LineDemo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {rawLabels: [], rawData: [], data : {labels: veryRawData.labels, datasets: veryRawData.datasets},
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
        veryRawData.labels = this.state.rawLabels;
        this.setState({data : {labels: veryRawData.labels, datasets: veryRawData.datasets}});
    }

    setDatasetsState() {
        veryRawData.datasets[0].data = [...this.state.rawData];
        this.setState({data : {labels: veryRawData.labels, datasets: veryRawData.datasets}});
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
