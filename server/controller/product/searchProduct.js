const Product = require("../../models/ProductModel")

const searchProduct = async(req, res) => {
    try{
        const query = req.query.q

        const regex = new RegExp(query,'i','g')
        const product = await Product.find({
            "$or":[
                {
                    productName: regex
                },
                {
                    category: regex
                }
            ]
        })

        res.status(200).json({
            message:"Success Search",
            data: product,
            success: true,
            error: false
        })
    }catch(err){
        res.status(500).json({
            message:err.message || err,
            success: false,
            error: true
        })
    }
}

module.exports = searchProduct;