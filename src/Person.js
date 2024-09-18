import { getImageUrl } from './utils.js';

export default function Person({ person }) {
  return (
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}</b>
          {' ' + person.profession + ' '}
          known for {person.accomplishment}
      </p>
      </li>
  )
}
