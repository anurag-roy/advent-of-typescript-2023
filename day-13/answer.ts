type Length<T extends any[]> = T extends { length: infer L extends number }
  ? L
  : never;

type BuildTuple<N extends number, T extends unknown[] = []> = T extends {
  length: N;
}
  ? T
  : BuildTuple<N, [...T, 0]>;

type AddOne<N extends number> = Length<[0, ...BuildTuple<N>]>;

export type DayCounter<S extends number, E extends number> = S extends E
  ? E
  : S | DayCounter<AddOne<S>, E>;
