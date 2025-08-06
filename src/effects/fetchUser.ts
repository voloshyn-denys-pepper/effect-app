import { Effect } from "effect";
import { NetworkError, UserNotFoundError } from "./errors";

export const fetchUser = (userId: number) =>
  Effect.tryPromise({
    try: async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

      if (!res.ok) {
        if (res.status === 404) {
          throw new UserNotFoundError({ userId });
        }

        throw new Error(`HTTP ${res.status}`);
      }

      return res.json();
    },
    catch: (err) => {
      if (err instanceof UserNotFoundError) return err;

      return new NetworkError({ cause: err });
    }
  });