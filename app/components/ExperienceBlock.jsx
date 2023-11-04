import React from 'react'


const ExperiencesBlock = ({ pageModel }) => {
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
          {experiences?.map(({ label, id }) => (
            <>
            {selectedExperiences[id] ? (
              <>
                <button
                  key={id}
                  onClick={() => handleExperienceClick(id)}
                  className="w-[120px] h-[120px] px-[18px] py-11rounded-md rounded-md border-2 bg-purple-800 flex-col justify-center items-center gap-2.5 inline-flex"
                >
                  <span class="text-center text-white text-sm font-bold font-['Helvetica Now Text SA'] leading-none">
                    {label}
                </span>
              </button>

              </>
            ):(
              <>          
                <button
                  key={id}
                  onClick={() => handleExperienceClick(id)}
                  className="w-[120px] h-[120px] px-[18px] py-11 bg-stone-50 rounded-md border-2 border-gray-200 flex-col justify-center items-center gap-2.5 inline-flex"
                >
                  <span className="text-center text-slate-500 text-sm font-bold font-['Helvetica Now Text SA'] leading-none">
                    {label}
                  </span>
                </button>
              </>
            )}
            </>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperiencesBlock

