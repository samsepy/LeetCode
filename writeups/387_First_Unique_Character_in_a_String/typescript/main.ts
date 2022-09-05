function firstUniqChar(s: string): number {
  const h = new Map<string, number>();
  for (let i = 0; i < s.length; i++) {
    if (h.has(s[i])) {
      h.set(s[i], h.get(s[i]) + 1);
    } else {
      h.set(s[i], 1);
    }
  }
  for (const [k, v] of h) {
    if (v == 1) {
      return s.indexOf(k);
    }
  }

  return -1;
}
