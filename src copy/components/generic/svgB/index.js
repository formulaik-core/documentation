import React from 'react'
import ThemedImage from '@theme/ThemedImage'


export default ({  }) => {

  return <ThemedImage
    alt="Docusaurus themed image"
    sources={{
      light: useBaseUrl('/img/docusaurus_light.svg'),
      dark: useBaseUrl('/img/docusaurus_dark.svg'),
    }} />
}

