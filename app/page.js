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
    <main className="relative min-h-screen min-w-screen bg-white px-[136px]">
      <Modal pageModel={pageModel}/>

      <ExperiencesBlock pageModel={pageModel}/>

      <PlanMenu pageModel={pageModel}/>

      <ContactUs onActionButtonClick={onActionButtonClick}/>

      <Disclaimer/>
    </main>
  )
}