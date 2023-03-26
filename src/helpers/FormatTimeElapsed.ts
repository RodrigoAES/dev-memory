export const formatTimeElapsed = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    seconds -= (minutes * 60);

    const minString = `${(minutes < 10) ? '0'+minutes : minutes}`;
    const secString = `${(seconds < 10) ? '0'+seconds : seconds}`;

    return `${minString}:${secString}`;
}   