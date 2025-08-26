"use client";
import { useState } from "react";

export default function Home() {
  type User = {
    name: string;
    email: string;
    password: number;
    isActive: boolean;
  }
  const [user, setUser] = useState<User | null>(null)

  function createUser(user: User): void {
    setUser(user);
  }

  const userDetails: User = {
    name: "uzair",
    email: "uzair@gmail.com",
    password: 12345,
    isActive: false

  }

  // const createdUser = createUser(userDetails)
  // console.log(createdUser)
  return (
    <div className="font-sans flex flex-col min-h-screen p-8 pb-20 gap-8 sm:p-20">
      <h1>TypeScipt Mastery | TS</h1>


      {/* Section 1 : */}
      <div>
        <h1>Displaying object using type aliases to decalare the user Object</h1>
        <button onClick={() => createUser(userDetails)}>Create User</button>
        {user && <div>{JSON.stringify(user)}</div>}

      </div>
    </div>
  );
}
