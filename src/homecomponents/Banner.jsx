import React from 'react'
import image from '/Users/ghanashyam/react_project/my-react/src/casual-life-3d-reading.png'
function Banner() {
  return (
    <div> 
   {/* 
   -------------------------------------------------    main poster ---------------------------------------------------------------
   */}
<section id="hero" class="hero d-flex align-items-center ">
<div class="container">
  <div class="row">
    <div class="col-md-6 d-flex flex-column justify-content-center">
      <h1 className="heading" data-aos="fade-up">Visualizing Algos that clears your understanding</h1>
      <h2 data-aos="fade-up" data-aos-delay="400">We are helping students to get clear idea how algorithm works 🚀</h2>
      <div data-aos="fade-up" data-aos-delay="600">
        <div class="text-center text-lg-start">
          <a href="#features" class=" getstarted btn1  scrollto btn btn-tertiary">
            <span className=''>Get Started</span>
            <i class="bi bi-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
    <div class="col-md-6 hero-img" data-aos="zoom-out" data-aos-delay="200">
      <img  src={image} class="img-fluid" alt=""/>
    </div>
  </div>
</div>

</section>


  {/* 
  *******---------------------------------- header ---------------------------------2************ 
  */}
    
    <div className="header navbar navbar-default navbar-fixed-top fixed-top ">
    <div className="container-fluid d-flex align-items-center justify-content-between "> 
    
    <a href="index.html" className="logo d-flex align-items-center ">
    
    <img className='brand ' src={image} alt="" /> 
    
    <span>Algorithm Visualizer</span> 
    
    </a>    
    
    <nav id="navbar1" className="navbar "> 
    
    <ul className='list-group list-group-horizontal navbar '> 
    <li className='nav-item'> <a className="nav-link   active " href="#header"> Home </a> </li> 
    <li className='nav-item'> <a className="nav-link  scrollto" href="#values"> Our Services </a> </li> 
    <li className='nav-item'> <a className="nav-link  scrollto" href="#about"> About </a> </li> 
    <li className='nav-item'> <a className="nav-link  scrollto" href="#contact"> Contact </a> </li> 
    <li className='nav-item'> <a className="getstarted  scrollto btn btn-tertiary" target="__blank" href="./contact-us.html" > Contact us </a> </li> 
    </ul> 
      <i className="bi bi-list mobile-nav-toggle"></i> 
    </nav> 
    </div>

    </div>
   {/* ******* header end ************ */}

  </div>
  )
}

export default Banner