import footer_style from './footer.module.scss';

import plantRenov from '../../assets/images/plantRenov.png'
import wateringGarden from '../../assets/images/wateringGarden.png'
import Logo_footer from '../../assets/svg/Group.svg'
import location from '../../assets/svg/Location.svg'
import message from '../../assets/svg/Message.svg'
import calling from '../../assets/svg/Calling.svg'
import facebook from '../../assets/svg/Facebook.svg'
import instagram from '../../assets/svg/Instagram.svg'
import twitter from '../../assets/svg/Twitter.svg'
import linkedin from '../../assets/svg/Linkedin.svg'
import youtube from '../../assets/svg/Union.svg'
import cards from '../../assets/svg/cards.svg'

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
            </Container>
            <div className={footer_style.contact}>
                <Container>
                    <div className={footer_style.contact__box}>
                        <img src={Logo_footer} alt="logo: greenshop" />
                        <ul className={footer_style.contact__box_menu}>
                            <li>
                                <img src={location} alt="location" />
                                <p>
                                    <p>70 West Buckingham Ave.</p>
                                    <p>Farmingdale, NY 11735</p>
                                </p>
                            </li>
                            <li>
                                <img src={message} alt="message" />
                                <p>contact@greenshop.com</p>
                            </li>
                            <li>
                                <img src={calling} alt="calling" />
                                <p>+88 01911 717 490</p>
                            </li>
                        </ul>
                    </div>
                </Container>
            </div>
            <div className={footer_style.features}>
                <Container>
                    <div className={footer_style.features__box}>
                        <div>
                            <h3>My Account</h3>
                            <a href='/'>My Account</a>
                            <a href='/'>Our stores</a>
                            <a href='/'>Contact us</a>
                            <a href='/'>Career</a>
                            <a href='/'>Specials</a>
                        </div>
                        <div>
                            <h3>My Account</h3>
                            <a href='/'>My Account</a>
                            <a href='/'>Our stores</a>
                            <a href='/'>Contact us</a>
                            <a href='/'>Career</a>
                            <a href='/'>Specials</a>
                        </div>
                        <div>
                            <h3>My Account</h3>
                            <a href='/'>My Account</a>
                            <a href='/'>Our stores</a>
                            <a href='/'>Contact us</a>
                            <a href='/'>Career</a>
                            <a href='/'>Specials</a>
                        </div>
                        <div>
                            <h3>Social Media</h3>
                            <div className={footer_style.social_media}>
                                <a href='/'><img style={{padding: "0 4px"}} src={facebook} alt="facebook" /></a>
                                <a href='/'><img src={instagram} alt="instagram" /></a>
                                <a href='/'><img src={twitter} alt="twitter" /></a>
                                <a href='/'><img src={linkedin} alt="linkedin" /></a>
                                <a href='/'><img src={youtube} alt="youtube" /></a>
                            </div>
                            <h3>We accept</h3>
                            <img width={224} height={26} src={cards} alt="cards" />
                        </div>
                    </div>
                </Container>
            </div>
            <div className={footer_style.site}>
                <Container>
                    <p>© 2021 GreenShop. All Rights Reserved.</p>
                </Container>
            </div>
        </footer>
    )
} 