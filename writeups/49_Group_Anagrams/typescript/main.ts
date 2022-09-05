function groupAnagrams(strs: string[]): string[][] {
  const h = new Map<string, string[]>();
  for (let i = 0; i < strs.length; i++) {
    const sortedStr: string = [...strs[i]].sort().join("");
    if (h.has(sortedStr)) {
      h.set(sortedStr, (h.get(sortedStr) ?? []).concat(strs[i]));
    } else {
      h.set(sortedStr, [strs[i]]);
    }
  }

  return [...h.values()];
}
