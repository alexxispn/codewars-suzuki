export function stairsInYears(stairs: number[][], years: number): number {

    if (years <= 0) {
        return 0;
    }

    return Math.trunc(stepCounter(stairs) * years);

}

export function stepCounter(days: number[][]): number {

    return days.reduce((acumulatorSteps, currentDay) => {
        let steps = currentDay.reduce((acumulator, currentSteps) => acumulator + currentSteps, 0);
        return acumulatorSteps + steps;
    }, 0);


}

