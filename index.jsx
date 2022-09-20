
const Nav = () => {
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



ReactDOM.render(<Nav /> , document.getElementById('root'))
