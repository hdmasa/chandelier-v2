// sentry.server.config.js
import * as Sentry from "@sentry/nextjs";

// Only enable Sentry in production
if (process.env.NODE_ENV === "production") {
  Sentry.init({
    dsn: "https://650ad5569e6b44168c6750dad16368a8@o999875.ingest.sentry.io/6006079",
    tracesSampleRate: 1.0,
    debug: false,
  });
} else {
  console.log("🟡 Sentry (server) is disabled in development mode.");
}
