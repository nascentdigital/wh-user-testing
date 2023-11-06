'use client'
import { usePageModel } from './hooks/usePageModel'
import ExperiencesBlock from './components/ExperienceBlock'
import Modal from './components/Modal'
import ContactUs from './components/ContactUs'
import PlanMenu from './components/PlanMenu'
import Disclaimer from './components/Disclaimer'

export default function Home() {
  
  const pageModel = usePageModel()
  const { onActionButtonClick } = pageModel

  return (
    <main className="relative flex flex-col justify-center items-center min-h-screen min-w-screen bg-white px-[136px] py-[50px] gap-[48px]">
      <Modal pageModel={pageModel}/>

      <ExperiencesBlock pageModel={pageModel}/>

      <PlanMenu pageModel={pageModel}/>

      <ContactUs onActionButtonClick={onActionButtonClick}/>

      <Disclaimer/>
    </main>
  )
}