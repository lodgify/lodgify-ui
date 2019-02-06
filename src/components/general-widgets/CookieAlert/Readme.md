```jsx
 class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isOpen: true}
  }

render() {
    return (
      <div>      
        <CookieAlert
          text='Led through the mist, by the milk-light of moon, all that was lost is revealed. Our long bygone burdens, mere echoes of the spring, but where have where we come and where shall we end? If dreams cant come true, then why not pretend... How the gentle wind, beckons through the leaves, as Autumn, colors, fall. Then sing in a swirl, of golden memories, the loveliest, lies, of all.'
          buttonText="I accept"
          isOpen={this.state.isOpen}
          onAccept={() => this.setState({ isOpen: false })}
          linkText="More info"
        />
        {!this.state.isOpen && <Button onClick={() => this.setState({ isOpen: true })}>Open Cookies</Button>}
      </div>
      ); 
  }
}
<Controller />
```
