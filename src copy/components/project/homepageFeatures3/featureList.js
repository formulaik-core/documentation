import React from 'react';

export default [
  {
    title: 'Standardized api',
    Svg: require('@site/static/img/noun-api-6001992.svg').default,
    description: (
      <>
        Every feature is totally independent from other features, yet it can call Formulaik's standardized api for sending emails or push notifications. A dedicated feature can register to Formulaik for delivering those messages.
      </>
    ),
  },
  {
    title: 'Ready to run with docker dependencies per feature',
    Svg: require('@site/static/img/noun-boxes-4275784.svg').default,
    description: (
      <>
        A dedicated system entry in every feature allows for a custom docker-compose based infrastructure needed by the feature. The Formulaik server will automatically assign free ports and run docker containers if a feature needs them.
      </>
    ),
  },
  {
    title: 'Full stack features with frontend extensions',
    Svg: require('@site/static/img/noun-shapes-6104255.svg').default,
    description: (
      <>
        Beyond the core server component, a feature can have an accompanying frontend library that provides UI components and logic. For example the followable feature offers a React extension that displays a state managed <i>Follow</i> button.
      </>
    ),
  },

]
