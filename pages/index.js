import Head from "next/head";
function hello() {
  /* ... */
}
export default function Home() {
  const obj = {};

  console.log(obj.constructor.name);
  console.log(hello.name);

  return <div>Hello :)</div>;
}
