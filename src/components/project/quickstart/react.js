import React from 'react'
import CodeBlock from '@theme/CodeBlock'
import BashTabs from '@site/src/components/generic/bashTabs'

export default ({}) => <div class={`                     
        `}>
          <p className={`text-lg font-bold`}>
            1. Install formulaik and a component library
          </p>
          <BashTabs npm={`npm install @formulaik/react @formulaik-community/react-mui`} />          
         
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
    validations: [
      {
        kind: "format",
        value: "email",
        message: 'Invalid email format',
      },
      {
        kind: "required",
        value: true,
        message: "This field can't be blank",
      },
    ],
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
    validations: [
      {
        kind: "matches",
        value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
        message: 'Invalid password, must contain at least 8 characters and at most 18 characters',
      },
      {
        kind: "required",
        value: true,
        message: "This field can't be blank",
      },
    ]
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
            3. Provide initial values (optional)
          </p>          
         
            <CodeBlock language="jsx">
{`const values = {
    email: cookies.get('email'),
}`}
            </CodeBlock>
          <p className={`text-lg font-bold`}>
            4. Render forms and handle submit
          </p>
         
            <CodeBlock language="jsx">
{`import Formulaik from '@formulaik/react'
import FormulaikMui from '@formulaik-community/react-mui'

export default (props) => {
  
 const onSubmit = async (values) => {
    const { email, password } = values
    try { 
      await myapi.submit({ email, password })
    }
    catch(e) {
      throw (new Error('Could not sign in: ', e.message))
    }
    return { message: t("Email validated") }  
  }

  return <>      
      <h3>Login</h3>            
      <Formulaik
        components={[FormulaikMui]}
        values={values}        
        inputs={inputs}
        onSubmit={onSubmit}
         />      
    </>
}`}
      </CodeBlock>        
    </div>