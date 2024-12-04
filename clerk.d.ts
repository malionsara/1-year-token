// clerk.d.ts
export {};

declare global {
  interface Window {
    Clerk: {
      session: {
        getToken: (args?: { template?: string }) => Promise<string>;
      };
    };
  }
}
