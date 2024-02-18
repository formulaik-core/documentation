import React from 'react'
// import LogoAnimated from '../logo/animated'
import Link from '@docusaurus/Link'

export default ({noLink = false,
  align = 'center'}) =>  <div class={`                
        flex
        justify-center                 
        `}>
    <div class={`
          ${align === 'center' ? 'justify-center text-center' : ''}          
          pt-8     
          max-w-4xl
        `}>
          <h2 className='text-4xl'>
            {`Definitions`} <i></i>
          </h2>         
          <p className='text-lg'>
            
            </p>
            <ul className={`
            ${align === 'center' ? 'list-none' : ''}          
            text-lg 
            space-y-2
            `}>
            <li className=''>A feature is an independent and agnostic module that delivers a high level functionality by handling its complete lifecycle and accessing a set of server resources via Engine APIs</li>                        
            <li className=''>A model is the database representation of a table, when used in a feature it can incorporate a Formulaik.App.Object subclass</li>                        
            <li className=''>A Formulaik Engine is a module that serves as a bridge to an actual Node JS framework that will handle the actual routing, database management etc</li>                        
            <li className=''>An Formulaik Engine API is a set of coherent apis that fill a certain high level need like Object, Query, ...</li>
            </ul>
          {!noLink && <p>
            <Link
              className="button button--secondary button--md"
              to="/docs/concepts/philosophy">
              All terms and definitions
            </Link>
          </p>}
        </div>
        </div>
     