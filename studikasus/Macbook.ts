import BaseLaptop from "./BaseLaptop";

class MackBook<T> extends BaseLaptop<T> {
    constructor(type: T, numeric: boolean, touchButton: boolean) {
        super("MackBook", type, numeric, touchButton)
    }
}

export default MackBook