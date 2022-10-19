import React from 'react'
import './que.css'

function qmain() {

    let front=-1;
    let back=-1;
    let flag=0;
    let i=0;

    function push_fun()
    {
        if(front==-1)
        { back++; front++; }
        else
        back++;
        if(back>=9)
        {
            alert("u cant push");
            return ;
        }
       
        let num=document.getElementById("inpu").value;
    
         let cl2=document.getElementsByClassName("parts2");
         cl2[i].style.border="3px solid green";
            cl2[back].textContent=num;
         let cl1=document.getElementsByClassName("parts1");
         if(back-1>=0 &&back-front!=1)
            cl1[back-1].textContent="";  
          cl1[back].textContent="rare";
          if(back==0)
          cl1[front].textContent="front=rear";
         let  info=document.getElementById("info");
        info.textContent=`${num} is inserted in queue`;
    }
    
    function pop_fun()
    {
       let  cl2=document.getElementsByClassName("parts2");
        let cl1=document.getElementsByClassName("parts1");
        cl2[i].style.border="3px solid green";
       let  info=document.getElementById("info");
        if(front>=back)
        { 
            cl1[front].textContent="";
            cl2[front].textContent="";
            info.textContent="queue is empty u cant pop";
            front=-1;back=-1; return ;
        }

         
         info.textContent=`${cl2[front].textContent} is deleted from queue`;
             cl2[front].textContent="";
         
            cl1[front].textContent="";
            if(front<back)
           cl1[front+1].textContent="front";

         info=document.getElementById("info");
        
      front++;
   }

function search_fun()
  {
        i=0;flag=0;
        let numf=prompt("enter element to search");
        let cl2=document.getElementsByClassName("parts2");
        for(i=front;i<=back;i++)
        {
            if(cl2[i].textContent==numf)
            {
                cl2[i].style.border="8px solid red";
                flag=1;
                break;
            }
        }
        if(flag==0)
    alert("no ele");
    }

    function sort_fun()
    {
        let ar=new Array();
        let cl2=document.getElementsByClassName("parts2");
        for(let j=front;j<=back;j++)
        {
            ar.push(cl2[j].textContent);
        }
        ar.sort();
        let idx=0;
        for(let j=front;j<=back;j++)
        {
            cl2[j].textContent=ar[idx];
            console.log(cl2[j].textContent);
            idx++;
        }
    }


  return (
    <div>
       
        <div className="btn5">
        <input className='quebtn' id="inpu" type="number" onfocus="this.value=''" />
       
        <button  className='quebtn'id="delete" onclick="pop_fun()">pop</button>
        <button className='quebtn' id="search" onclick="search_fun()">search</button>
        <button className='quebtn' id="sort" onclick="sort_fun()">sort</button>
    </div>
    <div class="cont">
        <div class="imple">
            <div className="box">
                <div className="box1">
                    <div className="parts1"></div>
                    <div className="parts1"></div>
                    <div className="parts1"></div>
                    <div className="parts1"></div>
                    <div className="parts1"></div>
                    <div className="parts1"></div>
                    <div className="parts1"></div>
                    <div className="parts1"></div>
                    <div className="parts1"></div> 
                </div>
                <div className="box2">
                    <div className="parts2"></div>
                    <div className="parts2"></div>
                    <div className="parts2"></div>
                    <div className="parts2"></div>
                    <div className="parts2"></div>
                    <div className="parts2"></div>
                    <div className="parts2"></div>
                    <div className="parts2"></div>
                    <div className="parts2"></div>
                </div>
            </div>
       
        </div>
  
    </div>
    </div>

  
       
  )
}

export default qmain