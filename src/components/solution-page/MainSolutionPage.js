import React from 'react';
import NavbarT from '../common-components/Navbar';
import Cards from './Cards';
import Footer from '../common-components/Footer';

class MainSolutionPage extends React.Component {    
    render(){
        return(
            <div>
                <NavbarT />
                <h1 className="Cards-heading">Projects</h1>
                <Cards />
                <Footer />
            </div>
        );
    }
}

export default MainSolutionPage;