const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, UnauthenticatedError, NotFoundError } = require('../errors')

const getAllUsers = async (req, res) => {
    const userCheck = await User.findOne({ _id: req.user.userId }); // lấy ra đúng user đang login
    if (userCheck.typeOf === 'admin') {
        const users = await User.find({})
        res.status(StatusCodes.OK).json({ users, count: users.length });
    }
    else {
        // throw new UnauthenticatedError(`User ${userCheck._id} have no permission`)
        throw new UnauthenticatedError(`User have no permission`)
    }
}
const getUser = async (req, res) => {
    const userCheck = await User.findOne({ _id: req.user.userId });
    if (userCheck.typeOf === 'admin') {
        const { params: { id: userId } } = req; // req.user.userId, req.params.id

        const user = await User.findOne({
            _id: userId,
        })
        if (!user) {
            throw new NotFoundError(`No user with id ${userId}`)
        }
        res.status(StatusCodes.OK).json({ user })
    }
    else {
        throw new UnauthenticatedError(`User have no permission`)
    }
}

const deleteUser = async (req, res) => {
    const userCheck = await User.findOne({ _id: req.user.userId });
    if (userCheck.typeOf === 'admin') {
        const {
            params: { id: userId },
        } = req;

        const user = await User.findByIdAndRemove({
            _id: userId,
        })

        if (!user) {
            throw new NotFoundError(`No user with id ${userId}`)
        }
        res.status(StatusCodes.OK).json({ msg: `Delete user ID: ${userId} successfully ` })
    }
    else {
        throw new UnauthenticatedError(`User have no permission`)
    }

}

const updateUser = async (req, res) => {
    const userCheck = await User.findOne({ _id: req.user.userId });
    if (userCheck.typeOf === 'admin') {
        const {
            body: { typeOf },
            params: { id: userId },
        } = req;

        if (typeOf === '') {
            throw new BadRequestError('status fields cannot be empty');
        }
        const user = await User.findByIdAndUpdate(
            {
                _id: userId,
                typeOf: typeOf,
            },
            req.body,
            { new: true, runValidators: true }
        )

        if (!user) {
            throw new NotFoundError(`No user with id ${userId}`)
        }
        res.status(StatusCodes.OK).json({ user })
    }
    else {
        throw new UnauthenticatedError(`User have no permission`)

    }
}

module.exports = {
    getUser,
    getAllUsers,
    deleteUser,
    updateUser,
}

//flow
/* 
B1: tạo tài khoản -> req.body sẽ yêu cầu tạo tài khoản -> tạo ra một token riêng cho tài khoản đó
B2: đăng nhập tài khoản -> check người dùng đã nhập tài khoản, password -> tìm tài khoản có email trùng với email đã nhập
    -> check password email đó nhập đúng chưa -> nếu đăng nhập thành công sẽ tạo token riêng để quản lý tài khoản đăng nhập lúc đó
*/