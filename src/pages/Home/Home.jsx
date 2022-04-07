import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";
import "../../styles/utils.css";
import "../../styles/reset.css";
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import NavigateBeforeOutlinedIcon from '@mui/icons-material/NavigateBeforeOutlined';
import { Header } from '../../components/Header/Header';
import { useAllData } from '../../context/AllDataContext';

function Home() {
    const { dispatch } = useAllData();
    return (
        <div>
            <Header />
            <section aria-label="drone-slider ">
                <div className="carousel">
                    <button data-carousel-button>
                        <span className=" next-icon"><NavigateNextOutlinedIcon style={{ width: "4rem", height: "4rem" }} />
                        </span>
                    </button>
                    <button data-carousel-button>
                        <span className="before-icon"><NavigateBeforeOutlinedIcon style={{ width: "4rem", height: "4rem" }} />
                        </span>
                    </button>

                    <div className="main-product-content">
                        <div className="product-content-box flex-center">
                            <h3 className="sp-h3">Flagship Camera Drone</h3>
                            <h1 className="sp-h1">DJI MAVIC 3</h1>
                            <p className="sp-text">Capture Above Everything</p>
                        </div>
                        <div className="cta-btns-box">
                            <Link to="#" className="link-cta">
                                <span className="cta-text">Learn More</span>
                                <span className=" next-icon "><NavigateNextOutlinedIcon />
                                </span>
                            </Link>
                            <Link to="#" className="link-cta">
                                <span className="cta-text">Buy Now</span>
                                <span className=" next-icon "><NavigateNextOutlinedIcon />
                                </span>
                            </Link>
                        </div>
                    </div>
                    <img src="https://www1.djicdn.com/cms/uploads/150ef84c5f79da0f3cee8788b203e5b9.jpg" alt="drone-img1" loading="lazy" />

                </div>
            </section>

            <section className="main-explore-box">
                <div className="explore-content">
                    <div className="explore-title">Explore Products in Different Fields</div>
                    <div className="explore-child-list">
                        <Link to="/product-listing" className="explore-child-item">
                            <img className="explore-img" src="https://www1.djicdn.com/cms/uploads/6ba620d0fa99a782763ed811aadf49db.webp" alt="video-production-explore" />
                            <div className="explore-child-content">
                                <h1 className="sp-h1">RACING</h1>
                                <h3 className="sp-h3">Immerse into thrilling rides with quick turn-arounds and stability</h3>
                                <button className="link-cta b0-cta" onClick={() => dispatch({ type: "GET_CATEGORIES", payload: 0 })}>
                                    <span className="cta-text">Learn More</span>
                                    <span className=" next-icon "><NavigateNextOutlinedIcon style={{ width: "2rem", height: "2rem" }} />
                                    </span>
                                </button>
                            </div>
                        </Link>

                        <Link to="/product-listing" className="explore-child-item">
                            <img className="explore-img" src="https://www1.djicdn.com/cms/uploads/454da8372eabc9ae7fa6ec035015ad30.webp" alt="video-production-explore" />
                            <div className="explore-child-content">
                                <h1 className="sp-h1">VIDEO PRODUCTION</h1>
                                <h3 className="sp-h3">Professional aerial film-making drones</h3>
                                <button className="link-cta b0-cta" onClick={() => dispatch({ type: "GET_CATEGORIES", payload: 1 })}>
                                    <span className="cta-text">Learn More</span>
                                    <span className=" next-icon "><NavigateNextOutlinedIcon style={{ width: "2rem", height: "2rem" }} />
                                    </span>
                                </button>
                            </div>
                        </Link>

                        <Link to="#" className="explore-child-item">
                            <img className="explore-img" src="https://www1.djicdn.com/cms/uploads/8d21c8e16c7ef90815cd3f8fedc95bfd.webp" alt="video-production-explore" loading="lazy" />
                            <div className="explore-child-content">
                                <h1 className="sp-h1">AGRICULTURE</h1>
                                <h3 className="sp-h3">Efficient and intelligent agricultural drones</h3>
                                <button className="link-cta b0-cta">
                                    <span className="cta-text" >Coming</span>
                                    <span className=" next-icon "><NavigateNextOutlinedIcon style={{ width: "2rem", height: "2rem" }} />
                                    </span>
                                </button>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export { Home };

