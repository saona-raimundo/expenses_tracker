# Workflow

## Developing

- `yarn start`
	- Prebuilding, serving and watching
- Checking
	- HTML, CSS, SVG W3C validator `vnu`
		- `yarn run check`
			- `vnu --also-check-css --also-check-svg --verbose src`
		- https://validator.w3.org/
	- Vulnerabilities
		- `yarn audit`
	- Performance and Google advices
		- https://web.dev/measure/
	- I18n
		- (Integrated in `vnu`)
		- https://validator.w3.org/i18n-checker/check
	- Link checker
		- `checklink --recursive --summary http://localhost:1234`
		- https://validator.w3.org/checklink
	- RDF
		- https://www.w3.org/RDF/Validator/
	- Information 
		- General tools
			- https://w3c.github.io/developers/tools/
