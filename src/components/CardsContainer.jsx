import React from 'react'
import FeatureCard from './FeatureCard'
function CardsContainer() {
  return (
    <div className='lg:flex flex-wrap justify-center gap-3 grid items-center mt-16 bg=[#f5f5f5]'>
      <FeatureCard text="Talk about some of the details of your offer with a focus on the value people get back." src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/6765ae81-freshgoods-feature1_10go0b20go09e00000001o.jpg" title="Feature 1"></FeatureCard>
      <FeatureCard text="Is there a pain point that your product or service resolves? Tell visitors about it here." src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/bf92a2f6-freshgoods-feature2_10go0ku0go09e00009e01o.jpg" title="Feature 2"></FeatureCard>
      <FeatureCard text="Alternatively, you could use this section to address some frequently asked questions." src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/f55dfcfa-freshgoods-feature3_10go0b40go09e00000601o.jpeg" title="Feature 3"></FeatureCard>
    </div>
  )
}

export default CardsContainer
