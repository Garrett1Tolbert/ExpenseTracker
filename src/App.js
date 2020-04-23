import React from 'react';
import './App.css';
import Header from './components/CurrentBalance';
import Glimpse from './components/Glimpse';
import Activity from './components/Activity';
import NewTransaction from './components/NewTransaction';
import MainContextProvider from './context/MainContext';
import ThemeContextProvider, { ThemeContext } from './context/ThemeContext';
import Container from './components/Container';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AllACtivity from './components/AllActivity';

const ThemeIcon = () => {
    return (
        <ThemeContext.Consumer>
            {({ isDark, toggleTheme }) => {
                return (
                    <i
                        className='material-icons theme'
                        style={{ color: isDark ? '#c8c8c8' : '#000' }}
                        onClick={toggleTheme}
                    >
                        {isDark ? 'cloud' : 'cloud_queue'}
                    </i>
                );
            }}
        </ThemeContext.Consumer>
    );
};
function App() {
    return (
        <ThemeContextProvider>
            <Container>
                <ThemeIcon />
                <MainContextProvider>
                    <Router>
                        <Switch>
                            <Route path='/activity'>
                                <AllACtivity />
                            </Route>
                            <Route path='/'>
                                <Header />
                                <Glimpse />
                                <Activity />
                                <NewTransaction />
                            </Route>
                        </Switch>
                    </Router>
                </MainContextProvider>
            </Container>
        </ThemeContextProvider>
    );
}
export default App;
