import React from "react";

type Props = {};
interface Users {
  id: number;
  name: string;
  email: string;
}
const LoadingPage = async (props: Props) => {
  const data: Users[] = await (
    await fetch("https://jsonplaceholder.typicode.com/users")
  ).json();
  return (
    <div>
      <fieldset className="p-4 mb-4 border-2 border-dotted rounded-md border-opacity-10 border-theme-accent max-w-max">
        <legend className="px-2 text-sm capitalize text-theme-primary">
          Data with promise
        </legend>
        <div className="flex flex-col w-full gap-4 p-2 text-theme-body ">
          {data.map((user) => (
            <div key={user.id}>{user.name}</div>
          ))}
        </div>
      </fieldset>
    </div>
  );
};

export default LoadingPage;
