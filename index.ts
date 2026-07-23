const file = process.argv[2];

if (!file) {
  process.exit(1);
}

const nameClean = file.replace("src/", "").replace(".ts", "");

try {
  await import(`./src/${nameClean}.ts`);
} catch (error) {
  console.error(error);
  process.exit(1);
}
