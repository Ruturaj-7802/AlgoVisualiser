import React from 'react'
import Search from "/Users/ghanashyam/react_project/my-react/src/icons/binaruysearch.png"
import Sort from '/Users/ghanashyam/react_project/my-react/src/icons/sorting.png'
import Convexhull from '/Users/ghanashyam/react_project/my-react/src/icons/convexhull.png'
import Queue from '/Users/ghanashyam/react_project/my-react/src/icons/queue.png'
import Prime from '/Users/ghanashyam/react_project/my-react/src/icons/prime_no.png'
import Sudoku from '/Users/ghanashyam/react_project/my-react/src/icons/sudoku.png'
import Pfinder from '/Users/ghanashyam/react_project/my-react/src/icons/pathfinder.png'
import Queen from '/Users/ghanashyam/react_project/my-react/src/icons/queen.png'
import {Link} from "react-router-dom";
function banner2() {
  return (
    <div>
     <div class=" text-black text-center justify-content-">
     <h1 className='algo'>ALGORITHMS</h1>
  
     <div className="cardcontainer">
     <Link className='link' to={"/sort"}>
                <div className="card2">
                    <div className="content">
                        <img className='image ' src={Sort} alt="" />
                        <h2>Sorting</h2>
                        {/* <p>SELECTION , BUBBLE , INSERION , QUICK</p> */}
                    </div>
                    </div>  
                    </Link>

                         <Link className='link' to={"/recursivesort"}>
                <div className="card2">
                    <div className="content">
                        <img className='image ' src={Sort} alt="" />
                        <h2>Sorting 2.0</h2>
                       <p>MERGE , HEAP </p>
                      
                    </div>
                    </div>  
                    </Link>
     <Link className='link' to={"/binarysearch"}>
                <div className="card2">
                    <div className="content">
                        <img className='image ' src={Search} alt="" />
                        <h2>Searching</h2>

                    </div>
                    </div>  
                    </Link>
     <Link className='link' to={"/prime"}>
                <div className="card2">
                    <div className="content">
                        <img className='image ' src={Prime} alt="" />
                        <h2>Prime</h2>
                       
                    </div>
                    </div>  
                    </Link>
    
    

     <Link className='link' to={"/sudoku"}>
                <div className="card2">
                    <div className="content">
                        <img className='image ' src={Sudoku} alt="" />
                        <h2>Sudoku</h2>
                       
                   
                    </div>
                    </div>  
                    </Link>
     <Link className='link' to={"/nqueen"}>
                <div className="card2">
                    <div className="content">
                        <img className='image ' src={Queen} alt="" />
                        <h2>N queen</h2>
                       
                       
                    </div>
                    </div>  
                    </Link>
     <Link className='link' to={"/pathfinder"}>
                <div className="card2">
                    <div className="content">
                        <img className='image ' src={Pfinder} alt="" />
                        <h2>Pathfinder</h2>
                    </div>
                    </div>  
                    </Link>
     <Link className='link' to={"/convexhull"}>
                <div className="card2">
                    <div className="content">
                        <img className='image ' src={Convexhull} alt="" />
                        <h2>Convex Hull</h2>
                    </div>
                    </div>  
                    </Link>

               
               
             
                


       

    </div>
    </div>
    </div>
   
 
  )
}

export default banner2