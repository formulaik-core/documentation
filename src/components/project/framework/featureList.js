import React from 'react';

export default [
  {
    title: 'Commands ready',
    // Svg: require('@site/static/img/noun-build-3738502.svg').default,
    Svg: require('@site/static/img/noun-command-3158391.svg').default,    
    description: (
      <>
        Formulaik makes it easy to add a command by creating a folder and adding its subcommands. 
      </>
    ),
    url: '/docs/concepts'
  },
  {
    title: 'Questions driven',
    Svg: require('@site/static/img/noun-question-106348.svg').default,
    // Svg: require('@site/static/img/noun-question-3323941.svg').default,
    description: (
      <>
        Options can be defined at a global level and inherited at a command level to promote reuse.
      </>
    ),
  },
  {
    // title: 'All declarative transformers and validators',
    title: 'Extensible',
    // Svg: require('@site/static/img/noun-release-5004142.svg').default,
    Svg: require('@site/static/img/noun-add-1519374.svg').default,    
    // Svg: require('@site/static/img/noun-settings-1269041.svg').default,
    description: (
      <>
        Every aspect of a command parameters can be declared easily via input and output transformers, an input validators.
      </>
    ),
  },
]
