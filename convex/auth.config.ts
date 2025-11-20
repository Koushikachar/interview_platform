import { AuthConfig } from "convex/server";

export default {
  providers: [
    {
      domain: "https://concrete-hagfish-33.clerk.accounts.dev",
      applicationID: "convex",
    },
  ],
} satisfies AuthConfig;
