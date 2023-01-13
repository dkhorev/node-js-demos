async function main() {
  console.log("Fetching");

  const res = await fetch("https://jsonplaceholder.typicode.com/todos/10");

  if (res.ok) {
    const data = await res.json();

    console.log(data);
  }

  console.log("Done!");
}

console.log("Before");

main();

console.log("After");
