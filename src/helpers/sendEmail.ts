import { resend } from "@/lib/resend";
import { ApiResponse } from "@/types/apiResponse";
import RecruiterEmail from "../../emails/SendEmail";

export async function sendEmail(
  recEmail: string,
  recName: string
): Promise<ApiResponse> {
  try {
    await resend.emails.send({
      from: 'Onkar <hello@onkar-khedekar.online>',
      to: recEmail,
      subject: "Onkar Khedekar || portfolio website",
      react: RecruiterEmail({ recruiterName:recName }),
    });
    return {
      success: true,
      message: "verification email send succesfully ",
    };
  } catch (emailerror: any) {
    console.error("error sending verification email", emailerror);
    return {
      success: false,
      message: "failed to send verification email",
    };
  }
}
