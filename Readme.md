## Semantic Installation

It actually doesn't matter where you install semantic.

For the purpose of running `lodgify-ui`, a good way to install it would be:

1. Automatic installation option on step 1.
2. Set the root of the project to `templates-ssr`.
3. Set the `semantic/` installation on the root level or inside `lodgify-ui`.
4. Once installed, enter in the `semantic/` folder an run `gulp build` to generate styles.
5. Uncomment the importing of semantic css from `semantic-ui-react/component.js`.
