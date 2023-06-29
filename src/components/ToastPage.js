import { Layout } from "./Layout"
import { SuccessToast } from "./Toast"

 export const ToastPage = ()=>{
    return(
        <Layout>
            <div>
               <SuccessToast/>
            </div>
        </Layout>
    )
}