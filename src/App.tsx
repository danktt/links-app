import { useEffect, useState } from "react";

import Button from "./components/Button";
import ImageProfile from "./components/ImageProfile";
import Swap from "./components/Swap";
import { data } from "../src/data";
import Loading from "./components/Loading";

function App() {
  const [loading, setLoading] = useState(true);
  // const [theme, setTheme] = useState("light");

  setTimeout(() => {
    setLoading(false);
  }, 1200);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="flex justify-center mt-28 ">
          {/* <Swap className="absolute top-6 right-6 " /> */}
          <div className="">
            <div className="flex flex-col items-center gap-3  max-w-xl mx-auto mb-8">
              <ImageProfile />

              <div className="text-2xl">Danilo Miranda</div>
              <div className="text-xl">@danktt</div>
            </div>

            <div className="flex flex-col w-64 mx-auto gap-2">
              {data.map((item) => {
                return (
                  <Button
                    title={item.title}
                    href={item.path}
                    icon={item.icon}
                    className="bg-primary hover:bg-primary-focus justify-center gap-2 border-none text-base-100 normal-case text-xl"
                  />
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
