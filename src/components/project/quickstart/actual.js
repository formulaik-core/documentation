import React from 'react'
import CodeBlock from '@theme/CodeBlock'
import BashTabs from '@site/src/components/generic/bashTabs'

export default ({}) => <div class={`                     
        `}>
          <p className={`text-lg font-bold`}>
            1. Install formulaik, yup for validation and a component library
          </p>
          <BashTabs npm={`npm install @formulaik/engine-react`} />          
          <CodeBlock language="jsx">
{`import Formulaik from '@formulaik/engine-react'
import FormulaikMui from '@formulaik-community/react-mui'
import * as Yup from 'yup'`}
          </CodeBlock>
         
          <p className={`text-lg font-bold`}>
          2. Define inputs   
          </p>        
          <CodeBlock language="jsx">
{`const inputs = [
  {
    type: 'input',
    schema: 'email',
    id: 'email',
    label: 'Email',
    params: {
      type: 'email',
      placeholder: "email@domain.com"
    }
  },
  {
    type: 'inputPassword',
    schema: 'password',
    label: 'Password',
    id: 'password',
    params: {
      type: 'password',
      autoComplete: "current-password",
      placeholder: "xxxx-xxxx-xxxx"
    }
  },
  {
    type: 'submit',
    params: {
      text: 'Continue'
    }
  },
]`}
          </CodeBlock>
        
          <p className={`text-lg font-bold`}>
            3. Provide initial values
          </p>          
         
            <CodeBlock language="jsx">
{`const initialValues = {
    email: cookies.get('email'),
}`}
            </CodeBlock>
          
          <p className={`text-lg font-bold`}>
            4. Define validation 
          </p>
         
            <CodeBlock language="jsx">
{`const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email format')
    .required("This field can't be blank"),
  password: Yup.string()
    .required("This field can't be blank")
    .min(7, 'Must contain at least 8 characters')
    .max(18, 'Must contain at most 18 characters')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
})`}
            </CodeBlock>        
          
          <p className={`text-lg font-bold`}>
            5. Render forms and handle submit
          </p>
         
            <CodeBlock language="jsx">
{`export default (props) => {
  const onSubmit = async (values, { setSubmitting }) => {
    try {
      const { email, password } = values
      //... do login
      setError(null)      
    } catch (e) {
      console.log(e)
      setError(e)
    }

    setSubmitting(false)
  }

  return <div>      
      <h1>Login</h1>            
      <Formulaik
        componentsLibraries={[FormulaikLocal,]}
        initialValues={initialValues}
        validationSchema={validationSchema}
        inputs={inputs}
        onSubmit={onSubmit}
        error={error} />      
    </div>
}`}
      </CodeBlock>        
    </div>