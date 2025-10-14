export function hello(name: string) {
  return `Hello, ${name}!`;
}

if (require.main === module) {
  console.log(hello('World'));
}
