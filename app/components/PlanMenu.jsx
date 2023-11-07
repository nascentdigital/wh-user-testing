import React from "react"
import TabsButton from "./TabsButton"
import Plans from "./Plans"
import { content } from "../Content/pageContent"

const PlanMenu = ({pageModel}) => {
  const {  
    packages, 
    handlePackageTabClick, 
    selectedPackageTab,
  } = pageModel
  
  return (
    <section className='w-full mt-[48px]'>
      <div className='flex flex-col '>
        <h1 className="text-center text-zinc-800 text-[20px] font-medium leading-none">
          {content.packagesHeading}
        </h1>

        {/* Menu Tabs */}
          <div className='relative flex justify-center mt-[24px]'>
            {packages.map(({id, label})=>
              <TabsButton  
                handlePackageTabClick={handlePackageTabClick}
                id={id}
                isSelected={selectedPackageTab===id }
                label={label}
                key={id}
              />
            )}
            <hr className='absolute bottom-[2px] w-[929px] bg-zinc-200 px-[120px]'/>
          </div>
          
          {/* Plans */}
            <Plans pageModel={pageModel}/>
      </div>
    </section>
  )
}

export default PlanMenu