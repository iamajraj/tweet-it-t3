import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../server/db";

type TQuote = {
  q: string;
  a: string;
  h: string;
};

const seed = async () => {
  try {
    let data: TQuote[] = await (
      await fetch("https://zenquotes.io/api/quotes")
    ).json();
    let formattedData = data.map((v) => ({
      text: v.q,
      author: v.a,
      html: v.h,
    }));

    await prisma.tweet.createMany({
      data: formattedData,
    });
    return "Success.";
  } catch (err) {
    return "SOmethng went wrong";
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await seed();
  res.json({
    s: response,
  });
}
