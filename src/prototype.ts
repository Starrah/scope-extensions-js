/**
 * Use with caution!
 * Import this file will add {let, also, run, apply} on the prototype of built-in type `Object`, `String`, `Number` and
 * `Boolean`, which means you can easily use `x?.let(...)` without wrap `x` with `use(x)`, even when `x` is not an
 * object (e.g. `x` is a number).
 * However, modify the prototype of built-in types like `Object` may cause compatibility issues with other packages, if
 * they read or modify the properties we add on the prototype.
 * So please use this file with caution! If you see wired behaviours on other codes, please do not use this file.
 * Instead, you should only `require(@starrah/scope-extensions-js)` and always use `use(x)?.let(...).item()`.
 */
export {};

declare global {
    interface Object {
        /**
         * Calls the specified function block with `this` value as its argument and returns its result
         * @param block - The function to be executed with `this` as argument
         * @returns `block`'s result
         */
        let<T, R>(this: T | null | undefined, block: (it: T) => R): R;
        /**
         * Calls the specified function block with `this` value as its argument and returns `this` value
         * @param block - The function to be executed with `this` as argument
         * @returns `this`
         */
        also<T>(this: T | null | undefined, block: (it: T) => void): T;
        /**
         * Calls the specified function block with `this` value as its receiver and returns its value
         * @param block - The function to be executed with `this` as context
         * @returns `block`'s result
         */
        run<T, R>(this: T | null | undefined, block: (this: T) => R): R;
        /**
         * Calls the specified function block with `this` value as its receiver and returns `this` value
         * @param block - The function to be executed with `this` as context
         * @returns `this`
         */
        apply<T>(this: T | null | undefined, block: (this: T) => void): T;
        /**
         * Returns `this` value if it satisfies the given predicate or `undefined` if it doesn't
         * @param predicate - The function to be executed with `this` as argument and returns a truthy or falsy value
         * @returns `this` or `undefined`
         */
        takeIf<T>(this: T | null | undefined, predicate: (it: T) => boolean): T | undefined;
        /**
         * Returns `this` value if it does not satisfy the given predicate or `undefined` if it does
         * @param predicate - The function to be executed with `this` as argument and returns a truthy or falsy value
         * @returns `this` or `undefined`
         */
        takeUnless<T>(this: T | null | undefined, predicate: (it: T) => boolean): T | undefined;
    }
    interface Number {
        /**
         * Calls the specified function block with `this` value as its argument and returns its result
         * @param block - The function to be executed with `this` as argument
         * @returns `block`'s result
         */
        let<R>(this: Number | null | undefined, block: (it: number) => R): R;
        /**
         * Calls the specified function block with `this` value as its argument and returns `this` value
         * @param block - The function to be executed with `this` as argument
         * @returns `this`
         */
        also(this: Number | null | undefined, block: (it: number) => void): number;
        /**
         * Calls the specified function block with `this` value as its receiver and returns its value
         * @param block - The function to be executed with `this` as context
         * @returns `block`'s result
         */
        run<R>(this: Number | null | undefined, block: (this: number) => R): R;
        /**
         * Calls the specified function block with `this` value as its receiver and returns `this` value
         * @param block - The function to be executed with `this` as context
         * @returns `this`
         */
        apply(this: Number | null | undefined, block: (this: number) => void): number;
        /**
         * Returns `this` value if it satisfies the given predicate or `undefined` if it doesn't
         * @param predicate - The function to be executed with `this` as argument and returns a truthy or falsy value
         * @returns `this` or `undefined`
         */
        takeIf(this: Number | null | undefined, predicate: (it: number) => boolean): number | undefined;
        /**
         * Returns `this` value if it does not satisfy the given predicate or `undefined` if it does
         * @param predicate - The function to be executed with `this` as argument and returns a truthy or falsy value
         * @returns `this` or `undefined`
         */
        takeUnless(this: Number | null | undefined, predicate: (it: number) => boolean): number | undefined;
    }
    interface String {
        /**
         * Calls the specified function block with `this` value as its argument and returns its result
         * @param block - The function to be executed with `this` as argument
         * @returns `block`'s result
         */
        let<R>(this: String | null | undefined, block: (it: string) => R): R;
        /**
         * Calls the specified function block with `this` value as its argument and returns `this` value
         * @param block - The function to be executed with `this` as argument
         * @returns `this`
         */
        also(this: String | null | undefined, block: (it: string) => void): string;
        /**
         * Calls the specified function block with `this` value as its receiver and returns its value
         * @param block - The function to be executed with `this` as context
         * @returns `block`'s result
         */
        run<R>(this: String | null | undefined, block: (this: string) => R): R;
        /**
         * Calls the specified function block with `this` value as its receiver and returns `this` value
         * @param block - The function to be executed with `this` as context
         * @returns `this`
         */
        apply(this: String | null | undefined, block: (this: string) => void): string;
        /**
         * Returns `this` value if it satisfies the given predicate or `undefined` if it doesn't
         * @param predicate - The function to be executed with `this` as argument and returns a truthy or falsy value
         * @returns `this` or `undefined`
         */
        takeIf(this: String | null | undefined, predicate: (it: string) => boolean): string | undefined;
        /**
         * Returns `this` value if it does not satisfy the given predicate or `undefined` if it does
         * @param predicate - The function to be executed with `this` as argument and returns a truthy or falsy value
         * @returns `this` or `undefined`
         */
        takeUnless(this: String | null | undefined, predicate: (it: string) => boolean): string | undefined;
    }
    interface Boolean {
        /**
         * Calls the specified function block with `this` value as its argument and returns its result
         * @param block - The function to be executed with `this` as argument
         * @returns `block`'s result
         */
        let<R>(this: Boolean | null | undefined, block: (it: boolean) => R): R;
        /**
         * Calls the specified function block with `this` value as its argument and returns `this` value
         * @param block - The function to be executed with `this` as argument
         * @returns `this`
         */
        also(this: Boolean | null | undefined, block: (it: boolean) => void): boolean;
        /**
         * Calls the specified function block with `this` value as its receiver and returns its value
         * @param block - The function to be executed with `this` as context
         * @returns `block`'s result
         */
        run<R>(this: Boolean | null | undefined, block: (this: boolean) => R): R;
        /**
         * Calls the specified function block with `this` value as its receiver and returns `this` value
         * @param block - The function to be executed with `this` as context
         * @returns `this`
         */
        apply(this: Boolean | null | undefined, block: (this: boolean) => void): boolean;
        /**
         * Returns `this` value if it satisfies the given predicate or `undefined` if it doesn't
         * @param predicate - The function to be executed with `this` as argument and returns a truthy or falsy value
         * @returns `this` or `undefined`
         */
        takeIf(this: Boolean | null | undefined, predicate?: (it: boolean) => boolean): boolean | undefined;
        /**
         * Returns `this` value if it does not satisfy the given predicate or `undefined` if it does
         * @param predicate - The function to be executed with `this` as argument and returns a truthy or falsy value
         * @returns `this` or `undefined`
         */
        takeUnless(this: Boolean | null | undefined, predicate?: (it: boolean) => boolean): boolean | undefined;
    }
}

