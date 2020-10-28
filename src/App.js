import React from "react";
import "./assets/css/App.scss";
import "./assets/css/nprogress.css";
import Home from "./views/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./views/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Projects from "./views/Projects";
import Changelog from "./views/Changelog";
import FourOfour from "./views/FourOfour";
import LitcssHome from "./views/litcss";
import LitcssDocs from "./views/litcss/Docs";
import CookieJSHome from "./views/cookieJS/index";
import CookieJSDocs from "./views/cookieJS/Docs";
import Slideshow from "./views/projects/Slideshow";
import WordGame from "./views/projects/WordGame";
import YummyRecipes from "./views/projects/YummyRecipes";
import StarWarsML from "./views/projects/StarWarsML";
import ClockApp from "./views/projects/Clock";
import TimerApp from "./views/projects/Timer";
import StopwatchApp from "./views/projects/Stopwatch";
// const Projects = React.lazy(() => import("./views/Projects"));
const App = () => {
	return (
		<>
			<Router onChange={(e) => console.log(e)}>
				<Navbar />
				<Switch>
					<Route path="/" component={Home} exact />
					<Route path="/about" component={About} />
					<Route path="/projects" component={Projects} />
					<Route path="/changelog" component={Changelog} />
					<Route path="/slideshow" component={Slideshow} />
					<Route path="/word-game" component={WordGame} />
					<Route path="/yummy-recipes" component={YummyRecipes} />
					<Route path="/star-wars-mad-lib" component={StarWarsML} />
					<Route path="/timer" component={TimerApp} />
					<Route path="/clock" component={ClockApp} />
					<Route path="/stopwatch" component={StopwatchApp} />
					<Route path="/litcss/docs" component={LitcssDocs} />
					<Route path="/litcss" component={LitcssHome} />
					<Route path="/cookie-js/docs" component={CookieJSDocs} />
					<Route path="/cookie-js" component={CookieJSHome} />
					<Route component={FourOfour} />
				</Switch>
				<Footer />
			</Router>
			<HelmetProvider>
				<Helmet>
					<link
						href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300&display=swap"
						rel="stylesheet"
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&display=swap"
						rel="stylesheet"
					></link>
					<script
						defer
						src="https://code.jquery.com/jquery-3.5.1.min.js"
					></script>
					<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.3/js/bootstrap.bundle.min.js"></script>
				</Helmet>
			</HelmetProvider>
		</>
	);
};

export default App;
