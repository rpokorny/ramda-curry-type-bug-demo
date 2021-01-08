import { curryN, identity } from "ramda";

type UnionWithNull = string | null;

function fnThatTakesUnionWithNull(x: UnionWithNull) {
  console.log(x);

  return x || 'foo';
}

const curriedFn = curryN(1, fnThatTakesUnionWithNull);

curriedFn('bar');

// this fails to typecheck even though it is a valid way to use ramda
curriedFn(null);
