# Build Log

## Initial Commits
- Some aspects of setup need recording. These include project set up, auth0 integration, and env files.

## Dependencies
- This project uses pnpm


## Moving forward
* Added [Form Control](https://angular.dev/guide/forms/reactive-forms)
* Added [input sanitization](https://www.npmjs.com/package/dompurify). The default settings used are already sensible, no configuration needed.
  * Create a custom pipe and delegate the sanitization to dom purify [LINK](https://www.intricatecloud.io/2019/10/using-angular-innerhtml-to-display-user-generated-content-without-sacrificing-security/)
* Install Material Components. This will be a learning exercise as web components are not always reccomended unless you need them. The drawback is they rely heavily on javascript where native html and css would do. If javascript is disabled they lose functionality.

* Instructions:
    Install material-components-web
    ```bash
    pnpm install @material/web
    ```
* Converted CSS to SCSS so for loops are possible in css styles.
