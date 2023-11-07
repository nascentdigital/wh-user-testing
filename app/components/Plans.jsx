import classNames from "classnames"
import React from "react"
import { PACKAGE_ID } from "../Mock/data"

const Plans = ({pageModel}) => {
  const {
    selectedPackageTab,
    onActionButtonClick,
    recommendedPlanId,
    getPackage,
  } = pageModel

  const plans = getPackage(selectedPackageTab)?.plans  
  return (
    <div 
      className={classNames(
        'flex justify-center items-center pt-[8px] min-h-[460px]',
        selectedPackageTab === PACKAGE_ID.STARTER_PLAN ? 'gap-[8px]' : 'gap-[14px]',
        )}
      key={plans.id}
    >
      {plans?.map(({id,label, detail})=>
        <div 
          key={id}
          className={classNames(
            'flex flex-col justify-center items-center gap-[8px]',
          )}
        >

          {/* Plan Details */}
            <img 
              src={ recommendedPlanId === id ? detail.recommended.src : detail.default.src }
              alt={label}
            />

          {/* Buy Now Button */}
          <button onClick={onActionButtonClick} className="h-[44px] w-[175px] rounded-[48px] bg-[#7C53A5] text-white text-[14px]">
            {selectedPackageTab === PACKAGE_ID.STARTER_PLAN ? 'Buy Now' : 'Subscribe Now'}
          </button>
        </div>
      )}
    </div>
  )
}

export default Plans