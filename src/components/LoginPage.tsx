"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Footer from "./Footer";

export default function LoginPage() {
  const router = useRouter();

  const handleGoogleLogin = () => {
    window.location.href =
      "/api/auth/google-login?redirect_to=" +
      encodeURIComponent(window.location.origin + "/auth/callback");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      router.push("/onebox");
    }
  }, [router]);

  return (
    <div>
      <nav className="border-[#25262B] bg-black border-b-2 fixed text-white h-16 w-screen flex items-center justify-center">
        <div className="">
          <img src="/logo.png" alt="logo" className="h-9"></img>
        </div>
      </nav>
      <div className="bg-black text-white w-screen h-screen flex flex-col justify-center items-center">
        <div className="bg-[#111214] text-center space-y-10 px-16 rounded-2xl border border-[#343A40]">
          <div>
            <div className="text-xl font-semibold mt-6">
              Create a new account
            </div>
            <div
              className="mt-6 border-white/40 border px-20 py-2 text-sm  flex items-center text-[#CCCCCC] rounded-lg cursor-pointer"
              onClick={handleGoogleLogin}
            >
              <img src="/google.svg" alt="google" className="w-4 mr-3"></img>
              Sign Up with Google
            </div>
          </div>
          <div>
            <Link
              href="/"
              className="bg-gradient-to-r from-[#4B63DD] to-[#0524BF] mx-16 mt-5 px-6 text-sm py-3 rounded-md cursor-pointer"
            >
              Create an Account
            </Link>
            <div className="my-8 mb-10 text-[#909296]">
              Already have an account?{" "}
              <Link href="/" className="text-[#C1C2C5]">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
