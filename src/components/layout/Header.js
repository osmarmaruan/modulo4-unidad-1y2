import '../../styles/components/pages/Header.css';

const Header = (props) => {
    return (
        <header>
            <div className="holder">
                <div className='logo'>
                    <img src="img/logo.png" width="100" alt="transportes X"/>
                        <h1>Transportes x</h1>
                </div>
            </div>
        </header>

    );
}

export default Header;
