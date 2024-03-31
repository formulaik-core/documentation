import React from 'react'
import ReactView from './react'
import ReactNativeView from './reactnative'

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

const NotAvailable = () => 
<div className='h-36 
          '>
  <h4>
    Not available yet.
  </h4>                
  <a>
    Want to contribute? Join the movement.
  </a>
</div>



export default ({ hideTitle = false }) => <div class={`                     
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
      <Tabs>
        <TabItem value="React JS" label="React JS" default>
          <ReactView />
        </TabItem>
        <TabItem value="React Native" label="React Native">
            <ReactNativeView />
        </TabItem>
        <TabItem value="Swift" label="Swift">
          <NotAvailable />                              
        </TabItem>
        <TabItem value="Kotlin" label="Kotlin">
          <NotAvailable />              
        </TabItem>
        <TabItem value="flutter" label="Flutter">
          <NotAvailable />              
        </TabItem>
        <TabItem value="VueJS" label="Vue JS">
          <NotAvailable />              
        </TabItem>
    </Tabs>
    </div>
  </div>