import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      fullName,
      company = "",
      phone,
      email = "",
      location = "",
      requirement = "STP",
      plantType = "",
      capacity = "",
      message = "",
    } = body;

    if (!fullName || !phone) {
      return NextResponse.json(
        { success: false, error: "Full Name and Phone Number are required." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    // If Resend API Key is configured
    if (apiKey && apiKey !== "re_your_resend_api_key_here") {
      const resend = new Resend(apiKey);

      const htmlContent = `
        <div style="font-family: Arial, sans-serif; padding: 24px; color: #181c1e; max-width: 650px; border: 1px solid #c3c6d1; border-radius: 12px; background-color: #ffffff;">
          <div style="background-color: #001e40; padding: 16px 20px; border-radius: 8px; margin-bottom: 20px; text-align: center;">
            <h2 style="color: #ffffff; margin: 0; font-size: 20px; font-weight: 800;">
              Sri Enviro Engineers • New Quotation Request
            </h2>
          </div>

          <p style="font-size: 14px; color: #43474f;">
            You have received a new project quotation request from your website form:
          </p>

          <table style="width: 100%; border-collapse: collapse; margin-top: 16px; font-size: 14px;">
            <tr style="border-bottom: 1px solid #ebeef0;">
              <td style="padding: 10px; font-weight: bold; width: 35%; color: #001e40;">Full Name:</td>
              <td style="padding: 10px; color: #181c1e;">${fullName}</td>
            </tr>
            <tr style="border-bottom: 1px solid #ebeef0;">
              <td style="padding: 10px; font-weight: bold; color: #001e40;">Company / Org:</td>
              <td style="padding: 10px; color: #181c1e;">${company || "N/A"}</td>
            </tr>
            <tr style="border-bottom: 1px solid #ebeef0;">
              <td style="padding: 10px; font-weight: bold; color: #001e40;">Phone Number:</td>
              <td style="padding: 10px;"><a href="tel:${phone}" style="color: #003366; font-weight: bold; text-decoration: none;">${phone}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #ebeef0;">
              <td style="padding: 10px; font-weight: bold; color: #001e40;">Email Address:</td>
              <td style="padding: 10px;"><a href="mailto:${email || ""}" style="color: #003366; text-decoration: none;">${email || "Not Provided"}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #ebeef0;">
              <td style="padding: 10px; font-weight: bold; color: #001e40;">Project Location:</td>
              <td style="padding: 10px; color: #181c1e;">${location || "Not Specified"}</td>
            </tr>
            <tr style="border-bottom: 1px solid #ebeef0;">
              <td style="padding: 10px; font-weight: bold; color: #001e40;">Requirement:</td>
              <td style="padding: 10px;"><span style="background-color: #a0f399; color: #002204; padding: 4px 10px; border-radius: 4px; font-weight: bold; font-size: 13px;">${requirement}</span></td>
            </tr>
            <tr style="border-bottom: 1px solid #ebeef0;">
              <td style="padding: 10px; font-weight: bold; color: #001e40;">Plant Type / Tech:</td>
              <td style="padding: 10px; color: #181c1e;">${plantType || "N/A"}</td>
            </tr>
            <tr style="border-bottom: 1px solid #ebeef0;">
              <td style="padding: 10px; font-weight: bold; color: #001e40;">Approx. Capacity:</td>
              <td style="padding: 10px; color: #181c1e;">${capacity || "N/A"}</td>
            </tr>
          </table>

          <div style="margin-top: 20px; padding: 16px; background-color: #f7fafc; border-left: 4px solid #003366; border-radius: 4px;">
            <p style="margin: 0 0 6px 0; font-weight: bold; color: #001e40; font-size: 14px;">Project Details / Message:</p>
            <p style="margin: 0; color: #43474f; font-size: 14px; line-height: 1.5;">${message || "No additional details provided."}</p>
          </div>

          <div style="margin-top: 24px; text-align: center; font-size: 12px; color: #737780; border-t: 1px solid #ebeef0; pt: 16px;">
            This email was generated automatically by the Sri Enviro Engineers Website contact form.
          </div>
        </div>
      `;

      await resend.emails.send({
        from: "Sri Enviro Engineers Website <onboarding@resend.dev>",
        to: ["daasarlasreenu@gmail.com"],
        replyTo: email || undefined,
        subject: `🚨 New Quotation Request: ${requirement} - ${fullName}`,
        html: htmlContent,
      });

      return NextResponse.json({
        success: true,
        message: "Quotation request submitted and email notification delivered!",
      });
    }

    // Fallback log if RESEND_API_KEY is not configured yet
    console.log("Form submission received (Add RESEND_API_KEY to .env.local to deliver to Gmail):", body);
    return NextResponse.json({
      success: true,
      message: "Form received! Configure RESEND_API_KEY in .env.local to enable live Gmail forwarding.",
    });
  } catch (error: any) {
    console.error("API Contact Route Error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to process quotation request" },
      { status: 500 }
    );
  }
}
