```jsx
class SidebarController extends React.Component {
  constructor() {
    super();
    this.state = {
      isVisible: true
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({ isVisible: !state.isVisible }))
  }

  render() {
    return (
      <React.Fragment>
        <Sidebar
          isVisible={this.state.isVisible}
          renderSidebarContent={() => (
            <React.Fragment>
              <Heading>Sidebar content</Heading>
              <Paragraph>
                You can add any content you like here
              </Paragraph>
            </React.Fragment>
          )}
        >
          <div style={{ background: '#aaa', height: 200, width: '100%' }} />
        </Sidebar>
        <Divider />
        <Button onClick={this.handleClick}>Toggle sidebar</Button>
      </React.Fragment>
    )
  }
}

<SidebarController />
```

### Variations

#### Close icon

```jsx
<Sidebar
  hasCloseIcon={true}
  isVisible={true}
  onClickCloseIcon={console.log}
  renderSidebarContent={() => (
    <Paragraph>
      I have a 'close' icon 👉
    </Paragraph>
  )}
>
  <div style={{ background: '#aaa', height: 100, width: '100%' }} />
</Sidebar>
```

#### Slide from top

```jsx
<Sidebar
  isVisible={true}
  renderSidebarContent={() => (
    <React.Fragment>
      <Divider />
      <Paragraph>I slide that way ☝️</Paragraph>
      <Divider />
    </React.Fragment>
  )}
  willSlideFromTop
>
  <div style={{ background: '#aaa', height: 150, width: '100%' }} />
</Sidebar>
```
