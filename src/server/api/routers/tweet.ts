import { createTRPCRouter, publicProcedure } from "../trpc";
import { prisma } from "../../db";
import { z } from "zod";

export const tweetRouter = createTRPCRouter({
  getTweets: publicProcedure.query(async (opts) => {
    const tweets = await prisma.tweet.findMany({});
    return tweets;
  }),
  createTweet: publicProcedure
    .input(
      z.object({
        text: z.string(),
        author: z.string(),
      })
    )
    .mutation(async (opts) => {
      await prisma.tweet.create({
        data: {
          text: opts.input.text,
          author: opts.input.author,
        },
      });
    }),
});
