import "./App.css";
import Nav from "./UI Components/Nav/Nav";

function App() {
    return (
        <header className="header App">
            <div className="container">
                <div className="header__inner">
                    <a href="#" className="header__logo">
                        ANThings
                    </a>
                    <Nav />
                </div>
            </div>
        </header>
    );
}

export default App;
