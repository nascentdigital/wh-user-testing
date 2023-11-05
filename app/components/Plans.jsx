import classNames from "classnames"
import React from "react"
import { PACKAGE_ID } from "../Mock/data"
import buyNowButtonSvg from "../../public/svgs/buttons/buy_now.svg"

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
      className='flex gap-[20px] justify-center items-center pt-[32px]' 
      key={plans.id}
    >
      {plans?.map(({id,label, detail, packageId})=>
        <div 
          key={id}
          className={classNames(
            'flex flex-col justify-between items-center',
              packageId === PACKAGE_ID.STARTER_PLAN && 'h-[510px]',
              packageId=== PACKAGE_ID.NINETY_DAY_PLAN && 'h-[533px]',
              packageId === PACKAGE_ID.YEARLY_PLAN && 'h-[600px]',
          )}
        >
          {/* Plan Details */}
          <div
            className={classNames(
            'flex justify-between items-center',
              packageId === PACKAGE_ID.STARTER_PLAN && 'h-[460px]',
              packageId=== PACKAGE_ID.NINETY_DAY_PLAN && 'h-[481px]',
              packageId === PACKAGE_ID.YEARLY_PLAN && 'h-[542px]',
            )}
          >
            <img 
              src={ recommendedPlanId === id ? detail.recommended.src : detail.default.src }
              alt={label}
            />
          </div>

          {/* Buy Now Button */}
          <button onClick={onActionButtonClick}>
            <img src={buyNowButtonSvg.src} alt={`buy-${label}`} />
          </button>
        </div>
      )}
    </div>
  )
}

export default Plans