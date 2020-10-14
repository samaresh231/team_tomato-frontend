import React from 'react';
import {HorizontalBar} from 'react-chartjs-2';

class Graphpage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data : {
                labels: ['Kratos', 'Chatbot', 'Trello', 'Slack', 'Project', 'Github', 'Teams'],
                datasets: [
                    {
                        label: 'Projects',
                        backgroundColor: 'rgba(255,99,132,0.2)',
                        borderColor: 'rgba(255,99,132,1)',
                        borderWidth: 1,
                        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                        hoverBorderColor: 'rgba(255,99,132,1)',
                        data: [65, 59, 80, 81, 56, 55, 40]
                    }
                ]
            }
        };
    }

    render(){
        return(
            <div>
                <HorizontalBar data={this.state.data} />
            </div>
        );
    }
}

export default Graphpage;