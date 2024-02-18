import React from 'react'
import CodeBlock from '@theme/CodeBlock'
import BashTabs from '@site/src/components/generic/bashTabs'

export default ({}) => <div class={`                     
        `}>
          <p className={`text-lg font-bold`}>
            1. Install formulaik, yup for validation and a component library
          </p>
          <BashTabs npm={`npm install @formulaik/react`} />
          <p>
            <CodeBlock language="jsx">
{`import Formulaik from '@formulaik/react'
import FormulaikMui from '@formulaik-community/formulaik-mui-react'
import * as Yup from 'yup'`}
            </CodeBlock>
          </p>
          <p className={`text-lg font-bold`}>
          2. Define inputs   
          </p>        
          <p>
            <CodeBlock language="jsx">
{`const inputs = [
  {
    type: 'input',
    schema: 'code',
    id: 'code',
    label: 'Code',
  },
  {
    type: 'submit',
    id: 'submit',
    value: t('Validate'),
  },
]`}
          </CodeBlock>
          </p>
          <p className={`text-lg font-bold`}>
            3. Provide initial values
          </p>          
          <p>
            <CodeBlock language="jsx">
{`const initialValues = {

}`}
            </CodeBlock>
          </p>
          <p className={`text-lg font-bold`}>
            4. Define validation 
          </p>
          <p>
            <CodeBlock language="jsx">
{`const validationSchema = Yup.object().shape({
  code: Yup.string()
      .max(20, 'Too Long!')
      .required(VALIDATION_BLANK_TEXT),
  })`}
            </CodeBlock>        
          </p>
          <p className={`text-lg font-bold`}>
            5. Render forms and handle submit
          </p>
          <p>
            <CodeBlock language="jsx">
{`export default (props) => {
  const onSubmit = async (values, { setSubmitting }) => {
    ...
  }

  return <div>    
    <h3>Verify email</h3>                
    <Formulaik
      componentsLibraries={[FormulaikMui]}
      initialValues={initialValues}
      validationSchema={validationSchema}
      inputs={inputs}
      onSubmit={onSubmit}
      error={error} />
}`}
      </CodeBlock>        
      </p>
    </div>