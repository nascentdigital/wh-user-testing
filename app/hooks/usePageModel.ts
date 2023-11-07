import { useCallback, useEffect, useState } from "react"
import Data, { EXPERIENCE_ID, PACKAGE_ID, PLAN_ID } from "../Mock/data"

export const usePageModel = () => {
  const {
    packages,
    experiences,
  } = Data

  const getPackage = (packageId) => {
    return packages.find(packageType => packageType.id === packageId)
  }

  const [isModalDisplayed, SetIsModalDisplayed] = useState(false)
  const [recommendedPlanId, setRecommendedPlanId] = useState(PLAN_ID.STARTER_PLAN.PLAN_1)
  const [selectedPackageTab, setSelectedPackageTab] = useState(PACKAGE_ID.STARTER_PLAN)
  const [selectedExperiences, setExperiences] = useState(
    () => {
      const tempFormattedExp = {}
      experiences.forEach((experience) => tempFormattedExp[experience.id] = false)
      return tempFormattedExp
    }
  )

  const updateRecommendedPlan = () => {
    let tempRecommendedPlanId = PLAN_ID.STARTER_PLAN.PLAN_1
    let tempSelectedPackageId = PACKAGE_ID.STARTER_PLAN

    const isExperienceSelected = (experienceId) => selectedExperiences[experienceId]

    if (isExperienceSelected(EXPERIENCE_ID.EXPERIENCE_ID_4)) {
      tempRecommendedPlanId = PLAN_ID.STARTER_PLAN.PLAN_3
    }

    if (isExperienceSelected(EXPERIENCE_ID.EXPERIENCE_ID_5)) {
      tempRecommendedPlanId = PLAN_ID.STARTER_PLAN.PLAN_4
    }

    if (isExperienceSelected(EXPERIENCE_ID.EXPERIENCE_ID_1)) {
      tempRecommendedPlanId = PLAN_ID.STARTER_PLAN.PLAN_2

      if (isExperienceSelected(EXPERIENCE_ID.EXPERIENCE_ID_4)) {
        tempRecommendedPlanId = PLAN_ID.STARTER_PLAN.PLAN_3
      }
      if (isExperienceSelected(EXPERIENCE_ID.EXPERIENCE_ID_5)) {
        tempRecommendedPlanId = PLAN_ID.STARTER_PLAN.PLAN_4
      }
    }

    if (isExperienceSelected(EXPERIENCE_ID.EXPERIENCE_ID_2)) {
      tempRecommendedPlanId = PLAN_ID.NINETY_DAY_PLAN.PLAN_1
      tempSelectedPackageId = PACKAGE_ID.NINETY_DAY_PLAN

      if (isExperienceSelected(EXPERIENCE_ID.EXPERIENCE_ID_5)) {
        tempRecommendedPlanId = PLAN_ID.NINETY_DAY_PLAN.PLAN_2
      }
    }

    if (isExperienceSelected(EXPERIENCE_ID.EXPERIENCE_ID_3)) {
      tempRecommendedPlanId = PLAN_ID.YEARLY_PLAN.PLAN_1
      tempSelectedPackageId = PACKAGE_ID.YEARLY_PLAN

      if (isExperienceSelected(EXPERIENCE_ID.EXPERIENCE_ID_5)) {
        tempRecommendedPlanId = PLAN_ID.YEARLY_PLAN.PLAN_2
      }
    }

    setRecommendedPlanId(tempRecommendedPlanId)
    setSelectedPackageTab(tempSelectedPackageId)
  }

  const handlePackageTabClick = (packageId) => {
    setSelectedPackageTab(packageId)
  }

  const handleExperienceClick = useCallback((experienceId: string) => {
    setExperiences((prevState) => (
      {
        ...prevState,
      [experienceId]: !selectedExperiences[experienceId],
      })
    )
  }, [setExperiences, selectedExperiences, updateRecommendedPlan])

  const onActionButtonClick = useCallback(() => {
    SetIsModalDisplayed((prevStat) => !prevStat)
  }, [SetIsModalDisplayed])

  useEffect(() => updateRecommendedPlan(), [selectedExperiences])


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
    onActionButtonClick,
  }
}

