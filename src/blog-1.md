## 1. Why is any labeled a "type safety hole," and why is unknown the safer choice for handling unpredictable data? Explain the concept of type narrowing. 

## Answer: 
In TypeScript, any and unknown are both “top types” — they can represent any value — but they behave very differently when it comes to safety.

#### Why any is a “type safety hole”:
The type any basically turns off the type system for whatever value it touches.
```
let value:any = "hello";
value.toUpperCase(); //OK
value.nonExistent(); //ALSO OK
value.toFixed();     // OK AS WELL
```

The compiler allows any operation on value, even if it doesn’t exist at runtime. That means:

* Losing type checking
* Losing autocomplete and tooling help
* Bugs can slip through silently

This is why it’s called a TYPE SAFETY HOLE: once any enters in our code, it can spread and undermine guarantees everywhere.

#### Why unknown is safer:
unknown is also a type that can hold anything — but it forces you to be explicit before using the value.
```
let value: unknown = "hello";
value.toUpperCase(); //  Error
```
TypeScript blocks us because it doesn’t know what value is yet. We must prove its type first:
```
if (typeof value === "string") {
  value.toUpperCase(); // Safe
}
```
So:
any = “trust me, I know what I’m doing”
unknown = “you must check before using this”
That extra friction is what makes unknown safe for unpredictable data (like API responses, user input, JSON parsing).

#### What is type narrowing?
Type narrowing is the process of refining a broad type (like unknown or a union) into a more specific type using checks.
```
function printLength(value: unknown) {
  if (typeof value === "string") {
    console.log(value.length); // narrowed to string
  } else if (Array.isArray(value)) {
    console.log(value.length); // narrowed to array
  }
}
```
