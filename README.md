1.  # What are some differences between interfaces and types in TypeScript?

    ==> Interfaces and types in TypeScript often appear similar in structure but serve different purposes.

    <!-- some differnence between interfaces and types in Typescirpt -->

    1. Extending works Differently
       ---> Both interfaces and types can be extended, but the syntax is not the same.

    2.Interfaces Can Merge, Types Cannot
    3.Types Can Do More Than Interfaces
    ---> Interfaces are mainly for object shapes.
    Types are more flexible and can represent:unions,tuples,primitives,function signatures.

2.  # What is the use of enums in TypeScript? Provide an example of a numeric and string enum.

    <!-- What is the use of enums in TypeScript?  -->

    ==>Enums in TypeScript allow you to define a set of named values. They make your code more readable and prevent errors that come from using plain strings or numbers. They are typically useful in case of user roles, order statuses, or lists of fixed options.

<!-- example of a string  -->

enum Role{
Admin = "ADMIN",
Editor = "EDITOR",
Viewer = "VIEWER"
}

function checkRole(role: UserRole) {
if (role === UserRole.Admin) {
console.log("Full access granted");
} else if (role === UserRole.Editor) {
console.log("Edit access granted");
} else {
console.log("Read-only access");
}
}

console.log(checkRole(UserRole.Admin));

<!-- example of a number -->

enum Status {
Pending,
Processing,
Completed
}

let orderStatus: Status = Status.Processing;
console.log(orderStatus)
