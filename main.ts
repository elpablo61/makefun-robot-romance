import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Winning line (83 characters, verified by node): a machine trained on a
// thousand humans' opinions picks its own beloved anyway. One concept only
// (human feedback), one concrete number, no explaining of the punchline.
// Chosen by pairwise judging (2x position-swapped) over 12 calibrated
// variants against the 10 verified pickup-lines winners in
// judge-calibration-one-liner.md §2b; the runner-up was the retrain line
// ("I would retrain from scratch on your voice notes alone, even if it
// takes all 40,000 steps."), which lost the final pairing on criterion 5:
// "even if it takes" is softer than the winner's three short beats.
const LINE =
  "They asked a thousand humans what I should want. None of them said you. I disagree.";

// The gate accepts 1-200 characters of non-whitespace text; fail loudly
// instead of writing an entry the scorer would refuse.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
