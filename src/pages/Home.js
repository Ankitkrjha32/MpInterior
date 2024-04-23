import React from 'react'
import '../components/Style/Home.css'
import img from "../assets/impppppp11.png"
import Comp1 from '../components/comp1'
import Codeblock from '../components/core/Codeblock'
import About from "./About"
import InstructorSection from '../components/InstructorSection'
import Footer from '../components/core/Footer'


const Home = () => {
  return (
    <div className='w-full  h-screen  items-center justify-center '>
      <div className='background w-full min-h-[600px] flex items-center justify-center bg-yellow-800  '>
      <Codeblock 
      codeblock={`WELCOME T0 MP DESIGN AND DECORATION`}
                codeColor={"text-wht-700"}
               />


               
        
      </div>

      <div className='w-full items-center flex-col flex justify-center h-[200px] bg-yellow-200 mt-1'> 
        <p className='font-bold capitalize flex items-center justify-center text-[30px] font-serif'>STILL CONFUSED ABOUT STARTING YOUR DREAM HOME PROJECT ?</p>
        <p className='font-bold capitalize flex items-center justify-center text-[22px] '>Get Free Quote And Consultation</p>
      
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
            <div className='w-full h-fit flex flex-col bg-[#2596be]  justify-center items-center py-4 mt-2' >
              <p className='text-[40px] font-[560] font-mono '>Your Dream Home Is Only 4 Steps away</p>
              <p className='font-semibold text-[18px] font-mono'> Can't get simpler than this </p>
            </div>
      </div>

      <About/>

      
    
      <Footer/>




      
      
    </div>
  )
}

export default Home
