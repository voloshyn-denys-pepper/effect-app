import { Data } from "effect";

export class UserNotFoundError extends Data.TaggedError(
    'UserNotFoundError'
  )<{ userId: number }> {}

export class NetworkError extends Data.TaggedError(
    'NetworkError'
  )<{ cause?: unknown }> {}