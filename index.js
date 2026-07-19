const file = process.argv[2];

if (!file){
    process.exit(1);
}

const nameClean = file.replace("src/", "").replace(".js", "");

try {
    await import(`./src/${nameClean}.js`);
} catch (error) {
    console.error(error)
    process.exit(1)
}