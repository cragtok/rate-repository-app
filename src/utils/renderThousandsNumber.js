export const renderThousandsNumber = (number) => {
    if (number < 1000) {
        return number;
    }
    const dividedNumber = number / 1000;
    const preciseNumber = dividedNumber.toFixed(2);

    return preciseNumber.slice(0, preciseNumber.length - 1) + "k";
};
