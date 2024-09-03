

class HelperFunction {

    getNumberFromText ($text) {
        const regex = /\d+(\.\d+)?/g;
        const value = $text.match(regex).map(Number);
        return value ;
    }

}

export default HelperFunction;