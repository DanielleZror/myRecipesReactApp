import React from 'react';
import CardsList from './cardsListHomePage'
import Carousel from './carousel'

export class HomePage extends React.Component {

    render() {
        const arr = [{
            Name: 'danielle',
            _id: '121313',
            Description: 'heloooo',
            TimeHours: "1",
            TimeMinutes: "14",
            Preparation: "soooo yam",
            Img: 'https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg'
        },
        {
            Name: 'danielle',
            _id: '1213333',
            Description: 'heloooo',
            TimeHours: "1",
            TimeMinutes: "14",
            Preparation: "soooo yam",
            Img: 'https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg'
        },
        {
            Name: 'danielle',
            _id: '1213232413',
            Description: 'heloooo',
            TimeHours: "1",
            TimeMinutes: "14",
            Preparation: "soooo yam",
            Img: 'https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg'
        }]
        return (
            <div >
                <Carousel />
                <CardsList recipes={arr} />
            </div>
        )
    }
}

export default HomePage;

