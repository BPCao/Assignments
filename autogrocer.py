stores_lst = []
choice = ""


class StoreList:
    def __init__(self, name):
        self.name = name
        self.item_lst = []


class GroceryItem:
    def __init__(self, name, quantity):
        self.name = name
        self.quantity = quantity


def main_menu():
    print("Welcome to AutoGrocer! Please select from the following: ")
    print("Press 1 to add a store")
    print("Press 2 to display all items")
    print("Press 3 to add a grocery item")
    print("Press 'q' to quit")


def store_menu():
    print("Please enter a store name or 'q' to quit: ")


def add_store():
    store_name = input("What is the name of your store? ")
    store = StoreList(store_name)
    stores_lst.append(store)


def view_stores():
    for i, store in enumerate(stores_lst, 1):
        print(i, store.name)
        for item in store.item_lst:
            print("\n", item.name, item.quantity)
        print("----------")


def store_search():
    view_stores()
    store_input = int(input(
        "Please enter the number of the store you wish to add an item: "))
    item_name = input(
        "Please enter the name of the item you wish to purchase: ")
    item_quantity = input("Please enter the amount you wish to purchase: ")
    new_item = GroceryItem(item_name, item_quantity)
    stores_lst[store_input-1].item_lst.append(new_item)


while choice != "q":
    print('\n')
    main_menu()
    print('\n')
    choice = input("Please make your selection: ")
    print('\n')
    if choice == '1':
        store_menu()
        add_store()
    elif choice == '2':
        print('\n')
        view_stores()
    elif choice == '3':
        store_search()
    elif choice == 'q':
        break
    else:
        print('\n')
        print("Invalid choice, please select a valid menu item.")
