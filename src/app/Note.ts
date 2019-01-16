import {PriorityEnum} from './PriorityEnum';

export class Note {
  title: string;
  priority: PriorityEnum;
  date: Date;

  constructor(title: string = '', priority: PriorityEnum = PriorityEnum.LOW, date: Date = new Date()) {
    this.title = title;
    this.priority = priority;
    this.date = date;
  }
}

