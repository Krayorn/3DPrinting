
export function tagToColor(tag: string) {
    switch (tag.toLowerCase()) {
        case 'puzzle':
            return '#a2e862'
        case 'jeu':
            return '#ff6aff'
        case 'fidget':
            return '#FFFFFF'
        default:
            return '#FFFFFF'
    }
} 

export function colorToColor(color: string) {
    switch (color.toLowerCase()) {
        case 'white':
            return '#FFFFFF'
        case 'orange':
            return '#e56a11'
        default:
            return '#FFFFFF'
    }
}