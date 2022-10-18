
const App = () => {
    return (
    <div>
        <Header />
        <Main />
        <Footer />
    </div>
    )
}

function Header() {
    return (
        <nav className="nav">
            <img className="nav__logo"  src="./react-logo.png" alt="logo react" />
            <ul className="nav__items" >
                <li><a href="#">Learn</a> </li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    )
}

const Main = () => {
    return (
        <div className='main'>
            <img className="main__logo"  src="./react-logo-grey.png" alt="logo react" />
            <h1>Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100k stars on Github</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of entreprise apps, including mobile apps</li>
                <li>Is composable, it means that the app can be decomposate in multiples elements, it allows maintainability and flexibility</li>
                <li>Is declarative, it means that we can ask React to do stuff without having to describe every step in detail</li>
            </ul>
        </div>
    );
};

function Footer() {
    return (
        <footer className="footer">
            <small>© 2022 Made with ❤️ by Kevin Adda.</small>
        </footer>
    )
}



ReactDOM.render(<App /> , document.getElementById('root'))
