import { Effect } from "effect";

let count = 0;

export const getCount = Effect.succeed(count);

export const increment = Effect.sync(() => {
  count++;
  
  return count;
});

export const decrement = Effect.sync(() => {
  count--;
  
  return count;
});
