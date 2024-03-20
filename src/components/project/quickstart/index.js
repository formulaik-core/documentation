import React from 'react'
import ReactView from './react'

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

export default ({ hideTitle = false }) => <div class={`                     
        flex 
        justify-center`}>
    <div class={`          
          justify-center      
          align-middle                
          md:max-w-5xl
          max-w-sm
          px-4   
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
            Coming soon
        </TabItem>
        <TabItem value="Swift" label="Swift">
            Want to contribute? Contact me.
        </TabItem>
        <TabItem value="Kotlin" label="Kotlin">
            Want to contribute? Contact me.
        </TabItem>
    </Tabs>
      
    </div>
  </div>