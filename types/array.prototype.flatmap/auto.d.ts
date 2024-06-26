interface Array<T> {
    flatMap<U, R extends object | undefined = undefined>(
        fn: (this: R, x: T, index: number, array: this) => readonly U[],
        thisArg?: R,
    ): U[];
}

interface ReadonlyArray<T> {
    flatMap<U, R extends object | undefined = undefined>(
        fn: (this: R, x: T, index: number, array: this) => readonly U[],
        thisArg?: R,
    ): U[];
}
