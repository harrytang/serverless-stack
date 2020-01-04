/*
 * @Author: Harry Tang - harry@powerkernel.com
 * @Date: 2020-01-03 20:42:19
 * @Last Modified by: Harry Tang - harry@powerkernel.com
 * @Last Modified time: 2020-01-03 20:49:41
 */
export function calculateCost(storage) {
  const rate = storage <= 10 ? 4 : storage <= 100 ? 2 : 1;

  return rate * storage * 100;
}
