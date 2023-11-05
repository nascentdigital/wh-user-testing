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
    <section className='w-full'>
      <div className='flex flex-col gap-[42px]'>
        <h1 className="text-center text-zinc-800 text-[20px] font-medium leading-none">
          {content.packagesHeading}
        </h1>

        {/* Menu Tabs */}
        <div className='w-full'>
          <div className='relative flex justify-center'>
            {packages.map(({id, label})=>
              <TabsButton  
                handlePackageTabClick={handlePackageTabClick}
                id={id}
                isSelected={selectedPackageTab===id }
                label={label}
                key={id}
              />
            )}

            <hr className='absolute bottom-[2px] w-5/6 bg-zinc-200 px-[120px]'/>
          </div>
          
          {/* Plans */}
            <Plans pageModel={pageModel}/>
        </div>
      </div>
    </section>
  )
}

export default PlanMenu