let send = 0
let my_event_id = 0
let sensor = 0
let connected = 0
bluetooth.onBluetoothConnected(() => {
    connected = 1
    basic.showString("C")
})
bluetooth.onBluetoothDisconnected(() => {
    connected = 0
    basic.showString("D")
})
basic.forever(() => {
    sensor = pins.analogReadPin(AnalogPin.P0)
    if (sensor > 3) {
        if (send == 0) {
            basic.showLeds(`
                . . . . .
                . . # . .
                . # # # .
                . . # . .
                . . . . .
                `)
            if (connected == 1) {
                control.raiseEvent(
                    my_event_id,
                    88
                )
            }
            send = 1
        }
    } else {
        send = 0
        basic.clearScreen()
    }
})
my_event_id = 8888
