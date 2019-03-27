class Restaurant:
    def __init__(self, restaurant_name, cuisine_type):
        self.restaurant_name = restaurant_name
        self.cuisine_type = cuisine_type
    
    def describe_restaurant(self):
        print (self.restaurant_name)
        print (self.cuisine_type)

    def open_restaurant(self):
        print ("The restaurant is open")

food1 = Restaurant("McDonald's", "Fast food")
print (food1.restaurant_name, '+', food1.cuisine_type)

food1.describe_restaurant()
food1.open_restaurant()

food2 = Restaurant("Burger King", "Fast food")
food3 = Restaurant("Carl's Jr.", "Fast food")

food2.describe_restaurant()
food3.describe_restaurant()