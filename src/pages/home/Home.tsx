import React, { memo } from 'react'
import { AutoplayVideo } from '~/components/autoplayVideo'
import Banner3D from '~/components/banner/banner3D'
import Unleash from '~/components/unleash'
import { InStore, ListenToOurCustomer } from '~/sections/home'
import CustomerReaction from '~/sections/home/CustomerReaction'
import InStoreExperienceToday from '~/sections/home/InStoreExperienceToday'

interface IHomePageProps {}

const Home: React.FunctionComponent<IHomePageProps> = memo(() => {
  return (
    <div className='h-auto bg-[#F4F7F9]'>
      <div>
        <Banner3D />
      </div>
      <div className='accurate-count' data-aos='fade-up'>
        <div className='container-wrapper flex flex-col gap-10'>
          <h1 className='mt-[100px] text-center text-[50px] font-bold md:text-[64px]'>Accurate Count and Analyze</h1>
          <AutoplayVideo
            source='https://img.m.pro/fiai-home.mp4'
            defaultImage='https://via.placeholder.com/1920x1080'
          />
        </div>
      </div>
      <div>
        <Unleash />
      </div>
      <div className='mx-auto min-h-screen w-full max-w-[1440px] bg-instore xs:bg-[length:640px_100%] sm:bg-cover'>
        {/* <InStore /> */}
      </div>
      <CustomerReaction />
      <ListenToOurCustomer />
      <InStoreExperienceToday />
    </div>
  )
})

export default Home
