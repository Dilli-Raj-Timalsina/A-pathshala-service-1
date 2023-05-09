import { cookies } from 'next/headers';
const Cookie = () => {
  const store = cookies();
  console.log(store.get('jwt'));
  return <div>Cookie</div>;
};

export default Cookie;
