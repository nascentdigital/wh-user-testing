// Start Plan 
import starter_1D from '../../public/svgs/plans/starterPacks/Starter_pack_1.svg'
import starter_2D from '../../public/svgs/plans/starterPacks/Starter_pack_2.svg'
import starter_3D from '../../public/svgs/plans/starterPacks/Starter_pack_3.svg'
import starter_4D from '../../public/svgs/plans/starterPacks/Starter_pack_4.svg'

import starter_1_Rec from '../../public/svgs/plans/starterPacks/Starter_pack_1_recommended.svg'
import starter_2_Rec from '../../public/svgs/plans/starterPacks/Starter_pack_2_recommended.svg'
import starter_3_Rec from '../../public/svgs/plans/starterPacks/Starter_pack_3_recommended.svg'
import starter_4_Rec from '../../public/svgs/plans/starterPacks/Starter_pack_4_recommended.svg'

// 90 Days Plan
import ninety_1 from '../../public/svgs/plans/ninety_day/90-day-pass-1.svg'
import ninety_2 from '../../public/svgs/plans/ninety_day/90-day-pass-2.svg'

import ninety_1_rec from '../../public/svgs/plans/ninety_day/90-day-pass 1-recommended.svg'
import ninety_2_rec from '../../public/svgs/plans/ninety_day/90-day-pass-2-recommended.svg'

// Yearly Plan
import yr_1 from '../../public/svgs/plans/yearly/yearly_plan_1.svg'
import yr_2 from '../../public/svgs/plans/yearly/yearly_plan_2.svg'
import yr_1_rec from '../../public/svgs/plans/yearly/yearly_plan_1_recommended.svg'
import yr_2_rec from '../../public/svgs/plans/yearly/yearly_plan_2_recommended.svg'


export const EXPERIENCE_ID = {
  EXPERIENCE_ID_1: 'experience_1',
  EXPERIENCE_ID_2: 'experience_2',
  EXPERIENCE_ID_3: 'experience_3',
  EXPERIENCE_ID_4: 'experience_4',
  EXPERIENCE_ID_5: 'experience_5',
}

export const PACKAGE_ID = {
  STARTER_PLAN: 'STARTER_PLAN',
  NINETY_DAY_PLAN: 'NINETY_DAY_PLAN',
  YEARLY_PLAN: 'EARLY_PLAN'
}

export const PLAN_ID = {
  STARTER_PLAN :{
    PLAN_1 : 'STARTER_PLAN_1',
    PLAN_2: 'STARTER_PLAN_2',
    PLAN_3: 'STARTER_PLAN_3',
    PLAN_4: 'STARTER_PLAN_4',
  },
  NINETY_DAY_PLAN:{
    PLAN_1: 'NINETY_DAY_PLAN_1',
    PLAN_2: 'NINETY_DAY_PLAN_2',
  },
  YEARLY_PLAN:{
    PLAN_1: 'YEARLY_PLAN_1',
    PLAN_2: 'YEARLY_PLAN_2',
  }
}


const Data = {
  experiences: [
    {
      id: EXPERIENCE_ID.EXPERIENCE_ID_1,
      label: 'Exploring options',

    },
    {
      id: EXPERIENCE_ID.EXPERIENCE_ID_2,
      label: 'Specific care',

    },
    {
      id: EXPERIENCE_ID.EXPERIENCE_ID_3,
      label: 'Easy around the clock access',

    },
    {
      id: EXPERIENCE_ID.EXPERIENCE_ID_4,
      label:'Ongoing Coverage',

    },
    {
      id: EXPERIENCE_ID.EXPERIENCE_ID_5,
      label: 'Medical coverage & prescriptions',

    },
  ],

  packages :[
    {
      id: PACKAGE_ID.STARTER_PLAN,
      sortOrder: 1,
      label: 'Value Packs',
      plans:[
        {
          id: PLAN_ID.STARTER_PLAN.PLAN_1,
          packageId: PACKAGE_ID.STARTER_PLAN,
          label: 'Diet Wellness* Package',
          detail: {
            default: starter_1D,
            recommended: starter_1_Rec,
          },
        },
        {
          id: PLAN_ID.STARTER_PLAN.PLAN_2,
          packageId: PACKAGE_ID.STARTER_PLAN,
          label: 'Behaviour Healthcare Package',
          detail: {
            default: starter_2D,
            recommended: starter_2_Rec,
          },
        },
        {
          id: PLAN_ID.STARTER_PLAN.PLAN_3,
          packageId: PACKAGE_ID.STARTER_PLAN,
          label: 'Wellness* Punch pass',
          detail: {
            default: starter_3D,
            recommended: starter_3_Rec,
          },
        },
        {
          id: PLAN_ID.STARTER_PLAN.PLAN_4,
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
      sortOrder: 2,
      label: '90 Days Plans',
      plans:[
        {
          id: PLAN_ID.NINETY_DAY_PLAN.PLAN_1,
          packageId: PACKAGE_ID.NINETY_DAY_PLAN,
          label: 'Welcome home a puppy or kitten',
          detail: {
            default: ninety_1,
            recommended: ninety_1_rec,
          },
        },    
        {
          id: PLAN_ID.NINETY_DAY_PLAN.PLAN_2,
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
      sortOrder: 3,
      label: 'Annual Plans',
      plans: [
        {
          id: PLAN_ID.YEARLY_PLAN.PLAN_1,
          packageId: PACKAGE_ID.YEARLY_PLAN,
          label: 'Basic Subscription',
          detail: {
            default: yr_1,
            recommended: yr_1_rec,
          },
        },
        {
          id: PLAN_ID.YEARLY_PLAN.PLAN_2,
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