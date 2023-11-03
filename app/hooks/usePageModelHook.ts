import { useCallback, useEffect, useState } from "react"
import { Data, PACKAGE_ID } from "../Mock/mockData"

export const usePageModel = () => {
  const {
    packages,
    experiences,
  } = Data

  const getPackage = (packageId) => {
    return packages.find(packageType => packageType.id === packageId)
  }

  const starterPackage = getPackage(PACKAGE_ID.STARTER_PLAN)
  const ninetyDayPackage = getPackage(PACKAGE_ID.NINETY_DAY_PLAN)
  const yearlyPackage = getPackage(PACKAGE_ID.YEARLY_PLAN)

  const [isModalDisplayed, SetIsModalDisplayed] = useState(false)
  const [recommendedPlanId, setRecommendedPlanId] = useState(undefined)
  const [selectedPackageTab, setSelectedPackageTab] = useState(undefined)
  const [selectedExperiences, setExperiences] = useState(
    () => {
      const tempFormattedExp = {}
      experiences.forEach((experience) => tempFormattedExp[experience.id] = false)
      return tempFormattedExp
    }
  )

  const updateRecommendedPlan = () => {
    let tempRecommendedPlanId = starterPackage.plans[0].id
    let tempSelectedPackageId = starterPackage.id

    const isExperienceSelected = (experienceId) => selectedExperiences[experienceId]

    if (isExperienceSelected("ex-4")) {
      tempRecommendedPlanId = starterPackage.plans[1].id
    }

    if (isExperienceSelected("ex-5")) {
      tempRecommendedPlanId = starterPackage.plans[2].id
    }

    if (isExperienceSelected("ex-1")) {
      tempRecommendedPlanId = starterPackage.plans[3].id

      if (isExperienceSelected("ex-4")) {
        tempRecommendedPlanId = starterPackage.plans[1].id
      }
      if (isExperienceSelected("ex-5")) {
        tempRecommendedPlanId = starterPackage.plans[3].id
      }
    }

    if (isExperienceSelected("ex-2")) {
      tempRecommendedPlanId = ninetyDayPackage.plans[0].id
      tempSelectedPackageId = ninetyDayPackage.id

      if (isExperienceSelected("ex-5")) {
        tempRecommendedPlanId = ninetyDayPackage.plans[1].id
      }
    }

    if (isExperienceSelected("ex-3")) {
      tempRecommendedPlanId = yearlyPackage.plans[0].id
      tempSelectedPackageId = yearlyPackage.id

      if (isExperienceSelected("ex-5")) {
        tempRecommendedPlanId = 'p8'
      }
    }

    setRecommendedPlanId(tempRecommendedPlanId)
    setSelectedPackageTab(tempSelectedPackageId)
  }

  const handlePackageTabClick = (packageId) => {
    setSelectedPackageTab(packageId)
  }

  const handleExperienceClick = useCallback((experienceId: string) => {
    setExperiences((prevState) => {
      return {
        ...prevState,
        [experienceId]: !prevState[experienceId]
      }
    })
  }, [setExperiences])

  useEffect(() => {
    updateRecommendedPlan()
  }, [selectedExperiences])

  const onBuyNowClick = () => {
    SetIsModalDisplayed(true)
  }

  const onGoBackButtonClick = () => {
    SetIsModalDisplayed(false)

  }

  return {
    isModalDisplayed,
    packages,
    handlePackageTabClick,
    getPackage,
    experiences,
    recommendedPlanId,
    selectedPackageTab,
    selectedExperiences,
    handleExperienceClick,
    onBuyNowClick,
    onGoBackButtonClick,
  }
}