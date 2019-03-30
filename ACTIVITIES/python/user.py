class User():
    def __init__(self, first_name, last_name, age, race):
        self.first_name = first_name
        self.last_name = last_name
        self.age = age
        self.race = race
        self.counter = 0

    def describe_user(self):
        print(self.first_name, self.last_name, self.age, self.race)

    def greeting(self):
        print(
            f"Welcome, {self.first_name} {self.last_name}! You are {self.age} years old, and {self.race}.")

    def login_attempts(self):
        self.counter += 1
        print(f"Login attempts: {self.counter}")

    def reset_login_attempts(self):
        self.counter *= 0
        print("Counter has been reset to 0.")


user1 = User("Bach", "Cao", 28, "Asian")
user1.describe_user()
user1.greeting()
user1.login_attempts()
user1.login_attempts()
user1.login_attempts()
user1.login_attempts()
user1.reset_login_attempts()
user1.login_attempts()

user2 = User("Leenah", "Jimenez", 45, "Colombian")
user2.describe_user()
user2.greeting()
