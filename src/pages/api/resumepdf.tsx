import { NextApiRequest, NextApiResponse } from "next";

const s3Url = process.env.NEXT_PUBLIC_S3_RESUME;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (!s3Url) {
      res.status(500).send("S3 URL is not defined");
      return;
    }

    const response = await fetch(s3Url, { redirect: "manual" });

    console.log("Fetch response status:", response.status);

    if (!response.ok) {
      res.status(500).send("Error fetching resume");
      return;
    }

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", 'inline; filename="resume.pdf"');

    const arrayBuffer = await response.arrayBuffer();
    res.send(Buffer.from(arrayBuffer));
  } catch (error) {
    console.error("Error fetching resume:", error);
    res.status(500).send("Error fetching resume");
  }
}
