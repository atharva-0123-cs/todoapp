'use client'
import {MdDelete} from "react-icons/md";
import { useRouter } from "next/navigation";


const RemoveButton = ({ id }) => {

    const router = useRouter();

  const RemoveTopic = async () => {
      // Form the request for sending data to the server.
      const options = {
        // The method is POST because we are sending data.
        method: "DELETE",
        // Tell the server we're sending JSON.
        headers: {
          "Content-Type": "application/json",
        },
      };

    try{

        const confirmed = confirm("Are you sure...");

        if(confirmed){
            const res = await fetch(`/api/topics?id=${id}`, options);

            if(res.ok){
                router.refresh();
            }

            if(!res.ok){
                throw new Error("Deleting Error");
            }
        }
    }catch(err){
        console.log("Deleting Error", err);
    }
  };

  return (
    <button onClick={RemoveTopic}>
      <MdDelete className="cursor-pointer text-red-400 hover:text-red-700" />
    </button>
  );
};

export default RemoveButton;
