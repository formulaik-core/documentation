import React from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
// import LogoAnimated from '../logo/animated'
import Link from '@docusaurus/Link'

export default () => {
  const { siteConfig } = useDocusaurusContext()
  return <div className={`             
        `}>
    <div class={`        
        px-6
        md:px-6      
        pt-0`}>
      <div class={`
          text-right
          flex
          justify-center
          align-middle
          h-full
        `}>
        {/* <LogoAnimated /> */}
        {/* <Svg
          fill={`${isDarkTheme ? 'white' : 'black'}`}
          className={`          
          w-[180px]
          h-[180px]`}
          role="img" /> */}
      </div>
      <div class={`                
          flex
          justify-center                 
        `}>
        <div class={`
          justify-center
          text-center
          pt-8     
          max-w-4xl
        `}>
          <h2 className='text-4xl'>
            {`We don't want to spend too much time on building forms either`}
          </h2>
          <p className={`text-lg `}>
            Formulaik is built from the ground up to be easy to use, convention driven and extensible so that it's easy to kickstart a project and maintain it. It's api makes it easy to fetch steps remotely and execute them with powerful side effects, transformers and validators.
          </p>
          <p>
            <Link
              className="button button--secondary button--md"
              to="/docs/concepts/motivation">
              Learn more about Formulaik motivation
            </Link>
          </p>
          {/* <div className={``}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/concepts/motivation">
              Documentation
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  </div>
}