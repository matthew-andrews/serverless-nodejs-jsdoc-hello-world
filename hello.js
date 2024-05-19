/**
 * @file Main business logic for Hello World.
 * @author Matthew Andrews <matt@mattandre.ws>
 */

/// <reference path="./index.d.ts" />

import {message} from './lib/message.js'

/**
 * Hello World Lambda function.
 *
 * @async
 * @return {Promise<Message>} Returns message.
 */
export async function world() {
	return {
		hello: 'world'
	};
}
