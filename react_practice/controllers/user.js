const {User} = require('../models/User');


module.exports = {
    signup : (req, res) => {
        const user = new User(req.body) //회원가입 할때 필요한 정보들을 client에서 가져온다. -> 몽고DB에 넣는다.

        user.save((err,userInfo)=> {
            if(err) return res.json({success : false, err});
            return res.status(200).json({
                success: true
            })
        })
    }
}