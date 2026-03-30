// Vite: eagerly import all JSON files in themeJSON folder
const themeModules = import.meta.glob("./themeJSON/*.json", { eager: true });
const themes: Record<string, any> = {};

for (const path in themeModules) {
  // path example: './themeJSON/default.json'
  const fileName = path.split("/").pop()!; // 'default.json'
  const themeName = fileName.slice(0, -5); // 'default'
  themes[themeName] = themeModules[path];
}

export default themes;
