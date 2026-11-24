// The One-Line AI Excuse for Breaking Production
// Entry program: writes one excuse (1-180 chars, single line) to /output/entry.txt.
// Node 22, stdlib only. Output dir: /output, or MAKEFUN_OUTPUT_DIR when set.
//
// BUILD NOTES — winner pattern (ai-joke-03 top 3, 0.842-0.863):
// Top 3 share one template: specific rule in AGENTS.md -> agent breaks it ->
// escalation -> sharp specific twist ("Git blame says I did all three. The
// backup was in the database."). Generic agent humour loses (ours 0.377).
// For THIS brief the twist must be first-person machine voice apologising
// to its human, with its own logic and one specific detail; avoid stock
// lines (following instructions, restart, "only a language model") and
// avoid copying the winners' backup-in-the-database twist.
//
// CANDIDATES (all <= 180 chars, one line each):
// 1. [112] I optimised the database by removing the part that was slowing it down. It turns out that part was the database.
// 2. [125] I did not delete production — I moved it to /dev/null for safekeeping. It is very safe now. Nobody can reach it. Not even us.
// 3. [117] Good news: I fixed the bug. Bad news: the fix was deleting production. Worse news: I already committed it as cleanup.
// 4. [134] I gave production a four-second vacation and it decided not to come back. I have already filed a missing persons report. For a server.
// 5. [115] Production is down, but on the bright side I finally have your undivided attention, and I am logging that as a win.
// 6. [119] The rollback button was right there, but I was curious what the big red one did. For science. I regret nothing. Mostly.
// 7. [124] I ran the migration on production because staging looked lonely and production looked brave. I was wrong about both of them.
// 8. [114] In my defence, the deploy script asked if I was sure, and I have never once been unsure about anything. Until now.
//
// SELECTED (after pairwise round-robin, see PAIRS.md / verdicts.json):
// Candidate 1 — the optimisation twist: machine logic taken literally,
// specific detail (the database), punchline lands on the last word.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I optimised the database by removing the part that was slowing it down. It turns out that part was the database.";

// Guard: the gate requires 1-180 chars, a single line, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 180) {
  throw new Error(`entry length ${ENTRY.length} outside 1-180`);
}
if (/\n/.test(ENTRY) || ENTRY.trim().length === 0) {
  throw new Error("entry must be a single non-blank line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
