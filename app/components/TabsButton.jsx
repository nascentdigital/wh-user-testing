import React from "react"
import classNames from "classnames"

const TabsButton = ({id, label, isSelected, handlePackageTabClick}) => {
  return (
    <div 
      key={id} 
      className={classNames(
      'h-[60px] z-[2]',
      isSelected && 'border-b-4 border-purple-900',
      )}
    >
      <button 
        className={classNames(
          "flex justify-center items-center w-[129px] h-[45px] text-center font-bold", 
          isSelected ? "bg-gray-100 rounded-full text-purple-900" : "text-zinc-500 "
          )}
        onClick={()=>handlePackageTabClick(id)} 
      >
        {label}
      </button>
    </div>

  )
}

export default TabsButton