// Deterministic seeded PRNG (mulberry32). Pure, no globals — enables reproducible
// simulation (seed=42) and identical replay. Never uses Math.random.
export function makeRng(seed) {
  let a = (seed >>> 0) || 1;
  const rng = () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  rng.int = (n) => Math.floor(rng() * n);
  rng.pick = (arr) => arr[rng.int(arr.length)];
  rng.shuffle = (arr) => {
    const a2 = arr.slice();
    for (let i = a2.length - 1; i > 0; i--) {
      const j = rng.int(i + 1);
      [a2[i], a2[j]] = [a2[j], a2[i]];
    }
    return a2;
  };
  return rng;
}
