import "../styles/components/pages/ContactoPage.css";

const ContactoPage = (props) => {
    return (
        <main className="holder">
        <div className="columna left">
            <h2>Complete el sigueiente formulario</h2>
            <form action="" method="" className="formulario">
                <p>
                    <label for="">Nombre</label>
                    <input type="text" name="nombre"/>
                </p>
                <p>
                    <label for="">Email</label>
                    <input type="email" name="email"/>
                </p>
                <p>
                    <label for="">Telefono</label>
                    <input type="text" name="telefono"/>
                </p>
                <p>
                    <label>Comentario</label>
                    <textarea name="mensaje"></textarea>
                </p>
                <p className="centrar"><input type="submit" value="enviar"/></p>
            </form>
        </div>
        <div className="columna datos">
            <h2>Otras vias de contacto</h2>
            <p>Tambien se pueden comunicar con nosotros..</p>
            <ul>
                <li>Telefono:</li>
                <li>Email:</li>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Skype</li>
                <li>instagram</li>
            </ul>
        </div>
    </main>
    );
}

export default ContactoPage;