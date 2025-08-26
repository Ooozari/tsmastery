"use client";
import { useEffect, useState } from "react";

export default function Home() {
  type User = {
    name: string;
    email: string;
    password: number;
    isActive: boolean;
  }
  const [user, setUser] = useState<User | null>(null)
  const [show, setShow] = useState<boolean>(false)
  const [showMarks, setShowMarks] = useState<boolean>(false)
  const [studentMarks, setstudentMarks] = useState<number[]>([])
  const [arrayOfArrays, setarrayOfArrays] = useState<number[][]>([[]])
  type MyObject = {
    name: string
  }
  const [arrayOfObjects, setarrayOfObjects] = useState<MyObject[]>([])





  function createUser(user: User): void {
    setUser(user);
  }

  const userDetails: User = {
    name: "uzair",
    email: "uzair@gmail.com",
    password: 12345,
    isActive: false

  }

  // Union Interstion of types aliases
  type Employee = {
    readonly _id: number,
    name: string,
    hour: number,
  }

  type Doctor = {
    sector?: string,
    specilization: string,
  }

  type Sergon = Employee & Doctor & {
    ward: string,
  }

  const sergon1: Sergon = {
    _id: 12345,
    name: "guest",
    hour: 3,
    sector: "Lahore",
    specilization: "Dentist",
    ward: "Health",

  }



  // ARRAYS


  const setMarks = () => {
    const marks: number[] = [10, 21, 4, 2, 52, 2, 2, 24, 24, 1];
    setstudentMarks((prev) => [...prev, ...marks])

  }
  useEffect(() => {
    setMarks()
  },[])



  return (
    <div className="font-sans flex flex-col min-h-screen p-8 pb-20 gap-8 sm:p-20">
      <h1>TypeScipt Mastery | TS</h1>


      {/* Section 1 : type aliase*/}
      <div>
        <h1>Displaying object using type aliases to decalare the user Object</h1>
        <button onClick={() => createUser(userDetails)}>Create User</button>
        {user && <div>{JSON.stringify(user)}</div>}

      </div>


      {/* Union Interstion of types aliases */}
      <div>
        <h1>Union Interstion of types aliases</h1>
        <button onClick={() => setShow(!show)}>Show Sergon details</button>
        {show && <div>
          {JSON.stringify(sergon1)}
        </div>
        }
      </div>

      {/* Arrays */}
      <div>
        <h1>Arrays</h1>
        <button onClick={() => {

          setShowMarks(!showMarks)
        }}>showMarks</button>
        {showMarks ? (<div>
          {
            studentMarks.map((mark, index) => (
              <div key={index}>
                {mark}
              </div>
            ))
          }
        </div>) : (
      <p>No marks available</p>)
        }
      </div>

    </div>

  );
}
