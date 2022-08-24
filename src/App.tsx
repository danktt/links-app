import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";

import Button from "./components/Button";
import ImageProfile from "./components/ImageProfile";
import Swap from "./components/Swap";

const data = [
  {
    title: "Resume site",
    path: "https://resume-site-ten.vercel.app/",
    // icon: "",
  },
  {
    title: "Linkedin",
    path: "https://www.linkedin.com/in/danilo-miranda15/",
    // icon: "",
  },
  {
    title: "Youtube",
    path: "https://www.youtube.com/channel/UCy4PJBIRXT3ZIHKYI_c2z2w",
    // icon: "",
  },
  {
    title: "Twitter",
    path: "https://twitter.com/_danktt",
    // icon: "",
  },
  {
    title: "Github",
    path: "https://github.com/danktt",
    // icon: "",
  },
];

function App() {
  const [theme, setTheme] = useState("light");
  function changeTheme() {
    let theme = document.querySelector("html");
  }

  return (
    <div className="flex justify-center mt-28 ">
      <Swap className="absolute top-6 right-6 " />
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
                className="bg-primary hover:bg-primary-focus border-none text-base-100 normal-case text-xl"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
