# Security Specification: ComradeHustle

## Data Invariants
1. A **Job** must have an employer.
2. A **JobApplication** must be linked to a valid Job and a unique Worker.
3. A **Product** must have a seller.
4. An **Order** must link a Buyer, Seller, and Listing (Job or Product).
5. A **Wallet** can only be accessed by the owner.
6. **Escrow funds** can only be released by the platform logic (state terminality) or Employer/Buyer confirmation.
7. **Chats** are only accessible to the participants.

## The "Dirty Dozen" Payloads (Red Team Test Cases)
1. **Identity Spoofing**: Attempt to create a Job with `employerId` set to another user.
2. **State Shortcutting**: Attempt to update a Job status from `draft` directly to `completed` without `active` or `in_progress`.
3. **Price Manipulation**: Attempt to update a Product's `price` while it is in someone's cart or order.
4. **Escrow Hijacking**: Attempt to update an Order's `escrowStatus` to `released` as a Seller.
5. **Wallet Drain**: Attempt to update another user's `availableBalance`.
6. **Chat Snooping**: Attempt to read messages in a `chatId` where the user is not in `participants`.
7. **Fake Application**: Attempt to apply for a Job that is `cancelled`.
8. **Shadow Field Injection**: Attempt to create a Product with a hidden `isAdmin: true` field.
9. **Resource Poisoning**: Use a 10MB string for a Job `description`.
10. **Unauthorized Dispute**: Attempt to mark an Order as `disputed` as an unrelated user.
11. **Timestamp Spoofing**: Provide a `createdAt` value from 1990.
12. **Malicious ID Injection**: Use a `/../../` sequence in a document ID.

## Test Runner (Logic Check)
- `profiles/{userId}`: `request.auth.uid == userId` for writes.
- `jobs/{jobId}`: `request.auth.uid == employerId` for updates.
- `chats/{chatId}`: `request.auth.uid in resource.data.participants` for reads.
- `wallets/{userId}`: `request.auth.uid == userId` for reads.
