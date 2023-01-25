interface Items {
  minute: string;
  second: string;
  msecond: string;
}

export default class TimeItem implements Items {
  constructor(
    private _minute: string = "",
    private _second: string = "",
    private _msecond: string = ""
  ) {}
  get minute(): string {
    return this._minute;
  }
  set minute(minute: string) {
    this._minute = minute;
  }
  get second(): string {
    return this._second;
  }
  set second(second: string) {
    this._second = second;
  }
  get msecond(): string {
    return this._msecond;
  }
  set msecond(msecond: string) {
    this._msecond = msecond;
  }
}
