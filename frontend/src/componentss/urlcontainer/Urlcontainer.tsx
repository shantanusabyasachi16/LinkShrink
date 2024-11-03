import * as React from 'react';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';


interface IUrlcontainerProps {
}

const Urlcontainer: React.FunctionComponent<IUrlcontainerProps> = () => {
 const[FullUrl,setFullUrl] = React.useState<string>("");
 const handelSubmit = async (e: React .FormEvent<HTMLFormElement>)=>{
e.preventDefault();
try {
  
} catch (error) {
  
}
 }
  return(
  <div className='container mx-auto p-2'>
  <div>
    <p className='text-2xl text-center'>The only URL Shortner
      <p className=' text-2xl text-center'>you'll ever need!</p>
      </p>
<form onSubmit={handelSubmit}>
  <div className='flex'>
    <div className=' relative w-full'>
      <Input
    type=' text'
    placeholder='Enter your link here...'
    required
    className='w-full text-gray-900 border rounded-lg'
    value={FullUrl}
    onChange={(e:React.ChangeEvent<HTMLInputElement>
    
    ) => setFullUrl(e.target.value)}
    />


    <Button type='submit' className=''>
      Shorten URL
    </Button>
    </div>
  </div>
</form>
  </div>

  </div>

   
  ) ;
};

export default Urlcontainer;
