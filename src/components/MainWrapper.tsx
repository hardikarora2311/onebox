import React, { useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import CenterSection from "./CenterSection";
import { LuLoader2 } from "react-icons/lu";

interface Thread {
  id: string;
  subject: string;
  snippet: string;
}
const fetchThreads = async (): Promise<Thread[]> => {
  const token = localStorage.getItem("token");
  const response = await axios.get(
    "https://hiring.reachinbox.xyz/api/v1/onebox/list",
    {
      headers: {
        Authorization: token,
      },
    }
  );
  return response.data.data;
};

const MainWrapper = () => {
  const [selectedThread, setSelectedThread] = useState<string | null>(null);

  const {
    data: threads,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["threads"],
    queryFn: fetchThreads,
    refetchInterval: 2000,
  });

  if (isLoading) {
    return (
      <div className="bg-[#ECEFF3] dark:bg-black dark:text-white text-[#5B5F66] flex h-screen w-full justify-center items-center">
        <LuLoader2 className="animate-spin size-8" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="bg-[#ECEFF3] dark:bg-black dark:text-white text-[#5B5F66] flex h-screen w-full justify-center items-center">
        Error fetching threads
      </div>
    );
  }
  const loadMail = async (threadId: any) => {
    setSelectedThread(threadId);
  };

  return (
    <div className="bg-[#ECEFF3] dark:bg-black text-white pt-16 flex w-full  h-screen">
      <div className="w-1/4 ">
        <LeftSection data={threads} loadMail={loadMail} />
      </div>
      <div className="w-2/4">
        {/* @ts-ignore */}
        <CenterSection selectedThread={selectedThread} />
      </div>
      <div className="w-1/4">
        <RightSection />
      </div>
    </div>
  );
};

export default MainWrapper;
