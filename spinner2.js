let delay = 100;
const spinner = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ','\r|   ', '\r/   ', '\r-   ', '\r\\   ',
'\r|   ', '\r/   ', '\r-   ', '\r\\   ','\r|   ', '\r/   ', '\r-   ', '\r\\   ','\r|   ', '\r/   ', '\r-   ', '\r\\   ',]

for (let i = 0; i < spinner.length; i++) {
  delay += 200
  setTimeout(() => {
    process.stdout.write(spinner[i]);
  }, delay);
}







