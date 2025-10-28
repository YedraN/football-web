import '../../App.css'

interface Props {
    match: string,
    teams: string,
    description: string,
    image: string
}

function Match({ match, teams, description, image }: Props) {
    return (
        <>
            <div className="match">
                <div className="text-match">
                    <p>{match}</p>
                    <h3>{teams}</h3>
                    <p>{description}</p>
                </div>
                <img src={image} id="img-match"/>
            </div>
        </>
    )
}

export default Match;