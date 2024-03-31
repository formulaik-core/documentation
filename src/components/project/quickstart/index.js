import React from 'react'
import ReactView from './react'
import ReactNativeView from './reactnative'

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

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
              <div className='h-300'>
                <h4>
                  Not available yet.
                </h4>                
                <a>
                  Want to contribute? Contact us.
                </a>
              </div>
                
            </TabItem>
            <TabItem value="Kotlin" label="Kotlin">
            <div className='h-300'>
                <h4>
                  Not available yet.
                </h4>                
                <a>
                  Want to contribute? Contact us.
                </a>
              </div>
            </TabItem>
            <TabItem value="flutter" label="Flutter">
            <div className='h-300'>
                <h4>
                  Not available yet.
                </h4>                
                <a>
                  Want to contribute? Contact us.
                </a>
              </div>
            </TabItem>
            <TabItem value="VueJS" label="Vue JS">
            <div className='h-300'>
                <h4>
                  Not available yet.
                </h4>                
                <a>
                  Want to contribute? Contact us.
                </a>
              </div>
            </TabItem>
        </Tabs>
    </div>
  </div>