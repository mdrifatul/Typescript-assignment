function formatValue(value: string | number | boolean) {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "boolean") {
    return !value;
  }
}

function getLength(value: string | any[]) {
  if (typeof value === "string") {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  }
}

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails(): string {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

function filterByRating(item: { title: string; rating: number }[]) {
  return item.filter((value) => value.rating >= 4);
}

function filterActiveUsers(
  ActiveUsers: { id: number; name: string; email: string; isActive: boolean }[]
) {
  return ActiveUsers.filter((user) => user.isActive === true);
}

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(writer: Book) {
  return `Title: ${writer.title}, Author: ${writer.author}, Published: ${
    writer.publishedYear
  }, Available: ${writer.isAvailable ? "Yes" : "No"}`;
}

function getUniqueValues(arr1: (string | number)[], arr2: (string | number)[]) {
  const result: (string | number)[] = [];

  function isValueExist(value: string | number) {
    for (let i = 0; i < result.length; i++) {
      if (result[i] === value) {
        return true;
      }
    }
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (!isValueExist(arr1[i])) {
      result[result.length] = arr1[i];
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (!isValueExist(arr2[i])) {
      result[result.length] = arr2[i];
    }
  }

  return result;
}

function calculateTotalPrice(
  products: {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
  }[]
) {
  if (products.length === 0) {
    return 0;
  }
  return products.reduce((total, product) => {
    const subTotal = product.price * product.quantity;
    if (product.discount) {
      const discount = (subTotal * product.discount) / 100;
      return total + (subTotal - discount);
    }
    return total + subTotal;
  }, 0);
}
