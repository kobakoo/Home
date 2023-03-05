import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://d23af18fa9ad4a65b43045e9be6b1e76@o4504072779988992.ingest.sentry.io/4504787228753920",

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});
