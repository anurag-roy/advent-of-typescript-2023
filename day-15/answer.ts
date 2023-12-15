type BuildTuple<X, L extends number, T extends X[] = []> = T['length'] extends L
  ? T
  : BuildTuple<X, L, [...T, X]>;

export type BoxToys<X extends string, L> = L extends number
  ? BuildTuple<X, L>
  : never;
