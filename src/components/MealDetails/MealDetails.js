import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card, Spinner } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import './MealDetails.css'


const MealDetails = () => {

    const { mealId } = useParams()
    const [meal, setMeal] = useState([])
    const history = useHistory()
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMeal(data.meals[0]))
    }, [])
    const handaleCLick = () => {
        history.push('/resturant')
    }
    const { strMeal, strMealThumb, strInstructions } = meal
    return (
        <div>
            <Card.Text> <b>Meals id{mealId}</b> </Card.Text>
            {
                meal.length === 0 ? <Spinner animation="border" variant="primary" /> : <Card className='bg-secondary text-white' style={{ width: '20rem', margin: 'auto', textAlign: 'center' }}>
                    <Card.Img variant="top" style={{
                        width: '150px', height: '150px',
                        margin: 'auto', borderRadius: '50%',
                        border: ' 2px solid orange',
                        boxShadow: '3px 2px 4px 0 black'
                    }} src={strMealThumb} />

                    <Card.Body>
                        <Card.Title>{strMeal}</Card.Title>
                        <Card.Text>
                            {strInstructions?.slice(0, 90)}
                        </Card.Text>
                        <Button onClick={handaleCLick} className=" bg-warning">GO Bckck</Button>
                    </Card.Body>
                </Card>

            }



        </div>
    );
};

export default MealDetails;