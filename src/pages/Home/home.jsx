import home_style from './home.module.scss';

import { Header } from "../../components/Header"
import { Card } from '../../components/Card';
import { Container } from '../../components/Container';


export const Home = () => {
    return (
        <>
            <Header/>
            <section className={home_style.ProductSorts}>
                <Container>
                    <div style={{
                        display:"flex",
                        justifyContent: "space-between"
                    }}>
                        <aside className={home_style.ProductSorts_categories}>
                            <h3>Categories</h3>
                            <ul>
                                <li><h4>House Plants</h4> <span>12</span></li>
                                <li><h4>Potter Plants</h4> <span>12</span></li>
                                <li><h4>Seeds</h4> <span>12</span></li>
                                <li><h4>Small Plants</h4> <span>12</span></li>
                                <li><h4>Big Plants</h4> <span>12</span></li>
                                <li><h4>Succulents</h4> <span>12</span></li>
                                <li><h4>Trerrariums</h4> <span>12</span></li>
                                <li><h4>Gardening</h4> <span>12</span></li>
                                <li><h4>Accessories</h4> <span>12</span></li>
                            </ul>
                        </aside>
                        <div className={home_style.ProductSorts_pos}>
                            <nav className={home_style.ProductSorts_pos__sorting}>
                                <ul>
                                    <li>All Plants</li>
                                    <li>New Arrivals</li>
                                    <li>Sale</li>
                                </ul>
                                <div>
                                    <p>Sort by:</p>
                                    <select name="SortBy" id="sortBy">
                                        <option value="defaultSorting">Default Sorting</option>
                                    </select>
                                </div>
                            </nav>
                            <div className={home_style.ProductSorts_pos__cards}>
                                <Card/>
                                <Card/>
                                <Card/>
                                <Card/>
                                <Card/>
                                <Card/>
                                <Card/>
                                <Card/>
                                <Card/>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}