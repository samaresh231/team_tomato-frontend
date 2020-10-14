import React from 'react';
import Articles from './articles.json'
import './ArticleTable.css';
import {Container, Row, Col, Table} from 'react-bootstrap';
import Reveal from 'react-reveal/Reveal';

class ArticleTable extends React.Component{
    render(){
        return(
            <Reveal right>
            <div className="ArticleTable">
                <Container fluid>
                <Row>
                <Col></Col>
                <Col xs={11}>
                    <Table bordered striped className="ArticleTable-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Article Name</th>
                                <th>Category</th>
                                <th>Author</th>
                                <th>Link</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            Articles.map((article, index) => {
                                return(    
                                    <tr>
                                        <td>{index+1}</td>
                                        <td>{article.name}</td>
                                        <td>{article.category}</td>
                                        <td>{article.author}</td>
                                        <td><a href={article.link} target="_blank"><i className="fas fa-external-link-alt"></i></a></td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </Table>
                </Col>
                <Col></Col>
                </Row>
                </Container>
            </div>
            </Reveal>
        );
    }
}

export default ArticleTable;