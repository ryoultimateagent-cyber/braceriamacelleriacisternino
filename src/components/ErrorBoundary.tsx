import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="flex h-[200px] w-full items-center justify-center bg-black/5 rounded-lg border border-white/10">
          <p className="text-sm text-white/50">Something went wrong with this 3D component.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
