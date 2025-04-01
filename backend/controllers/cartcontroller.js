import UserModel from "../models/usermodel.js";

// add item to user cart
const addtocart = async (req, res) => {
    try {
        let userData = await UserModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        if (!cartData[req.body.itemId]) {
            cartData[req.body.itemId] = 1;

        }
        else {
            cartData[req.body.itemId] += 1;
        }
        await UserModel.findByIdAndUpdate(req.body.userId, { cartData });
        res.json({ success: true, message: "Added To Cart" });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "ERROR" })

    }

}


// remove item from user cart
const removeFromCart = async (req, res) => {
    try {
        let userData = await UserModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        if (cartData[req.body.itemId] > 0) {
            cartData[req.body.itemId] -= 1;

        }

        await UserModel.findByIdAndUpdate(req.body.userId, { cartData });
        res.json({ success: true, message: "REMOVE To Cart" });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "ERROR" })

    }

}


//  fecth user  cart data


const getCart = async (req, res) => {
    try {
        let userData = await UserModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        res.json({ success: true, cartData });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message:"eroor" });
    }
}

export { addtocart, removeFromCart, getCart };
