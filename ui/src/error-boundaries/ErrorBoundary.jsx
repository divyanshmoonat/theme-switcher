import { Typography } from "antd";
import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    if (error) {
      return {
        hasError: true,
      };
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <Typography.Text>
            Oops! Something went wrong, plese refresh the page and try again
          </Typography.Text>
        </div>
      );
    }
    return <>{this.props.children}</>;
  }
}

export default ErrorBoundary;
