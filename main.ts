input.onButtonPressed(Button.A, function () {
    plenbit.servoWrite(1, 100)
    plenbit.servoWrite(5, 100)
    plenbit.servoWrite(3, 120)
    plenbit.servoWrite(7, 60)
    basic.pause(500)
    plenbit.servoWrite(5, 50)
    plenbit.servoWrite(1, 50)
    plenbit.servoWrite(7, 110)
    plenbit.servoWrite(3, 70)
})
input.onButtonPressed(Button.B, function () {
    plenbit.soccerMotion(plenbit.SocMotions.Dribble)
})
basic.forever(function () {
	
})
