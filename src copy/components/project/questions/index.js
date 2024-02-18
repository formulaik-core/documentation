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
            {`Don't reinvent the wheel 🤷‍♂️`}
          </h2>
          <p className={`text-lg`}>
            Every form input is refactored from the get go so that they can be reused easily. By enforcing this crucial pattern, Formulaik helps build a solid definition of what your interaction with the users can be.
          </p>
          <p>
            <Link
              className="button 
              button--secondary 
              button--md"
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