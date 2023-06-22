let position = -90
basic.forever(function () {
    if (fwdSensors.solar1.fwdLightLevel() > 90) {
        basic.showIcon(IconNames.Diamond)
        fwdMotors.servo1.fwdSetEnabled(false)
    } else {
        basic.showIcon(IconNames.SmallDiamond)
        position += 10
        if (position > 90) {
            position = -90
        }
        fwdMotors.servo1.fwdSetAngle(position)
        basic.pause(20)
    }
})
