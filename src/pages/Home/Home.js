import React from 'react';
import "./Home.css";
import "../../styles/utils.css";
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import NavigateBeforeOutlinedIcon from '@mui/icons-material/NavigateBeforeOutlined';
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Header } from 'components/Header/Header';

function Home() {
  return (
    <div>
      <Header/>
      <section aria-label="drone-slider">
        <div className="carousel">
            <button data-carousel-button>
                <span className=" next-icon"><NavigateNextOutlinedIcon style={{width:"4rem",height:"4rem"}}/>
                </span>
            </button>
            <button data-carousel-button>
                <span className="before-icon"><NavigateBeforeOutlinedIcon style={{width:"4rem",height:"4rem"}}/>
                </span>
            </button>

            <ul>
                <li className="slide" data-active>
                    <div className="main-product-content">
                        <div className="product-content-box">
                            <h3 className="sp-h3">Lorem ipsum dolor</h3>
                            <h1 className="sp-h1">Lorem ipsum dolor sit amet.</h1>
                            <p className="sp-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat maiores et eos eaque veritatis aut laboriosam earum dolorem iste atque.</p>
                        </div>
                        <div className="cta-btns-box">
                            <a href="#" className="link-cta">
                                <span className="cta-text">Learn More</span>
                                <span className=" next-icon "><NavigateNextOutlinedIcon/>
                                </span>
                            </a>
                            <a href="#" className="link-cta">
                                <span className="cta-text">Buy Now</span>
                                <span className=" next-icon "><NavigateNextOutlinedIcon/>
                                </span>
                            </a>
                        </div>
                    </div>
                    <img src="https://www1.djicdn.com/cms/uploads/150ef84c5f79da0f3cee8788b203e5b9.jpg" alt="drone-img1" loading="lazy"/>
                </li>
                {/* <li className="slide">
                    <div className="main-product-content">
                        <div className="product-content-box">
                            <h3 className="sp-h3">Lorem ipsum dolor</h3>
                            <h1 className="sp-h1">Lorem ipsum dolor sit amet.</h1>
                            <p className="sp-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat maiores et eos eaque veritatis aut laboriosam earum dolorem iste atque.</p>
                        </div>
                        <div className="cta-btns-box">
                            <a href="#" className="link-cta">
                                <span className="cta-text">Learn More</span>
                                <span className=" next-icon material-icons material-icons-outlined">
                                navigate_next</span>
                            </a>
                            <a href="#" className="link-cta">
                                <span className="cta-text">Buy Now</span>
                                <span className=" next-icon material-icons material-icons-outlined">
                                navigate_next</span>
                            </a>
                        </div>
                    </div>
                    <img src="assets/drone-img2.jpg" alt="drone-img2"/>
                </li>
                <li className="slide">
                    <div className="main-product-content">
                        <div className="product-content-box">
                            <h3 className="sp-h3">Lorem ipsum dolor</h3>
                            <h1 className="sp-h1">Lorem ipsum dolor sit amet.</h1>
                            <p className="sp-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat maiores et eos eaque veritatis aut laboriosam earum dolorem iste atque.</p>
                        </div>
                        <div className="cta-btns-box">
                            <a href="#" className="link-cta">
                                <span className="cta-text">Learn More</span>
                                <span className=" next-icon material-icons material-icons-outlined">
                                navigate_next</span>
                            </a>
                            <a href="#" className="link-cta">
                                <span className="cta-text">Buy Now</span>
                                <span className=" next-icon material-icons material-icons-outlined">
                                navigate_next</span>
                            </a>
                        </div>
                    </div>
                    <img src="assets/drone-img1.jpg" alt="drone-img3" loading="lazy"/>
                </li> */}
            </ul>
        </div>
    </section>

    <section className="main-explore-box">
        <div className="explore-content">
            <div className="explore-title">Explore Products in Different Fields</div>
            <div className="explore-child-list">
                <a href="#" className="explore-child-item">
                    <img className="explore-img" src="https://www1.djicdn.com/cms/uploads/6ba620d0fa99a782763ed811aadf49db.webp" alt="video-production-explore"/>
                    <div className="explore-child-content">
                        <h1 className="sp-h1">explore explore</h1>
                        <h3 className="sp-h3">explore explore explore explore</h3>
                        <div className="link-cta b0-cta">
                            <span className="cta-text">Learn More</span>
                            <span className=" next-icon "><NavigateNextOutlinedIcon style={{width:"2rem",height:"2rem"}}/>
                            </span>
                        </div>
                    </div>
                </a>

                <a href="#" className="explore-child-item">
                    <img className="explore-img" src="https://www1.djicdn.com/cms/uploads/454da8372eabc9ae7fa6ec035015ad30.webp" alt="video-production-explore"/>
                    <div className="explore-child-content">
                        <h1 className="sp-h1">explore explore</h1>
                        <h3 className="sp-h3">explore explore explore explore explore explore explore explore</h3>
                        <div className="link-cta b0-cta">
                            <span className="cta-text">Learn More</span>
                            <span className=" next-icon "><NavigateNextOutlinedIcon style={{width:"2rem",height:"2rem"}}/>
                            </span>
                        </div>
                    </div>
                </a>

                <a href="#" className="explore-child-item">
                    <img className="explore-img" src="https://www1.djicdn.com/cms/uploads/8d21c8e16c7ef90815cd3f8fedc95bfd.webp" alt="video-production-explore" loading="lazy"/>
                    <div className="explore-child-content">
                        <h1 className="sp-h1">explore explore </h1>
                        <h3 className="sp-h3">explore explore explore explore</h3>
                        <div className="link-cta b0-cta">
                            <span className="cta-text">Learn More</span>
                            <span className=" next-icon "><NavigateNextOutlinedIcon style={{width:"2rem",height:"2rem"}}/>
                            </span>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </section>

    {/* <footer className="footer" >
        <span className="moon-icon"><NightlightOutlinedIcon style={{width:"3rem",height:"3rem"}}/>
        </span>
        <div className="tagline">FREEYAY</div>
        <a href="https://github.com/nightlight-wander" target="_blank"><i className="git-icon" ><GitHubIcon style={{width:"3rem",height:"3rem"}}/></i>
        </a>
    </footer> */}
    </div>
  )
}

export {Home};

