import './Example.css';

const TeamMember = ({ name, title, description, image }) => {
    return (
        <div className= "container">
            <img 
                src={image}
                alt={name}
                className = "image"
                />
            <h3 className= "name">
                {name}
            </h3>
            <p className= "title"> 
                {title}
            </p>
            <p className= "description">
                {description}
            </p>
        </div>
    )

}

const teamMembers = [
    {
        name: "Jane Doe",
        title: "Co-Founder",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image: "https://dummyimage.com/600x600/b286fd/000000&"
    },
    {
        name: "John Doe",
        title: "Co-Founder",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image: "https://dummyimage.com/600x600/b286fd/000000&"
    }
]

const TeamSection = () => {
    return (
        <section className = "section">
            <h2 className = "page-title">
                Our Team
            </h2>
            <div className = "cards">
                {teamMembers.map((member, index) => (
                    <TeamMember 
                        key = {index}
                        name = {member.name}
                        title = {member.title}
                        description = {member.description}
                        image = {member.image}
                    />
                ))}
            </div>
        </section>
    )
}

export default TeamSection;