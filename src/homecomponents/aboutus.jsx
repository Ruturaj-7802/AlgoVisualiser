import React from 'react'
import GP from '/Users/ghanashyam/react_project/my-react/src/team/gp.jpg'
import RP from '/Users/ghanashyam/react_project/my-react/src/team/IMG_20220501_180611.jpg'
import RK from '/Users/ghanashyam/react_project/my-react/src/team/IMG_20220501_182615.jpg'
import AN from '/Users/ghanashyam/react_project/my-react/src/team/WhatsApp Image 2022-05-01 at 5.47.23 PM.jpeg'
import SP from '/Users/ghanashyam/react_project/my-react/src/team/WhatsApp Image 2022-05-01 at 8.21.59 PM.jpeg'
import GP1 from '/Users/ghanashyam/react_project/my-react/src/team/WhatsApp Image 2022-05-02 at 1.38.56 AM.jpeg'
// import Insta from '/Users/ghanashyam/react_project/my-react/src/socialmedia/insta.png'
// import FB from '/Users/ghanashyam/react_project/my-react/src/socialmedia/facebook.png'
import Lin from '/Users/ghanashyam/react_project/my-react/src/socialmedia/linkedin.png'
import ABelement1 from '/Users/ghanashyam/react_project/my-react/src/images/3d-stripy-red-bulb.png'
import ABelement2 from '/Users/ghanashyam/react_project/my-react/src/images/3d-plastilina-side-view-of-blue-check-mark.png'
import './style.css'
function aboutus() {
  return (
    <div>
     <img className='abe1' src={ABelement1} alt="" />
     <img className='abe2' src={ABelement2} alt="" />
     <div className="abbody">
     <div className="aboutus">MEET OUR TEAM......!</div>
            <div className="abcontainer">
                
                <div className="abcard">
                    <div className="content">
                    
                        <img className='image rounded-circle bg-warning' src={AN} alt="" />
                        <h3>Abhishek <br />Nalawade</h3>
                        <hr />
                        <p>2nd Year computer Science student at PICT</p>
                        <div className="social">
                            <a href="" target="_blank" ><img className='slogo' src={Lin} alt="" /></a>
                           
                        </div>
                    </div>
                </div>
                <div className="abcard">
                    <div className="content">
                       
                        <img className='image rounded-circle bg-warning' src={RP} alt="" />
                        <h3>Ruturaj <br />Patil</h3><hr />
                        <p>2nd Year computer Science student at PICT</p>
                        <div className="social">
                            <a href="https://www.linkedin.com/in/ruturaj-patil-53b2021b4/" target="_blank" ><img className='slogo' src={Lin} alt="" /></a>
                           
                        </div>
                    </div>
                </div>
                <div className="abcard">
                    <div className="content">
      
                        <img className='image rounded-circle' src={GP} alt="" />
                        <h3>Ghanashyam <br />Patil</h3><hr />
                        <p>2nd Year computer Science student at PICT</p>
                        <div className="social">
                            <a href="https://www.linkedin.com/in/ghanashyam-patil-9b7280230" target="_blank" ><img className='slogo' src={Lin} alt="" /></a>
                           
                        </div>
                    </div>
                </div>
              
                <div className="abcard">
                    <div className="content">
                 
                        <img className='image rounded-circle bg-warning' src={SP} alt="" />
                        <h3>Sanket <br />Pole</h3><hr />
                        <p>2nd Year computer Science student at PICT</p>
                        <div className="social">
                            <a href="" target="_blank" ><img className='slogo' src={Lin} alt="" /></a>
                         
                        </div>
                    </div>
                </div>
                <div className="abcard">
                    <div className="content">
                   
                        <img className='image rounded-circle bg-warning' src={RK} alt="" />
                        <h3>Rishikesh <br />Khiste</h3><hr />
                        <p>2nd Year computer Science student at PICT</p>
                        <div className="social">
                            <a href="" target="_blank" ><img className='slogo' src={Lin} alt="" /></a>
                        
                        </div>
                    </div>
                </div>
                
            </div>
            </div> 
        <div className="footer">
           <p>   This website was made by PICT 2nd Year Students .....! ❤️ 🚀</p>
  
        </div>
    </div>
  )
}

export default aboutus