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

Object.prototype.let = function(this, block) {
    return block(this!);
}

Object.prototype.also = function(this, block) {
    block(this!);
    return this!;
}

Object.prototype.run = function(this, block) {
    return block.call(this!);
}

Object.prototype.apply = function(this, block) {
    block.call(this!);
    return this!;
}

Object.prototype.takeIf = function(this, predicate) {
    return predicate(this!) ? this! : undefined;
}

Object.prototype.takeUnless = function(this, predicate) {
    return predicate(this!) ? undefined : this!;
}

Number.prototype.let = function(this, block) {
    return block(this!.valueOf());
}

Number.prototype.also = function(this, block) {
    block(this!.valueOf());
    return this!.valueOf();
}

Number.prototype.run = function(this, block) {
    return block.call(this!.valueOf());
}

Number.prototype.apply = function(this, block) {
    block.call(this!.valueOf());
    return this!.valueOf();
}

Number.prototype.takeIf = function(this, predicate) {
    return predicate(this!.valueOf()) ? this!.valueOf() : undefined;
}

Number.prototype.takeUnless = function(this, predicate) {
    return predicate(this!.valueOf()) ? undefined : this!.valueOf();
}

String.prototype.let = function(this, block) {
    return block(this!.valueOf());
}

String.prototype.also = function(this, block) {
    block(this!.valueOf());
    return this!.valueOf();
}

String.prototype.run = function(this, block) {
    return block.call(this!.valueOf());
}

String.prototype.apply = function(this, block) {
    block.call(this!.valueOf());
    return this!.valueOf();
}

String.prototype.takeIf = function(this, predicate) {
    return predicate(this!.valueOf()) ? this!.valueOf() : undefined;
}

String.prototype.takeUnless = function(this, predicate) {
    return predicate(this!.valueOf()) ? undefined : this!.valueOf();
}

Boolean.prototype.let = function(this, block) {
    return block(this!.valueOf());
}

Boolean.prototype.also = function(this, block) {
    block(this!.valueOf());
    return this!.valueOf();
}

Boolean.prototype.run = function(this, block) {
    return block.call(this!.valueOf());
}

Boolean.prototype.apply = function(this, block) {
    block.call(this!.valueOf());
    return this!.valueOf();
}

Boolean.prototype.takeIf = function(this, predicate) {
    return predicate && predicate(this!.valueOf()) || this!.valueOf() ? this!.valueOf() : undefined;
}

Boolean.prototype.takeUnless = function(this, predicate) {
    return predicate && predicate(this!.valueOf()) || this!.valueOf() ? undefined : this!.valueOf();
}
