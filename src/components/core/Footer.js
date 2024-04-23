import React from 'react'

const Footer = () => {
  return (
    <div className='w-full  '>
      <div className='bg-[#e5e7eb] flex justify-around pt-8 pb-[100px] ' >
            <div className='flex gap-[80px]'>
                <div className='flex flex-col'>
                    <p className='font-bold text-[22px] font-mono '>Mp Design & Decorations</p>
                    
                </div>
                <div className='flex flex-col'>
                    <p className='font-bold text-[20px] font-mono '>Company</p>
                    <p>Careers</p>
                    <p>Blog</p>
                    <p>Contacts</p>
                </div>
            </div>
            <div className='flex gap-[80px] '> 
                <div className='flex flex-col items-center'>
                    <p className='font-bold text-[21px] font-mono '>Working Hours</p>
                    <p>Monday - Friday </p>
                       <p> 8:00Am-5:00PM</p>
                    <p>Sunday :Closed</p>
                </div>
                <div className=' flex flex-col'>
                    <p className='font-bold text-[22px] font-mono '>Subscription</p>
                    <p>Subscribe your Email address for Latest Updates</p>
                    <input type="email" name="eemail" id="email" placeholder='Email'
                    className='h-8 bg-white border-2 mt-2 placeholder:px-2 text-[18px]'/>
                    <button className='bg-yellow-700  text-white font-bold mt-1 px-10 py-1'>
                        Subscribe
                    </button>
                </div>
            </div>
      </div>
      {/* <div>hello</div> */}
    </div>
  )
}

export default Footer
