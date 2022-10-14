let adjNum = 0
let servoNum = 0
let loop = false
// How to use
// 
// 1.Push A to start correction
// 
// 2.Push A or B to move each servo
// 
// 3.Push A+B to switch to next servo
// 
// 4.Loop
// 
// 5.Ends when smile is displayed
// 
// 6.Reset, then Push B to walk
// 
// If Kapakai does not fall over, setting is complete
function servoAdjust () {
    adjNum = 0
    servoNum = 0
    basic.showNumber(servoNum)
    loop = true
    while (loop) {
        if (input.buttonIsPressed(Button.AB)) {
            plenbit.savePositon(servoNum, adjNum)
            servoNum += 1
            adjNum = 0
            basic.showNumber(servoNum)
        } else if (input.buttonIsPressed(Button.A)) {
            adjNum += 1
            adjNum = plenbit.servoAdjust(servoNum, adjNum)
        } else if (input.buttonIsPressed(Button.B)) {
            adjNum += -1
            adjNum = plenbit.servoAdjust(servoNum, adjNum)
        } else if (servoNum > 7) {
            basic.showIcon(IconNames.Happy)
            basic.pause(2000)
            loop = false
        }
        if (servoNum == 1) {
            robotbit.Servo(robotbit.Servos.S1, 89)
            basic.pause(200)
            robotbit.Servo(robotbit.Servos.S1, 0)
            basic.pause(200)
        } else if (servoNum == 2) {
            robotbit.Servo(robotbit.Servos.S2, 57)
            basic.pause(200)
            robotbit.Servo(robotbit.Servos.S2, 0)
            basic.pause(200)
        } else if (servoNum == 3) {
            robotbit.Servo(robotbit.Servos.S3, 138)
            basic.pause(200)
            robotbit.Servo(robotbit.Servos.S3, 0)
            basic.pause(200)
        } else if (servoNum == 4) {
            robotbit.Servo(robotbit.Servos.S4, 61)
            basic.pause(200)
            robotbit.Servo(robotbit.Servos.S4, 128)
            basic.pause(200)
        } else {
            basic.showLeds(`
                . . # . .
                # . # . #
                # . # . #
                . # # # .
                . . . . .
                `)
        }
    }
}




function raise_left_hand () {
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
radio.onReceivedNumber(function (receivedNumber) {
    action = receivedNumber
})
function right_foot_back () {
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo5, right_foot + 10, 64)
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo6, left_foot - 30, 64)
    basic.pause(100)
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo3, right_leg - 30, 64)
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo4, left_leg - 30, 64)
    basic.pause(150)
}
function back () {
    right_foot_back()
    left_foot_back()
}
function right_foot_forward () {
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo5, right_foot + 10, 64)
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo6, left_foot - 30, 64)
    basic.pause(100)
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo3, right_leg + 40, 64)
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo4, left_leg + 40, 64)
    basic.pause(150)
}
function go_ahead () {
    right_foot_forward()
    left_foot_forward()
}
function left_foot_back () {
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo5, right_foot - 10, 64)
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo6, left_foot + 30, 64)
    basic.pause(100)
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo3, right_leg + 30, 64)
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo4, left_leg + 30, 64)
    basic.pause(150)
}
function Turn_right () {
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo5, right_foot + 30, 64)
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo6, left_foot - 30, 64)
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo3, right_leg - 70, 64)
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo4, left_leg - 70, 64)
    basic.pause(150)
    reset()
    basic.pause(50)
}
function Turn_left () {
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo5, right_foot - 30, 64)
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo6, left_foot + 30, 64)
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo3, right_leg + 70, 64)
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo4, left_leg + 70, 64)
    basic.pause(150)
    reset()
    basic.pause(50)
}
function traverse_right () {
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo6, left_foot, 64)
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo5, right_foot - 60, 64)
    basic.pause(150)
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo5, right_foot, 64)
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo6, left_foot + 60, 64)
    basic.pause(150)
}
function traverse_left () {
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo6, left_foot, 64)
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo5, right_foot + 60, 64)
    basic.pause(150)
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo5, right_foot, 64)
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo6, left_foot - 60, 64)
    basic.pause(150)
}
function raise_right_hand () {
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
function left_foot_forward () {
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo5, right_foot - 10, 64)
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo6, left_foot + 30, 64)
    basic.pause(100)
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo3, right_leg - 40, 64)
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo4, left_leg - 40, 64)
    basic.pause(150)
}
function reset () {
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo3, right_leg, 64)
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo5, right_foot, 64)
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo4, left_leg, 64)
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo6, left_foot, 64)
    basic.pause(100)
}
let action = 0
let left_foot = 0
let left_leg = 0
let right_foot = 0
let right_leg = 0
let right_hand = 0
let left_hand = 0
let right_hand_state = 0
let lefthanded_state = 0
basic.showIcon(IconNames.TShirt)
radio.setGroup(1)
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
PCA9685.setServoPosition(PCA9685.ServoNum.Servo2, left_hand, 64)
PCA9685.setServoPosition(PCA9685.ServoNum.Servo3, right_leg, 64)
PCA9685.setServoPosition(PCA9685.ServoNum.Servo4, left_leg, 64)
PCA9685.setServoPosition(PCA9685.ServoNum.Servo5, right_foot, 64)
PCA9685.setServoPosition(PCA9685.ServoNum.Servo6, left_foot, 64)
basic.pause(2000)
basic.forever(function () {
    if (action == 1) {
        go_ahead()
    } else if (action == 2) {
        back()
    } else if (action == 3) {
        Turn_left()
    } else if (action == 4) {
        Turn_right()
    } else if (action == 0) {
        reset()
    } else if (action == 5) {
        traverse_left()
    } else if (action == 6) {
        traverse_right()
    } else if (action == 7) {
        raise_left_hand()
    } else if (action == 8) {
        raise_right_hand()
    }
})
