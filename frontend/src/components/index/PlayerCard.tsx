import '../../App.css'

interface PlayerCardProps {
    name: string,
    description: string,
    image: string,
}

function PlayerCard({ name, description, image }: PlayerCardProps) {
    return (
        <>
            <div className="messi">
                <img src={image} alt="Messi celebracion mundial 2022 Qatar"/>
                <p><strong>{name}</strong></p>
                <p id="messi-text">{description}</p>
            </div>
        </>
    )
}

export default PlayerCard;