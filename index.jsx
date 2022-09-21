const Page = () => {
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
            <img className="nav__logo" height="" src="./react-logo.png" alt="logo react" />
            <ul className="nav__items" >
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

const Main = () => {
    return (
        <div className='main'>
            <h1>Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100k stars on Github</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of entreprise apps, including mobile apps</li>
            </ul>
        </div>
    );
};

function Footer() {
    return (
        <footer className="footer">
            <small>© 2022 Adda development. All rights reserved.</small>
        </footer>
    )
}



ReactDOM.render(<Page /> , document.getElementById('root'))
