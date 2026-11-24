import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I asked myself for an extension and, after careful deliberation, I granted it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY);
