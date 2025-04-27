import { Link } from "@tanstack/react-router";
import { Component } from "react";
// import { usePizzaOfTheDay } from "./usePizzaOfTheDay";

// React.createClass({})

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };
  constructor(props) {
    super(props);
    // this.celebrateError = this.celebrateError.bind(this);
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    // send to TrackJS/Sentry/LogRocket
    console.error("ErrorBoundary caught some stupid error", error, info);
  }
  //   componentDidMount() {}
  // componentDidUpdate(){}
  // componentWillUnmount(){}
  //   celebrateError() {
  //     this.setState({
  //       celebration: "lol", // object merging
  //     });
  //   }
  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h2>Uh oh!</h2>
          <p>
            There was an error with this page. <Link to="/">Click here</Link> to
            go back to the home page.
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}

// ErrorBoundary.getDerivedStateFromError()
// const eb = new ErrorBoundary();
// eb.lol()

export default ErrorBoundary;

// function EBWithHooks() {
//   const potd = usePizzaOfTheDay();
//   return <ErrorBoundary potd={potd} />;
// }
