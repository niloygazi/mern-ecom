const {createInvoiceService, paymentSuccessService, paymentFailService, paymentCancelService, paymentIPNService, invoiceListService, invoiceProductListService } = require("../services/InvoiceServices");

exports.CreateInvioce = async (req,res)=>{
    let result = await createInvoiceService(req)
    res.json(result)
}
exports.PaymentSuccess = async (req,res)=>{
    let result = await paymentSuccessService(req)
    // res.json(result)
    return res.redirect("/orders")
}
exports.PaymentFail = async (req,res)=>{
    let result = await paymentFailService(req)
    // res.json(result)
    return res.redirect("/orders")
}
exports.PaymentCancel = async (req,res)=>{
    let result = await paymentCancelService(req)
    // res.json(result)
    return res.redirect("/orders")
}
exports.PaymentIPN = async (req,res)=>{
    let result = await paymentIPNService(req)
    res.json(result)
}
exports.InvoiceList = async (req,res)=>{
    let result = await invoiceListService(req)
    res.json(result)
}
exports.InvoiceProductList = async (req,res)=>{
    let result = await invoiceProductListService(req)
    res.json(result)
}