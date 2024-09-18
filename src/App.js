import { people } from './data.js';
import { getImageUrl } from './utils.js';
import Person from './Person.js';

export default function List() {
  const listItems = people.map(person =>
      <Person person="person" />
  );
  return <ul>{listItems}</ul>;
}
