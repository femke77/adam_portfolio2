import Avatar from 'react-avatar';
export default function About() {
  return (
    <div>
      <Avatar 
      src="./src/assets/projects/IMG_0698.jpg"
      alt="profile pic"
      name="Adam Mathis" 
      size="100" 
      round={true} 
      />
      <h1>About Page</h1>
      <p>
        I am a developer in training with a robust background in data analysis and project management from years in the non-profit sector. More details to follow!
      </p>
    </div>
  );
}
