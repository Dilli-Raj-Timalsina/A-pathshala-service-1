'use client';
import Navbar from './components/navbar/Navbar';
import './globals.css';
import { Source_Sans_Pro } from 'next/font/google';
// import { registerLicense } from '@syncfusion/ej2-base';
// registerLicense(
//   'Mgo+DSMBaFt+QHJqVk1hXk5Hd0BLVGpAblJ3T2ZQdVt5ZDU7a15RRnVfR11mSHpTckBqW3pfcw==;Mgo+DSMBPh8sVXJ1S0R+X1pFdEBBXHxAd1p/VWJYdVt5flBPcDwsT3RfQF5jTH5Wd0FjXXpXcnJTRQ==;ORg4AjUWIQA/Gnt2VFhiQlJPd11dXmJWd1p/THNYflR1fV9DaUwxOX1dQl9gSXtTc0RnWXtbeXZST2M=;MTkzODQ1N0AzMjMxMmUzMjJlMzNrQUhJZGEwbkxkb3haOXhxTmRNS3QxOWk1N1ZlM1NMdkc5MDRHeVhINzBRPQ==;MTkzODQ1OEAzMjMxMmUzMjJlMzNPKzNWcDMyQ083VitvcU9hTkdEYnJxV2gvZU9XcDEzbVRBRU5VYkI0bzdrPQ==;NRAiBiAaIQQuGjN/V0d+Xk9HfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hSn5WdkBiXX9adX1WQmZf;MTkzODQ2MEAzMjMxMmUzMjJlMzNCSyt2WC9OSGRuKzYxbU9NVmtQVk9BUkQxN3dnNmRJL3dHbnNXYkhyT1VJPQ==;MTkzODQ2MUAzMjMxMmUzMjJlMzNjTHhSOC9OUnJ0TEwvY3RQMmJkN2EzbVRwNDZrazlVRDFrdFJueEZQank4PQ==;Mgo+DSMBMAY9C3t2VFhiQlJPd11dXmJWd1p/THNYflR1fV9DaUwxOX1dQl9gSXtTc0RnWXtbeXBUQWM=;MTkzODQ2M0AzMjMxMmUzMjJlMzNVUDdTQmtwZ3ZEMWJ2L2FDemN4WDhCakRDWEFXelNFU0RjT1RPRStHQkZRPQ==;MTkzODQ2NEAzMjMxMmUzMjJlMzNIdXBGSXBYV0IvSnpPTDN2RU9tc3JtQk1QTGFDRmlRMzNQeHBmbkdWQTg0PQ==;MTkzODQ2NUAzMjMxMmUzMjJlMzNCSyt2WC9OSGRuKzYxbU9NVmtQVk9BUkQxN3dnNmRJL3dHbnNXYkhyT1VJPQ=='
// );
// export const metadata = {
//   title: 'A+ Pathshala',
//   description: 'This Platform Empowers Individual Teachers ',
//   icons: {
//     icon: '/icon.svg',
//   },
// };
import { createContext, useContext, useState } from 'react';
// If loading a variable font, you don't need to specify the font weight
const ssp = Source_Sans_Pro({
  subsets: ['latin'],
  weight: '900',
});
// const headingFont = ssp.className;
export const userContext = createContext({});
export const cookieContext = createContext({});

export default function RootLayout({ children }) {
  const [user, setUser] = useState({});
  const [cookie, setCookie] = useState(null);
  return (
    <html lang="en">
      <body className={ssp.className}>
        <userContext.Provider value={{ user, setUser }}>
          <cookieContext.Provider value={{ cookie, setCookie }}>
            <header>
              <Navbar />
            </header>
            {/* <SkeletonCard /> */}
            {children}
          </cookieContext.Provider>
        </userContext.Provider>
      </body>
    </html>
  );
}
