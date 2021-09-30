import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Meals from '../Meals/Meals';

const Resturent = () => {
    const [serchText, setSearchText] = useState('')
    const [meals, setMeals] = useState([])
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${serchText}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [serchText]);

    const inputeTextValue = event => {
        // event.target.value = ''
        const searchTextValue = event.target.value
        setSearchText(searchTextValue);

    }

    return (

        <div>
            <div className='mb-3'>
                <input className='w-50 p-2' onChange={inputeTextValue} type="text" placeholder='search meals' />
            </div>
            <Row xs={1} md={3} lg={4} className="g-4" >
                {
                    meals ? meals.map(meal => <Meals key={meal.idMeal} meal={meal}></Meals>) : <h3 style={{ marginTop: '30px', color: 'red', margin: 'auto' }}>Didn't match</h3>
                }
            </Row>
        </div>
    );

};

export default Resturent;