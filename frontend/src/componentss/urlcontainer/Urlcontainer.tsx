import * as React from "react";
import axios from "axios";
import { SERVER_URL } from "../../utils/Endpoints";
import { Boxes } from "../../Boxes";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import Tablee from "../Table/Tablee";

const Urlcontainer = () => {
  //interface IUrlcontainerProps {
  //}

  const [FullUrl, setFullUrl] = React.useState<string>("");
  const handelSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post(`${SERVER_URL}/urlshort`, {
        fullUrl: FullUrl,
      });
      setFullUrl("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="h-screen relative w-full overflow-hidden bg-gradient-to-r from-sky-400 to-blue-900  flex flex-col items-center justify-center ">
      <div className="absolute inset-0 w-full h-full z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />

      <div className="container mx-auto p-2">
        <div></div>
        <p className="text-7xl text-center text-white font-bold">
  The only URL Shortener
  <span className="block text-6xl text-center text-white mt-5 animate-pulse ">
    you'll ever need!! 👇
  </span>
</p>

        <form onSubmit={handelSubmit}>
          <div className="flex">
          <div className="relative w-full mt-20 flex items-center">
  <Input
    type="text"
    placeholder="Enter your link here....."
    required
    className="w-full text-gray-900 border rounded-lg p-6"
    value={FullUrl}
    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFullUrl(e.target.value)}
  />
  <Button
    type="submit"
    className="ml-4 px-6 py-6 bg-blue-600 text-md text-white font-semibold rounded-lg hover:bg-blue-900 transition"
  >
    Shorten URL!
  </Button>
</div>

          </div>
        </form>
      </div>
      <Tablee/>
    </div>
    
  );
};

export default Urlcontainer;
