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
    },

    signin : (req, res) => {
        //요청된 이메일을 데이터베이스에서 있는지 찾는다.
        User.findOne({ email: req.body.email}, (err,userInfo) => {
            if(!userInfo){
                return res.json({
                    loginSuccess : false,
                    message : "제공된 이메일에 해당되는 유저가 없습니다."
                })
            }
        })
        //요청된 이메일이 데이터베이스에 있다면 비밀번호가 맞는 비밀번호인지 확인.
        userInfo.comparePassword(req.body.password , (err, isMatch) => {
            if(!isMatch)
                return res.json({loginSuccess: false, message: "비밀번호가 틀렸습니다."
            
             //비밀번호 까지 맞다면 토큰을 생성하기

             userInfo.generateToken((err,user) => {
                 if (err) return res.status(400).send(err);

             })
            })
        })
        
    }
}