import React from "react"
import classNames from "classnames"

const TabsButton = ({id, label, isSelected, handlePackageTabClick}) => {
  return (
    <div 
      key={id} 
      className={classNames(
      'relative h-[48px] z-[2] py-[8px]',
      )}
    >
      <button 
        className={classNames(
          "flex justify-center items-center w-[129px] h-full text-center font-bold", 
          isSelected ? "bg-gray-100 rounded-full text-purple-900" : "text-zinc-500 "
          )}
        onClick={()=>handlePackageTabClick(id)} 
      >
        {label}
      </button>
      <div  className={classNames('w-full absolute h-[4px] bottom-0 z-[2]', isSelected &&'bg-purple-900' )}/>
    </div>

  )
}

export default TabsButton