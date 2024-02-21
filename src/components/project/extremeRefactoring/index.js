import React from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Link from '@docusaurus/Link'
// import LogoAnimated from '../logo/animated'
import LogoStatic from '../logo/static'

export default () => {
  const { siteConfig } = useDocusaurusContext()
  return <div className={`             
        `}>
    <div class={`
        
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
          <h2 className=''>
            {`Extreme refactoring from the start`} <i></i>
          </h2>
          <p className={`font-bold text-lg `}>
            {`An open source meta framework for building modern forms the right way, with reusable components in a JSON based declarative approach.It provides a concise, easy to use and scalable template to get the best of features.\n Get ready to change the way you code your server!`}
          </p>
          <div className={``}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/concepts/philosophy">
              Documentation
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
}