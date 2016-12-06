
interface Array<T> {
    contains(seek: T): boolean;

    copy(): Array<T>;
}

Array.prototype.contains = function (seek) {
    for (let item of this) {
        if (item === seek) return true;
    }

    return false;
}

Array.prototype.copy = function () {
    return this.slice(0);
}