import {assert} from 'chai';
import { canJump } from '../../src/jump-game/jump-game';

describe(canJump.name, function() {
	[
		[2,3,1,1,4],
		[1,2],
		[1],
		[0]
	].forEach((input) => {
		it(`should determine can reach end ${JSON.stringify(input)}`, function() {
			const result = canJump(input);
			assert.isTrue(result);
		});
	});
	[
		[3,2,1,0,4],
		[0,2,3]
	].forEach((input) => {
		it(`should determine cannot reach end ${JSON.stringify(input)}`, function() {
			const result = canJump(input);
			assert.isFalse(result);
		});
	})
});