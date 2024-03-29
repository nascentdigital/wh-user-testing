import React from 'react'
import backButtonSvg from '../../public/svgs/buttons/go_back.svg'
import { content } from '../Content/pageContent'
import classNames from 'classnames'


const Modal = ({pageModel}) => {

  const {isModalDisplayed, onActionButtonClick} = pageModel

  return (
    <div 
      className={classNames(
        isModalDisplayed 
        ? 'fixed inset-0 z-50 flex items-center justify-center bg-[#00000030] h-screen w-screen' 
        : 'hidden'
      )}
    >
      <div className="px-[64px] py-[60px] bg-white flex flex-col justify-center items-center gap-16">
          <div className="text-center flex flex-col gap-[24px] w-[451px]">
              <span className="text-purple-900 text-3xl font-bold">
                  {content.modal.heading}
              </span>
              <span className="text-zinc-800 text-base font-bold">
                  {content.modal.caption}
              </span>
          </div>
          
          <button onClick={onActionButtonClick}>
            <img src={backButtonSvg.src} alt='back button' />
          </button>
      </div>
    </div>
  )
}

export default Modal

