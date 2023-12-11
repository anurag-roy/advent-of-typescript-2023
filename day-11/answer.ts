export type SantaListProtector<T> = {
  readonly [K in keyof T]: T[K] extends Function | number | string | boolean
    ? T[K]
    : SantaListProtector<T[K]>;
};
