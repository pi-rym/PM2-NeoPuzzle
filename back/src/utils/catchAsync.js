const catchAsync = (fn) => {
    return (req, res, next) => {
        fn(req, res).catch((error) => next(error));
    }
}

module.exports = catchAsync;
            