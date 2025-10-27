import '../App.css'

function Header() {
    return (
        <>
            <div className="container">
                <div className="header-title">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                         className="icon icon-tabler icons-tabler-outline icon-tabler-box">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5"/>
                        <path d="M12 12l8 -4.5"/>
                        <path d="M12 12l0 9"/>
                        <path d="M12 12l-8 -4.5"/>
                    </svg>
                    <h2>FutData</h2>
                </div>
                <div className="header-nav">
                    <nav>
                        <ul className="nav-list">
                            <li><a href="/history">Historia del futbol</a></li>
                            <li><a href="/legends">Leyendas</a></li>
                            <li><a href="/best-matches">Grandes partidos</a></li>
                            <li><a href="/">Curiosidades</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="line"></div>
        </>
    )
}

export default Header