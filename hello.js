/**
 * @file Main business logic for Hello World.
 * @author Matthew Andrews <matt@mattandre.ws>
 */

/// <reference path="./index.d.ts" />

import log from 'npmlog';
log.level = process.env.LOG_LEVEL || 'info';

/**
 * Hello World Lambda function.
 *
 * @async
 * @return {Promise<Message>} Returns Tokyoto court availability data object.
 */
export async function world() {
	return {
		hello: 'world'
	};
}
