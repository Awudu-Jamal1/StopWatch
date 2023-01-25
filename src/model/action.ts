import TimeItem from "./time";

interface Action{
    list:TimeItem[]
    start():void
    lap(item:TimeItem):void
    stop():void
    reset():void
} 

export default class Counting implements Action{
    static instance: Counting = new Counting()
    
    private constructor(private _list:TimeItem[]=[]){}
    get list():TimeItem[]{
        return this._list

      }
      
    start(): void {
        this._list
        
    }
   lap(item: TimeItem): void {
       this._list.push(item)
       console.log(item)
   }
    stop(): void {
        
    }
    reset(): void {
        this._list =[]
        
    }
}