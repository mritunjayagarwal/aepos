import './App.css';
import tokenomics from './components/Tokenomics/tokenomics';
import Speed from './images/Speed.png';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

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
        <section className='top-bar'>
          <div className='container'>
              <div className='d-flex align-items-center justify-content-center pt-3'>
                <p class = "px-2"><img src={require('./images/T.png')} className='img-fluid' style={{marginTop: "-5px"}} alt="" />Get Your $TET Tokens</p>
                <p class = "px-2">/</p>
                <p class = "px-2"><img src={require('./images/T.png')} className='img-fluid' style={{marginTop: "-5px"}} alt="" />Stake $TET</p>
              </div>
          </div>
        </section>
        <section className='hero-section'>
          <img src={require('./images/logo.png')} style = {{position: "absolute", right: "-100px" }} alt="" />
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6'>
                <h1 className='hero-head'>The Fastest Blockchain for All Industries</h1>
                <p className='hero-para'>
                  Tectum is the world’s fastest blockchain – a lightning-fast distributed
                  ledger powering the superconductive digital financial environment of the
                  future.
                </p>
                <p className='hero-para' style={{ fontSize: "18px" }}>Trade $TET Now</p>
                <button className='hero-btn'>Get Wallet</button>
              </div>
              <div className='col-lg-6 d-flex align-items-center justify-content-center'>
                <div className='tokenomic-card' style = {{width: "80%"}}>
                  <img src={require('./images/about/2.png')} className='img-fluid' style = {{width: "60%"}} alt="" />
                  <h1 className='text-white mt-4' style = {{fontSize: "80px"}}>AePOS</h1>
                  <p className='tokenomic-para'>Network</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="tokenomics">
          <div className='container'>
            <div className='row'>
              {
                tokenomics.map((tokenomic) => {
                  return <div className='col-lg-3'>
                    <div className='tokenomic-card'>
                      <img src={require(`../public/tokenomics/${tokenomic.image}`)} className='img-fluid tokenomic-img' alt="" />
                      <h1 className='tokenomic-head'>{tokenomic.title}</h1>
                      <p className='tokenomic-para'>{tokenomic.description}</p>
                    </div>
                  </div>
                })
              }
            </div>
          </div>
        </section>
        <section className='about'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6'>
                <div className="speed-wrapper">
                  <img src={Speed} className='img-fluid' alt="" />
                </div>
              </div>
              <div className='col-lg-6'>
                <h1 className='about-head'>The Fastest Blockchain</h1>
                <p className='about-para'>The Tectum Blockchain exceeds 1 million transactions per second using a proprietary Proof-of-Utility Consensus.</p>
                <p className='about-para'>This makes Tectum the perfect solution as an “Overlay Network” for numerous blockchain systems such as Bitcoin.</p>
                <p className='about-para'>Learn about Tectum Blockchain</p>
              </div>
            </div>
          </div>
        </section>
        <section className='fastest-blockchain-section'>
          <div className='container'>
            <h1 className='text-center fastest-blockchain-head'>The Fastest Blockchain for All Industries</h1>
            <p className='text-center fastest-blockchain-para'>Tectum is the world’s fastest blockchain – a lightning-fast distributed ledger powering the superconductive digital financial environment of the future.</p>
            <div className='row mt-5'>
              <div className='col-lg-4'>
                <div className='tokenomic-card d-flex align-items-center justify-content-center'>
                  <div>
                    <img src={require('./images/about/1.png')} className='img-fluid' alt="" />
                    <p className='fastest-blockchain-card-para'>Exceeds 1 million TPS and provides instant event status delivery & ownership updates.</p>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 p-5'>
                <img src={require('./images/about/2.png')} className='img-fluid' alt="" />
              </div>
              <div className='col-lg-4'>
                <div className='tokenomic-card d-flex align-items-center justify-content-center'>
                  <div>
                    <img src={require('./images/about/1.png')} className='img-fluid' alt="" />
                    <p className='fastest-blockchain-card-para'>Exceeds 1 million TPS and provides instant event status delivery & ownership updates.</p>
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
                <h1 className='solutions-head'>Crypto Solutions for Business</h1>
                <p className='solutions-para'>
                  The SoftNote is the first ever ‘transactionless’ product with instant payment zero-fee processing for an end-user. The SoftNote has ‘physical cash’ elements, for example, a Bitcoin SoftNote bill can be printed on paper, does not require a confirmation from the Bitcoin network, incurs no fees, and has no geographical boundaries.
                </p>
                <p className='solutions-para'>
                  Therefore, the SoftNote can be used person-to- person, sent over any messenger application as a picture file or sent by wallet to wallet. A SoftNote is secured by a passcode rendering it useless to an unauthorised possessor.
                </p>
                <p className='solutions-para'>Learn about SoftNote</p>
              </div>
              <div className='col-lg-6 d-flex align-items-center justify-content-center'>
                <img src={require('./images/solutions.png')} className='img-fluid bnw' alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className='authentication-section'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6 d-flex align-items-center justify-content-center'>
                <img src={require('./images/authentication.png')} className='img-fluid bnw' alt="" />
              </div>
              <div className='col-lg-6'>
                <h1 className='authentication-head'>Crypto Solutions for Business</h1>
                <p className='authentication-para'>
                  The SoftNote is the first ever ‘transactionless’ product with instant payment zero-fee processing for an end-user. The SoftNote has ‘physical cash’ elements, for example, a Bitcoin SoftNote bill can be printed on paper, does not require a confirmation from the Bitcoin network, incurs no fees, and has no geographical boundaries.
                </p>
                <p className='authentication-para'>
                  Therefore, the SoftNote can be used person-to- person, sent over any messenger application as a picture file or sent by wallet to wallet. A SoftNote is secured by a passcode rendering it useless to an unauthorised possessor.
                </p>
                <p>Learn about SoftNote</p>
              </div>
            </div>
          </div>
        </section>
        <section className='tia-ai-section'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6'>
                <h1 className='tia-ai-head'>Crypto Solutions for Business</h1>
                <p className='tia-ai-para'>
                  The SoftNote is the first ever ‘transactionless’ product with instant payment zero-fee processing for an end-user. The SoftNote has ‘physical cash’ elements, for example, a Bitcoin SoftNote bill can be printed on paper, does not require a confirmation from the Bitcoin network, incurs no fees, and has no geographical boundaries.
                </p>
                <p className='tia-ai-para'>
                  Therefore, the SoftNote can be used person-to- person, sent over any messenger application as a picture file or sent by wallet to wallet. A SoftNote is secured by a passcode rendering it useless to an unauthorised possessor.
                </p>
                <p>Learn about SoftNote</p>
              </div>
              <div className='col-lg-6 d-flex align-items-center justify-content-center'>
                <img src={require('./images/Tia-ai.png')} className='img-fluid bnw' alt="" />
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
            <div class='item d-flex align-items-center'>
              <img src={require('./images/partners/1.png')} className='img-fluid' style={{ width: "180px" }} alt="" />
            </div>
            <div class='item d-flex align-items-center'>
              <img src={require('./images/partners/2.png')} className='img-fluid' style={{ width: "180px" }} alt="" />
            </div>
            <div class='item d-flex align-items-center'>
              <img src={require('./images/partners/3.png')} className='img-fluid' style={{ width: "180px" }} alt="" />
            </div>
            <div class='item d-flex align-items-center'>
              <img src={require('./images/partners/4.png')} className='img-fluid' style={{ width: "180px" }} alt="" />
            </div>
            <div class='item d-flex align-items-center'>
              <img src={require('./images/partners/5.png')} className='img-fluid' style={{ width: "180px" }} alt="" />
            </div>
            <div class='item d-flex align-items-center'>
              <img src={require('./images/partners/6.png')} className='img-fluid' style={{ width: "180px" }} alt="" />
            </div>
          </OwlCarousel>
        </section>
        <section>
          <div className='container mb-5'>
            <h1 className='partners-head' style={{ color: "#000" }}>Our Partners</h1>
          </div>
          <OwlCarousel className='owl-theme' loop items={6} nav={false} dots={false} responsive={responsive} autoplay={true} autoplayTimeout={5000}>
            <div class='item d-flex align-items-center'>
              <img src={require('./images/partners/1.png')} className='img-fluid' style={{ width: "180px" }} alt="" />
            </div>
            <div class='item d-flex align-items-center'>
              <img src={require('./images/partners/2.png')} className='img-fluid' style={{ width: "180px" }} alt="" />
            </div>
            <div class='item d-flex align-items-center'>
              <img src={require('./images/partners/3.png')} className='img-fluid' style={{ width: "180px" }} alt="" />
            </div>
            <div class='item d-flex align-items-center'>
              <img src={require('./images/partners/4.png')} className='img-fluid' style={{ width: "180px" }} alt="" />
            </div>
            <div class='item d-flex align-items-center'>
              <img src={require('./images/partners/5.png')} className='img-fluid' style={{ width: "180px" }} alt="" />
            </div>
            <div class='item d-flex align-items-center'>
              <img src={require('./images/partners/6.png')} className='img-fluid' style={{ width: "180px" }} alt="" />
            </div>
          </OwlCarousel>
        </section>
      </main>
    </>
  );
}

export default App;
