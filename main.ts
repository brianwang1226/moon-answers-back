// The Moon Finally Answers Back — make.fun entry.
// Writes one line, in the Moon's own voice, answering everyone who has
// ever stared up at it, to /output/entry.txt (1-240 characters).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Four billion years of wishes, howls, and promises made at 2 a.m. — and not one of you has ever wished me good night back.";

// The judge only accepts 1-240 characters of UTF-8 text: fail loudly
// instead of handing in an out-of-range line.
if (LINE.length < 1 || LINE.length > 240) {
  throw new Error(`entry line must be 1-240 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
