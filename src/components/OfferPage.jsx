import React from 'react'
import BenefitCard from './BenefitCard'
function OfferPage() {
    return (
        <div className='flex flex-col justify-center '>
            <h1 className='text-3xl  px-4 pt-16 pb-6 font-bold self-center text-center'>
                Here are some of the benefits
                of your offer
            </h1>

            <h4 className='text-[1.2em] px-7 text-center md:w-[30em] self-center'>
                Explain what makes your product or service great. Talk about features in a way that highlights the real value people get out of them.
            </h4>

            <div className='lg:flex lg:flex-wrap md:grid sm:grid lg:justify-center' >
                <BenefitCard title="Benefit 1" icon="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/3a18a275-freshgoods-benefit1-icon_1000000000000000000028.png" text="For example, restaurants and bakeries could outline the health benefits of their all-natural ingredients." />
                <BenefitCard title="Benefit 2" icon="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/b41bc87d-freshgoods-benefit2-icon_1000000000000000000028.png" text="Florists and other small retailers might use this space to describe how their products make delightful, one-of-a-kind gifts." />
                <BenefitCard title="Benefit 3" icon="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/6622ad60-freshgoods-benefit3-icon_1000000000000000000028.png" text="You could also add buttons to this section and share links to other products or available delivery methods." />


            </div>
        </div>
    )
}

export default OfferPage
