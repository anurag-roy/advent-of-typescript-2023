type RockPaperScissors = '👊🏻' | '🖐🏾' | '✌🏽';

type WinsOver = {
  '👊🏻': '✌🏽';
  '✌🏽': '🖐🏾';
  '🖐🏾': '👊🏻';
};

export type WhoWins<
  X extends RockPaperScissors,
  Y extends RockPaperScissors
> = X extends Y ? 'draw' : X extends WinsOver[Y] ? 'win' : 'lose';
