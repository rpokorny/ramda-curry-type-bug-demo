import { curryN, identity } from "ramda";

type UnionWithNull = ((s: string) => string) | null;

function fnThatTakesUnionWithNull(x: UnionWithNull) {
  console.log(x);

  return x ? x('foo') : 'foo';
}

const curriedFn = curryN(1, fnThatTakesUnionWithNull);

curriedFn(identity);

// this fails to typecheck even though it is a valid way to use ramda
curriedFn(null);
