import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Meals = (props) => {
    const { idMeal, strMeal, strInstructions, strMealThumb } = props.meal
    return (
        <Col>
            <Card className='bg-secondary h-100  text-white'>
                <Card.Img style={{
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',
                    margin: 'auto',
                    border: ' 2px solid orange',
                    boxShadow: '3px 2px 4px 0 black'
                }} variant="top" fluid src={strMealThumb} />
                <Card.Body >
                    <Card.Title>{strMeal}=:{idMeal}</Card.Title>
                    <Card.Text>
                        {strInstructions.slice(0, 100)}
                    </Card.Text>
                    <Link className='text-warning' to={`/meals/${idMeal}`}>Details</Link>
                    <br />
                    <br />
                    <Link to={`/meals/${idMeal}`}>
                        <Button variant="outline-info">Warning</Button>{' '}
                    </Link>

                </Card.Body>
            </Card>

        </Col>
    );
};

export default Meals;