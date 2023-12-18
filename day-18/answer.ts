type FilterUndefined<T extends unknown[]> = T extends []
  ? []
  : T extends [infer H, ...infer R]
  ? H extends undefined
    ? FilterUndefined<R>
    : [H, ...FilterUndefined<R>]
  : T;

type CountArray<S extends string[], T> = {
  [K in keyof S]: S[K] extends T ? K : undefined;
};

export type Count<S extends string[], T> = FilterUndefined<
  CountArray<S, T>
>['length'];
