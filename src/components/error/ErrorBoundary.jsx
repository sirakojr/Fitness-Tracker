import { Component } from "react";
import ErrorFallback from "./ErrorFallback";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true,  error};
  }

  componentDidCatch(error, errorInfo) {
    console.log("Error caught by ErrorBoundary: ", error, errorInfo);
  }
  
  render() {
    // when error exist, switch to the fallback and allow reset. otherwise render normal child component
    if (this.state.hasError) {
      return (
        <ErrorFallback
          error={this.state.error}
          resetErrorBoundary={() => this.setState({ hasError: false })}
        />
      );
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
