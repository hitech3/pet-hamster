input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
    basic.showIcon(IconNames.Asleep)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Sad)
    basic.showIcon(IconNames.Asleep)
})
basic.showIcon(IconNames.Asleep)
