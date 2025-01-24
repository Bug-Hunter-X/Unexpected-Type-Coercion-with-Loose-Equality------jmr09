function foo(a, b) {
  if (a === null || b === null) {
    return null; // Handle null values explicitly
  }
  // ... rest of the function. Now safe from type coercion issues.
  return a + b; //Example
}