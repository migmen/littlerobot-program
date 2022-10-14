def raise_left_hand():
    global lefthanded_state, action
    if lefthanded_state == 0:
        PCA9685.set_servo_position(PCA9685.ServoNum.SERVO2, left_hand - 150, 64)
        lefthanded_state = 1
        action = 0
        basic.pause(309)
    else:
        PCA9685.set_servo_position(PCA9685.ServoNum.SERVO2, left_hand - 0, 64)
        lefthanded_state = 0
        action = 0
        basic.pause(300)

def on_received_number(receivedNumber):
    global action
    action = receivedNumber
radio.on_received_number(on_received_number)

def right_foot_back():
    PCA9685.set_servo_position(PCA9685.ServoNum.SERVO5, right_foot + 10, 64)
    PCA9685.set_servo_position(PCA9685.ServoNum.SERVO6, left_foot - 30, 64)
    basic.pause(100)
    PCA9685.set_servo_position(PCA9685.ServoNum.SERVO3, right_leg - 30, 64)
    PCA9685.set_servo_position(PCA9685.ServoNum.SERVO4, left_leg - 30, 64)
    basic.pause(150)
def back():
    right_foot_back()
    left_foot_back()
    basic.show_leds("""
        . . # . .
                . . # . .
                # . # . #
                . # # # .
                . . # . .
    """)
def right_foot_forward():
    PCA9685.set_servo_position(PCA9685.ServoNum.SERVO5, right_foot + 10, 64)
    PCA9685.set_servo_position(PCA9685.ServoNum.SERVO6, left_foot - 30, 64)
    basic.pause(100)
    PCA9685.set_servo_position(PCA9685.ServoNum.SERVO3, right_leg + 40, 64)
    PCA9685.set_servo_position(PCA9685.ServoNum.SERVO4, left_leg + 40, 64)
    basic.pause(150)
def go_ahead():
    right_foot_forward()
    left_foot_forward()
    basic.show_leds("""
        . . # . .
                . # . # .
                # . # . #
                . . # . .
                . . # . .
    """)
def left_foot_back():
    PCA9685.set_servo_position(PCA9685.ServoNum.SERVO5, right_foot - 10, 64)
    PCA9685.set_servo_position(PCA9685.ServoNum.SERVO6, left_foot + 30, 64)
    basic.pause(100)
    PCA9685.set_servo_position(PCA9685.ServoNum.SERVO3, right_leg + 30, 64)
    PCA9685.set_servo_position(PCA9685.ServoNum.SERVO4, left_leg + 30, 64)
    basic.pause(150)
def Turn_right():
    PCA9685.set_servo_position(PCA9685.ServoNum.SERVO5, right_foot + 30, 64)
    PCA9685.set_servo_position(PCA9685.ServoNum.SERVO6, left_foot - 30, 64)
    PCA9685.set_servo_position(PCA9685.ServoNum.SERVO3, right_leg - 70, 64)
    PCA9685.set_servo_position(PCA9685.ServoNum.SERVO4, left_leg - 70, 64)
    basic.pause(150)
    reset()
    basic.pause(50)
def Turn_left():
    PCA9685.set_servo_position(PCA9685.ServoNum.SERVO5, right_foot - 30, 64)
    PCA9685.set_servo_position(PCA9685.ServoNum.SERVO6, left_foot + 30, 64)
    PCA9685.set_servo_position(PCA9685.ServoNum.SERVO3, right_leg + 70, 64)
    PCA9685.set_servo_position(PCA9685.ServoNum.SERVO4, left_leg + 70, 64)
    basic.pause(150)
    reset()
    basic.pause(50)
def traverse_right():
    PCA9685.set_servo_position(PCA9685.ServoNum.SERVO6, left_foot, 64)
    PCA9685.set_servo_position(PCA9685.ServoNum.SERVO5, right_foot - 60, 64)
    basic.pause(150)
    PCA9685.set_servo_position(PCA9685.ServoNum.SERVO5, right_foot, 64)
    PCA9685.set_servo_position(PCA9685.ServoNum.SERVO6, left_foot + 60, 64)
    basic.pause(150)
