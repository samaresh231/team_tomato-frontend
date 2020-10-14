import React from 'react';
import gitInfo from './GithubInfo';
import {Button} from 'react-bootstrap';
import colors from './ButtonColors';
import './GithubButton.css';
import { v4 as uuidv4 } from 'uuid';

class GitInfoButtons extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                {
                    Object.keys(gitInfo).map((key, i) => {
                        return (
                            <div key={uuidv4()}>
                                <Button style ={{backgroundColor: colors[i]}} className="GitInfoButton-button">
                                    {key}
                                    <br />
                                    {gitInfo[key]}
                                </Button>
                            </div>
                        );
                    }
                )}
            </div>  
        );
    }
}

export default GitInfoButtons;