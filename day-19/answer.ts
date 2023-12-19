type GenArr<Item, Size, Arr extends any[] = []> = Arr['length'] extends Size
  ? Arr
  : GenArr<Item, Size, [Item, ...Arr]>;

type At<
  Arr extends readonly any[],
  Index extends number
> = Arr[Index] extends undefined ? At<[...Arr, ...Arr], Index> : Arr[Index];

type Toys = ['🛹', '🚲', '🛴', '🏄'];

export type Rebuild<Sizes> = Sizes extends [...infer Rest, infer Last]
  ? [...Rebuild<Rest>, ...GenArr<At<Toys, Rest['length']>, Last>]
  : [];
