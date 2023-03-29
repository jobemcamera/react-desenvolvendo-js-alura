import './Rodape.css'

const Rodape = () => {
    return (
        <footer className="rodape">
        <section>
            <ul>
                <li>
                    <a href="https://github.com/jobemcamera" target="_blank">
                        <img src="/imagens/github.png" alt="Logo GitHub" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/jobecamera/" target="_blank">
                        <img src="/imagens/linkedin.png" alt="Logo LinkedIn" />
                    </a>
                </li>
                <li>
                    <a href="https://instagram.com/jobecamera" target="_blank">
                        <img src="/imagens/instagram.png" alt="Logo Instagram" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src="/imagens/logo.png" alt="Logo Organo" />
        </section>
        <section>
            <p>
                Desenvolvido por Jobe Camera.
            </p>
        </section>
    </footer>
    )
}

export default Rodape