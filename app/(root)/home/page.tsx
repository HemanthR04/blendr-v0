import { getKindeServerSession, LogoutLink } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';
import React from 'react'






const page = async () => {
  const { isAuthenticated } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  console.log(user);
  if (!isUserAuthenticated) {
    redirect('/');
  }

  return (
    <div>
      <LogoutLink>Log out</LogoutLink>
      <div>
        {user?.given_name}
      </div>
    </div>
  )
}

export default page