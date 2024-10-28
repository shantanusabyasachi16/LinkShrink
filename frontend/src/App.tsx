import * as React from 'react';
import Header from './componentss/Header/Header';
import Footer from './componentss/Footer/Footer';

interface IAppProps {
}

const App: React.FunctionComponent<IAppProps> = ()=> {
  return(
    <>
    <Header/>
    <Footer/>
    </>
  ) ;
};

export default App;
