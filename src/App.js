import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

// Pages
import Home from './pages/Home'
import Results from './pages/Results'


function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/home">
					<Home/>
				</Route>
				<Route exact path="/events">
					<Results/>
				</Route>
				<Route exact path="/*">
					<Redirect to="/home"/>
				</Route>
			</Switch>
		</Router>
	);
}
	
export default App;
	