const isvalid = (req, res, Next) => {
    let { email, username, password } = req.body
    console.log(req.body);

    if (email && username && password) {
        Next();
    }
    else {
        res.send("invalid data..")
    }
}

module.exports=isvalid