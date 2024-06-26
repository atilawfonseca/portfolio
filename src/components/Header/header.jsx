import style from './Header.module.css'

const Header = () => {
    return(
        <header className={style.cabecalho} >
            <div className='container'>
                <h1>FreeLaDev</h1>
                <nav className={style.displayInline}>
                    <ul>
                        <li>
                            <a href="#" >Experiências</a>
                        </li>
                        <li>
                            <a href="#">Projetos</a>
                        </li>
                    </ul>
                </nav>
                <nav className={style.hamburguer}>
                    <span></span>
                    <span></span>
                    <span></span>
                </nav>
            </div>
        </header>
    )
}
export default Header;