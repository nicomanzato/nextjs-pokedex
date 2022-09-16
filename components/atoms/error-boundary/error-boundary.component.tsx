import React from 'react';

export interface ComponentWithFallback
  extends React.FunctionComponent<{ onTryAgain: () => any }> {}

export class ErrorBoundary extends React.Component<
  { fallbackComponent: ComponentWithFallback; children: any },
  { hasError: boolean }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallbackComponent)
        return (
          <this.props.fallbackComponent
            onTryAgain={() => {
              this.setState({ hasError: false });
            }}
          />
        );

      return (
        <div>
          <h2>Oops, there is an error!</h2>
          <button
            type="button"
            onClick={() => this.setState({ hasError: false })}
          >
            Try again?
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
