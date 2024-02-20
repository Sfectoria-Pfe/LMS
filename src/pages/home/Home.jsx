import React, { Component } from 'react'
import CarousselSfectoria from '../../components/CarousselSfectoria'
import Categories from '../../components/Categories'
import AboutHome from '../../components/AboutHome'
import AllCards from '../../components/AllCards'
import OurTeachers from '../../components/OurTeachers'
import AllReviews from '../../components/reviews/AllReviews'

export default class Home extends Component {
    constructor() {
        super()
    }
    render(props) {
        return (

            <div>
                <CarousselSfectoria />
                <Categories />
                <AboutHome />
                <AllCards showForm={this.props.showForm} />
                <OurTeachers />
                <AllReviews />
            </div>

        )
    }
}
