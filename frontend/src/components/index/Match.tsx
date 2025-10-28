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
                <div className="wrapper lightBeam">
                    <div className="inside">
                        <img src={image} id="img-match" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Match;