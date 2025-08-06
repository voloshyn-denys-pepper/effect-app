import { Effect, Console } from "effect";

export const parallelFetch = () =>
  Effect.all(
    [
      fetchWithDelay("Task 1", 2000),
      fetchWithDelay("Task 2", 3000),
      fetchWithDelay("Task 3", 1000)
    ],
    { concurrency: 2 }
  );

const fetchWithDelay = (name: string, delay: number) =>
  Effect.gen(function* () {
    yield* Console.log(`Start ${name}`);
    
    yield* Effect.sleep(delay);
    
    yield* Console.log(`${name} done`);

    return name;
  });
