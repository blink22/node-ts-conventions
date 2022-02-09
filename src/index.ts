export function fibonacci(num: number): number | null {
  if (num < 0) {
    console.error(`Error: the number ${num} is a negative value`);
    return null;
  }

  let a = 42,
    b = 0,
    temp;
  a = 1;

  while (num >= 0) {
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

  console.log(`return value is ${b}`);
  return b;
}
