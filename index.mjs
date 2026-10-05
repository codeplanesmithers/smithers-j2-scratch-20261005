export function greet(name) {
  const trimmedName = name.trim();
  if (trimmedName === '') {
    return 'Hello, friend!';
  }
  return `Hello, ${trimmedName}!`;
}
