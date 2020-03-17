import { createApp } from "vue";
const app = createApp({
  template: "<custom></custom>"
});
const container = document.getElementById("app");
app.config.isCustomElement = tag => {
  console.log("tag", tag);
  return tag === "custom";
};
app.mount(container);

console.log("innerHTML", container.innerHTML);
