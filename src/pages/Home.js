import React from 'react'
import '../components/Style/Home.css'
import img from "../assets/impppppp11.png"
import Comp1 from '../components/comp1'
import Codeblock from '../components/core/Codeblock'
import About from "./About"
import InstructorSection from '../components/InstructorSection'


const Home = () => {
  return (
    <div className='w-full  h-screen  items-center justify-center '>
      <div className='background w-full h-[600px] flex items-center justify-center bg-yellow-800  '>
      <Codeblock 
      codeblock={`WELCOME T0 MP DESIGN AND DECORATION\n 10+ Years Of Experiences.`}
                codeColor={"text-richblue-300"}
               />
        
      </div>

      <div className='w-full items-center flex-col flex justify-center h-[200px] bg-yellow-200 mt-1'> 
        <p className='font-bold capitalize flex items-center justify-center text-[30px] font-serif'>STILL CONFUSED ABOUT STARTING YOUR DREAM HOME PROJECT ?</p>
        <p className='font-bold capitalize flex items-center justify-center text-[22px] '>Get Free Quote And Consultaion</p>
      
        <div>
        <button className='px-3 py-2 bg-blue-600 text-white  font-semibold mt-2' >
          Talk To Our Expert
        </button>
      </div>
      
      </div>


      <div className='mt-6 pt-5  items-center justify-center flex '>
        <img src={img} alt="" srcset="" className="flex justify-center items-center" />
      </div>

      <div className='w-full h-fit-content'>
        <Comp1/>
      </div>

      <About/>

      
    

<InstructorSection />



      
      
    </div>
  )
}

export default Home
