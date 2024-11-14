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

  return (
    <div className="container mx-auto pt-2 pb-10">
      <div className="relative overflow-x-auto">
        <Table>
          <TableCaption>A list of your recent URLs.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px] text-xl text-red-900 font-bold">Full URL</TableHead>
              <TableHead className="text-xl text-red-900 font-bold" >Short URL</TableHead>
              <TableHead className=" text-xl text-red-900 font-bold">Clicks</TableHead>
              <TableHead className="text-xl text-red-900 font-bold">Delete</TableHead>
              <TableHead className="text-right text-xl text-red-900 font-bold">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {urlData.map((url, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium text-white">{url.fullUrl}</TableCell>
                <TableCell className="text-white">{url.shorturl}</TableCell>
                <TableCell className="text-white">{url.clicks}</TableCell>
                <TableCell>
                  <Button>
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
                  <Button className="">
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
                        d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
                      />
                    </svg>
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