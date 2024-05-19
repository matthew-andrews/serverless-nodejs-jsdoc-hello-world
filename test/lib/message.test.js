/**
 * @file Tests for hello message.
 * @author Matthew Andrews <matt@mattandre.ws>
 */
import {message} from '../../lib/message.js';

test('message is a message', () => {
	expect(message().hello).toEqual('world');
});

