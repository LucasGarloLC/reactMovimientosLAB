export const amountClassName = (amount: string, classes: CSSModuleClasses): string => {
    const { dataCell, alignRight, error } = classes;
    if (+amount < 0) {
        return `${dataCell} ${alignRight} ${error}`;
    };

    return `${dataCell} ${alignRight}`;
};