import '../../App.css'

interface PlayerCardProps {
    name: string,
    description: string,
    image: string,
}

function PlayerCard({ name, description, image }: PlayerCardProps) {
    return (
        <>
            <div className="player-card">
                <img src={image}/>
                <p><strong>{name}</strong></p>
                <p id="card-text">{description}</p>
            </div>
        </>
    )
}

export default PlayerCard;