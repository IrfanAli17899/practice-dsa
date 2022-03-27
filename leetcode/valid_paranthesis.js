const dict = {
  "(": ")",
  "[": "]",
  "{": "}",
};
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== " ") {
      if (!stack.length || dict[stack[stack.length - 1]] !== s[i]) {
        stack.push(s[i]);
      } else {
        stack.pop();
      }
    }
  }
  return !stack.length;
};

console.log(isValid("{ { } [ ] [ [ [ ] ] ] }"));
