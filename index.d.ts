export type FixedLengthCore = <
  Length extends number,
  Value  extends Record<PropertyKey, unknown>,
>(
  length : Length,
  value  : Value,
) => Value & {
  length: Length,
};

/**
 * @param {Length} length - number
 * @param {Value} value - object
 * @returns {Value & Record<"length", Length>} { ...value, lenght: number };
 * @template {number} Length
 * @template {Record<PropertyKey, unknown>} Value
 * @example
 * const executor = (...parameters) => ...;
 * executor.length; // 0
 * const fixLengthExecutor = fixedLengthCore(2, executor);
 * fixLengthExecutor.length; // 2
 */
declare const fixedLengthCore: FixedLengthCore;
export default fixedLengthCore;
