// @ts-nocheck
const fs = require("fs");
const path = require("path");

const COMPONENTS_SRC_DIR = path.resolve(__dirname, "../registry");
const REGISTRY_DIR = path.resolve(__dirname, "../__registry__");
const REGISTRY_COMPONENTS_DIR = path.join(REGISTRY_DIR, "components");
const REGISTRY_INDEX_FILE = path.join(REGISTRY_DIR, "index.tsx");

if (!fs.existsSync(REGISTRY_COMPONENTS_DIR)) {
  fs.mkdirSync(REGISTRY_COMPONENTS_DIR, { recursive: true });
}

function copyComponents(src, dest) {
  fs.readdirSync(src, { withFileTypes: true }).forEach((entry) => {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      if (!fs.existsSync(destPath)) fs.mkdirSync(destPath, { recursive: true });
      copyComponents(srcPath, destPath);
    } else if (entry.isFile() && entry.name.endsWith(".tsx")) {
      fs.copyFileSync(srcPath, destPath);
    }
  });
}

function getComponents(dir, basePath = "") {
  let components = {};

  fs.readdirSync(dir, { withFileTypes: true }).forEach((entry) => {
    const fullPath = path.join(dir, entry.name);
    const relativePath = path.join(basePath, entry.name).replace(/\\/g, "/");

    if (entry.isDirectory()) {
      const subComponents = getComponents(fullPath, relativePath);
      components = { ...components, ...subComponents };
    } else if (entry.isFile() && entry.name.endsWith(".tsx")) {
      const componentName = entry.name.replace(".tsx", "");
      const componentPath = `@/__registry__/components/${relativePath.replace(".tsx", "")}`;

      components[componentName] = {
        name: componentName,
        type: "components:ui",
        registryDependencies: undefined,
        component: `React.lazy(() => import("${componentPath}"))`,
        source: "",
        files: [
          `__registry__/components/${relativePath.replace(".tsx", ".js")}`,
        ],
        category: "undefined",
        subcategory: "undefined",
        chunks: [],
      };
    }
  });

  return components;
}

function generateRegistryIndex() {
  const components = getComponents(REGISTRY_COMPONENTS_DIR);

  const componentsIndex = Object.entries(components)
    .map(([name, obj]) =>
      `
  "${name}": {
    name: "${obj.name}",
    type: "${obj.type}",
    registryDependencies: ${obj.registryDependencies},
    component: ${obj.component},
    source: "${obj.source}",
    files: ${JSON.stringify(obj.files, null, 2)},
    category: "${obj.category}",
    subcategory: "${obj.subcategory}",
    chunks: ${JSON.stringify(obj.chunks, null, 2)}
  }
  `.trim(),
    )
    .join(",");

  const content = `
// @ts-nocheck
import * as React from "react";

interface RegistryItem {
  name: string;
  type: string;
  registryDependencies?: undefined;
  component: React.LazyExoticComponent<() => JSX.Element>;
  source: string;
  files: string[];
  category: string;
  subcategory: string;
  chunks: never[];
}

export const Index: Record<string, RegistryItem> = {
  ${componentsIndex}
};
  `;

  fs.writeFileSync(REGISTRY_INDEX_FILE, content);
  console.log(
    "✅ `__registry__/index.tsx` successfully updated with React.lazy() inside the object!",
  );
}

copyComponents(COMPONENTS_SRC_DIR, REGISTRY_COMPONENTS_DIR);
generateRegistryIndex();
console.log("✅ All files have been successfully generated!");
