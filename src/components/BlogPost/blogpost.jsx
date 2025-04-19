import blog_style from './blogpost.module.scss';

import { Link } from 'react-router-dom';

import blogpost from '../../assets/images/blogpost.png';


export const Blog = () => {
    return (
        <div className={blog_style.blog_post}>
            <img src={blogpost} alt="house plant" />
            <div>
                <span>Setember 12</span>
                <h3>Cactus & Succulent 
                Care Tips</h3>
                <p>Cacti are succulents are easy care plants for any home or patio. </p>
                <Link className={blog_style.blog_post_desc}>Read More</Link>
            </div>
        </div>
    )
}