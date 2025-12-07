import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import Ajv from "ajv/dist/2020.js";
import addFormats from "ajv-formats";

const ajv = new Ajv({ allErrors: true, strict: true, allowUnionTypes: true });
addFormats(ajv);

const schemaPath = path.resolve("src/lifeday.v0.1.schema.json");
if (!fs.existsSync(schemaPath)) {
  console.error(`Schema not found at ${schemaPath}`);
  process.exit(2);
}
const schemaRaw = fs.readFileSync(schemaPath, "utf-8");
const schema = JSON.parse(schemaRaw);

const validate = ajv.compile(schema);

const filePath = process.argv[2] ?? "examples/example-lifeday.json";
if (!fs.existsSync(filePath)) {
  console.error(`Input file not found: ${filePath}`);
  process.exit(2);
}

const dataRaw = fs.readFileSync(path.resolve(filePath), "utf-8");
let data;
try {
  data = JSON.parse(dataRaw);
} catch (err) {
  console.error("Failed to parse JSON:", err);
  process.exit(2);
}

const valid = validate(data);

if (valid) {
  console.log("✅ Lifeday document is valid.");
  process.exit(0);
} else {
  console.error("❌ Lifeday document is INVALID.");
  console.error(JSON.stringify(validate.errors, null, 2));
  process.exit(1);
}
