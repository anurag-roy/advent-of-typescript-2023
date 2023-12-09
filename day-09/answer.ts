export type Reverse<S extends string> = S extends `${infer First}${infer Rest}`
  ? `${Reverse<Rest>}${First}`
  : '';
