import React from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
// import LogoAnimated from '../logo/animated'
// import Link from '@docusaurus/Link'
import SVGPlus from '@site/src/components/generic/svgplus'

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
            {`Decouple your form declaration from its implementation 🖖`}
          </h2>
          <p className={`text-lg `}>
            Go from having your form inputs behavior cluttered in a React file to a clear separation of concerns between declaration via a JSON and component libraries.
          </p>    
          <p>
          <SVGPlus name={'architecture'} 
light={require('@site/static/diagrams/light/architecture.svg').default} 
dark={require('@site/static/diagrams/dark/architecture.svg').default} 
/>
          </p>      
          {/* <p>
            <Link
              className="button button--secondary button--md"
              to="/docs/guides/overview">
              Learn more about creating an input
            </Link>
          </p> */}
          {/* <div className={``}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/concepts/philosophy">
              Documentation
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  </div>
}