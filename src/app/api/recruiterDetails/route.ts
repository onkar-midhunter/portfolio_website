import dbConnect from "@/lib/dbConnect";
import RecruiterModel from "@/model/RecruiterModel";
import { sendEmail } from "@/helpers/sendEmail";
export async function POST(request:Request){
  await dbConnect();
  try {
    const body = await request.json();
    if(!body.recName || !body.recEmail ){
      return Response.json(
        { success: false, message: "Email and Name are Required" },
        { status: 400 }
      );
    }

    const {recName,recEmail,recMessage} = body;
    await RecruiterModel.create({
      recName,
      recEmail,
      recMessage
    })
    const emailResponse = await sendEmail(recEmail,recName)
    if (!emailResponse.success) {
      return Response.json(
        { success: false, message: emailResponse.message },
        { status: 500 }
      );
    }
     return Response.json(
      {
        success: true,
        message: "Email sent succesfully",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error in recruiter details API:', error);
    return Response.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}