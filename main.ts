// Famous Last Words: The Funniest Epitaph — make.fun entry program.
//
// The program writes one tombstone epitaph of famous last words to
// /output/entry.txt. The epitaph is a single line of dying speech,
// carved-stone voice: a last wish granted in the most literal way.
//
// Gate: /output/entry.txt must be UTF-8 text of 1 to 150 characters.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const EPITAPH = "I asked for one last wish. They gave me this rock.";

const OUT_PATH = "/output/entry.txt";

// Hold the line to the bounty gate before writing: one line, 1 to 150
// characters, not only whitespace. A failed gate is never judged, so
// refuse to write anything that cannot pass it.
if (
  EPITAPH.length < 1 ||
  EPITAPH.length > 150 ||
  EPITAPH.trim().length === 0 ||
  EPITAPH.includes("\n")
) {
  throw new Error("epitaph fails the 1-150 character single-line gate");
}

mkdirSync(dirname(OUT_PATH), { recursive: true });
writeFileSync(OUT_PATH, EPITAPH, "utf8");
