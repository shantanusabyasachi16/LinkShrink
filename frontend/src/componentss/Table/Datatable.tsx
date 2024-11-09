import * as React from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table"

interface ITableProps {
}

const Tablee: React.FunctionComponent<ITableProps> = () => {
  return  (
    <div className='container mx-auto pt-2 pb-10'>
      <div className='relative overflow-x-auto '>
      <Table>
  <TableCaption>A list of your recent URls.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">FullUrl</TableHead>
      <TableHead>ShortUrl</TableHead>
      <TableHead>Clicks</TableHead>
      <TableHead className="text-right">Action</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">INV001</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell>Credit Card</TableCell>
      <TableCell className="text-right">$250.00</TableCell>
    </TableRow>
  </TableBody>
</Table>
      </div>
    </div>
  );
};

export default Tablee;
