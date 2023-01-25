import Counting from "../model/action";

interface DomList {
  ul: HTMLUListElement;
  clear(): void;
  render(items: Counting): void;
}

export default class ListTemp implements DomList {
  ul: HTMLUListElement;
  static instance: ListTemp = new ListTemp();
  private constructor() {
    this.ul = document.querySelector(".listitem") as HTMLUListElement;
  }

  clear(): void {
    this.ul.innerHTML = "";
  }
  render(items: Counting): void {
    this.clear();
    items.list.forEach((element) => {
      const li = document.createElement("li") as HTMLLIElement;
      const span = `<span class="minutes">${element.minute}</span>: <span class="seconds">${element.second}</span>.
            <span class="mseconds">${element.msecond}</span>`;
      li.innerHTML = span;
      this.ul.appendChild(li);
    });
  }
}
