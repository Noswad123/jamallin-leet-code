import {assert} from 'chai';
import { maxProfit } from '../../src/best-time-to-buy-and-sell-stock/best-time-to-buy-and-sell-stock';

describe(maxProfit.name, function() {
	it('should calculate max profits', function() {
		const prices = [7,1,5,3,6,4];
		const result = maxProfit(prices);

		const expected = 5;
		assert.strictEqual(result, expected);
	})
	

	it('should calculate max profits reverse', function() {
		const prices = [7,6,4,3,1];
		const result = maxProfit(prices);

		const expected = 0;
		assert.strictEqual(result, expected);
	})
})
