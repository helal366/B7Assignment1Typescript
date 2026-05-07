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