def traverse_left():
    PCA9685.set_servo_position(PCA9685.ServoNum.SERVO6, left_foot, 64)
    PCA9685.set_servo_position(PCA9685.ServoNum.SERVO5, right_foot + 60, 64)
    basic.pause(150)
    PCA9685.set_servo_position(PCA9685.ServoNum.SERVO5, right_foot, 64)
    PCA9685.set_servo_position(PCA9685.ServoNum.SERVO6, left_foot - 60, 64)
    basic.pause(150)
def raise_right_hand():
    global right_hand_state, action
    if right_hand_state == 0:
        PCA9685.set_servo_position(PCA9685.ServoNum.SERVO1, right_hand + 150, 64)
        right_hand_state = 1
        action = 0
        basic.pause(300)
    else:
        PCA9685.set_servo_position(PCA9685.ServoNum.SERVO1, right_hand - 0, 64)
        right_hand_state = 0
        action = 0
        basic.pause(300)
def left_foot_forward():
    PCA9685.set_servo_position(PCA9685.ServoNum.SERVO5, right_foot - 10, 64)
    PCA9685.set_servo_position(PCA9685.ServoNum.SERVO6, left_foot + 30, 64)
    basic.pause(100)
    PCA9685.set_servo_position(PCA9685.ServoNum.SERVO3, right_leg - 40, 64)
    PCA9685.set_servo_position(PCA9685.ServoNum.SERVO4, left_leg - 40, 64)
    basic.pause(150)
def choose_move_action():
    global loop, adjNum
    basic.show_number(servoNum)
    loop = True
    while loop:
        if input.button_is_pressed(Button.AB):
            radio.send_number(servoNum)
        elif input.button_is_pressed(Button.A):
            adjNum += 1
            adjNum = servoNum
            basic.show_number(servoNum)
        elif input.button_is_pressed(Button.B):
            adjNum += -1
            adjNum = servoNum
            basic.show_number(servoNum)
        elif servoNum > 8:
            basic.show_icon(IconNames.SAD)
            basic.pause(2000)
            loop = False
def reset():
    PCA9685.set_servo_position(PCA9685.ServoNum.SERVO3, right_leg, 64)
    PCA9685.set_servo_position(PCA9685.ServoNum.SERVO5, right_foot, 64)
    PCA9685.set_servo_position(PCA9685.ServoNum.SERVO4, left_leg, 64)
    PCA9685.set_servo_position(PCA9685.ServoNum.SERVO6, left_foot, 64)
    basic.pause(100)
loop = False
action = 0
left_foot = 0
left_leg = 0
right_foot = 0
right_leg = 0
right_hand = 0
left_hand = 0
right_hand_state = 0
lefthanded_state = 0
servoNum = 0
adjNum = 0
basic.show_icon(IconNames.TSHIRT)
radio.set_group(1)
adjNum = 0
servoNum = 0
lefthanded_state = 0
right_hand_state = 0
left_hand = 170
right_hand = 10
right_leg = 90
right_foot = 90
left_leg = 90
left_foot = 90
action = 0
PCA9685.set_servo_position(PCA9685.ServoNum.SERVO1, right_hand, 64)
PCA9685.set_servo_position(PCA9685.ServoNum.SERVO2, left_hand, 64)
PCA9685.set_servo_position(PCA9685.ServoNum.SERVO3, right_leg, 64)
PCA9685.set_servo_position(PCA9685.ServoNum.SERVO4, left_leg, 64)
PCA9685.set_servo_position(PCA9685.ServoNum.SERVO5, right_foot, 64)
PCA9685.set_servo_position(PCA9685.ServoNum.SERVO6, left_foot, 64)
basic.pause(2000)

def on_forever():
    choose_move_action()
    if action == 1:
        go_ahead()
    elif action == 2:
        back()
    elif action == 3:
        Turn_left()
    elif action == 4:
        Turn_right()
    elif action == 0:
        reset()
    elif action == 5:
        traverse_left()
    elif action == 6:
        traverse_right()
    elif action == 7:
        raise_left_hand()
    elif action == 8:
        raise_right_hand()
basic.forever(on_forever)
