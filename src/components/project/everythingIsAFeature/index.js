import React from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
// import LogoAnimated from '../logo/animated'

export default () => {
  const { siteConfig } = useDocusaurusContext()
  return <div className={`             
        `}>
    <div class={`
        
        px-6
        md:px-6      
        pt-6
        `}>
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
            {`Everything is a feature in Formulaik 🐝 🍯`} <i></i>
          </h2>
          <p className={`text-lg `}>
            Formulaik was built from the ground up to use features in all ways possible. The <b>Formulaik app</b> itself is a feature (app feature). The Formulaik server uses core features like <i>manualable</i>, <i>disposableorphans</i> and more.
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