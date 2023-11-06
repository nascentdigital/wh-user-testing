import { useCallback, useState } from "react"
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
  const [recommendedPlanId, setRecommendedPlanId] = useState(PLAN_ID.STARTER_PLAN.DIET_WELLNESS)
  const [selectedPackageTab, setSelectedPackageTab] = useState(PACKAGE_ID.STARTER_PLAN)
  const [selectedExperiences, setExperiences] = useState(
    () => {
      const tempFormattedExp = {}
      experiences.forEach((experience) => tempFormattedExp[experience.id] = false)
      return tempFormattedExp
    }
  )

  const updateRecommendedPlan = (updatedExperienceSate) => {
    let tempRecommendedPlanId = PLAN_ID.STARTER_PLAN.DIET_WELLNESS
    let tempSelectedPackageId = PACKAGE_ID.STARTER_PLAN

    const isExperienceSelected = (experienceId) => updatedExperienceSate[experienceId]

    if (isExperienceSelected(EXPERIENCE_ID.ONGOING)) {
      tempRecommendedPlanId = PLAN_ID.STARTER_PLAN.WELLNESS_PUNCH_PASS
    }

    if (isExperienceSelected(EXPERIENCE_ID.Medical_PRESCRIPTION)) {
      tempRecommendedPlanId = PLAN_ID.STARTER_PLAN.HEALTH_CARE_PUNCH_PASS
    }

    if (isExperienceSelected(EXPERIENCE_ID.EXPLORING)) {
      tempRecommendedPlanId = PLAN_ID.STARTER_PLAN.BEHANIOUR_HEALTHCARE

      if (isExperienceSelected(EXPERIENCE_ID.ONGOING)) {
        tempRecommendedPlanId = PLAN_ID.STARTER_PLAN.WELLNESS_PUNCH_PASS
      }
      if (isExperienceSelected(EXPERIENCE_ID.Medical_PRESCRIPTION)) {
        tempRecommendedPlanId = PLAN_ID.STARTER_PLAN.HEALTH_CARE_PUNCH_PASS
      }
    }

    if (isExperienceSelected(EXPERIENCE_ID.SPECIFIC)) {
      tempRecommendedPlanId = PLAN_ID.NINETY_DAY_PLAN.WELCOME_HOME_PUPPY_KITTEN
      tempSelectedPackageId = PACKAGE_ID.NINETY_DAY_PLAN

      if (isExperienceSelected(EXPERIENCE_ID.Medical_PRESCRIPTION)) {
        tempRecommendedPlanId = PLAN_ID.NINETY_DAY_PLAN.CARING_SENIOR_DOG
      }
    }

    if (isExperienceSelected(EXPERIENCE_ID.EASY)) {
      tempRecommendedPlanId = PLAN_ID.YEARLY_PLAN.BASIC
      tempSelectedPackageId = PACKAGE_ID.YEARLY_PLAN

      if (isExperienceSelected(EXPERIENCE_ID.Medical_PRESCRIPTION)) {
        tempRecommendedPlanId = PLAN_ID.YEARLY_PLAN.PREMIUM
      }
    }

    setRecommendedPlanId(tempRecommendedPlanId)
    setSelectedPackageTab(tempSelectedPackageId)
  }

  const handlePackageTabClick = (packageId) => {
    setSelectedPackageTab(packageId)
  }

  const handleExperienceClick = useCallback((experienceId: string) => {
    const updatedExperienceSate = {
      ...selectedExperiences,
      [experienceId]: !selectedExperiences[experienceId]
    }
    setExperiences(updatedExperienceSate)
    updateRecommendedPlan(updatedExperienceSate)
  }, [setExperiences, selectedExperiences, updateRecommendedPlan])

  const onActionButtonClick = useCallback(() => {
    SetIsModalDisplayed((prevStat) => !prevStat)
  }, [SetIsModalDisplayed])


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

