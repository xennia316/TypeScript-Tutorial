const anchor = document.querySelector('a');

console.log(anchor?.href);

const form = document.querySelector('.new-item-form') as HTMLFormElement;

console.log(form)

// Input

const type = document.querySelector("#type") as HTMLSlotElement;
const tofrom = document.querySelector("#toform") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLSlotElement;
const amount = document.querySelector("#amount") as HTMLInputElement;