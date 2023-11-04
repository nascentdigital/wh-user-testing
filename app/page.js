'use client'
import { usePageModel } from './hooks/usePageModelHook'
import ExperiencesBlock from './components/ExperienceBlock'
import classNames from 'classnames'
import Modal from './components/Modal'
import buyNowButtonSvg from '../public/svgs/buttons/buy_now.svg'
import contactUsSVG from '../public/svgs/contact.svg'
import { content } from './Content/pageContent'
import { PACKAGE_ID } from './Mock/data'

export default function Home() {
  const pageModel = usePageModel()

  const {onActionButtonClick} = pageModel

  return (
    <main className="relative flex flex-col justify-center items-center min-h-screen min-w-screen bg-white px-[136px] py-[50px] gap-[48px]">
      <Modal pageModel={pageModel}/>
      <ExperiencesBlock pageModel={pageModel}/>
      {renderPackageBlock(pageModel)}

      <button onClick={onActionButtonClick}>
        <img 
          className='w-[568px] h-[100px]'
          src={contactUsSVG.src}
        />
      </button>
      <span className="text-black text-base text-center font-normal font-['Helvetica Now Text SA']">
        {content.disclaimer}      
      </span>
    </main>
  )
}


const renderPackageTabsButton = (id, label, isSelected, handlePackageTabClick) => {
  return (
    <div className={classNames(
      'h-[60px] z-[2]',
      isSelected && 'border-b-4 border-purple-900',
      )}>
        <button 
          key={id} 
          className={classNames(
            "flex justify-center items-center w-[129px] h-[45px] text-center font-['Helvetica Now Text SA'] text-sm font-bold", 
            isSelected ? "bg-gray-100 rounded-full text-purple-900" : "text-zinc-500 "
            )}
          onClick={()=>handlePackageTabClick(id)} 
        >
          {label}
        </button>
    </div>

  )
}

const renderPlans = (pageModel) => {
  const {
    selectedPackageTab,
    onActionButtonClick,
    recommendedPlanId,
    getPackage,
  } = pageModel

  const plans = getPackage(selectedPackageTab)?.plans
  return (
    <div className='flex gap-[10px] justify-between items-center pt-[32px]'>
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
        <div
          className={classNames(
          'flex justify-between items-center',
            packageId === PACKAGE_ID.STARTER_PLAN && 'h-[460px]',
            packageId=== PACKAGE_ID.NINETY_DAY_PLAN && 'h-[481px]',
            packageId === PACKAGE_ID.YEARLY_PLAN && 'h-[542px]',
          )}
          >
            <img src={recommendedPlanId === id ? detail.recommended.src : detail.default.src} alt={label}/>
          </div>
          <button onClick={onActionButtonClick}>
            <img src={buyNowButtonSvg.src} alt={`buy-${label}`} />
          </button>
        </div>
      )}
    </div>
  )
}

function renderPackageBlock (pageModel) {
  const {  
    packages, 
    handlePackageTabClick, 
    selectedPackageTab,
  } = pageModel
  return (
    <section className='w-full'>
      <div className='flex flex-col gap-[42px]'>
        <h1 className="text-center text-zinc-800 text-2xl font-medium font-['Helvetica Now Text SA'] leading-none">
          {content.packagesHeading}
        </h1>
        <div className='w-full'>
          <div className='relative flex justify-center'>
            {packages.map(({id, label})=>renderPackageTabsButton(id,label,selectedPackageTab===id , handlePackageTabClick)) }
            <hr className='absolute bottom-[2px] w-5/6 bg-zinc-200 px-[120px]'/>
          </div>
          <div className='flex gap-[24px] justify-center items-center'>
            {renderPlans(pageModel)}
          </div>
        </div>
      </div>
    </section>
  )
}