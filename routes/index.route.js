const controller=require("../controller/index.controller")
module.exports=(app)=>{
    app.use("/",controller.home);
    // app.use(PATH_ADMIN+"/products",productdRoutes);
   
}