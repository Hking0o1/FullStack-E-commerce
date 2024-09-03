const stripe = require('../../config/stripe')
const UserModel = require('../../models/UserModel')


const paymentController = async (req, res) => {
    try{
        const { cartItems} = req.body
        const user = await UserModel.findOne({_id: req.userId})
        const params = {
            submit_type : 'pay',
            mode : 'payment',
            payment_method_types : ['card'],
            billing_adderess_collection : 'auto',
            shipping_option : [
                {
                    shipping_rate : 'shr_1Psq2jB9xSXwpeDywz6pKfKB'
                }
            ],
            custumer_email : user.email,
            line_items: cartItems.map((item, index)=>{
                return {
                    price_data: {
                        currency: 'inr',
                        product_data: {
                            name: item.productName,
                            images: [item.image]
                        },
                        unit_amount: item.price * 100
                    },
                    quantity: item.quantity
                }
            }
        ),
            success_url: `${process.env.CLIENT_URL}/order-success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.CLIENT_URL}/cart`
    }

        const session = await stripe.checkout.sessions.create()

        res.status(200).json(session)
    }catch(err){
        res.status(403).json({
            message: err.message || err,
            error: true,
            success: false
          });
    }
    
}

module.exports = paymentController;