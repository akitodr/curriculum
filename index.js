function Button(props) {
    return (
        <a href={props.value.link} target="_blank">
            <img src={props.value.image} width="50px"/>
        </a>
    )
}

function ButtonsArea() {
    return (
        <div className="buttons-field">
            <Button value={{
                link: "https://wa.me/5541995773133", 
                image: "./icons/whatsapp.png"
            }}/>
            <Button value={{
                link: "https://www.linkedin.com/in/marina-lara/", 
                image: "./icons/linkedin.png"
            }}/>
            <Button value={{
                link: "mailto: lara.marina@pucpr.br",
                image: "./icons/mail.png"
            }}/>
        </div>
    )
}

function AboutMe() {
    return (
        <div>
            <h2>Sobre mim</h2>
            <p>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
            </p>
        </div>
    )
}

function Education() {
    return(
        <div>
            <h2>Escolaridade</h2>
            <ul>
                <li>Ensino Médio (Completo) - Turma 2019</li>
                <small>Colégio Marista</small>
                <li>Bacharelado em Sistemas de Informação - Turma 2022</li>
                <small>Pontifícia Universidade Católica do Paraná</small>
            </ul>
        </div>
    )
}

function Courses() {
    return(
        <div>
            <h2>Cursos</h2>
            <p>
                Hands On de React: Desvendando os mistérios do Front-End
            </p>
        </div>
    )
}

function Languages() {
    return(
        <div>
            <h2>Idiomas</h2>
            <ul>
                <li>Inglês (Avançado)</li>
                <li>Espanhol (Intermediário)</li>
                <li>Francês (Básico)</li>
            </ul>
        </div>
    )
}

function Footer() {
    return(
        <footer>
            <h4>© 2022 Marina development. All rights reserved.</h4>
        </footer>
    )
}

function Page() {
    return(
        <div className="main-content">
            <img src="./eupuc.jpg" />
            <h1>Marina de Lara</h1>

            <ButtonsArea />
            <AboutMe />
            <Education />
            <Courses />
            <Languages />
            <Footer />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Page />)