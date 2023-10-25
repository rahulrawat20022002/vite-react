import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

function Github() {
  const data = useLoaderData();
  // const [data, setdata] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/hiteshchoudhary")
  //     .then((resp) => resp.json())
  //     .then((data) => {
  //       console.log(data);
  //       setdata(data);
  //     });
  // }, []);
  return (
    <div className="text-center flex justify-between bg-slate-800 text-yellow-50 text-5xl">
      <div className="ml-4 pl-4">Followers:{data.followers}</div>
      <img className="w-28 " src={data.avatar_url} alt="" />
    </div>
  );
}

export default Github;

export const githubinfoloader = async () => {
  const resp = await fetch("https://api.github.com/users/hiteshchoudhary");
  return resp.json();
};
