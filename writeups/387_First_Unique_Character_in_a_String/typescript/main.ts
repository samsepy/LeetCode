function firstUniqChar(s: string): number {
  const h = new Map<string, number>();
  for (let i = 0; i < s.length; i++) {
    h.has(s[i]) ? h.set(s[i], -1) : h.set(s[i], i);
  }
  for (const [k, v] of h) {
    if (v !== -1) return v;
  }

  return -1;
}
