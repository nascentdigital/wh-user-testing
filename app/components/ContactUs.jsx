import React from "react"
import contactUsSVG from '../../public/svgs/contact.svg'


const ContactUs = ({onActionButtonClick}) => {
  return(
    <section>
      <button onClick={onActionButtonClick}>
        <img 
          className='w-[568px] h-[100px]'
          src={contactUsSVG.src}
        />
      </button>
    </section>
  )
  }

export default ContactUs