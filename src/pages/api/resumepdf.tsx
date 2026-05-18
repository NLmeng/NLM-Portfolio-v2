import { NextApiRequest, NextApiResponse } from "next";

const resumeUrl = process.env.S3_RESUME_URL ?? process.env.NEXT_PUBLIC_S3_RESUME;
const MAX_RESUME_SIZE_BYTES = 10 * 1024 * 1024;

const isAllowedResumeUrl = (value: string): boolean => {
  try {
    const url = new URL(value);
    return url.protocol === "https:";
  } catch {
    return false;
  }
};

const setSecurityHeaders = (res: NextApiResponse) => {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("Cache-Control", "private, no-store, max-age=0");
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  setSecurityHeaders(res);

  if (req.method !== "GET" && req.method !== "HEAD") {
    res.setHeader("Allow", "GET, HEAD");
    res.status(405).send("Method not allowed");
    return;
  }

  try {
    if (!resumeUrl || !isAllowedResumeUrl(resumeUrl)) {
      res.status(500).send("Resume URL is not configured correctly");
      return;
    }

    const response = await fetch(resumeUrl, { redirect: "error" });

    if (!response.ok) {
      res.status(502).send("Error fetching resume");
      return;
    }

    const contentType = response.headers.get("content-type") ?? "";
    if (!contentType.toLowerCase().includes("application/pdf")) {
      res.status(502).send("Invalid resume content type");
      return;
    }

    const contentLength = response.headers.get("content-length");
    if (contentLength && Number(contentLength) > MAX_RESUME_SIZE_BYTES) {
      res.status(502).send("Resume file is too large");
      return;
    }

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", 'inline; filename="resume.pdf"');

    if (req.method === "HEAD") {
      res.status(200).end();
      return;
    }

    const arrayBuffer = await response.arrayBuffer();
    if (arrayBuffer.byteLength > MAX_RESUME_SIZE_BYTES) {
      res.status(502).send("Resume file is too large");
      return;
    }

    res.status(200).send(Buffer.from(arrayBuffer));
  } catch (error) {
    console.error("Error fetching resume:", error);
    res.status(502).send("Error fetching resume");
  }
}
