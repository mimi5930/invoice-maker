
export function formatDate(date: Date) {
    return date.toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) 
}

