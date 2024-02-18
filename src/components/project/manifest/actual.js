import React from 'react'
// import LogoAnimated from '../logo/animated'
import Link from '@docusaurus/Link'

export default ({
  noLink = false,
  align = 'center'}) =>  <div class={`
flex
justify-center
`}><div class={`
          ${align === 'center' ? 'justify-center text-center' : ''}          
          pt-8     
          max-w-4xl
        `}>
          <h2 className='text-4xl'>
            {`What do we want? `} <i></i>
          </h2>         
          <p className='text-lg'>
            Ok, what would the perfect CLI generator look like ? 
            </p>
            <ul className={`
            ${align === 'center' ? 'list-none' : 'list-decimal'}          
            text-lg 
            space-y-2
            `}>            
              <li className=''>Easy to read</li>
              <li className=''>Easy to debug</li>
              <li className=''>Separate declaration from implementation</li>
              <li className=''>Reuse components in a project</li>            
              <li className=''>Reuse component libraries across projects</li>            
              <li className=''>Have a unique multi-platform specification and behavior of our forms</li>            
            </ul>
          {!noLink && <p>
            <Link
              className="button button--secondary button--md"
              to="/docs/concepts/philosophy">
              Read more about Formulaik philosophy
            </Link>
          </p>}
        </div>
        </div>
     