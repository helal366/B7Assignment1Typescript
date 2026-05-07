## 4. How do the four pillars of OOP—Inheritance, Polymorphism, Abstraction, and Encapsulation—help manage logic and reduce complexity in large-scale TypeScript projects?

## Answer:
In large-scale TypeScript systems, the four pillars of OOP aren’t just academic ideas—they’re practical tools for keeping complexity under control as your codebase grows. Each one addresses a different kind of chaos: duplication, rigidity, unclear intent, and uncontrolled state.

1. Encapsulation — Containing Complexity

Encapsulation is about hiding internal state and exposing only what’s necessary.

In TypeScript, this shows up through private, protected, and controlled public APIs.
```
class BankAccount {
  private balance: number = 0;

  deposit(amount: number) {
    if (amount <= 0) throw new Error("Invalid amount");
    this.balance += amount;
  }

  getBalance() {
    return this.balance;
  }
}
```
Why it matters at scale:
* Prevents accidental misuse of internal data
* Creates clear contracts between modules
* Makes refactoring safer (you can change internals without breaking callers)

Without encapsulation, large codebases turn into “everything can touch everything,” which is where bugs thrive.

2. Abstraction — Reducing Cognitive Load

Abstraction means exposing what something does, not how it does it.

In TypeScript, this is often done via interfaces and abstract classes.
```
interface PaymentProcessor {
  process(amount: number): void;
}
```
Why it matters at scale:
* Developers don’t need to understand every implementation detail
* Encourages separation of concerns
* Makes systems easier to reason about

Think of it as creating mental shortcuts: instead of understanding 500 lines of logic, you just understand “this processes payments.”

3. Inheritance — Reusing Structure (Carefully)

Inheritance allows classes to share behavior and structure.
```
class Animal {
  move() {
    console.log("Moving...");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woof!");
  }
}
```
Why it matters at scale:
* Reduces code duplication
* Encourages consistent behavior across related classes

4. Polymorphism — Flexible, Extensible Logic

Polymorphism lets different objects be treated the same way while behaving differently.
```
class CreditCardProcessor implements PaymentProcessor {
  process(amount: number) {
    console.log("Processing credit card:", amount);
  }
}

class PayPalProcessor implements PaymentProcessor {
  process(amount: number) {
    console.log("Processing PayPal:", amount);
  }
}
```
```
function checkout(processor: PaymentProcessor) {
  processor.process(100);
}
```
Why it matters at scale:
* Eliminates if/else explosion
* Makes systems extensible without modification (Open/Closed Principle)
* Enables plugin-like architectures

How They Work Together

In a real TypeScript architecture:

* Encapsulation keeps modules safe and predictable
* Abstraction defines clean boundaries between parts
* Inheritance shares common structure where appropriate
* Polymorphism allows flexible behavior and extension

Together, they:

* Reduce duplication
* Prevent tight coupling
* Make systems easier to extend
* Keep logic localized instead of scattered