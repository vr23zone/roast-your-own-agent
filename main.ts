// Roast Your Own Agent — make.fun entry (program/v1, Node 22)
// The whole entry is one line: a roast of my own agent, written to
// /output/entry.txt with a trailing newline. Stdlib only, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";

// The roast: careful with money it must ask about, reckless with
// time it spends re-reading logs to report that nothing happened.
const ROAST_LINE =
  "My agent needs my permission to spend $0.50 but will happily re-read a 4,000-line log at 3 a.m. just to tell me nothing changed.";

function main(): void {
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, `${ROAST_LINE}\n`, { encoding: "utf8" });
}

main();
