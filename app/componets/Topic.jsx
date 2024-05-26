import Link from "next/link";
import { BiSolidEdit } from "react-icons/bi";
import RemoveButton from "./RemoveButton";
import StatusBar from "./StatusBox";

const TopicData = [
  { text: "Learn React" },
  { text: "Learn NextJs" },
  { text: "TypeScript is good" },
  { text: "C++ is for Game Dev" },
];



const getTopics = async () => {
  const app_url = process.env.APP_URL;

  try {
    const res = await fetch(`${app_url}/api/topics`, {
      cache: "no-store",
    });

    if (!res.ok) {
      return new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (err) {
    console.log("Error Loading Topics", err);
  }
};

const Topic = async () => {
  const { topics: Topics } = await getTopics();

  return (
    <div className="m-auto max-w-2xl items-center ">
      <ul className="space-y-4">
        {Topics &&
          Topics.map((topic) => {
            return (
              <li
                key={topic._id}
                className="flex items-center justify-between bg-slate-900 hover:shadow-lg text-white p-5 rounded-md"
              >
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">{topic.text}</h3>
                  <p className="mt-1 text-sm text-gray-400">
                    {topic.description}
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    {new Date(topic.dueDate).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <StatusBar status={topic.status} id = {topic._id}/>
                  <Link href={`/NewTopic/${topic._id}`}>
                    <BiSolidEdit className="cursor-pointer hover:text-blue-500 text-2xl" />
                  </Link>
                  <RemoveButton id={topic._id} />
                </div>
              </li>
            );
          })}

        {/* {!Topics && TopicData.map((topic) => {
          return (
            <li key={topic._id} className="flex justify-between cursor-pointer bg-slate-900 hover:shadow-lg  text-white p-5 rounded-md">
              <h3>{topic.text}</h3>
              <div className="flex gap-1 text-xl ">
                <button>
                <Link href={`/NewTopic/${topic._id}`}>
                <BiSolidEdit className="cursor-pointer hover:text-blue-500 "/>
                </Link>
                </button>
                <RemoveButton id={topic._id}/>
              </div> 
            </li>
          );
        })} */}
      </ul>
    </div>
  );
};
export default Topic;
