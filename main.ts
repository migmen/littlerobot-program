// The function raise_left_hand is activated when Kapakai receives the number 5 as a signal
function raise_left_hand (rlhnum: number) {
    basic.showNumber(action)
    repeat_left_hand = rlhnum
    basic.showLeds(`
        # . . # .
        # . # # #
        # # # # #
        . . # # #
        . . # # #
        `)
    for (let index = 0; index < repeat_left_hand; index++) {
        if (lefthanded_state == 0) {
            // You can try to modify this number +150 to something between +10  and +180 to see a change in the rise angle of the left hand of Kapakai
            // 
            PCA9685.setServoPosition(PCA9685.ServoNum.Servo2, left_hand + 150, 64)
            lefthanded_state = 1
            action = 0
            basic.pause(100)
        } else {
            PCA9685.setServoPosition(PCA9685.ServoNum.Servo2, left_hand - 0, 64)
            lefthanded_state = 0
            action = 0
            basic.pause(100)
        }
    }
    basic.pause(200)
}
radio.onReceivedNumber(function (receivedNumber) {
    action = receivedNumber
})
// The function crossover_left is activated when Kapakai receives the number 11 as a signal
function crossover_left (clnum: number) {
    basic.showNumber(action)
    repeat_crossover_left = clnum
    basic.showLeds(`
        # . . . #
        # . . . #
        # # . . #
        . # . # #
        . # . # #
        `)
    for (let index = 0; index < repeat_crossover_left; index++) {
        PCA9685.setServoPosition(PCA9685.ServoNum.Servo6, left_foot, 64)
        PCA9685.setServoPosition(PCA9685.ServoNum.Servo5, right_foot + 60, 64)
        basic.pause(150)
        PCA9685.setServoPosition(PCA9685.ServoNum.Servo5, right_foot, 64)
        PCA9685.setServoPosition(PCA9685.ServoNum.Servo6, left_foot - 60, 64)
        basic.pause(100)
    }
    basic.pause(200)
}
// The function right_foot_back is activated when Kapakai receives the number 10 as a signal
function right_foot_back (rfbnum: number) {
    basic.showNumber(action)
    repeat_right_foot_back = rfbnum
    basic.showLeds(`
        # . . . .
        # # . . .
        # # . . .
        . . # . #
        . . . # .
        `)
    for (let index = 0; index < repeat_right_foot_back; index++) {
        PCA9685.setServoPosition(PCA9685.ServoNum.Servo5, right_foot + 10, 64)
        PCA9685.setServoPosition(PCA9685.ServoNum.Servo6, left_foot - 30, 64)
        basic.pause(100)
        PCA9685.setServoPosition(PCA9685.ServoNum.Servo3, right_leg - 30, 64)
        PCA9685.setServoPosition(PCA9685.ServoNum.Servo4, left_leg - 30, 64)
        basic.pause(150)
    }
}
// The function back is activated when Kapakai receives the number 2 as a signal 
function back (bnum: number) {
    basic.showNumber(action)
    repeat_back = bnum
    right_foot_back(1)
    for (let index = 0; index < repeat_back; index++) {
        left_foot_back(1)
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    }
}
// The right_foot_forward function is activated when Kapakai receives the number 9 as a signal
function right_foot_forward (rffnum: number) {
    basic.showNumber(action)
    repeat_right_foot_forward = rffnum
    basic.showLeds(`
        # . . # .
        # . # . #
        # . . . .
        # # . . .
        # # . . .
        `)
    for (let index = 0; index < repeat_right_foot_forward; index++) {
        PCA9685.setServoPosition(PCA9685.ServoNum.Servo5, right_foot + 10, 64)
        PCA9685.setServoPosition(PCA9685.ServoNum.Servo6, left_foot - 30, 64)
        basic.pause(100)
        PCA9685.setServoPosition(PCA9685.ServoNum.Servo3, right_leg + 40, 64)
        PCA9685.setServoPosition(PCA9685.ServoNum.Servo4, left_leg + 40, 64)
        basic.pause(100)
    }
    basic.pause(200)
}
// The function use_all is activated when Kapakai receives the number 13 as a signal
function use_all () {
    basic.showNumber(action)
    basic.showLeds(`
        . . # . .
        . # . # .
        # . # . #
        . # . # .
        . . # . .
        `)
    reset()
    basic.pause(100)
    go_ahead(1)
    basic.pause(100)
    raise_left_hand(1)
    basic.pause(100)
    raise_right_hand(1)
    basic.pause(100)
    Turn_left(1)
    basic.pause(100)
    back(1)
    basic.pause(100)
    Turn_right(1)
    basic.pause(100)
    left_foot_forward(1)
    basic.pause(100)
    left_foot_back(1)
    basic.pause(100)
    right_foot_forward(1)
    basic.pause(100)
    crossover_right(1)
    basic.pause(100)
    crossover_left(1)
    basic.pause(100)
    right_foot_back(1)
    basic.pause(100)
    reset()
    basic.showIcon(IconNames.Square)
}
// The function go ahead is activated when Kapakai receives the number 1 as a signal
function go_ahead (ganum: number) {
    basic.showNumber(action)
    repeat_go_ahead = ganum
    for (let index = 0; index < repeat_go_ahead; index++) {
        right_foot_forward(1)
        left_foot_forward(1)
        basic.showLeds(`
            . . # . .
            . # . # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
}
input.onButtonPressed(Button.A, function () {
    servoNum += 1
    basic.showNumber(servoNum)
})
// The function left_foot_back is activated when Kapakai receives the number 8 as a signal
function left_foot_back (lfbnum: number) {
    basic.showNumber(action)
    repeat_left_foot_back = lfbnum
    basic.showLeds(`
        . . . . #
        . . . # #
        . . . # #
        # . # . .
        . # . . .
        `)
    for (let index = 0; index < repeat_left_foot_back; index++) {
        PCA9685.setServoPosition(PCA9685.ServoNum.Servo5, right_foot - 10, 64)
        PCA9685.setServoPosition(PCA9685.ServoNum.Servo6, left_foot + 30, 64)
        basic.pause(100)
        PCA9685.setServoPosition(PCA9685.ServoNum.Servo3, right_leg + 30, 64)
        PCA9685.setServoPosition(PCA9685.ServoNum.Servo4, left_leg + 30, 64)
        basic.pause(100)
    }
    basic.pause(200)
}
// The function crossover_right is activated when Kapakai receives the number 12 as a signal
function crossover_right (crnum: number) {
    basic.showNumber(action)
    repeat_crossover_right = crnum
    basic.showLeds(`
        # . . . #
        # . . . #
        # . . # #
        # # . # .
        # # . # .
        `)
    for (let index = 0; index < repeat_crossover_right; index++) {
        PCA9685.setServoPosition(PCA9685.ServoNum.Servo6, left_foot, 64)
        PCA9685.setServoPosition(PCA9685.ServoNum.Servo5, right_foot - 60, 64)
        basic.pause(150)
        PCA9685.setServoPosition(PCA9685.ServoNum.Servo5, right_foot, 64)
        PCA9685.setServoPosition(PCA9685.ServoNum.Servo6, left_foot + 60, 64)
        basic.pause(100)
    }
    basic.pause(200)
}
// The function Turn_right is activated when Kapakai receives the number 4 as a signal
function Turn_right (trnum: number) {
    basic.showNumber(action)
    repeat_turn_right = trnum
    basic.showLeds(`
        . . # # #
        . . . # #
        . . # . #
        . . # . .
        . . # . .
        `)
    for (let index = 0; index < repeat_turn_right; index++) {
        PCA9685.setServoPosition(PCA9685.ServoNum.Servo5, right_foot + 30, 64)
        PCA9685.setServoPosition(PCA9685.ServoNum.Servo6, left_foot - 30, 64)
        PCA9685.setServoPosition(PCA9685.ServoNum.Servo3, right_leg - 70, 64)
        PCA9685.setServoPosition(PCA9685.ServoNum.Servo4, left_leg - 70, 64)
        basic.pause(200)
    }
}
// The function Turn_left is activated when Kapakai receives the number 3 as a signal 
function Turn_left (tlnum: number) {
    basic.showNumber(action)
    repeat_turn_left = tlnum
    basic.showLeds(`
        # # # . .
        # # . . .
        # . # . .
        . . # . .
        . . # . .
        `)
    for (let index = 0; index < repeat_turn_left; index++) {
        PCA9685.setServoPosition(PCA9685.ServoNum.Servo5, right_foot - 30, 64)
        PCA9685.setServoPosition(PCA9685.ServoNum.Servo6, left_foot + 30, 64)
        PCA9685.setServoPosition(PCA9685.ServoNum.Servo3, right_leg + 70, 64)
        PCA9685.setServoPosition(PCA9685.ServoNum.Servo4, left_leg + 70, 64)
        basic.pause(200)
    }
}
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(servoNum)
    basic.showNumber(servoNum)
})
input.onButtonPressed(Button.B, function () {
    servoNum += -1
    basic.showNumber(servoNum)
})
// The function raised_right_hand is activated when Kapakai receives the number 6 as a signal
function raise_right_hand (rrhnum: number) {
    basic.showNumber(action)
    repeat_right_hand = rrhnum
    basic.showLeds(`
        . # . . #
        # # # . #
        # # # # #
        # # # . .
        # # # . .
        `)
    for (let index = 0; index < repeat_right_hand; index++) {
        if (right_hand_state == 0) {
            // You can try to modify this number +150 to something between +10  and +180 to see a change in the rise angle of the left hand of Kapakai
            PCA9685.setServoPosition(PCA9685.ServoNum.Servo1, right_hand + 150, 64)
            right_hand_state = 1
            action = 0
            basic.pause(100)
        } else {
            PCA9685.setServoPosition(PCA9685.ServoNum.Servo1, right_hand - 0, 64)
            right_hand_state = 0
            action = 0
            basic.pause(100)
        }
    }
    basic.pause(200)
}
// The left_foot_forward function is activated when Kapakai receives the number 7 as a signal
function left_foot_forward (lffnum: number) {
    basic.showNumber(action)
    repeat_left_foot_forward = lffnum
    basic.showLeds(`
        . # . . #
        # . # . #
        . . . . #
        . . . # #
        . . . # #
        `)
    for (let index = 0; index < repeat_left_foot_forward; index++) {
        PCA9685.setServoPosition(PCA9685.ServoNum.Servo5, right_foot - 10, 64)
        PCA9685.setServoPosition(PCA9685.ServoNum.Servo6, left_foot + 30, 64)
        basic.pause(100)
        PCA9685.setServoPosition(PCA9685.ServoNum.Servo3, right_leg - 40, 64)
        PCA9685.setServoPosition(PCA9685.ServoNum.Servo4, left_leg - 40, 64)
        basic.pause(100)
    }
    basic.pause(200)
}
function reset () {
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo1, right_hand, 64)
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo2, left_hand, 64)
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo3, right_leg, 64)
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo5, right_foot, 64)
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo4, left_leg, 64)
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo6, left_foot, 64)
    basic.showIcon(IconNames.StickFigure)
    basic.pause(2000)
}
// Here you find all elements used in the movements performed by Kapakai. The variables in red are given their initial values. The blocks in green are the elements related to the servos with the initial positions as variables at start
let repeat_left_foot_forward = 0
let repeat_right_hand = 0
let repeat_turn_left = 0
let repeat_turn_right = 0
let repeat_crossover_right = 0
let repeat_left_foot_back = 0
let repeat_go_ahead = 0
let repeat_right_foot_forward = 0
let repeat_back = 0
let repeat_right_foot_back = 0
let repeat_crossover_left = 0
let repeat_left_hand = 0
let action = 0
let left_foot = 0
let left_leg = 0
let right_foot = 0
let right_leg = 0
let right_hand = 0
let left_hand = 0
let right_hand_state = 0
let lefthanded_state = 0
let servoNum = 0
basic.showIcon(IconNames.Happy)
radio.setGroup(1)
let adjNum = 0
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
PCA9685.setServoPosition(PCA9685.ServoNum.Servo1, right_hand, 64)
PCA9685.setServoPosition(PCA9685.ServoNum.Servo1, left_hand, 64)
PCA9685.setServoPosition(PCA9685.ServoNum.Servo1, right_leg, 64)
PCA9685.setServoPosition(PCA9685.ServoNum.Servo1, right_foot, 64)
PCA9685.setServoPosition(PCA9685.ServoNum.Servo1, left_leg, 64)
PCA9685.setServoPosition(PCA9685.ServoNum.Servo1, left_foot, 64)
basic.pause(200)
// Here Kapakai is waiting for the user to use choose a given numbered action given by pressing the button A to go up or down by pressing the B button or by pressing both A+B together to send the chosen value to the servos 
basic.forever(function () {
    if (action == 1) {
        go_ahead(1)
    } else if (action == 2) {
        back(1)
    } else if (action == 3) {
        Turn_left(1)
    } else if (action == 4) {
        Turn_right(1)
    } else if (action == 5) {
        raise_left_hand(1)
    } else if (action == 6) {
        raise_right_hand(1)
    } else if (action == 7) {
        left_foot_forward(1)
    } else if (action == 8) {
        left_foot_back(1)
    } else if (action == 9) {
        right_foot_forward(1)
    } else if (action == 10) {
        right_foot_back(1)
    } else if (action == 11) {
        crossover_left(1)
    } else if (action == 12) {
        crossover_right(1)
    } else if (action == 13) {
        use_all()
    }
})
