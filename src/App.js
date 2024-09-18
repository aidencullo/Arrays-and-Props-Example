import { people } from './data.js';
import Person from './Person.js';

export default function List() {
  const listItems = people.map(person =>
      <Person person={person} key={person.id} />
  );
  return <ul>{listItems}</ul>;
}
