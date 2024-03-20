import React from 'react'
import CodeBlock from '@theme/CodeBlock'
import BashTabs from '@site/src/components/generic/bashTabs'

export default ({}) => <div class={`                     
        `}>
          <p className={`text-lg font-bold`}>
            1. Install formulaik, yup for validation and a component library
          </p>
          <BashTabs npm={`npm install @formulaik/react`} />          
          <CodeBlock language="jsx">
{`import Formulaik from '@formulaik/react'
import FormulaikMui from '@formulaik-community/react-mui'
`}
          </CodeBlock>
         
          <p className={`text-lg font-bold`}>
          2. Define inputs   
          </p>        
          <CodeBlock language="jsx">
{`const inputs = [
  {
    component: 'input',
    id: 'email',
    label: 'Email',
    type: "string",
    params: {
      type: 'email',
      placeholder: "email@domain.com"
    },
    validation: {
      format: {
        value: "email",
        message: 'Invalid email format',
      },
      required: {
        value: true,
        message: "This field can't be blank",
      },
    }
  },
  {
    component: 'inputPassword',
    label: 'Password',
    id: 'password',
    type: "string",
    params: {
      type: 'password',
      autoComplete: "current-password",
      placeholder: "xxxx-xxxx-xxxx"
    },
    validation: {
      matches: {
        value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
        message: 'Invalid password, must contain at least 8 characters and at most 18 characters',
      },
      required: {
        value: true,
        message: "This field can't be blank",
      },
    }
  },
  {
    component: 'submit',
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
            4. Render forms and handle submit
          </p>
         
            <CodeBlock language="jsx">
{`export default (props) => {
  const onSubmit = async (values, { setSubmitting }) => {
    try {
      const { email, password } = values
      //... do login      
    } catch (e) {
      console.log(e)      
    }
  }

  return <div>      
      <h1>Login</h1>            
      <Formulaik
        components={[FormulaikLocal,]}
        initialValues={initialValues}        
        inputs={inputs}
        onSubmit={onSubmit}
         />      
    </div>
}`}
      </CodeBlock>        
    </div>