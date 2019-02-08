export const headings = `
  <div style="padding: 1rem; text-align: center">
    <h1>Heads up 😱 with the HTML Widget</h1>
    <h3>She sells sea shells on the sea shore.</h3>
    <h4>The shells that she sells are sea shells I’m sure.</h4>
    <h5>So if she sells sea shells on the sea shore, then I’m sure she sells sea shore shells!</h5>
  </div>
`;

export const image = `<h2>Nested Image</h2><img src="https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg?w=1024&mode=max"/>`;

export const nestedImage = `
  <div style="padding: 1rem;">
    <h3>Nested image in a fixed width wrapper</h3>
    <div style="width: 200px; box-shadow: inset 0 0 0 1px black; padding: 20px">
      <img src="https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg?w=1024&mode=max"/>
      <img src="https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg?w=1024&mode=max"/>
    </div>
  </div>`;

export const flexWrappedImage = `
<div style="padding: 1rem;">
  <h3>Nested image in a flex wrapper</h3>
  <div style="display: flex; flex-direction: row; padding: 20px; box-shadow: inset 0 0 0 1px black;">
    <div style="margin: 5px;">
      <img src="https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg?w=1024&mode=max"/>
    </div>
    <div style="margin: 5px;">
      <img src="https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg?w=1024&mode=max"/>
    </div>
  </div>
</div>`;

export const malformedTable = `<TABLE><tr><td>Malformed Table 😱😱😱😱😱😱</tr></TABL>`;

export const malformedQuotes = `<UL style="list-style-type: none;margin: 0;padding: 0;">
  <li>
    <A HREF=//lodgify.com>Malformed Link 😱😱😱😱😱😱
</UL>`;

export const malformedAttack = `<p>Mal<iframe/\/src=jAva&Tab;script:alert(3)>formed text`;
