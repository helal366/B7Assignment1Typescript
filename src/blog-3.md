## 3.How do Generics allow you to build reusable components and functions that stay strictly typed regardless of the data structures passed in?

## Answer:
Generics in TypeScript let you write one reusable piece of code that adapts to different data types while still keeping full type safety. Instead of fixing a type in advance (like string or number), you define a placeholder type that gets decided when the code is used.

1. The core idea: type as a parameter
Without generics, you either lose flexibility or type safety:
```
function normal(value: any) {
  return value;
}
``
This is flexible, but unsafe:
```
const result = normal("hello");
result.toUpperCase();  // TypeScript can't guarantee this is a string
```

2. Generics make it strictly typed
Now introduce a generic:
```
function normal<T>(value: T): T {
  return value;
}
```
Usage:
```
const a = normal<string>("hello");
a.toUpperCase();  // safe

const b = normal<number>(10);
b.toFixed();  // safe
```

3. Why this makes code reusable
Without generics, we would need multiple functions:
```
function echoString(value: string): string {}
function echoNumber(value: number): number {}
```
With generics:

- One function works for all types
- No duplication
- Still fully type-safe

This is DRY applied to type logic