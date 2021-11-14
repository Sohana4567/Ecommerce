import React from 'react';
import '../compareproduct/_main.scss'

const Compareproduct = ({compare}) => {
    return (
        <table width="100%" className="container">
        <thead>
             <tr>
            
                 <td>Product</td>
                 <td>Name</td>
                 <td>Price</td>
                 <td>Display size</td>
                 <td>Display Resolution</td>
                 <td>Processor</td>
                 <td>Ram</td>
                 <td>Os</td>
                 <td>Hard Disk</td>
                 <td>Weight</td>
             </tr>
         </thead>
{compare.map((elem)=>{
const { id,price,imagesrc, heading,display_size,display_resolution,processor,ram,os,hard_disk,weight} = elem;
return(
  
         <tbody key={id}>
             <tr>
                 <td><img src={imagesrc} alt={heading}/></td>
                 <td><h5>{heading}</h5></td>
                 <td><h5>{price}</h5></td>
                 <td><h5>{display_size}</h5></td>
    
                 <td><h5>{display_resolution}</h5></td>
                 <td><h5>{processor}</h5></td>
                 <td><h5>{ram}</h5></td>
                 <td><h5>{os}</h5></td>
                 <td><h5>{hard_disk}</h5></td>
                 <td><h5>{weight}</h5></td>
             </tr>
         </tbody>
)   
})}
</table>
    )
}
export default  Compareproduct;
