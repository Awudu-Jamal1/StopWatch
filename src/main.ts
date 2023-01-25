import "./style.css";
import Counting from "./model/action";
import TimeItem from "./model/time";
import ListTemp from "./template/listTemplate";

const stopwatch = () => {
  const action = Counting.instance;
  const template = ListTemp.instance;
  let mseconds: number = 0;
  let minutes: number = 0;
  let seconds: number = 0;

  const minute = document.querySelector(".minute") as HTMLSpanElement;
  const second = document.querySelector(".second") as HTMLSpanElement;
  const msecond = document.querySelector(".msecond") as HTMLSpanElement;

  minute.innerText = minutes.toString().padStart(2, "0");
  second.innerHTML = seconds.toString().padStart(2, "0");
  msecond.innerHTML = mseconds.toString().padStart(2, "0");
  const Start = document.querySelector(".str-btn") as HTMLButtonElement;
  let tim: any;
  Start.addEventListener("click", () => {
    tim = setInterval(() => {
      if (seconds === 60) {
        seconds = 0;
        minutes += 1;
      } else if (mseconds === 100) {
        mseconds = 0;
        seconds += 1;
      } else {
        mseconds += 1;
      }
      minute.innerText = minutes.toString().padStart(2, "0");
      second.innerHTML = seconds.toString().padStart(2, "0");
      msecond.innerHTML = mseconds.toString().padStart(2, "0");
    }, 10);
  });

  const Lap = document.querySelector(".lap-btn") as HTMLButtonElement;
  Lap.addEventListener("click", () => {
    const newItem = new TimeItem(
      minutes.toString().padStart(2, "0"),
      seconds.toString().padStart(2, "0"),
      mseconds.toString().padStart(2, "0")
    );
    action.lap(newItem);
    template.render(action);
  });

  const Stop = document.querySelector(".stp-btn") as HTMLButtonElement;
  Stop.addEventListener("click", () => {
    clearInterval(tim);
  });

  const Reset = document.querySelector(".reset-btn") as HTMLButtonElement;
  Reset.addEventListener("click", (): void => {
    action.reset();
    template.clear();
    mseconds = 0;
    seconds = 0;
    minutes = 0;
  });
};

document.addEventListener("DOMContentLoaded", stopwatch);
