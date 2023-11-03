'use client'
import Image from 'next/image'
import { PACKAGE_ID, PLAN_DEFAULT_IMAGE_SIZE, STARTER_PLAN_DEFAULT_IMAGE_SIZE, YEARLY_PLAN_DEFAULT_IMAGE_SIZE, YEARLY_PLAN_DEFAULT_SIZE } from './Mock/mockData'
import { usePageModel } from './hooks/usePageModelHook'

export default function Home() {
  const pageModel = usePageModel()

  return (
    <main className="flex flex-col min-h-screen bg-white mx-[136px] my-[102px] gap-[48px]">
      {renderExperiencesBlock(pageModel)}
      {renderPackageBlock(pageModel)}
    </main>
  )
}

function renderBuyNowButton (onClick) {
  return (
    <button>
      <svg width="175" height="44" viewBox="0 0 175 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="175" height="44" rx="22" fill="#7C53A5"/>
        <path d="M65.8473 21.582C67.2473 21.946 67.7793 22.954 67.7793 24.074C67.7793 25.656 66.6873 27 64.5173 27H59.8553V17.032H64.4893C66.2953 17.032 67.4713 17.942 67.4713 19.468C67.4713 20.504 66.9253 21.274 65.8473 21.582ZM64.1253 18.712H61.9273V20.882H64.0413C65.0493 20.882 65.4413 20.392 65.4413 19.776C65.4413 19.146 65.0493 18.712 64.1253 18.712ZM61.9273 25.25H64.1533C65.2593 25.25 65.7493 24.676 65.7493 23.878C65.7493 23.038 65.2033 22.562 64.2513 22.562H61.9273V25.25ZM73.6979 23.64V19.776H75.6719V27H73.7399L73.7119 26.02C73.2359 26.804 72.5499 27.182 71.6259 27.182C70.1279 27.182 69.2599 26.188 69.2599 24.62V19.776H71.2339V24.172C71.2339 24.928 71.5839 25.404 72.2839 25.404C73.1239 25.404 73.6979 24.718 73.6979 23.64ZM80.9097 23.346L81.9877 19.776H84.0877L81.2037 28.288C80.7837 29.548 80.1677 29.856 79.1457 29.856H77.4937V28.176H78.4457C79.0337 28.176 79.3137 27.994 79.4677 27.56L79.5377 27.364L76.7237 19.776H78.8937L80.0557 23.332C80.1957 23.752 80.3357 24.27 80.4897 24.802C80.6297 24.27 80.7837 23.766 80.9097 23.346ZM92.679 19.594C94.177 19.594 95.045 20.588 95.045 22.156V27H93.071V22.604C93.071 21.848 92.721 21.372 92.021 21.372C91.181 21.372 90.607 22.058 90.607 23.136V27H88.633V19.776H90.565L90.593 20.756C91.069 19.972 91.755 19.594 92.679 19.594ZM100.031 27.238C97.8607 27.238 96.3347 25.6 96.3347 23.416C96.3347 21.232 97.8607 19.594 100.031 19.594C102.201 19.594 103.727 21.232 103.727 23.416C103.727 25.6 102.201 27.238 100.031 27.238ZM100.031 25.698C101.137 25.698 101.823 24.802 101.823 23.416C101.823 22.03 101.137 21.134 100.031 21.134C98.9247 21.134 98.2387 22.03 98.2387 23.416C98.2387 24.802 98.9247 25.698 100.031 25.698ZM111.97 22.982L112.768 19.776H114.84L112.698 27H110.822L109.786 22.982L109.618 22.03L109.436 22.982L108.4 27H106.524L104.382 19.776H106.454L107.252 22.982L107.588 24.802L107.924 22.982L108.736 19.776H110.486L111.298 22.954L111.634 24.802L111.97 22.982Z" fill="white"/>
      </svg>
    </button>
  )
}

