import '../../App.css'
import PlayerCard from './PlayerCard';

function Summary() {
    return (
        <>
            <div className="container">
                <div className="summary">
                    <div className="img-container">
                        <img src="../../../public/mundial_2010.webp" alt="Imagen celebracion mundial 2010"/>
                    </div>
                    <div className="text">
                        <h1>Explora la gran historia del fútbol</h1>
                        <p>Sumérgete en el pasado del deporte rey, desde sus inicios hasta los momentos más icónicos. Descubre las leyendas, los partidos inolvidables y las estadísticas que definieron el juego.</p>
                    </div>
                    <div className="football-history">
                        <h2>Historia del futbol</h2>
                        <p>El fútbol, conocido como el deporte rey, tiene sus raíces en juegos antiguos con pelotas, pero su forma moderna se originó en Inglaterra a mediados del siglo XIX. La Football Association (FA) estableció las primeras reglas en 1863, marcando el nacimiento del fútbol organizado. Desde entonces, el deporte se expandió globalmente, dando lugar a competiciones como la Copa del Mundo de la FIFA, que se celebró por primera vez en 1930. A lo largo de los años, el fútbol ha evolucionado tácticamente y tecnológicamente, pero su esencia de pasión y competencia sigue intacta.</p>
                    </div>
                    <br/>
                    <div className="legendary-players">
                        <h2>Jugadores Legendarios</h2>
                        <div className="jugadores">
                            <PlayerCard
                                name="Messi"
                                description="Consagrandose como el mejor jugador de la historia ha logrado ganar todo tipo de títulos tanto individuales como colectivos."
                                image="../../../public/messi.webp"
                            />
                            <PlayerCard
                                name="Pele"
                                description="Siendo durante muchos años el máximo goleador de la historia, Pelé ganó con Brasil 3 mundiales y fue el mayor referente brasileño en la historia del fútbol."
                                image="../../../public/pele.webp"
                            />
                            <PlayerCard
                                name="Cruyff"
                                description=""
                                image="../../../public/cruyff.webp"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Summary