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



export const PACKAGE_ID = {
  STARTER_PLAN: 'starter_plan',
  NINETY_DAY_PLAN: 'ninety_day_plan',
  YEARLY_PLAN: 'yearly_plan'
}

const Data = {
  experiences: [
    {
      id: 'ex-1',
      label: 'Exploring options',

    },
    {
      id: 'ex-2',
      label: 'Specific care',

    },
    {
      id: 'ex-3',
      label: 'Easy around the clock access',

    },
    {
      id: 'ex-4',
      label:'Ongoing Coverage',

    },
    {
      id: 'ex-5',
      label: 'Medical coverage & prescriptions',

    },
  ],

  packages :[
    {
      id: PACKAGE_ID.STARTER_PLAN,
      label: 'Starter Plan',
      plans:[
        {
          id: 'p1',
          packageId: PACKAGE_ID.STARTER_PLAN,
          label: 'plan 1',
          detail: {
            default: starter_1D,
            recommended: starter_1_Rec,
          },
        },
        {
          id: 'p2',
          packageId: PACKAGE_ID.STARTER_PLAN,
          label: 'plan 2',
          detail: {
            default: starter_2D,
            recommended: starter_2_Rec,
          },
        },
        {
          id: 'p3',
          packageId: PACKAGE_ID.STARTER_PLAN,
          label: 'plan 3',
          detail: {
            default: starter_3D,
            recommended: starter_3_Rec,
          },
        },
        {
          id: 'p4',
          packageId: PACKAGE_ID.STARTER_PLAN,
          label: 'plan 4',
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
          id: 'p6',
          packageId: PACKAGE_ID.NINETY_DAY_PLAN,
          label: 'plan 6',
          detail: {
            default: ninety_1,
            recommended: ninety_1_rec,
          },
        },    
        {
          id: 'p7',
          packageId: PACKAGE_ID.NINETY_DAY_PLAN,
          label: 'plan 7',
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
          id: 'p7',
          packageId: PACKAGE_ID.YEARLY_PLAN,
          label: 'Basic Subscription',
          detail: {
            default: yr_1,
            recommended: yr_1_rec,
          },
        },
        {
          id: 'p8',
          packageId: PACKAGE_ID.YEARLY_PLAN,
          label: 'Welcome Home a Puppy or a Kitten',          
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