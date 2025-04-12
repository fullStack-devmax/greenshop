import header_style from './header.module.scss';

import { Link } from 'react-router-dom';

import header_plant from '../../assets/images/headPlan.png'

import { Container } from "../Container";


export const Header = () => {
    return (
        <header> 
            <Container>
                <div className={header_style.flex}>
                    <div className={header_style.flex_textbox}>
                        <h5>Welcome to GreenShop</h5>
                        <h1>Let’s Make a Better <span>Planet</span></h1>
                        <p>We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</p>
                        <Link className={header_style.btn} to='/shop'>SHOP NOW</Link>
                    </div>
                    <div className={header_style.flex_imgbox}>
                        <img
                            src={header_plant}
                            width={135}
                            height={135}
                            // srcSet='../../assets/images/headPlant.png 213w, ../../assets/images/headPlant@2x.png 518w'
                            alt='small pot plant and big pot plant'
                            // sizes='(max-width: 213px) 213px, (max-width: 518px) 518px'
                        />
                        <img
                            src={header_plant}
                            width={566}
                            height={677}
                            // srcSet='../../assets/images/headPlant.png 213w, ../../assets/images/headPlant@2x.png 518w'
                            alt='small pot plant and big pot plant'
                            // sizes='(max-width: 213px) 213px, (max-width: 518px) 518px'
                        />
                    </div>
                </div>
            </Container>
        </header>
    )
}