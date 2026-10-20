import { readFile, writeFile } from "node:fs/promises";
import prettier from "prettier";

const filePath = "dist/client/index.html";
const source = await readFile(filePath, "utf8");
const config = await prettier.resolveConfig(filePath);
const formatted = await prettier.format(source, {
  ...config,
  filepath: filePath,
});

await writeFile(filePath, formatted);
