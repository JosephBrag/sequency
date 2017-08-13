import SequenceIterator from "./SequenceIterator";
import ArrayIterator from "./ArrayIterator";
import map from "./map";
import filter from "./filter";
import flatMap from "./flatMap";
import firstOrNull from "./firstOrNull";
import first from "./first";
import lastOrNull from "./lastOrNull";
import onEach from "./onEach";
import forEach from "./forEach";
import toArray from "./toArray";
import last from "./last";
import all from "./all";
import any from "./any";
import none from "./none";
import count from "./count";

export default class Sequence<T> {
    constructor(readonly iterator: SequenceIterator<T>) {}

    map = map;
    filter = filter;
    flatMap = flatMap;
    onEach = onEach;
    forEach = forEach;
    toArray = toArray;
    first = first;
    firstOrNull = firstOrNull;
    last = last;
    lastOrNull = lastOrNull;
    all = all;
    any = any;
    none = none;
    count = count;
}

export function sequenceOf<T>(...args: Array<T>): Sequence<T> {
    return asSequence(args);
}

export function emptySequence() {
    return asSequence([]);
}

export function asSequence<T>(array: Array<T>): Sequence<T> {
    return new Sequence<T>(new ArrayIterator<T>(array));
}