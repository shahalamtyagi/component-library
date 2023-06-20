import { EmailInput, NameInput, NumberInput } from "./Input"
import { Layout } from "./Layout"

 export const InputPage = ()=>{
    return(
      <Layout>
        <div>
        <NameInput/>
        <EmailInput/>
        <NumberInput/>

        </div>
      
      </Layout>
       
        
    )
}