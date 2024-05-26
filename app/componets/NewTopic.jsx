"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import TopicLoading from "./TopicLoading";
// import { useSearchParams } from "next/navigation";

const NewTopic = () => {

  const [isSubmmiting, setIsSubmmiting] = useState(false);
  // const searchParams = useSearchParams();
  const router = useRouter();

  // const search = searchParams.get('id');
  // console.log(search); 

  const submitHandler = async (e) => {
    e.preventDefault();


    setIsSubmmiting(true);

    const data = {
      text: e.target.topic?.value,
      description : e.target.description?.value,
      dueDate : e.target.dueDate?.value
    };
    // console.log(text);
    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data);

    // console.log(JSONdata);

    // API endpoint where we send form data.
    const endpoint = "/api/topics";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options);

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json();

    if(result){
      setIsSubmmiting(false);
      router.push('/');
      router.refresh();
    }

    // alert(`${result.message}`);
  };

  return (
    <div className="">
    <form
      onSubmit={submitHandler}
      className="flex flex-col justify-between items-center bg-slate-900 text-white rounded m-auto max-w-xl p-4 my-2"
    >
     
     <div className="w-full mb-4">
        <label className="block mb-2 text-sm font-medium" htmlFor="topic">
          Title:
        </label>
        <input
          type="text"
          placeholder="Enter topic"
          className="w-full p-3 rounded border border-gray-300 outline-none text-slate-900 font-semibold"
          name="topic"
          id="topic"
          required
        />
      </div>
     <div className="w-full mb-4">
        <label className="block mb-2 text-sm font-medium" htmlFor="description">
          Description:
        </label>
        <input
          type="text"
          placeholder="Enter description"
          className="w-full p-3 rounded border border-gray-300 outline-none text-slate-900 font-semibold"
          name="description"
          id="description"
          required
        />
      </div>
      <div className="w-full mb-4">
        <label className="block mb-2 text-sm font-medium" htmlFor="dueDate">
          Due Date:
        </label>
        <input
          type="date"
          placeholder="Enter dueDate"
          className="w-full p-3 rounded border border-gray-300 outline-none text-slate-900 font-semibold"
          name="dueDate"
          id="dueDate"
          required
        />
      </div>
     


        
        {/* 
[NOTE] '<Link></Link>' component is not working for submmiting a form  
<Link type="submit"  href="/NewTopic" className=" text-white bg-indigo-900 p-2 rounded"> 
</Link> 
*/}
        <button type="submit" className=" text-white bg-indigo-900 p-2 rounded hover:bg-indigo-700 transition ease-in-out "  disabled = {isSubmmiting}>
        {/* {isSubmmiting && <svg className="animate-spin h-5 w-5 mr-3 " viewBox="0 0 24 24"></svg>} */}
        {isSubmmiting ? 'Processing...' : 'Add Topic'}
        </button>
      {/* <button type="submit">Demo Button</button> */}
    </form>
      {isSubmmiting && <TopicLoading/>}
    </div>
  );
};
export default NewTopic;
