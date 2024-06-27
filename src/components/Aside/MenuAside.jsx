import style from './menuaside.module.css';

const MenuAside = () => {
    return (
        <div>
            <nav className={style.aside}>
                    <ul>
                        <li>
                            <a href="#" >Experiências</a>
                        </li>
                        <li>
                            <a href="#">Projetos</a>
                        </li>
                    </ul>
                </nav>
        </div>
    )
}

export default MenuAside;