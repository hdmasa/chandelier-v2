// sentry.client.config.js
import * as Sentry from "@sentry/nextjs";

// Only enable Sentry in production
if (process.env.NODE_ENV === "production") {
  Sentry.init({
    dsn: "https://650ad5569e6b44168c6750dad16368a8@o999875.ingest.sentry.io/6006079",
    integrations: [],
    tracesSampleRate: 1.0, // Adjust this if you want fewer traces
    debug: false,          // Keep false for production
  });
} else {
  console.log("🟡 Sentry is disabled in development mode.");
}
