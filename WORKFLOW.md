# Workflow

## Developing

- Start 
	- Prebuilding, serving and watching
	- `makers --makefile .\scripts.toml start`
- Checking
	- `makers --makefile .\scripts.toml check`
	- HTML, CSS, SVG W3C validator `vnu`
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

## Deployment

1. `makers --makefile .\scripts.toml deploy`
