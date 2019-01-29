```jsx
const catImageUrl = 'https://si4.cdbcdn.com/oh/4efbc79e-34db-4447-b31a-24e77f33f4e9.jpg?w=100';
const name = 'Mitjons & Kira';
const description = `Cats have keen vision; they can see much more detail than dogs.
Concentrated in the center of the retina of the eye, a specific type of cell called a cone gives cats
excellent visual acuity and binocular vision. This allows them to judge speed and distance very well,
an ability that helped them survive as hunters. However, although the cone cells are also
responsible for color vision, it is uncertain whether cats can see colors.

Like dogs, cats also have a lot of the retinal cells called rods, which are good at collecting dim light.
In fact, cats can see 6 times better in dim light than people, giving rise to the myth that cats can see
in the dark. Cats also have a reflective layer called the tapetum lucidum, which magnifies incoming light
and lends a characteristic blue or greenish glint to their eyes at night.`;

const email = 'welovecats@lodgify.com';
const phone = '+34932206524';
const languages = ['English', 'Italian', 'German', 'Spanish'];

<HostProfile
  avatarUrl={catImageUrl}
  name={name}
  description={description}
  email={email}
  phone={phone}
  languages={languages}
/>
```

### Content

#### Strings
```jsx
const catImageUrl = 'https://si4.cdbcdn.com/oh/4efbc79e-34db-4447-b31a-24e77f33f4e9.jpg?w=100';
const name = 'Mitjons & Kira';
const description = `Cats have keen vision; they can see much more detail than dogs.
Concentrated in the center of the retina of the eye, a specific type of cell called a cone gives cats
excellent visual acuity and binocular vision.`;
const contactInformationHeadingText = 'Contact details';
const email = 'welovecats@lodgify.com';
const emailLabel = 'Email Address';
const headingText = 'Profile';
const languages = ['English', 'Italian', 'German', 'Spanish'];
const languagesLabel = 'Spoken languages';
const phone = '+34932206524';
const phoneLabel = 'Tel';

<HostProfile
  avatarUrl={catImageUrl}
  contactInformationHeadingText={contactInformationHeadingText}
  description={description}
  email={email}
  emailLabel={emailLabel}
  headingText={headingText}
  languages={languages}
  languagesLabel={languagesLabel}
  name={name}
  phone={phone}
  phoneLabel={phoneLabel}
/>
```
