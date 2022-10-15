function raise_left_hand (rlhnum: number) {
    repeat_left_hand = rlhnum
    for (let index = 0; index < repeat_left_hand; index++) {
        if (lefthanded_state == 0) {
            PCA9685.setServoPosition(PCA9685.ServoNum.Servo2, left_hand - 150, 64)
            lefthanded_state = 1
            action = 0
            basic.pause(309)
        } else {
            PCA9685.setServoPosition(PCA9685.ServoNum.Servo2, left_hand - 0, 64)
            lefthanded_state = 0
            action = 0
            basic.pause(300)
        }
    }
}
radio.onReceivedNumber(function (receivedNumber) {
    action = receivedNumber
})
function crossover_left (clnum: number) {
    repeat_crossover_left = clnum
    for (let index = 0; index < repeat_crossover_left; index++) {
        PCA9685.setServoPosition(PCA9685.ServoNum.Servo6, left_foot, 64)
        PCA9685.setServoPosition(PCA9685.ServoNum.Servo5, right_foot + 60, 64)
        basic.pause(150)
        PCA9685.setServoPosition(PCA9685.ServoNum.Servo5, right_foot, 64)
        PCA9685.setServoPosition(PCA9685.ServoNum.Servo6, left_foot - 60, 64)
        basic.pause(150)
    }
}
function right_foot_back (rfbnum: number) {
    repeat_right_foot_back = rfbnum
    for (let index = 0; index < repeat_right_foot_back; index++) {
        PCA9685.setServoPosition(PCA9685.ServoNum.Servo5, right_foot + 10, 64)
        PCA9685.setServoPosition(PCA9685.ServoNum.Servo6, left_foot - 30, 64)
        basic.pause(100)
        PCA9685.setServoPosition(PCA9685.ServoNum.Servo3, right_leg - 30, 64)
        PCA9685.setServoPosition(PCA9685.ServoNum.Servo4, left_leg - 30, 64)
        basic.pause(150)
    }
}
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
function right_foot_forward (rffnum: number) {
    repeat_right_foot_forward = rffnum
    for (let index = 0; index < repeat_right_foot_forward; index++) {
        PCA9685.setServoPosition(PCA9685.ServoNum.Servo5, right_foot + 10, 64)
        PCA9685.setServoPosition(PCA9685.ServoNum.Servo6, left_foot - 30, 64)
        basic.pause(100)
        PCA9685.setServoPosition(PCA9685.ServoNum.Servo3, right_leg + 40, 64)
        PCA9685.setServoPosition(PCA9685.ServoNum.Servo4, left_leg + 40, 64)
        basic.pause(150)
    }
}
function readyforplay () {
    basic.showNumber(action)
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo1, right_hand, 64)
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo2, left_hand, 64)
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo3, right_leg, 64)
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo5, right_foot, 64)
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo4, left_leg, 64)
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo6, left_foot, 64)
    basic.pause(200)
}
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
function left_foot_back (lfbnum: number) {
    repeat_left_foot_back = lfbnum
    for (let index = 0; index < repeat_left_foot_back; index++) {
        PCA9685.setServoPosition(PCA9685.ServoNum.Servo5, right_foot - 10, 64)
        PCA9685.setServoPosition(PCA9685.ServoNum.Servo6, left_foot + 30, 64)
        basic.pause(100)
        PCA9685.setServoPosition(PCA9685.ServoNum.Servo3, right_leg + 30, 64)
        PCA9685.setServoPosition(PCA9685.ServoNum.Servo4, left_leg + 30, 64)
        basic.pause(150)
    }
}
function crossover_right (crnum: number) {
    repeat_crossover_right = crnum
    for (let index = 0; index < repeat_crossover_right; index++) {
        PCA9685.setServoPosition(PCA9685.ServoNum.Servo6, left_foot, 64)
        PCA9685.setServoPosition(PCA9685.ServoNum.Servo5, right_foot - 60, 64)
        basic.pause(150)
        PCA9685.setServoPosition(PCA9685.ServoNum.Servo5, right_foot, 64)
        PCA9685.setServoPosition(PCA9685.ServoNum.Servo6, left_foot + 60, 64)
        basic.pause(150)
    }
}
function Turn_right (trnum: number) {
    repeat_turn_right = trnum
    for (let index = 0; index < repeat_turn_right; index++) {
        PCA9685.setServoPosition(PCA9685.ServoNum.Servo5, right_foot + 30, 64)
        PCA9685.setServoPosition(PCA9685.ServoNum.Servo6, left_foot - 30, 64)
        PCA9685.setServoPosition(PCA9685.ServoNum.Servo3, right_leg - 70, 64)
        PCA9685.setServoPosition(PCA9685.ServoNum.Servo4, left_leg - 70, 64)
        basic.pause(150)
        readyforplay()
        basic.pause(50)
    }
}
function Turn_left (tlnum: number) {
    repeat_turn_left = tlnum
    for (let index = 0; index < repeat_turn_left; index++) {
        PCA9685.setServoPosition(PCA9685.ServoNum.Servo5, right_foot - 30, 64)
        PCA9685.setServoPosition(PCA9685.ServoNum.Servo6, left_foot + 30, 64)
        PCA9685.setServoPosition(PCA9685.ServoNum.Servo3, right_leg + 70, 64)
        PCA9685.setServoPosition(PCA9685.ServoNum.Servo4, left_leg + 70, 64)
        basic.pause(150)
        readyforplay()
        basic.pause(50)
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
function raise_right_hand (rrhnum: number) {
    repeat_right_hand = rrhnum
    for (let index = 0; index < repeat_right_hand; index++) {
        if (right_hand_state == 0) {
            PCA9685.setServoPosition(PCA9685.ServoNum.Servo1, right_hand + 150, 64)
            right_hand_state = 1
            action = 0
            basic.pause(300)
        } else {
            PCA9685.setServoPosition(PCA9685.ServoNum.Servo1, right_hand - 0, 64)
            right_hand_state = 0
            action = 0
            basic.pause(300)
        }
    }
}
function use_all () {
    readyforplay()
    go_ahead(1)
    raise_left_hand(1)
    raise_right_hand(1)
    Turn_left(1)
    back(1)
    Turn_right(1)
    left_foot_forward(1)
    left_foot_back(1)
    right_foot_forward(1)
    crossover_right(1)
    crossover_left(1)
    right_foot_back(1)
    readyforplay()
}
function left_foot_forward (lffnum: number) {
    repeat_left_foot_forward = lffnum
    for (let index = 0; index < repeat_left_foot_forward; index++) {
        PCA9685.setServoPosition(PCA9685.ServoNum.Servo5, right_foot - 10, 64)
        PCA9685.setServoPosition(PCA9685.ServoNum.Servo6, left_foot + 30, 64)
        basic.pause(100)
        PCA9685.setServoPosition(PCA9685.ServoNum.Servo3, right_leg - 40, 64)
        PCA9685.setServoPosition(PCA9685.ServoNum.Servo4, left_leg - 40, 64)
        basic.pause(150)
    }
}
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
basic.pause(2000)
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
        crossover_left(1)
    } else if (action == 6) {
        crossover_right(1)
    } else if (action == 7) {
        raise_left_hand(1)
    } else if (action == 8) {
        raise_right_hand(1)
    } else if (action == 9) {
        use_all()
    }
})
