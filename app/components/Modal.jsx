import React from 'react'
import backButtonSvg from '../../public/svgs/buttons/go_back.svg'


const Modal = ({pageModel}) => {

  const {isModalDisplayed, onActionButtonClick} = pageModel

  return (
    <>
      {isModalDisplayed && (
        <>
        <div className='absolute top-0 bg-slate-400 w-full min-h-screen z-10 opacity-[0]'/>
        <div className='absolute top-0 flex justify-center items-center z-[12] bg-slate-400 w-full min-h-screen'>
          <div className="p-14 bg-white flex flex-col justify-start items-center gap-16 w-[579px] h-[357px] opacity-[1]">
              <div class="text-center flex flex-col gap-[24px]">
                  <span className="text-purple-900 text-3xl font-bold font-['Helvetica Now Text SA']">
                      You have selected buy now for this plan.
                  </span>
                  <span className="text-zinc-800 text-base font-bold font-['Helvetica Now Text SA']">
                      For the purposes of this test we do not have a next step.
                  </span>
              </div>
              <button onClick={onActionButtonClick}>
                <img src={backButtonSvg.src} alt='back button' />
              </button>
          </div>
        </div>
        </>
      )}
    </>

  )
}

export default Modal

