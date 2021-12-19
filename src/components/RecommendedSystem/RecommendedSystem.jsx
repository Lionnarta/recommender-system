import React, { useState, useEffect} from 'react'
import './RecommendedSystem.css'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import walmartLogo from '../../assets/images/walmartLogo.png'

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
};

const RecommendedSystem = (props) => {

    const [recommendData, setRecommendData] = useState([]);

    let url = 'https://recommender-app-api.herokuapp.com/recommend';
    
    const req = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({"name": props.username}),
    }

    useEffect(() => {
        if (props.loginState && recommendData.length === 0) {
            fetch(url, req)
            .then(res => res.json())
            .then(data => {
                setRecommendData(data.data);
            })
            .catch(err => {
                console.log(err)
            })
        }
    })

    const carouselData = (data) => {
        const listData = data.map((data) => 
            <div key={ data.id.toString() } className='rs-r-card-c'>
                <div className='rs-r-card'>
                    <img src={ walmartLogo } alt="" className='rs-r-carousel-img' />
                    <div className='rs-r-carousel-text'>
                        <div className='rs-mr-5'>
                            <p>ID</p>
                            <p>Rating</p>
                            <p>Link</p>
                        </div>
                        <div>
                            <p>: { data.product_id }</p>
                            <p>: { Math.round(data.predicted_rating * 100) / 100 }</p>
                            <p>: <a className='rs-r-link' target='_blank' href={ data.product_url }>{ data.product_url }</a></p>
                        </div>
                    </div>
                </div>
            </div>
        )
        return (
            <Carousel responsive={ responsive } showDots={ true } className='rs-rc-container' >
                { listData }
            </Carousel>
        )
    }

    return (
        <div className='rs-r-container rs-font-lato'>
            <div className='rs-mb-40'>
                <p className='rs-r-header'>What Our <span className='rs-r-header-span'>Customer Are Buying</span></p>
                <p className='rs-r-content'>These are the products we recommend based on what our customers buy</p>
            </div>
            <div>
                <div className='rs-r-name'>
                    Hi {props.username}, this is our products just for you 
                </div>
                <div>
                    {
                        recommendData.length !== 0 ? carouselData(recommendData) : null
                    }
                </div>
            </div>
        </div>
    )
}

export default RecommendedSystem
