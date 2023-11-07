import React from "react"
import contactUsSVG from '../../public/svgs/Contact-us.svg'


const ContactUs = ({onActionButtonClick}) => {
  return(
    <section className="w-full flex justify-center items-center mt-[64px]">
      <button onClick={onActionButtonClick}  className='w-[8/12]'>
        <img 
          src={contactUsSVG.src}
        />
      </button>
    </section>
  )
  }

export default ContactUs