from graphics import *

win = GraphWin('Smile', 600, 600)
center = Point(300, 300)

circle = Circle(center, 80)
circle.setFill('yellow')
circle.draw(win)

another_circle = Circle(Point(280, 280), 5)
another_circle.setFill('black')
another_circle.draw(win)

another_circle2 = Circle(Point(320, 280), 5)
another_circle2.setFill('black')
another_circle2.draw(win)

line = Line(Point(260, 340), Point(280, 350))
line.draw(win)

line2 = Line(Point(280, 350), Point(320, 350))
line2.draw(win)

line3 = Line(Point(320, 350), Point(340, 340))
line3.draw(win)


win.getMouse()
win.close()
