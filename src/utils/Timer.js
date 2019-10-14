export const waiting = (waitTime) => {
    if (typeof waitTime !== 'number') {
        throw new Error('waiting(waitTime): waitTime need number param');
    }

    return new Promise((resolve) => {
        const _timer = setTimeout(() => {
            resolve();
            clearTimeout(_timer);
        }, waitTime);
    });
}
