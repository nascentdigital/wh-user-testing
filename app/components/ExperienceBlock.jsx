import classNames from 'classnames'
import React from 'react'
import { content } from '../Content/pageContent'


const ExperiencesBlock = ({ pageModel }) => {
  const {
    experiences,
    handleExperienceClick,
    selectedExperiences,
  } = pageModel

  return (
    <section className='pt-[52px]'>
      <div className='flex flex-col gap-[48px]'>
        <h1 className="text-center text-zinc-800 text-2xl font-medium font-['Helvetica Now Text SA']">
          {content.experiencesHeading}
        </h1>
        <div className='flex justify-center gap-[42px]'>
          {experiences?.map(({ label, id }) => (
                <button
                  key={id}
                  onClick={() => handleExperienceClick(id)}
                  className={classNames(
                    "w-[120px] h-[120px] px-[18px] py-11 rounded-md border-2 flex-col justify-center items-center gap-2.5",
                    selectedExperiences[id]? "bg-[#7C53A5] border-[#73479D]":"border-[#E7DEF0]",
                  )}
                >
                  <span 
                    className={classNames(
                      "text-center text-sm font-bold font-['Helvetica Now Text SA']",
                      selectedExperiences[id]? "text-white": "text-[#7C53A5]",
                      )}
                  >
                    {label}
                </span>
              </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperiencesBlock

