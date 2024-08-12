import axios from "axios";
import { useEffect } from "react";

const Welcome = () => {
  useEffect(() => {
    const resetCall = async () => {
      const token = localStorage.getItem("token");
      await axios.get("https://hiring.reachinbox.xyz/api/v1/onebox/reset", {
        headers: {
          Authorization: token,
        },
      });
    };
    resetCall();
  }, []);

  return (
    <div className="dark:text-white text-[#5B5F66] bg-[#ECEFF3] dark:bg-black flex justify-center items-center h-screen flex-col">
      <div>
        <img src="/nomsg.svg"></img>
      </div>
      <div className="text-2xl my-8">
        It’s the beginning of a legendary sales pipeline
      </div>
      <div className="dark:text-[#9E9E9E] text-[#5B5F66] w-72 text-center">
        When you have inbound E-mails you’ll see them here
      </div>
    </div>
  );
};

export default Welcome;