function renderExperiencesBlock (pageModel)  {

  const {
      experiences,
      handleExperienceClick,
      selectedExperiences,
  } = pageModel

  return (
    <section>
      <div className='flex flex-col gap-[48px]'>
        <h1 className="text-center text-zinc-800 text-2xl font-medium font-['Helvetica Now Text SA'] leading-none">
          What are you looking for from a virtual vet experience?
        </h1> 
        <div className='flex justify-center gap-[42px]'>            
          {experiences?.map(({label, id }) => (
            <button 
              key={id}
              onClick={()=>handleExperienceClick(id)}
              className="w-[120px] h-[120px] px-[18px] py-11 bg-stone-50 rounded-md border-2 border-gray-200 flex-col justify-center items-center gap-2.5 inline-flex"
            >
              <div className="text-center text-slate-500 text-sm font-bold font-['Helvetica Now Text SA'] leading-none">
                {selectedExperiences[id]?`selected ${label}`: label}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
    )
}

const renderStarterPackPlans =(pageModel) => {
  const {
    recommendedPlanId,
    getPackage,
  }=pageModel

  const plans = getPackage(PACKAGE_ID.STARTER_PLAN).plans
  return (
    <>
    <div className='flex gap-[32px] justify-center items-center py-[32px]'>
      {plans.map(({id,label, detail})=>
        <div className='flex h-[670px] flex-col gap-[24px] justify-between items-center'>
          <div className='flex justify-center items-center h-[550px]'>
            <Image
              alt={label}
              src={recommendedPlanId === id? detail.recommended.src: detail.default.src}
              width={STARTER_PLAN_DEFAULT_IMAGE_SIZE.width}
              height={STARTER_PLAN_DEFAULT_IMAGE_SIZE.height}
            />
          </div>
          {renderBuyNowButton(()=>{console.log('buy now clicked')},id)}
        </div>
      )}
    </div>
    </>
  )
}

const renderPlans = (plans, recommendedPlanId) => {
  return (
    <div className='flex gap-[32px] justify-center items-center py-[32px]'>
      {plans.map(({id,label, detail})=>
        <div className='flex flex-col h-[610px] gap-[24px] justify-between items-center'>
          <div className='flex justify-center items-center h-[610px]'>
            <Image
              alt={label}
              src={recommendedPlanId === id? detail.recommended.src: detail.default.src}
              width={PLAN_DEFAULT_IMAGE_SIZE.width}
              height={PLAN_DEFAULT_IMAGE_SIZE.height}
            />
          </div>
          {renderBuyNowButton(()=>{console.log('buy now clicked')},id)}

        </div>
      )}
    </div>
  )
}

const renderNinetyDaysPlans =(pageModel) => {
  const {
    recommendedPlanId,
    getPackage,
  }=pageModel

  const plans = getPackage(PACKAGE_ID.NINETY_DAY_PLAN).plans
  return (
    <>
      {renderPlans(plans, recommendedPlanId)}
    </>
  )
}

const renderYearlyPlans =(pageModel) => {
  const {
    recommendedPlanId,
    getPackage,
  } = pageModel

  const plans = getPackage(PACKAGE_ID.YEARLY_PLAN).plans

  return (
    <>
      {renderPlans(plans, recommendedPlanId)}
    </>
  )
}

function renderPackageBlock (pageModel) {
  const {  
    packages, 
    handlePackageTabClick, 
    selectedPackageTab,
  } = pageModel
  return (
    <section>
      <div className='flex flex-col gap-[42px]'>
        <h1 className="text-center text-zinc-800 text-2xl font-medium font-['Helvetica Now Text SA'] leading-none">
          Browse our packages
        </h1>
        <div>
          <div className='flex justify-center'>
            {packages.map(({id, label})=>
                <button 
                key={id} 
                className="text-center text-zinc-500 text-sm font-bold font-['Helvetica Now Text SA'] leading-none h-[48px] w-[134px]"
                 onClick={()=>handlePackageTabClick(id)} 
                >
                  {selectedPackageTab === id ? `selected ${label}` : label}
                </button>
            ) }
          </div>
          <hr className='w-5/6 bg-zinc-200 px-[120px] z-[-1]'/>
          <div className='flex gap-[24px] justify-center items-center'>
            {selectedPackageTab === PACKAGE_ID.STARTER_PLAN && renderStarterPackPlans(pageModel)}
            {selectedPackageTab === PACKAGE_ID.NINETY_DAY_PLAN && renderNinetyDaysPlans(pageModel)}
            {selectedPackageTab === PACKAGE_ID.YEARLY_PLAN && renderYearlyPlans(pageModel)}
          </div>
        </div>
      </div>
    </section>
    )
}