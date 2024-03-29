import './App.css';
import './Stars.css';
import tokenomics from './components/Tokenomics/tokenomics';
import Speed from './images/Speed.png';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Fade } from "react-awesome-reveal";

function App() {
  const responsive = {
    1366: {
      items: 7,
    },
    1024: {
      items: 5,
      dots: true,
    },
    768: {
      items: 5,
      dots: true,
    },
    0: {
      items: 3,
      dots: true,
    }
  }
  return (
    <>
      <main>
        {/* <section className='top-bar'>
          <div className='container'>
            <div className='d-flex align-items-center justify-content-center pt-3'>
              <p className="px-2"><img src={require('./images/T.png')} className='img-fluid' style={{ marginTop: "-5px" }} alt="" />Get Your $TET Tokens</p>
              <p className="px-2">/</p>
              <p className="px-2"><img src={require('./images/T.png')} className='img-fluid' style={{ marginTop: "-5px" }} alt="" />Stake $TET</p>
            </div>
          </div>
        </section> */}
        <nav class="navbar navbar-expand-lg py-1 m-0 top-bar" data-aos="fade-down" data-aos-delay="2300"
            data-aos-duration="500">
            <div class="container">
                <a class="navbar-brand" href="/">
                    <img src={require('./images/tectum.png')} class="img-fluid" alt="" /></a>
                <button class="navbar-toggler text-white" type="button" data-toggle="collapse" data-target="#navbarText"
                    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fa fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse text-white" id="navbarText">
                    <ul class="navbar-nav me-auto mx-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a href="/" class="px-3 pt-2 btn-link">
                                Home
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class='px-3 pt-2 btn-link' href='/xnetwork'>
                                Network
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class='px-3 pt-2 btn-link' href='/nft'>
                                NFT’s
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class='px-3 pt-2 btn-link' href='/nft'>
                                Contact Us
                            </a>
                        </li>
                    </ul>
                    <ul class="navbar-nav mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a href='/contact' style={{color: '#fff'}}>
                                <button type="button" class="px-5 btn pt-2 hero-btn" style={{fontWeight: 400}}>
                                    Buy Now
                                </button>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <section className='hero-section'>
          <div id='stars'></div>
          <div id='stars2'></div>
          <div id='stars3'></div>
          <img src={require('./images/logo.png')} className='hero-prop' alt="" />
          <div className='container'>
            <div className='row'>
              <div className='order-md-2 col-lg-6 d-flex align-items-center justify-content-center'>
                <div className='tokenomic-card' style={{ width: "80%" }}>
                  <Fade cascade>
                    <img src={require('./images/about/2.png')} className='img-fluid' style={{ width: "60%" }} alt="" />
                    <h1 className='text-white mt-4' style={{ fontSize: "80px" }}>AePOS</h1>
                    <p className='tokenomic-para'>Network</p>
                  </Fade>
                </div>
              </div>
              <div className='order-md-1 col-lg-6'>
                <h1 className='hero-head'>The Fastest Blockchain for All Industries</h1>
                <p className='hero-para'>
                  Tectum is the world’s fastest blockchain – a lightning-fast distributed
                  ledger powering the superconductive digital financial environment of the
                  future.
                </p>
                <p className='hero-para' style={{ fontSize: "18px" }}>Trade $TET Now</p>
                <button className='hero-btn'>Get Wallet</button>
              </div>
            </div>
          </div>
        </section>
        <section className="tokenomics">
          <img src={require('./images/tokenomics-prop.png')} className='tokenomics-prop-1' alt="" />
          <div className='container'>
            <div className='row'>
              {
                tokenomics.map((tokenomic) => {
                  return <div className='col-lg-3'>
                    <Fade className='h-100' direction='up' key={tokenomic.id} delay={parseInt(tokenomic.id * '200')}>
                      <div className='tokenomic-card'>
                        <img src={require(`../public/tokenomics/${tokenomic.image}`)} className='img-fluid tokenomic-img' alt="" />
                        <h1 className='tokenomic-head'>{tokenomic.title}</h1>
                        <p className='tokenomic-para'>{tokenomic.description}</p>
                      </div>
                    </Fade>
                  </div>
                })
              }
            </div>
          </div>
        </section>
        <section className='about'>
          <div className='black-wrapper'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-6'>
                  <div className="speed-wrapper">
                    <Fade>
                      <img src={Speed} className='img-fluid' alt="" />
                    </Fade>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <Fade cascade>
                    <h1 className='about-head'>The Fastest Blockchain</h1>
                    <p className='about-para'>The Tectum Blockchain exceeds 1 million transactions per second using a proprietary Proof-of-Utility Consensus.</p>
                    <p className='about-para'>This makes Tectum the perfect solution as an “Overlay Network” for numerous blockchain systems such as Bitcoin.</p>
                    <p className='about-para'>Learn about Tectum Blockchain</p>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='fastest-blockchain-section'>
          <div className='black-wrapper'>
            <div className='container'>
              <Fade cascade>
                <h1 className='text-center fastest-blockchain-head'>The Fastest Blockchain for All Industries</h1>
                <p className='text-center fastest-blockchain-para'>Tectum is the world’s fastest blockchain – a lightning-fast distributed ledger powering the superconductive digital financial environment of the future.</p>
              </Fade>
              <div className='row mt-5'>
                <div className='col-lg-4'>
                  <div className='tokenomic-card d-flex align-items-center justify-content-center'>
                    <div>
                      <Fade cascade>
                        <img src={require('./images/about/1.png')} className='img-fluid' alt="" />
                        <p className='fastest-blockchain-card-para'>Exceeds 1 million TPS and provides instant event status delivery & ownership updates.</p>
                      </Fade>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4 p-5'>
                  <img src={require('./images/about/2.png')} className='img-fluid' alt="" />
                </div>
                <div className='col-lg-4'>
                  <div className='tokenomic-card d-flex align-items-center justify-content-center'>
                    <div>
                      <Fade cascade>
                        <img src={require('./images/about/1.png')} className='img-fluid' alt="" />
                        <p className='fastest-blockchain-card-para'>Exceeds 1 million TPS and provides instant event status delivery & ownership updates.</p>
                      </Fade>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6'>
                <Fade cascade>
                  <h1 className='solutions-head'>Crypto Solutions for Business</h1>
                  <p className='solutions-para'>
                    The SoftNote is the first ever ‘transactionless’ product with instant payment zero-fee processing for an end-user. The SoftNote has ‘physical cash’ elements, for example, a Bitcoin SoftNote bill can be printed on paper, does not require a confirmation from the Bitcoin network, incurs no fees, and has no geographical boundaries.
                  </p>
                  <p className='solutions-para'>
                    Therefore, the SoftNote can be used person-to- person, sent over any messenger application as a picture file or sent by wallet to wallet. A SoftNote is secured by a passcode rendering it useless to an unauthorised possessor.
                  </p>
                  <p className='solutions-para'>Learn about SoftNote</p>
                </Fade>
              </div>
              <div className='col-lg-6 d-flex align-items-center justify-content-center'>
                <Fade direction='right' delay={1000}>
                  <img src={require('./images/solutions.png')} className='img-fluid bnw' alt="" />
                </Fade>
              </div>
            </div>
          </div>
        </section>
        <section className='authentication-section'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6 d-flex align-items-center justify-content-center'>
                <Fade delay={1000} direction='left'>
                  <img src={require('./images/authentication.png')} className='img-fluid bnw' alt="" />
                </Fade>
              </div>
              <div className='col-lg-6'>
                <Fade cascade>
                  <h1 className='authentication-head'>Crypto Solutions for Business</h1>
                  <p className='authentication-para'>
                    The SoftNote is the first ever ‘transactionless’ product with instant payment zero-fee processing for an end-user. The SoftNote has ‘physical cash’ elements, for example, a Bitcoin SoftNote bill can be printed on paper, does not require a confirmation from the Bitcoin network, incurs no fees, and has no geographical boundaries.
                  </p>
                  <p className='authentication-para'>
                    Therefore, the SoftNote can be used person-to- person, sent over any messenger application as a picture file or sent by wallet to wallet. A SoftNote is secured by a passcode rendering it useless to an unauthorised possessor.
                  </p>
                  <p>Learn about SoftNote</p>
                </Fade>
              </div>
            </div>
          </div>
        </section>
        <section className='tia-ai-section'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6'>
                <Fade cascade>
                  <h1 className='tia-ai-head'>Crypto Solutions for Business</h1>
                  <p className='tia-ai-para'>
                    The SoftNote is the first ever ‘transactionless’ product with instant payment zero-fee processing for an end-user. The SoftNote has ‘physical cash’ elements, for example, a Bitcoin SoftNote bill can be printed on paper, does not require a confirmation from the Bitcoin network, incurs no fees, and has no geographical boundaries.
                  </p>
                  <p className='tia-ai-para'>
                    Therefore, the SoftNote can be used person-to- person, sent over any messenger application as a picture file or sent by wallet to wallet. A SoftNote is secured by a passcode rendering it useless to an unauthorised possessor.
                  </p>
                  <p>Learn about SoftNote</p>
                </Fade>
              </div>
              <div className='col-lg-6 d-flex align-items-center justify-content-center'>
                <Fade delay={1000} direction='right'>
                  <img src={require('./images/Tia-ai.png')} className='img-fluid bnw' alt="" />
                </Fade>
              </div>
            </div>
          </div>
        </section>
        <section className='partners-section'>
          <div className='container'>
            <h1 className='text-center partners-head'>Our Partners</h1>
            <p className='text-center partners-para'>Tectum is the world’s fastest blockchain – a lightning-fast distributed</p>
            <div className='d-flex align-items-center justify-content-center mt-5'>
              <img src={require('./images/logo.png')} className='img-fluid' alt="" />
            </div>
          </div>
        </section>
        <section>
          <div className='container mb-5'>
            <h1 className='partners-head' style={{ color: "#000" }}>Our Partners</h1>
          </div>
          <OwlCarousel className='owl-theme' loop items={6} nav={false} dots={false} responsive={responsive} autoplay={true} autoplayTimeout={3000}>
            <div className='item d-flex align-items-center'>
              <img src={require('./images/partners/1.png')} className='img-fluid' style={{ width: "180px" }} alt="" />
            </div>
            <div className='item d-flex align-items-center'>
              <img src={require('./images/partners/2.png')} className='img-fluid' style={{ width: "180px" }} alt="" />
            </div>
            <div className='item d-flex align-items-center'>
              <img src={require('./images/partners/3.png')} className='img-fluid' style={{ width: "180px" }} alt="" />
            </div>
            <div className='item d-flex align-items-center'>
              <img src={require('./images/partners/4.png')} className='img-fluid' style={{ width: "180px" }} alt="" />
            </div>
            <div className='item d-flex align-items-center'>
              <img src={require('./images/partners/5.png')} className='img-fluid' style={{ width: "180px" }} alt="" />
            </div>
            <div className='item d-flex align-items-center'>
              <img src={require('./images/partners/6.png')} className='img-fluid' style={{ width: "180px" }} alt="" />
            </div>
          </OwlCarousel>
        </section>
        <section style={{ paddingTop: 0 }}>
          <div className='container mb-5'>
            <h1 className='partners-head' style={{ color: "#000" }}>Our Partners</h1>
          </div>
          <OwlCarousel className='owl-theme' loop items={6} nav={false} dots={false} responsive={responsive} autoplay={true} autoplayTimeout={5000}>
            <div className='item d-flex align-items-center'>
              <img src={require('./images/partners/1.png')} className='img-fluid' style={{ width: "180px" }} alt="" />
            </div>
            <div className='item d-flex align-items-center'>
              <img src={require('./images/partners/2.png')} className='img-fluid' style={{ width: "180px" }} alt="" />
            </div>
            <div className='item d-flex align-items-center'>
              <img src={require('./images/partners/3.png')} className='img-fluid' style={{ width: "180px" }} alt="" />
            </div>
            <div className='item d-flex align-items-center'>
              <img src={require('./images/partners/4.png')} className='img-fluid' style={{ width: "180px" }} alt="" />
            </div>
            <div className='item d-flex align-items-center'>
              <img src={require('./images/partners/5.png')} className='img-fluid' style={{ width: "180px" }} alt="" />
            </div>
            <div className='item d-flex align-items-center'>
              <img src={require('./images/partners/6.png')} className='img-fluid' style={{ width: "180px" }} alt="" />
            </div>
          </OwlCarousel>
        </section>
        <section style={{ background: "#000" }}>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6'>
                <Fade cascade>
                  <h1 className='final-head-1'>Let’s go</h1>
                  <h1 className='final-head-2 mt-4'>Tectum Testnet</h1>
                  <p className='final-para mt-4'>Start with our Test Node</p>
                  <button className='hero-btn mt-4'>Start with our Test Node</button>
                </Fade>
              </div>
            </div>
          </div>
        </section>
        <footer className="footer-section">
          <div className="container">
            <div className="footer-cta pt-5 pb-5">
              <div className="row">
                <div className="col-xl-4 col-md-4 mb-30">
                  <div className="single-cta">
                    <i className="fas fa-map-marker-alt"></i>
                    <div className="cta-text">
                      <h4>Find us</h4>
                      <span>1010 Avenue, sw 54321, chandigarh</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-4 mb-30">
                  <div className="single-cta">
                    <i className="fas fa-phone"></i>
                    <div className="cta-text">
                      <h4>Call us</h4>
                      <span>9876543210 0</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-4 mb-30">
                  <div className="single-cta">
                    <i className="far fa-envelope-open"></i>
                    <div className="cta-text">
                      <h4>Mail us</h4>
                      <span>mail@info.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-content pt-5 pb-5">
              <div className="row">
                <div className="col-xl-4 col-lg-4 mb-50">
                  <div className="footer-widget">
                    <div className="footer-logo">
                      <a href="index.html"><img src={require('./images/tectum.png')} className="img-fluid" alt="logo" /></a>
                    </div>
                    <div className="footer-text">
                      <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                        elit,Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="footer-social-icon">
                      <span>Follow us</span>
                      <a href="#"><i className="fab fa-facebook-f facebook-bg"></i></a>
                      <a href="#"><i className="fab fa-twitter twitter-bg"></i></a>
                      <a href="#"><i className="fab fa-google-plus-g google-bg"></i></a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                  <div className="footer-widget">
                    <div className="footer-widget-heading">
                      <h3>Useful Links</h3>
                    </div>
                    <ul>
                      <li><a href="#">Home</a></li>
                      <li><a href="#">about</a></li>
                      <li><a href="#">services</a></li>
                      <li><a href="#">portfolio</a></li>
                      <li><a href="#">Contact</a></li>
                      <li><a href="#">About us</a></li>
                      <li><a href="#">Our Services</a></li>
                      <li><a href="#">Expert Team</a></li>
                      <li><a href="#">Contact us</a></li>
                      <li><a href="#">Latest News</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                  <div className="footer-widget">
                    <div className="footer-widget-heading">
                      <h3>Subscribe</h3>
                    </div>
                    <div className="footer-text mb-25">
                      <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                    </div>
                    <div className="subscribe-form">
                      <form action="#">
                        <input type="text" placeholder="Email Address" />
                          <button><i className="fab fa-telegram-plane"></i></button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright-area">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                  <div className="copyright-text">
                    <p>Copyright &copy; 2018, All Rights Reserved</p>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                  <div className="footer-menu">
                    <ul>
                      <li><a href="#">Home</a></li>
                      <li><a href="#">Terms</a></li>
                      <li><a href="#">Privacy</a></li>
                      <li><a href="#">Policy</a></li>
                      <li><a href="#">Contact</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main >
    </>
  );
}

export default App;
