import connectMongoDB from "@/lib/mongodb";
import Topic from "@/models/TopicModel";
import { NextResponse } from "next/server";

export async function PUT(request, {params}){
    // console.log(request);
    // console.log(`This is params : ${params} \n\n\n`);

    // console.log(params);
    const {id} = params;
    const {newText : text, newDescription : description, newDueDate : dueDate} = await request.json();
    // const data = await request.json();
    // console.log(data);

    await connectMongoDB();
    await Topic.findByIdAndUpdate(id,{text,description, dueDate});

    // [<-------NOTE------->]
    // NextResponse is 'REQURIED' step,
    // for performing curd opretaion using any method such as
    // [GET,POST,PUT,DELETE,etc...]
    return NextResponse.json({message : "Topic Updated"}, {status : 200});

} 

export async function GET(request, {params}){

    const {id} = params;
    await connectMongoDB();
    // console.log(id);
    const resp = await Topic.findOne({_id : id});
    return NextResponse.json({resp}, {status : 200});

}