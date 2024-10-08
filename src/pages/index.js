import React from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import Framework from '@site/src/components/project/framework'
import HomePageHeader from '../components/project/homePageHeader'
import Sample from '../components/project/quickstart'
import HomepageFeatures2 from '../components/project/homepageFeatures2'
import Manifest from '../components/project/manifest'
import Decouple from '../components/project/decouple'

export default () => {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="An open source initiative for building modern forms the right way, with reusable components in a JSON based declarative approach.It provides a concise, easy to use and scalable template to get the best of features.\n Get ready to change the way you code your server!">
      <HomePageHeader />      
      <main className='pb-16'>        
        <Framework />
        <div class={`                     
          flex         
          justify-center
          `}>
          <div class={`                        
                md:max-w-2xl
                max-w-sm
                px-2            
              `}>
                <h2 className='text-4xl'>{`Quick start 🚀`}</h2>
      <p className={`text-lg italic`}>
            Let's build a login form with email and password inputs.
      </p>
            <Sample />
          </div>
        </div>        
        <Decouple />
        <HomepageFeatures2 />        
        {/* <Pollination />   */}
        <Manifest  align={'left'}/>         
      </main>
    </Layout>
  )
}