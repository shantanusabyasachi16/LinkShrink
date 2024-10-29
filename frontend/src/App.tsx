import * as React from 'react';
import Header from './componentss/Header/Header';
import Footer from './componentss/Footer/Footer';
import Container from './componentss/container/Container';

interface IAppProps {
}

const App: React.FunctionComponent<IAppProps> = ()=> {
  return(
    <div className='fixed top-0 w-full'> 
    <Header/>
    <Container/>
    <Footer/>
    </div>
   
    
  ) ;
};

export default App;
