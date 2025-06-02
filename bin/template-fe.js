#!/usr/bin/env node

import inquirer from "inquirer";
import path from "path";
import fs from "fs-extra";
import { fileURLToPath } from "url";

// Fix for __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main() {
  console.log("🚀 Welcome to Template Generator CLI\n");

  const { language } = await inquirer.prompt([
    {
      type: "list",
      name: "language",
      message: "Select Programming Language:",
      choices: ["JavaScript", "TypeScript"],
    },
  ]);

  const { template } = await inquirer.prompt([
    {
      type: "list",
      name: "template",
      message: "Select Template:",
      choices: ["template-one", "Back to Main Menu"],
    },
  ]);

  if (template === "Back to Main Menu") {
    console.log("🔙 Returning to main menu...");
    return;
  }

  // Map language to folder names
  const langFolder = language === "JavaScript" ? "js" : "tsx";

  const sourcePath = path.join(__dirname, "templates", langFolder, template);
  const destPath = path.join(process.cwd(), "src");

  try {
    await fs.copy(sourcePath, destPath);
    console.log(
      `✅ Successfully generated '${template}' (${language}) in ./src`
    );
  } catch (err) {
    console.error("❌ Error generating template:", err.message);
  }
}

main();
