import {Note} from './Note';
import {PriorityEnum} from './PriorityEnum';

export let ELEMENT_DATA: Note[] = [
  {title: 'hello', priority: PriorityEnum.HIGH, date: new Date()},
  {title: 'test', priority: PriorityEnum.MEDIUM, date: new Date()},
  {title: 'Testttt', priority: PriorityEnum.LOW, date: new Date()}
];
