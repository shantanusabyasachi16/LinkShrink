import * as React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { SERVER_URL } from "../../utils/Endpoints";
import axios from "axios";
import { Button } from "../../components/ui/button";
import Footer from "../Footer/Footer";

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
        const response = await axios.get(`${SERVER_URL}/urlshort`);

        setUrlData(response.data.shortUrl);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id: string): Promise<void> => {
    try {
      await axios.post(`${SERVER_URL}/delete/${id}`);
      setUrlData(urlData.filter((url) => url.shorturl !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto pt-2 pb-10 m-10  ">
      <div className="relative overflow-x-auto ">
        <Table>
          <TableCaption className="text-white ">A list of your recent URLs.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px] text-xl text-white  font-bold">
                Full URL
              </TableHead>
              <TableHead className="text-xl text-white  font-bold">
                Short URL
              </TableHead>
              <TableHead className=" text-xl text-white  font-bold">
                Clicks
              </TableHead>
              <TableHead className="text-xl text-white  font-bold">
                Delete
              </TableHead>
              <TableHead className="text-right text-xl text-white  font-bold">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {urlData.map((url, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium text-white text-xl ">
                  {url.fullUrl}
                </TableCell>
                <TableCell className="font-medium text-white text-xl" >
                  <a
                    href={url.fullUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-800 hover:underline "
                  >
                    {url.shorturl}
                  </a>
                </TableCell>

                <TableCell className="font-medium text-white text-xl ">{url.clicks}</TableCell>
                <TableCell>
                  <Button className="bg-blue-700 hover:bg-blue-900" onClick={() => handleDelete(url.shorturl)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                    </svg>
                  </Button>
                </TableCell>
                <TableCell className="text-right">
                  <Button
                    className="bg-blue-700 hover:bg-blue-900 text-white rounded px-3 py-1"
                    onClick={() => navigator.clipboard.writeText(url.shorturl)}
                  >
                    Copy
                  </Button>
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
