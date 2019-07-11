```jsx
const boxMarkup = (
  <div style={{ background: '#ff5969', height: 100, width: 100 }} />
);

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isShowing: false }
  }

  render() {
    const { isShowing } = this.state;
    return (
      <React.Fragment>      
        <Button onClick={() => this.setState({ isShowing: !isShowing })}>
          {isShowing ? 'Hide' : 'Show'} fixed containers
        </Button>
        {isShowing && (
          <React.Fragment>
            <FixedContainer left="20px" top="20px">{boxMarkup}</FixedContainer>
            <FixedContainer bottom="20px" left="20px">{boxMarkup}</FixedContainer>
            <FixedContainer top="20px" right="20px">{boxMarkup}</FixedContainer>
            <FixedContainer bottom="20px" right="20px">{boxMarkup}</FixedContainer>
            <FixedContainer left="calc(50% - 50px)" top="calc(50% - 50px)">{boxMarkup}</FixedContainer>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

<Controller />
```
