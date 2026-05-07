## 2. How do Pick and Omit utility types prevent code duplication while creating specialized "slices" of a master interface? Discuss how this keeps your code DRY (Don't Repeat Yourself). 

## Answer:
In TypeScript, Pick and Omit help create specialized versions (“slices”) of a larger interface without rewriting it. This avoids duplication by reusing the original structure as the single source of truth.

1. The problem: duplicated types (not DRY)
Without utility types, it’s common to repeat similar interfaces:
```
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

// Public profile version (manual duplication)
interface PublicUser {
  id: number;
  name: string;
  email: string;
}
```
Here, fields are copied manually. If User changes, PublicUser must also be updated → high risk of inconsistency.

2. Pick: selecting only needed fields
Pick creates a new type by selecting specific properties from an existing interface.
```
type PublicUser = Pick<User, "id" | "name" | "email">;
```
Now:
* No duplication of field definitions
* Changes in User (like type of email) automatically reflect in PublicUser

3. Omit: removing unwanted fields
Omit creates a type by removing specific fields.
```
type SafeUser = Omit<User, "password">;
``
This is useful when:
* Most fields are reused
* Only a few fields must be excluded (e.g., sensitive data)

4. Why this prevents code duplication
Both utilities enforce composition over repetition:
* The base interface (User) remains the single source of truth
* Derived types are views of that source, not rewritten copies
* No repeated field definitions across multiple interfaces

5. How this supports DRY (Don’t Repeat Yourself)

DRY principle means: each piece of knowledge should exist in only one place.

Using Pick and Omit:
* Eliminates repeated interface definitions
* Centralizes type changes (update once in the base interface)
* Reduces maintenance overhead
* Prevents mismatched fields between related types
* Improves readability and intent (“this is a subset of User” vs “this is a manually redefined type”)