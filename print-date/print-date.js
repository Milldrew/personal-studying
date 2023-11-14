(async () => {
  while (true) {
    console.log(new Date());
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
})()
