import { Layout } from "./Layout"
import { OrderList, UnorderList } from "./List"

 export const ListPage = ()=>{
    return <Layout>
        <div>
            <h2>Lists</h2>
        <UnorderList/>
       <OrderList/>
        </div>
        
    </Layout>
      
   
}