const Page = () => {
    return (
        <div>
        <Main />
        <Footer />
        </div>
    )
}

const Main = () => {
    return (
        <div className='nav'>
            <img width={'40px'} src="./react-logo.png" alt="logo react" />
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
        <footer>
            <small>© 2022 Adda development. All rights reserved.</small>
        </footer>
    )
}



ReactDOM.render(<Page /> , document.getElementById('root'))
