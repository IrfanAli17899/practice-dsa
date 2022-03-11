const arr = [2, 5, 1, 2, 3, 5, 1, 2, 4];

const firstRecurring = (arr = []) => {
  const existing = [];
  for (let i = 0; i < arr.length; i++) {
    if (existing.indexOf(arr[i]) === -1) {
        existing.push(arr[i]);
    }
  }
  console.log(
    "🚀 ~ file: first_recurring.js ~ line 5 ~ firstRecurring ~ existing",
    existing
  );
};

firstRecurring(arr);
