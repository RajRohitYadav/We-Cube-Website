import React from 'react';
import './App.css';
import webcube_logo from './wecube_logo.jpg';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      showMenu: false
    }
  }
  showMenu(state){
    this.setState({
      showMenu: state
    });
  }
  render(){
  return (
    <div>

      {/* Background Image */}
      {/* <div style={{
        backgroundImage: 'url(https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260)',position: 'fixed',
        width: '100vw',
        height: '100vh',
        top: '0',
        margin: 'auto',
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover'
      }}/> */}

      {/* Background Video */}
      <video autoplay muted loop style={{position: 'fixed',
        minWidth: '100%',
        minHeight: '100%',
        width:'auto',
        height: 'auto',
        top: '0',
        margin: 'auto'
      }}>
        <source src="https://drive.google.com/uc?export=download&id=15lftezf7arsPfN_8QlxCDrfgJuMUchrQ" type="video/mp4"/>
      </video>

      {/* Navbar */}
      <div id='header'>
        <img src={webcube_logo} height="60" width="150" style={{position: 'fixed',left:'10px',top:'10px'}}/>
        <div onClick={()=>{this.showMenu(true)}} style={{position: 'fixed',right:'10px',backgroundColor: 'transparent',cursor:'pointer',width:'50px',height:'50px'}}>
          <div className="menu icon" style={{position: 'fixed',right:'10px',top:'28px',color: 'white',cursor:'pointer'}}></div>
        </div>
      </div>

      {/* POPUP */}
      {this.state.showMenu&&
        <div className='popup'>
          <div className='popup_inner'>

            <button 
            style={{right:5,top:5,position:'absolute'}}
            onClick={()=>{this.showMenu(false)}}>
              X
            </button>

            <div className='popup_section_button'>
              <a href="#about" style={{color:'white',textDecoration:'none'}}
              onClick={()=>{this.showMenu(false)}}>
                About Us
              </a>
            </div>

            <div className='popup_section_button'>
              <a href="#services" style={{color:'white',textDecoration:'none'}}
              onClick={()=>{this.showMenu(false)}}>
                Our Service
              </a>
            </div>

            <div className='popup_section_button'>
              <a href="#contact" style={{color:'white',textDecoration:'none'}}
              onClick={()=>{this.showMenu(false)}}>
                Contact
              </a>
            </div>
          </div>
        </div>
      }

      {/* Page 1 */}
      <div id='about' className='page'>
        <div className='page-content-box'>
            
            <div className='big-line'></div>
            <div className='title'>About Us</div>
            <div className='data'>
              <br/>
              <p>
              Wecube is a one stop shop for any business development.
              Wecube is a very well equipped website which will please you with some unique features. It is also a
              community which serves its clients with the best sources available.
              </p>
            </div>

            <br/><br/><br/>

            <div className='small-line'></div>
            <div className='title'>Vision</div>
            <div className='data'>
              <br/>
              <p>
              Our main aim is to build a tremendous network which holds almost every brand and to become a massive source for the corporate world.
              </p>
            </div>
            
            <br/><br/><br/>

            <div className='d-none d-sm-block'>
              <div className='small-line'></div>
              <div className='title'>Mission</div>
              <div className='data'>
                <br/>
                <p>
                  To help the start-up companies, maintain a good position in the market also to be a well known and reputable company.
                </p>
              </div>
            </div>
        </div>
      </div>

      {/* Page 2 */}
      <div id='services' className='page'>
        <div className='page-content-box'>
          <div className='big-line'></div>
          <div className='title'>Our Service</div>

          {/* Page 2 Section 1 */}
          <div className='services-data row'>

            <div className='col-md-3'>
              <h6>BRANDING</h6>
              <p>Logo design, Brand manual, Brand Guidelines</p>
            </div>

            <div className='services-data-title col-md-3'>
              <h6>PRINT AND MEDIA</h6>
              <p>brochure, poster, Flyers, Hoardings </p>
            </div>

            <div className='col-md-3'>
              <h6>DIGITAL MARKETING</h6>
              <p>SEO & SMM, Email / SMS</p>
            </div>

            <div className='col-md-3'>
              <h6>MOTION</h6>
              <p>Infographics, Motion Graphics, GIF’s, Advertisement shoots, Photo shoots, Product Shoots</p>
            </div>
            
          </div>

          {/* Page 2 Section 2 */}
          <div className='services-data row d-none d-md-flex' style={{marginTop:'20vim'}}>
            <div className='col-md-3'>
              <h6>UI/UX & DEVELOPMENT</h6>
              <p>Web design, e-commerce website, App Design, E-Mailer, Development (Wordpress, Html ,css, java script, PHP, jQuery, MySQL )
              </p>
            </div>
            
            <div className='col-md-3'>
              <h6>MAINTENANCE</h6>
              <p>Website Creating & Hosting, Web Security, Data Storage & Management, Data Backup & Malware Removal, Ssl Crft</p>
            </div>

          </div>

        </div>
      </div>
      
      {/* Page 3 */}
      <div id='contact' className='page'>
        <div className='page-content-box'>
            <div className='big-line'></div>
            <div className='title'>Contact</div>
            <div className='data'>
              <br/>
                Address<br/>
                <div style={{color:'gray',marginTop:'10px'}}>
                #30, Poojappa Layout, G.N.R Gardens,
                <br/>
                 Chellikere, Kalyan Nagar post,<br/> Bangalore - 560023
                </div>
                
                <br/><br/>
                Mail/Tel<br/>
                <div style={{color:'gray',marginTop:'10px'}}>
                  wecube.info@gmail.com<br/>
                  (+91)7406610475 | (+91)9591552012
                </div>
                
            </div>
            <div className='contact-map d-none d-md-flex'>
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.0254844299398!2d77.6414411148227!3d13.034049090814936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAyJzAyLjYiTiA3N8KwMzgnMzcuMSJF!5e0!3m2!1sen!2sin!4v1564230412648!5m2!1sen!2sin" 
            width="400" 
            height="300" 
            frameborder="0"></iframe>
            </div>
        </div>
      </div>

      {/* FOOTER */}
      <div id="footer">
          <a target="_blank" href="https://www.facebook.com/wecube.net.37" className="fa fa-facebook"></a>
          <a target="_blank" href="https://www.linkedin.com/company/we-cube-network" className="fa fa-linkedin"></a>
          <a  href="" className="fa fa-pinterest"></a>
          <a target="_blank" href="https://www.instagram.com/wecubenetwork/" className="fa fa-instagram"></a>
      </div>
    </div>
  );}
}

export default App;
