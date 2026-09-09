# Enquiry integration

The public form performs client-side validation, includes a honeypot, and sends only to `VITE_ENQUIRY_ENDPOINT` when configured. Without that endpoint it safely displays a generic submission error; it does not pretend to send an email.

## Recommended Firebase design

Deploy a Firebase HTTPS Cloud Function as the endpoint. The function should validate and sanitise the request, reject a non-empty honeypot, rate-limit requests, and use a server timestamp to store allowed fields in Firestore: `name`, `email`, `phone`, `service`, `projectDescription`, `preferredContactMethod`, `createdAt`, `status`, and `source`. Internal fields such as assignment and notes must be writable only by trusted staff.

Do not make Firestore publicly writable. Keep provider credentials in Firebase Secret Manager or Cloud Function environment configuration, never in the Vite client.

## Required configuration

- `VITE_ENQUIRY_ENDPOINT`: public HTTPS endpoint URL for the deployed function.
- Server-only notification provider credentials, if an email notification provider is selected.
- Firebase App Check is recommended before production, plus endpoint rate limiting and monitoring.
