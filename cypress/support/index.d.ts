export {};
declare global {
  namespace Cypress {
    interface Chainable {
      // eslint-disable-next-line @typescript-eslint/method-signature-style
      login(username: string, password: string): Chainable<void>;
    }
  }
}
