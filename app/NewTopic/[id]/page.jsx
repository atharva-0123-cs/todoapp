
import EditForm from "@/app/componets/EditForm";
// import { data } from "autoprefixer";

const getTopic = async (topicId) => {
    
    const app_url = process.env.APP_URL;

    // console.log(params);
    // console.log(id);

    const res = await fetch(`${app_url}/api/topics/${topicId}`, {cache : "no-store"});

    const data = await res.json(); 

    return data;
}

const EditTopic = async ({params}) => {

    const {id : topicId} = params;

     const data = await getTopic(topicId);
    //  console.log(topic);
    // console.log(data);

    return (
        <EditForm id={topicId} topic={data}/>
    );
};
export default EditTopic;