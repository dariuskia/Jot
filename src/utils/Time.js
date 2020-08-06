export const TIME = (() => {
    let currentHour = new Date().getHours()
    if (currentHour < 5) return "NIGHT"
    if (currentHour < 12) return "MORNING"
    if (currentHour < 18) return "AFTERNOON"
    if (currentHour < 21) return "EVENING"
    return "NIGHT"
})()

export const HOUR = new Date().getHours()