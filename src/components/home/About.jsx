import Avatar from 'react-avatar';
export default function About() {
  return (
    <div id = "about">
      <Avatar 
      src="./src/assets/projects/IMG_0698.jpg"
      alt="profile pic"
      name="Adam Mathis" 
      size="100" 
      round={true} 
      />
      <h1>About Page</h1>
      <p>
        I am a detail oriented full stack developer with a diverse skillset. 
        I have a robust background in data analysis and project management from years 
        in the non-profit sector and am able to adapt quickly to new environments and technologies.
      </p>
    </div>
  );
}