Object.defineProperty(Object.prototype, "let", {
    enumerable: false,
    value: function (this, block: any) {
        return block(this!);
    }
})

Object.defineProperty(Object.prototype, "also", {
    enumerable: false,
    value: function (this, block: any) {
        block(this!);
        return this!;
    }
})

Object.defineProperty(Object.prototype, "run", {
    enumerable: false,
    value: function (this, block: any) {
        return block.call(this!);
    }
})

Object.defineProperty(Object.prototype, "apply", {
    enumerable: false,
    value: function (this, block: any) {
        block.call(this!);
        return this!;
    }
})

Object.defineProperty(Object.prototype, "takeIf", {
    enumerable: false,
    value: function (this, predicate: any) {
        return predicate(this!) ? this! : undefined;
    }
})

Object.defineProperty(Object.prototype, "takeUnless", {
    enumerable: false,
    value: function (this, predicate: any) {
        return predicate(this!) ? undefined : this!;
    }
})

Object.defineProperty(Number.prototype, "let", {
    enumerable: false,
    value: function (this, block: any) {
        return block(this!.valueOf());
    }
})

Object.defineProperty(Number.prototype, "also", {
    enumerable: false,
    value: function (this, block: any) {
        block(this!.valueOf());
        return this!.valueOf();
    }
})

Object.defineProperty(Number.prototype, "run", {
    enumerable: false,
    value: function (this, block: any) {
        return block.call(this!.valueOf());
    }
})

Object.defineProperty(Number.prototype, "apply", {
    enumerable: false,
    value: function (this, block: any) {
        block.call(this!.valueOf());
        return this!.valueOf();
    }
})

Object.defineProperty(Number.prototype, "takeIf", {
    enumerable: false,
    value: function (this, predicate: any) {
        return predicate(this!.valueOf()) ? this!.valueOf() : undefined;
    }
})

Object.defineProperty(Number.prototype, "takeUnless", {
    enumerable: false,
    value: function (this, predicate: any) {
        return predicate(this!.valueOf()) ? undefined : this!.valueOf();
    }
})

Object.defineProperty(String.prototype, "let", {
    enumerable: false,
    value: function (this, block: any) {
        return block(this!.valueOf());
    }
})

Object.defineProperty(String.prototype, "also", {
    enumerable: false,
    value: function (this, block: any) {
        block(this!.valueOf());
        return this!.valueOf();
    }
})

Object.defineProperty(String.prototype, "run", {
    enumerable: false,
    value: function (this, block: any) {
        return block.call(this!.valueOf());
    }
})

Object.defineProperty(String.prototype, "apply", {
    enumerable: false,
    value: function (this, block: any) {
        block.call(this!.valueOf());
        return this!.valueOf();
    }
})

Object.defineProperty(String.prototype, "takeIf", {
    enumerable: false,
    value: function (this, predicate: any) {
        return predicate(this!.valueOf()) ? this!.valueOf() : undefined;
    }
})

Object.defineProperty(String.prototype, "takeUnless", {
    enumerable: false,
    value: function (this, predicate: any) {
        return predicate(this!.valueOf()) ? undefined : this!.valueOf();
    }
})

Object.defineProperty(Boolean.prototype, "let", {
    enumerable: false,
    value: function (this, block: any) {
        return block(this!.valueOf());
    }
})

Object.defineProperty(Boolean.prototype, "also", {
    enumerable: false,
    value: function (this, block: any) {
        block(this!.valueOf());
        return this!.valueOf();
    }
})

Object.defineProperty(Boolean.prototype, "run", {
    enumerable: false,
    value: function (this, block: any) {
        return block.call(this!.valueOf());
    }
})

Object.defineProperty(Boolean.prototype, "apply", {
    enumerable: false,
    value: function (this, block: any) {
        block.call(this!.valueOf());
        return this!.valueOf();
    }
})

Object.defineProperty(Boolean.prototype, "takeIf", {
    enumerable: false,
    value: function (this, predicate: any) {
        return predicate && predicate(this!.valueOf()) || this!.valueOf() ? this!.valueOf() : undefined;
    }
})

Object.defineProperty(Boolean.prototype, "takeUnless", {
    enumerable: false,
    value: function (this, predicate: any) {
        return predicate && predicate(this!.valueOf()) || this!.valueOf() ? undefined : this!.valueOf();
    }
})
