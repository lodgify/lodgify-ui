```jsx
 class Controller extends React.Component {
  constructor(props) {
    super(props);
<<<<<<< Updated upstream
    this.state = {isOpen: false}
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({isOpen: this.state.isOpen === false ? true : false});
=======
    this.state = {isOpen: true, isFormOpen: true}
>>>>>>> Stashed changes
  }

render() {
    return (      
      <CookieAlert
        text='Led through the mist, by the milk-light of moon, all that was lost is revealed. Our long bygone burdens, mere echoes of the spring, but where have where we come and where shall we end? If dreams cant come true, then why not pretend... How the gentle wind, beckons through the leaves, as Autumn, colors, fall. Then sing in a swirl, of golden memories, the loveliest, lies, of all.'
        buttonText="Acceptance"
        isOpen={this.state.isOpen}
<<<<<<< Updated upstream
        onClick={() => {alert('Potatoes and Molasses')}}
        trigger={
          <Button isRounded onClick={this.handleChange}>Trigger Cookie</Button>
        }
        onClose={this.handleChange}
=======
        isFormOpen={this.state.isFormOpen}
        onClick={() => this.setState({ isOpen: false })}
        onSubmit={() => this.setState({isFormOpen: false})}
        trigger={
          <Button isRounded onClick={() => this.setState({ isOpen: true })}>Trigger Cookie</Button>
        }
>>>>>>> Stashed changes
      />);
  }
}

<Controller />
```
