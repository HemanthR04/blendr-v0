import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Home() {
  const { isAuthenticated } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  console.log(user);
  if (isUserAuthenticated) {
    redirect('/home');
  }
  return (
    <>
      <div className="w-full h-screen bg-primary">
        <div className="flex flex-col items-center justify-center h-full">
          <Image src="/assets/logo.png" width={1400} height={100} alt="logo" />
          <div className="flex flex-col mt-4 gap-4">
          <RegisterLink className="px-4 py-[12px] text-white text-center rounded-full bg-black border-2 border-black font-bold">Create account</RegisterLink>
            <LoginLink className="w-full min-w-[300px] px-4 py-[12px] text-white bg-transparent border-2 rounded-full text-center font-bold">Log in</LoginLink>
            
            
          </div>
        </div>
      </div>
    </>

  );
}
