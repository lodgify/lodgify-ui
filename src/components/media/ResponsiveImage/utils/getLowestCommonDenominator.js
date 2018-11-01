/**
 * @param  {number} firstNumber
 * @param  {number} secondNumber
 * @return {number}
 */
export const getLowestCommonDenominator = (firstNumber, secondNumber) =>
  secondNumber > 0
    ? getLowestCommonDenominator(secondNumber, firstNumber % secondNumber)
    : firstNumber;
