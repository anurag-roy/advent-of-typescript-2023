type FindSanta1<T extends any[]> = {
  [K in keyof T]: T[K] extends '🎅🏼'
    ? K extends `${infer D extends number}`
      ? D
      : never
    : never;
}[number];

export type FindSanta<T extends any[][]> = {
  [K in keyof T]: K extends `${infer D extends number}`
    ? FindSanta1<T[K]> extends never
      ? never
      : [D, FindSanta1<T[K]>]
    : never;
}[number];
