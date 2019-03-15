import unittest
from palindrome import Palindrome


class PalindromeTests(unittest.TestCase):

    def setUp(self):
        self.palindrome = Palindrome()
        print("SETUP")

    def reverse(self):
        result = self.palindrome.palindrome('cat')
        self.assertEqual('tac', result)

    def tearDown(self):
        print("TEARDOWN")


unittest.main()
