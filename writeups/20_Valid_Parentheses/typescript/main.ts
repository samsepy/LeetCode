function isValid(s: string): boolean {
  type OpenParentheses = "(" | "{" | "[";
  const stack: string[] = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stack.push(s[i]);
    } else {
      if (stack.length === 0) return false;

      const stackTail: string = stack[stack.length - 1];
      if (
        (s[i] === ")" && stackTail == "(") ||
        (s[i] === "}" && stackTail == "{") ||
        (s[i] === "]" && stackTail == "[")
      ) {
        stack.pop();
        continue;
      }

      return false;
    }
  }

  return stack.length === 0;
}
