const list = [42, 43, 44, 45];

products = [
  { id: 42, qqq: "A" },

  { id: 43, qqq: "B" },

  { id: 99, qqq: "c" },
];

const listedProducts = products.filter(
  (product) =>
    product.id ===
    (el = () => {
      for (const el of list) return el;
    })
);

// console.log(listedProducts);
console.log((list) => {
  for (const el of list) return el;
});
