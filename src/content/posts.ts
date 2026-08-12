export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  content: string;
  externalUrl?: string;
}

export const postsData: BlogPost[] = [
  {
    slug: "embedding-genie-api-multi-tenant",
    title: "Embedding Genie API for a Multi-Tenant Application",
    date: "Mar 21, 2026",
    description: "A deep dive into securing and scaling the Databricks Genie Conversation API for multi-tenant architectures — covering auth patterns, row-level security, and real-world tradeoffs.",
    externalUrl: "https://medium.com/dbsql-sme-engineering/embedding-genie-api-for-a-multi-tenant-application-d307bfbfc89b",
    content: `
This post explores how to embed the Databricks Genie API in a multi-tenant SaaS application, with a focus on keeping each tenant's data isolated while keeping the architecture simple.

## The Challenge

When you expose a natural-language query interface (like Genie) to end users in a multi-tenant product, you face a hard problem: the same underlying Databricks workspace may hold data for many customers, and you need a guarantee that Customer A can never see Customer B's rows — even when they ask the same question in plain English.

## Read the Full Article

This article was published on the DBSQL SME Engineering blog on Medium. [Read the full post →](https://medium.com/dbsql-sme-engineering/embedding-genie-api-for-a-multi-tenant-application-d307bfbfc89b)
    `
  },
  {
    slug: "betting-on-march-madness",
    title: "Betting Against the Sanity in March",
    date: "May 7, 2026",
    description: "Why the most rational strategy for March Madness bracket prediction might be to embrace chaos — a data-driven look at upset probability, prediction markets, and the limits of forecasting.",
    externalUrl: "https://joshuabae0.medium.com/betting-on-the-un-predictability-of-march-madness-cdb97fdd27d0",
    content: `
In 2018, UMBC defeated Virginia — a 1-seed — by twenty points. It was the first time a 16-seed had ever beaten a 1-seed in the history of the NCAA tournament. Vegas had written them off completely.

This is the kind of event that prediction models are built to ignore. And maybe that's the problem.

## The Paradox of Perfect Brackets

Every March, millions of people fill out brackets. Almost none of them are perfect after the first weekend. The math is merciless: the odds of a perfect bracket are roughly 1 in 9.2 quintillion if you pick randomly.

But the interesting question isn't "how do I pick the perfect bracket?" It's "how do I pick a *good* bracket?" — and those two questions have very different answers.

## Read the Full Article

This article was published on Medium. [Read the full post →](https://joshuabae0.medium.com/betting-on-the-un-predictability-of-march-madness-cdb97fdd27d0)
    `
  }
];
