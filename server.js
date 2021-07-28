
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log('Containers rule!');
    console.log(`Where: ${process.env.VACAY}`);
    await sleep(5000);
  }
}

main();
