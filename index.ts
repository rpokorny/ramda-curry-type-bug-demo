import { curryN, identity } from "ramda";

type UnionWithNull = ((s: string) => string | null) | null;

function fnThatTakesUnionWithNull(x: UnionWithNull, y: number) {
  console.log(x);

  return x ? x('foo') : 'foo';
}

const curriedFn = curryN(2, fnThatTakesUnionWithNull);

curriedFn(identity, 0);

// this fails to typecheck even though it is a valid way to use ramda
curriedFn(null, 0);
