import React from 'react'
import { TypeAnimation } from 'react-type-animation'
const Codeblock = ({codeblock, backgroudGradient, codeColor}) => {
  return (
    <div>
      
      <div className=' h-fit  flex w-screen items-center justify-center   '> 
        {/*HW -> BG gradient*/}

        
    

        <div className={`flex  justify-center items-center font-bold font-mono ${codeColor}   relative `}>
            <div className={`${backgroudGradient}`}></div>
           <TypeAnimation
            sequence={[codeblock, 4000, ""]}
            repeat={Infinity}
            cursor={true}
           
            style = {
                {
                    whiteSpace: "pre-line",
                    display:"inline",
                    overflowX:"hidden",
                    fontSize:"40px",
                    display:"flex",
                    
                
                    
                }
            }
            omitDeletionAnimation={true}
           />
        </div>

     </div>



    </div>

    
  )
}

export default Codeblock
