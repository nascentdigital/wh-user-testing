// Start Plan Img

import behavior_health_img from '../../public/img/starter-packs/Behaviour_Healthcare_Package.png'
import behavior_health_rec_img from '../../public/img/starter-packs/Behaviour_Healthcare_Package:recommended.png'
import diet_wellness_img from '../../public/img/starter-packs/Diet_Wellness_Package.png'
import diet_wellness_rec_img from '../../public/img/starter-packs/Diet_Wellness_Package:recommended.png'
import health_punch_img from '../../public/img/starter-packs/Healthcare_Punch-pass.png'
import health_punch_rec_img from '../../public/img/starter-packs/Healthcare_Punch-pass:recommended.png'
import wellness_img from '../../public/img/starter-packs/Wellness_Punch-pass.png'
import wellness_rec_img from '../../public/img/starter-packs/Wellness_Punch-pass:recommended.png'

// 90 Days Plan Img
import ninety_care_img from '../../public/img/90-day-plans/Caring-for-your-senior-pet.png'
import ninety_care_rec_img from '../../public/img/90-day-plans/Caring-for-your-senior-pet-recommended.png'
import ninety_welcome_img from '../../public/img/90-day-plans/Welcome-home-puppy.png'
import ninety_welcome_rec_img from '../../public/img/90-day-plans/Welcome-home-puppy-recommended.png'

// Yearly Plan Img
import yr_Basic_Img from '../../public/img/yearly-plans/Basic_Subscription.png'
import yr_Basic_Rec_ImgImg from '../../public/img/yearly-plans/Basic_Subscription_recommended.png'
import yr_premium_Img from '../../public/img/yearly-plans/Premium_Subscription.png'
import yr_premium_Rec_Img from '../../public/img/yearly-plans/Premium_Subscription_recommended.png'



export const PACKAGE_ID = {
  STARTER_PLAN: 'starter_plan',
  NINETY_DAY_PLAN: 'ninety_day_plan',
  YEARLY_PLAN: 'yearly_plan'
}

export const PLAN_DEFAULT_IMAGE_SIZE = {
  height: 438,
  width: 490,
}

export const STARTER_PLAN_DEFAULT_IMAGE_SIZE = {
  height: 292,
  width: 490,
}

export const Data = {
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
      label:'Easy around the clock access',

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
            default: behavior_health_img,
            recommended: behavior_health_rec_img,
          },
        },
        {
          id: 'p2',
          packageId: PACKAGE_ID.STARTER_PLAN,
          label: 'plan 2',
          detail: {
            default: diet_wellness_img,
            recommended: diet_wellness_rec_img,
          },
        },
        {
          id: 'p3',
          packageId: PACKAGE_ID.STARTER_PLAN,
          label: 'plan 3',
          detail: {
            default: health_punch_img,
            recommended: health_punch_rec_img,
          },
        },
        {
          id: 'p4',
          packageId: PACKAGE_ID.STARTER_PLAN,
          label: 'plan 4',
          detail: {
            default: wellness_img,
            recommended: wellness_rec_img,
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
            default: ninety_care_img,
            recommended: ninety_care_rec_img,
          },
        },    
        {
          id: 'p7',
          packageId: PACKAGE_ID.NINETY_DAY_PLAN,
          label: 'plan 7',
          detail: {
            default: ninety_welcome_img,
            recommended: ninety_welcome_rec_img,
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
            default: yr_Basic_Img,
            recommended: yr_Basic_Rec_ImgImg,
          },
        },
        {
          id: 'p8',
          packageId: PACKAGE_ID.YEARLY_PLAN,
          label: 'Welcome Home a Puppy or a Kitten',          
          detail: {
            default: yr_premium_Img,
            recommended: yr_premium_Rec_Img,
          },
        },
      ]
    }
  ],
}