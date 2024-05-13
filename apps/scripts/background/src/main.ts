// import {
//   BrowserClient,
//   defaultStackParser,
//   makeFetchTransport,
//   Scope,
// } from "@sentry/browser";
import * as Sentry from "@sentry/browser";

// export const scope = new Scope()
// Sentry.onLoad(function(){
//   const client = new BrowserClient({
//     dsn: 'https://b065274b492d2afd1c5b558a7fac99a1@o4505801143681024.ingest.us.sentry.io/4506972863725568',
//     transport: makeFetchTransport,
//     stackParser: defaultStackParser,
//     integrations: [
//       Sentry.browserTracingIntegration(),
//       Sentry.replayIntegration({
//         maskAllText: false,
//         blockAllMedia: false,
//       }),
//     ],
//     environment: "production",
//   })
//
//   scope.setClient(client)
//
//   client.init() // initializing has to be done after setting the client on the scope
//   // You can capture exceptions manually for this client like this:
//   console.log('sentry client initialized. Throwing test error.');
//   scope.captureException(new Error('test error: example'))
// });

Sentry.onLoad(function() {
  Sentry.init({
    dsn: 'https://b065274b492d2afd1c5b558a7fac99a1@o4505801143681024.ingest.us.sentry.io/4507233378435072',
    // Performance Monitoring
    tracesSampleRate: 1.0, // Capture 100% of the transactions
    // Session Replay
    replaysSessionSampleRate: 1.0, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
    replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
    debug: true
  });
});

setInterval(() => {
  try {
    console.log('Call undefined function');
    // @ts-expect-error Testing Sentry error handling... intentional undefined function
    myUndefinedFunction4();
  } catch (err) {
    console.log('Send error to Sentry', err);
    Sentry.eventFromMessage(() => [], 'Test Error message').then(() => {
      console.log('Event message promise response');
    });
    Sentry.captureException(err);
  }
}, 10000);
