export function greet(name) {
  const trimmedName = name.trim();
  if (trimmedName === '') {
    return 'Hello, friend!';
  }
  return `Hello, ${trimmedName}!`;
}

export function farewell(name) {
  const trimmedName = name.trim();
  if (trimmedName === '') {
    return 'Goodbye, friend!';
  }
  return `Goodbye, ${trimmedName}!`;
}
