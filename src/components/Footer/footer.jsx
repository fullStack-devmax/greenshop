import footer_style from './footer.module.scss';

import plantRenov from '../../assets/images/plantRenov.png'
import wateringGarden from '../../assets/images/wateringGarden.png'

import { Container } from '../Container';


export const Footer = () => {
    return(
        <footer>
            <Container>
                <div className={footer_style.services}>
                    <ul>
                        <li style={{paddingRight: '34px', borderRight: '1px solid rgba(70, 163, 88, 0.1)'}}>
                            <div>
                                <span>
                                    <img src={plantRenov} alt="img of cactus" />
                                </span>
                            </div>
                            <h3>Garden Care</h3>
                            <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
                        </li>
                        <li style={{paddingRight: '26px', borderRight: '1px solid rgba(70, 163, 88, 0.1)'}}>
                            <div>
                                <span>
                                    <img src={plantRenov} alt="img of cactus" />
                                </span>
                            </div>
                            <h3>Garden Care</h3>
                            <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
                        </li>
                        <li>
                            <div>
                                <span>
                                    <img src={wateringGarden} alt="watering" />
                                </span>
                            </div>
                            <h3>Garden Care</h3>
                            <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
                        </li>
                    </ul>
                    <div>
                        <h2>Would you like to join newsletters?</h2>
                        <form action="" method="post">
                            <div style={{display:'flex', alignItems:'center', margin:'18px 0', boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.06)'}}>
                                <input type="search" placeholder='enter your email address...' />
                                <button type="submit">Join</button>
                            </div>
                        </form>
                        <p>We usually post offers and challenges in newsletter. We’re your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our (green)house to yours! </p>
                    </div>
                </div>
                <div className={footer_style.contact}></div>
                <div className={footer_style.features}></div>
            </Container>
        </footer>
    )
} 