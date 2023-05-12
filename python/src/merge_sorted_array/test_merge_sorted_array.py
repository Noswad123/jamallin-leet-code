import unittest
import merge_sorted_array

class TestMergeSortedArray(unittest.TestCase):
    def test_mergeSortedArray(self):
        result = merge_sorted_array()
        expected = []
        self.assertEqual(result, expected) 

"""
python -m unittest test_calc.py
"""


if __name__ == '__main__':
    unittest.main()