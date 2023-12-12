export type FindSanta<T extends any[]> = {
  [K in keyof T]: T[K] extends '🎅🏼'
    ? K extends `${infer D extends number}`
      ? D
      : never
    : never;
}[number];
