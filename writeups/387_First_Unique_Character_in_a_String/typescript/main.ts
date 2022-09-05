function firstUniqChar(s: string): number {
  const h = new Map<string, number>();
  for (let i = 0; i < s.length; i++) {
    if (h.has(s[i])) {
      h.set(s[i], h.get(s[i]) + 1);
    } else {
      h.set(s[i], 1);
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (h.get(s[i]) === 1) return i;
  }

  return -1;
}
