import * as React from 'react';
// import { Input } from '../../components/ui/input';
// import { Button } from '../../components/ui/button';
import axios from "axios"
import { SERVER_URL } from '../../utils/Endpoints';
// import { cn } from '../../lib/utils';
import { Boxes } from "../../Boxes";

const Urlcontainer = ()=>{
  // interface IUrlcontainerProps {
  //   }
    
   
     const[FullUrl,setFullUrl] = React.useState<string>("");
     const handelSubmit = async (e: React .FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    try {
     await axios.post(`${SERVER_URL}/urlshort`,{
      fullUrl:FullUrl,
     })
     setFullUrl("");
    } catch (error) {
      console.log(error);
      
    }
     }
  return(
    <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
    <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

    <Boxes />
    <h1 className='text-red-900'>heeloo</h1>
   <div></div>
  </div>
  )
}
// 
//   return(
//     <BackgroundBoxesDemo>
       
//     className='w-full text-gray-900 border rounded-lg'
//     value={FullUrl}
//     onChange={(e:React.ChangeEvent<HTMLInputElement>
    
//     ) => setFullUrl(e.target.value)}
//     />


//     <Button type='submit' className=''>
//       Shorten URL
//     </Button>
//     </div>
//   </div>
// </form>
//   </div>

//   </div>
//     </BackgroundBoxesDemo>
 

   
//   ) ;
// };

export default Urlcontainer;
