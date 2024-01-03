import Button from "./components/CustomButton";
import { Code } from "lucide-react";

const App = () => {
  return (
    <div className=" w-[100vw] h-[100vh] bg-black flex items-center justify-center">
      <div>
        <Button className=" bg-purple-800 border-none active:bg-white active:text-black  active:shadow-[0px_0px_25px_10px_rgba(255,255,255,.6)]">
          <Code size={25} />
        </Button>
      </div>
    </div>
  );
};

export default App;
