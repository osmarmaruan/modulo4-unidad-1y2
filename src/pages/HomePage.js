import "../styles/components/pages/HomePage.css";

const HomePage = (props) => {
    return (
        <main className="holder">
        <div className="homeimg">
            <img src="img/home/img01.jpg" alt="avion"/>
        </div>
        <div className="columnas">
            <div className="bienvenidos left">
                <h2>Bienvenidos</h2>
                <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, nostrum iure. Porro sequi, eum
                    molestias delectus dolores molestiae, quibusdam expedita laudantium, voluptatem est numquam optio sunt!
                    Repella molestias eum sed deserunt, eaque doloribus, odit, qui voluptatem ut earum libero iusto.</p>
            </div>
            <div className="testimonios right">
                <h2>Testimonios</h2>
                <div className="testimonio">
                    <span className="cita">Lorem ipsum dolor sit amet.</span>
                    <span className="autor">readamel falcao - eltigre.com</span>
                </div>
            </div>
        </div>
    </main>
    );
}

export default HomePage;