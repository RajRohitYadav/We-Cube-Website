import React from 'react';
import './App.css';
import webcube_logo from './wecube_logo.jpg';
import Popup from "reactjs-popup";

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
      {/* Navbar */}
      <div id='header'>
        <img src={webcube_logo} height="60" width="150" style={{position: 'fixed',left:'10px',top:'10px'}}/>
        {/* <img src={webcube_logo} height="60" width="150" style={{position: 'fixed',right:'10px',padding:'10px'}}/> */}
        <div onClick={()=>{this.showMenu(true)}} style={{position: 'fixed',right:'10px',backgroundColor: 'black',cursor:'pointer',width:'50px',height:'50px'}}>
          <div className="menu icon" style={{position: 'fixed',right:'10px',top:'28px',color: 'white',cursor:'pointer'}}></div>
        </div>
      </div>

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
              <a href="#contact" style={{color:'white',textDecoration:'none'}}
              onClick={()=>{this.showMenu(false)}}>
                Contact
              </a>
            </div>
          </div>
        </div>
      }

      {/* Page 1 */}
      <div id='about' style={{height:'100vh',backgroundColor:'black',display:'block'}}>
        <div style={{position:'absolute',marginTop:'calc(50px + 20vmin)',width:'90%',padding:'5px'}}>
            <div style={{borderTop: '1px solid white',width:'15%', display: 'inline-block',height:'15px'}}></div>
            <div style={{display: 'inline-block',fontSize: 'calc(28px + 2vmin)',fontWeight: '800',color:'white',marginLeft:'30px'}}>About Us</div>
            <div style={{color:'white',width:'60%',marginLeft:'calc(15% + 30px)',marginTop:'10px',fontSize:'calc(12px + 1vmin)'}}>
              <br/>
              We Cube is created for an Amazing service; we believe that multitalented people put together to work together can give the best services to our clients. Our work speaks louder than the words. We assure to make your vision a reality.
            </div>
        </div>
      </div>
      
      {/* Page 2 */}
      <div id='contact' style={{height:'100vh',backgroundColor:'black',display:'block'}}>
        <div style={{position:'absolute',marginTop:'calc(50px + 20vmin)',width:'90%',padding:'5px'}}>
            <div style={{borderTop: '1px solid white',width:'15%', display: 'inline-block',height:'10px'}}></div>
            <div style={{display: 'inline-block',fontSize: 'calc(28px + 2vmin)',fontWeight: '900',color:'white',marginLeft:'30px'}}>Contact</div>
            <div style={{color:'white',width:'60%',marginLeft:'calc(15% + 30px)',marginTop:'10px',fontSize:'calc(12px + 1vmin)'}}>
              <br/>
                Address<br/>
                <div style={{color:'gray',marginTop:'10px'}}>
                  #74/2A, Flat No.109, NR Residency, K.R.<br/> Garden, 1st Cross, 8th Block, Koramangala,<br/> Bangalore-560095
                </div>
                
                <br/><br/>
                Mail/Tel<br/>
                <div style={{color:'gray',marginTop:'10px'}}>
                  wecube.info@gmail.com<br/>
                  (+91)7406610475 | (+91)9591552012
                </div>
            </div>
        </div>
      </div>
      {/* <div style={{height:'100vh',backgroundColor:'green',display:'block'}}>
      <div style={{width: '15%',borderTop: '1px solid white',position: 'absolute',left: 10,top:'125%'}}></div>
        <h1 style={{ marginLeft: '18%',position: 'absolute',color: 'white',width:'60%',fontSize: 'calc(20px + 2vmin)',fontWeight: '800',top:'118%'}}> */}
      {/* <div style={{height:'100vh',backgroundColor:'#363435',display:'block'}}>
        <span className="line"></span>
        <p className='heading'> Contact Us</p>
        <div style={{marginLeft: '18%',position: 'absolute',color: 'white',width:'50%',top:'130%'}}>
                Address<br/>
                #74/2A, Flat No.109, NR Residency, K.R.<br/> Garden, 1st Cross, 8th Block, Koramangala,<br/> Bangalore-560095
                <br/><br/>
                Mail/Tel<br/>
                We cube.info@gmail.com<br/>
                (+91)7406610475 | (+91)9591552012
        </div>
      </div> */}

      {/* Page 3 */}
      {/* <div style={{height:'100vh',backgroundColor:'black'}}>

      </div> */}

      <div id="footer">
          <a href="#" className="fa fa-facebook"></a>
          <a href="#" className="fa fa-twitter"></a>
          <a href="#" className="fa fa-dribbble"></a>
          <a href="#" className="fa fa-instagram"></a>
      </div>
    </div>
  );}
}

export default App;
