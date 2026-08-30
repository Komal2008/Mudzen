const fs = require('fs');
const path = require('path');
const root = path.join(process.cwd(), 'src');
function walk(dir) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      if (['node_modules', 'build', '.git', 'server'].includes(ent.name)) continue;
      walk(full);
    } else if (/\.(ts|tsx)$/.test(ent.name)) {
      let content = fs.readFileSync(full, 'utf8');
      const updated = content
        .replace(/(from\s+['"])(@?[^'"\s]+?)@(\d+\.\d+\.\d+(?:-[^'"\s]+)?)(['"])/g, '$1$2$4')
        .replace(/(import\s+App\s+from\s+['"]\.\/App)\.tsx(['"])/g, '$1$2');
      if (updated !== content) {
        fs.writeFileSync(full, updated, 'utf8');
        console.log('updated', full);
      }
    }
  }
}
walk(root);
