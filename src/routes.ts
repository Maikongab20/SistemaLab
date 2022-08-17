import Router from "express";
import { AccessController } from "./Controller/AccessController";
import { authenticateController } from "./Controller/authenticateController";
import { ProductController } from "./Controller/productController";
import { typeController } from "./Controller/typeController";
import { UserController } from "./Controller/UserController";
import { TokenValed } from "./middleware/TokenValed";
import { can } from "./middleware/AccessUserSystem"

const router = Router();

// import controller

const Access = new AccessController();
const User = new UserController();
const login = new authenticateController();
const type = new typeController();
const product = new ProductController();

router.get('/api/', (request, response) => {
  return response.json({
    name: "maikon",
    password: "1234"
  });
})

// router the access
router.post('/createAccess', Access.CreateAccess);
router.put('/changeAccess', Access.changeAcess);
router.delete('/deleteAccess', Access.deleteAccess);

//router user

router.post('/createUser', User.CreateUser);
router.put('/changeUser', User.changeUser);
router.delete('/deleteUser', User.deleteUser);
router.get('/login', login.login);

// remove access the system

router.get('/removeAccessUser');

// type

router.post('/createType', type.createType);
router.put('/changeType', type.changeType);
router.delete('/deleteType', type.deleteType);

// product

router.post('/createproduct', TokenValed, can, product.createProduct);
router.put('/changeProduct', TokenValed, can, product.changeProduct);
router.delete('/deleteProduct', TokenValed, can, product.deleteProduct);
router.get('/productList', product.ListaToTal);
router.get('/productTypeList', product.ListaTypeProducts);



export { router }