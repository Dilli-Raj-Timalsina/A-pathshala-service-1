'use client';
import { SessionProvider } from 'next-auth/react';

import React from 'react';

const Provider = ({ children, session }) => {
  return (
    <div>
      <SessionProvider session={session}>{children}</SessionProvider>
    </div>
  );
};

export default Provider;
// import { createContext, useState } from 'react';

// const UserContext = createContext();

// export const UserContextProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   return (
//     <UserContext.Provider value={[user, setUser]}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// export default UserContext;
