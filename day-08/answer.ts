export type RemoveNaughtyChildren<T extends Object> = {
  [K in keyof T as K extends `naughty_${string}` ? never : K]: T[K];
};
