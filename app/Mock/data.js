// Start Plan 
import starter_1D from '../../public/svgs/plans/starterPacks/default/StarterPackOneSVG.svg'
import starter_2D from '../../public/svgs/plans/starterPacks/default/StarterPackTwoSVG.svg'
import starter_3D from '../../public/svgs/plans/starterPacks/default/StarterPackThreeSVG.svg'
import starter_4D from '../../public/svgs/plans/starterPacks/default/StarterPackFourSVG.svg'

import starter_1_Rec from '../../public/svgs/plans/starterPacks/recommended/Starter-packs1.svg'
import starter_2_Rec from '../../public/svgs/plans/starterPacks/recommended/Starter-packs2.svg'
import starter_3_Rec from '../../public/svgs/plans/starterPacks/recommended/Starter-packs3.svg'
import starter_4_Rec from '../../public/svgs/plans/starterPacks/recommended/Starter-packs4.svg'

// 90 Days Plan
import ninety_1 from '../../public/svgs/plans/ninety_day/default/90-day-pass-1.svg'
import ninety_2 from '../../public/svgs/plans/ninety_day/default/90-day-pass-2.svg'

import ninety_1_rec from '../../public/svgs/plans/ninety_day/recommended/90-day-pass-1.svg'
import ninety_2_rec from '../../public/svgs/plans/ninety_day/recommended/90-day-pass-2.svg'

// Yearly Plan
import yr_1 from '../../public/svgs/plans/yearly/default/yearly-plans-1.svg'
import yr_2 from '../../public/svgs/plans/yearly/default/yearly-plans-2.svg'
import yr_1_rec from '../../public/svgs/plans/yearly/recommended/Yearly-plans-rec1.svg'
import yr_2_rec from '../../public/svgs/plans/yearly/recommended/Yearly-plans-rec2.svg'

const getUniqueID = (id) =>  id + Math.random().toString(16).slice(2)

export const EXPERIENCE_ID = {
  EXPLORING: getUniqueID(),
  SPECIFIC: getUniqueID(),
  EASY: getUniqueID(),
  ONGOING: getUniqueID(),
  Medical_PRESCRIPTION: getUniqueID(),
}

export const PACKAGE_ID = {
  STARTER_PLAN: 'starter_plan',
  NINETY_DAY_PLAN: 'ninety_day_plan',
  YEARLY_PLAN: 'yearly_plan'
}

export const PLAN_ID = {
  STARTER_PLAN :{
    DIET_WELLNESS : getUniqueID(PACKAGE_ID.STARTER_PLAN),
    BEHANIOUR_HEALTHCARE: getUniqueID(PACKAGE_ID.STARTER_PLAN),
    WELLNESS_PUNCH_PASS: getUniqueID(PACKAGE_ID.STARTER_PLAN),
    HEALTH_CARE_PUNCH_PASS: getUniqueID(PACKAGE_ID.STARTER_PLAN),
  },
  NINETY_DAY_PLAN:{
    WELCOME_HOME_PUPPY_KITTEN: getUniqueID(PACKAGE_ID.NINETY_DAY_PLAN),
    CARING_SENIOR_DOG: getUniqueID(PACKAGE_ID.NINETY_DAY_PLAN)
  },
  YEARLY_PLAN:{
    BASIC: getUniqueID(PACKAGE_ID.YEARLY_PLAN),
    PREMIUM: getUniqueID(PACKAGE_ID.YEARLY_PLAN)
  }
}


const Data = {
  experiences: [
    {
      id: EXPERIENCE_ID.EXPLORING,
      label: 'Exploring options',

    },
    {
      id: EXPERIENCE_ID.SPECIFIC,
      label: 'Specific care',

    },
    {
      id: EXPERIENCE_ID.EASY,
      label: 'Easy around the clock access',

    },
    {
      id: EXPERIENCE_ID.ONGOING,
      label:'Ongoing Coverage',

    },
    {
      id: EXPERIENCE_ID.Medical_PRESCRIPTION,
      label: 'Medical coverage & prescriptions',

    },
  ],

  packages :[
    {
      id: PACKAGE_ID.STARTER_PLAN,
      label: 'Starter Plan',
      plans:[
        {
          id: PLAN_ID.STARTER_PLAN.DIET_WELLNESS,
          packageId: PACKAGE_ID.STARTER_PLAN,
          label: 'Diet Wellness* Package',
          detail: {
            default: starter_1D,
            recommended: starter_1_Rec,
          },
        },
        {
          id: PLAN_ID.STARTER_PLAN.BEHANIOUR_HEALTHCARE,
          packageId: PACKAGE_ID.STARTER_PLAN,
          label: 'Behaviour Healthcare Package',
          detail: {
            default: starter_2D,
            recommended: starter_2_Rec,
          },
        },
        {
          id: PLAN_ID.STARTER_PLAN.WELLNESS_PUNCH_PASS,
          packageId: PACKAGE_ID.STARTER_PLAN,
          label: 'Wellness* Punch pass',
          detail: {
            default: starter_3D,
            recommended: starter_3_Rec,
          },
        },
        {
          id: PLAN_ID.STARTER_PLAN.HEALTH_CARE_PUNCH_PASS,
          packageId: PACKAGE_ID.STARTER_PLAN,
          label: 'Healthcare Punch Pass',
          detail: {
            default: starter_4D,
            recommended: starter_4_Rec,
          },
        },
      ]
    },
    {
      id: PACKAGE_ID.NINETY_DAY_PLAN,
      label: '90 Days Plan',
      plans:[
        {
          id: PLAN_ID.NINETY_DAY_PLAN.WELCOME_HOME_PUPPY_KITTEN,
          packageId: PACKAGE_ID.NINETY_DAY_PLAN,
          label: 'Welcome home a puppy or kitten',
          detail: {
            default: ninety_1,
            recommended: ninety_1_rec,
          },
        },    
        {
          id: PLAN_ID.NINETY_DAY_PLAN.CARING_SENIOR_DOG,
          packageId: PACKAGE_ID.NINETY_DAY_PLAN,
          label: 'Caring for your senior dog at home',
          detail: {
            default: ninety_2,
            recommended: ninety_2_rec,
          },
        },
      ]
    },
    {
      id: PACKAGE_ID.YEARLY_PLAN,
      label: 'Yearly Plan',
      plans: [
        {
          id: PLAN_ID.YEARLY_PLAN.BASIC,
          packageId: PACKAGE_ID.YEARLY_PLAN,
          label: 'Basic Subscription',
          detail: {
            default: yr_1,
            recommended: yr_1_rec,
          },
        },
        {
          id: PLAN_ID.YEARLY_PLAN.PREMIUM,
          packageId: PACKAGE_ID.YEARLY_PLAN,
          label: 'Premium Subscription',          
          detail: {
            default: yr_2,
            recommended: yr_2_rec,
          },
        },
      ]
    }
  ],
}

export default Data