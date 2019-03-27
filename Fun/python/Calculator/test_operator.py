import unittest
from calculator import Calculator


class CalculatorTests(unittest.TestCase):

    def setUp(self):
        self.Calculator = Calculator()
        print("SETUP")

    def test_add_two_numbers(self):
        print("test_add_two_numbers")
        result = self.Calculator.addition(2, 3)
        self.assertEqual(5, result)

    def test_subtract_two_numbers(self):
        print("test_subtract_two_numbers")
        result = self.Calculator.subtraction(3, 2)
        self.assertEqual(1, result)

    def test_multiply_two_numbers(self):
        print("test_multiply_two_numbers")
        result = self.Calculator.multiply(2, 3)
        self.assertEqual(6, result)

    def test_divide_two_numbers(self):
        result = self.Calculator.divide(6, 3)
        self.assertEqual(2, result)

    def tearDown(self):
        print("TEARDOWN")


unittest.main()
