/**
 * @file ESLint configuration.
 * @author Matthew Andrews <matt@mattandre.ws>
 */

import js from "@eslint/js";
import jsdoc from "eslint-plugin-jsdoc";
import globals from "globals";

export default [
	js.configs.recommended,
	{
		files: [
			'**/*.js'
		],
		ignores: [
			'.serverless/**/*'
		],
		plugins: {
			jsdoc
		},
		languageOptions: {
			globals: {
				...globals.jest
			}
		},
		rules: {
			'jsdoc/check-access': ['error'], // Recommended
			'jsdoc/check-alignment': ['error'], // Recommended
			'jsdoc/check-examples': 0, // Cannot use in the current version
			'jsdoc/check-indentation': ['error'],
			'jsdoc/check-line-alignment': ['error'],
			'jsdoc/check-param-names': ['error'], // Recommended
			'jsdoc/check-property-names': ['error'], // Recommended
			'jsdoc/check-syntax': ['error'],
			'jsdoc/check-tag-names': ['error'], // Recommended
			'jsdoc/check-types': ['error'], // Recommended
			'jsdoc/check-values': ['error'], // Recommended
			'jsdoc/empty-tags': ['error'], // Recommended
			'jsdoc/implements-on-classes': ['error'], // Recommended
			'jsdoc/match-description': ['error'],
			'jsdoc/multiline-blocks': ['error'], // Recommended
			'jsdoc/no-bad-blocks': ['error'],
			'jsdoc/no-defaults': ['error'],
			'jsdoc/no-missing-syntax': 0, // Not sure what this does
			'jsdoc/no-multi-asterisks': ['error'], // Recommended
			'jsdoc/no-restricted-syntax': 0, // No idea what this is about
			'jsdoc/no-types': 0, // This is intended for TypeScript where JSDoc typing would be redundant, obviously not relevant here
			'jsdoc/no-undefined-types': 0, // Handled by TypeScript itself
			'jsdoc/require-asterisk-prefix': ['error'],
			'jsdoc/require-description': ['error'],
			'jsdoc/require-description-complete-sentence': ['error'],
			'jsdoc/require-example': 0, // No need to specify examples for everything
			'jsdoc/require-file-overview': ['error'],
			'jsdoc/require-hyphen-before-param-description': ['error'],
			'jsdoc/require-jsdoc': ['error'], // Recommended
			'jsdoc/require-param': ['error'], // Recommended
			'jsdoc/require-param-description': ['error'], // Recommended
			'jsdoc/require-param-name': ['error'], // Recommended
			'jsdoc/require-param-type': ['error'], // Recommended
			'jsdoc/require-property': ['error'], // Recommended
			'jsdoc/require-property-description': ['error'], // Recommended
			'jsdoc/require-property-name': ['error'], // Recommended
			'jsdoc/require-property-type': ['error'], // Recommended
			'jsdoc/require-returns': ['error'], // Recommended
			'jsdoc/require-returns-check': ['error'], // Recommended
			'jsdoc/require-returns-description': ['error'], // Recommended
			'jsdoc/require-returns-type': ['error'], // Recommended
			'jsdoc/require-throws': ['error'],
			'jsdoc/require-yields': ['error'], // Recommended
			'jsdoc/require-yields-check': ['error'], // Recommended
			'jsdoc/tag-lines': ['error'], // Recommended
			'jsdoc/valid-types': 0 // Disable because TypeScript is doing it and is better at it
		}
	}
];
