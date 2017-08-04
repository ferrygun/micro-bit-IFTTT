let my_event_id = 8888
let connected = 0
let command = 0
bluetooth.onBluetoothConnected(() => {
    connected = 1
    basic.showString("C")
})
bluetooth.onBluetoothDisconnected(() => {
    connected = 0
    basic.showString("D")
})
//control.onEvent(my_event_id, command, () => {
//    basic.showNumber(control.eventValue());
//})

input.onButtonPressed(Button.A, () => {
    control.raiseEvent(my_event_id, 88)
    basic.showLeds(`
    . . . . .
    . . # . .
    . # # # .
    . . # . .
    . . . . .
    `)
    basic.pause(100)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, () => {
    control.raiseEvent(my_event_id, 89)
    basic.showLeds(`
    . . . . .
    . . # . .
    . # # # .
    . . # . .
    . . . . .
    `)
    basic.pause(100)
    basic.clearScreen()
})
my_event_id = 8888

basic.showString("FD")
