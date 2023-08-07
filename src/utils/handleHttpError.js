
const handleHttpError = (res, msg = "Something ocurred", code = 403) => {
    res.status(code);
    return res.send({ error: msg });
}

module.exports = handleHttpError;