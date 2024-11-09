import * as React from 'react';
import Urlcontainer from '../urlcontainer/Urlcontainer';
import Table from '../Table/Datatable';

interface IContainerProps {
}

const Container: React.FunctionComponent<IContainerProps> = () => {
  return  (
    <div>
        <Urlcontainer/>
        <Table/>
    </div>
  );
};

export default Container;
