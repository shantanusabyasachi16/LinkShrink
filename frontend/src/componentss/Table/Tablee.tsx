import * as React from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { SERVER_URL } from '../../utils/Endpoints';

interface UrlData {
  fullUrl: string;
  shorturl: string;
  clicks: number;
}

const Tablee: React.FunctionComponent = () => {
  const [urlData, setUrlData] = React.useState<UrlData[]>([]);

  React.useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await fetch(`${SERVER_URL}/urlshort`); 
        const data = await response.json();
        setUrlData(data.shortUrl); // Assuming the response structure is { shortUrl: [...] }
      } catch (error) {
        console.error( error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='container mx-auto pt-2 pb-10'>
      <div className='relative overflow-x-auto'>
        <Table>
          <TableCaption>A list of your recent URLs.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Full URL</TableHead>
              <TableHead>Short URL</TableHead>
              <TableHead>Clicks</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {urlData.map((url, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{url.fullUrl}</TableCell>
                <TableCell>{url.shorturl}</TableCell>
                <TableCell>{url.clicks}</TableCell>
                <TableCell className="text-right">
                  {/* You can add action buttons here, e.g., a delete or edit button */}
                  <button className="text-blue-500 hover:underline">View</button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Tablee;
