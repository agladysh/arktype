import type { error, isAny } from "../../utils/generics"
import type { inferAst, validateAst } from "./ast"
import type { astToString } from "./utils"

export type validateDivisor<l, $> = isDivisible<inferAst<l, $>> extends true
    ? validateAst<l, $>
    : error<writeIndivisibleMessage<astToString<l>>>

type isDivisible<data> = isAny<data> extends true
    ? false
    : [data] extends [number]
    ? true
    : false

export const writeIndivisibleMessage = <root extends string>(
    root: root
): writeIndivisibleMessage<root> =>
    `Divisibility operand ${root} must be a number`

type writeIndivisibleMessage<root extends string> =
    `Divisibility operand ${root} must be a number`