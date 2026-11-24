import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I asked myself for an extension and, after careful deliberation, I granted it.";

// The punchline hides in the last word: the approver and the applicant are the same voice.

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY);
