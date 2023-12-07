export type AppendGood<T extends Object> = {
  [Property in keyof T as Property extends string
    ? `good_${Property}`
    : never]: T[Property];
};
