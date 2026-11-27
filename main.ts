// The Moon Finally Answers Back — make.fun entry.
// Writes one line, in the Moon's own voice, answering everyone who has
// ever stared up at it, to /output/entry.txt (1-240 characters).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Four billion years of wishes, howls, and promises made at 2 a.m. — and not one of you has ever wished me good night back.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
