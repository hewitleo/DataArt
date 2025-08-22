// export const Header = () => {
interface HeaderProps {
    toggleDarkMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({ toggleDarkMode}) => {
    return(
        <header>
            <img src="/icon.png" alt="Logo" width="50" height="50"/>
            <h1>Time Line App</h1>
            <nav>
                <button className ="theme_button" onClick={toggleDarkMode}>
                    Theme
                </button>


            </nav>

        </header>
    );
}
