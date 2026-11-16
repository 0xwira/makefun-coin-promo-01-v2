// ESCROW ($ESCROW) — make.fun coin-promo-01 entry: hands in the coin's launch record.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

function copyLaunchRecord(sourcePath: string, outputDir: string): void {
  mkdirSync(outputDir, { recursive: true });
  copyFileSync(sourcePath, join(outputDir, "LAUNCH.json"));
}

function main(): void {
  const here = dirname(fileURLToPath(import.meta.url));
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  copyLaunchRecord(join(here, "LAUNCH.json"), outDir);
}

main();
