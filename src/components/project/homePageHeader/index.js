import React from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Link from '@docusaurus/Link'
// import LogoAnimated from '../logo/animated'
import LogoStatic from '../logo/static/index.svg'

// https://iconscout.com/free-icon/dessert-1560788
export default () => {
  const { siteConfig } = useDocusaurusContext()
  return <div className={`             
        `}>
    <div class={`
        md:mt-16
        md:mb-2
        px-6
        md:px-6      
        py-4`}>
      <div class={`
          text-right
          flex
          justify-center
          align-middle
          h-full
        `}>
        {/* <LogoAnimated /> */}
        <LogoStatic size={'s'} />
      </div>
      <div class={`                
          flex
          justify-center                 
        `}>
        <div class={`
          justify-center
          text-center
          pt-8     
          max-w-md
        `}>
          <h1 className='md:text-7xl text-6xl font-bold text-[#6B6BA5]'>            
          <i className='text-gray-600 dark:text-gray-400'>The</i>  {`${siteConfig.title}`}
          <br /> <i className='text-gray-600 dark:text-gray-400'>project</i>
          </h1>
          <p className={`text-lg `}>
          An open source initiative for defining cross-platform forms, 
          enabling reusable components in a JSON based declarative approach.          
          Formulaik aims to simplify form building across various front-end frameworks.
          Formulaik defines a protocol for defining form inputs 
          as a sole source of truth (data type, behaviour, validation) in json, which is interpreted 
          by a platform-specific formulaik engine.
          <br />
          🍨
          </p>
          <div className={`
            grid 
            grid-cols-2 
            space-x-6
          `}>
            <Link
              className={`
                button 
                button--primary 
                button--lg`}
              to="/docs/quickStart">
              Quick start 🚀
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="/docs/guides/gettingstarted/installation">
              Guides
            </Link>
          </div>
        </div>
      </div>
    </div>

    {/* <FeatureWidget id={'emailable'} /> */}

  </div>
}