# Shoppify

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Project Algorithm 
1. create a project in angular with no standalone arichecture
	ng new shoppify --no-standalone

2. create components and services 
		login
		userdashboard
		admindashboard
		home
		products
		addproducts

3. create different routes for different components in app-routing.module.ts

4. create router-outlet in app.component.html 

5. implement login page in login.component.html & import formsModule in imports section of app.module.ts 

6. create dashboard in admindashboard.comp.html

7. use localstorage when the user login successful and fetch localstorage data in both userdashboard and admindashboard if the storage is empty redirect login page otherwise fetch the data

8. create product service in services folder and create structure of product 

9. create array of objects with type of products and methods to retrive and add products to array of objects

10. create form in addproduct.html to add new product details 

11. in addproduct.comp.ts perform DI to productService to consume addProduct method

12. install sweetalert from following command : npm install sweetalert2

	then import Swal from 'sweetalert2' in addproduct.comp.ts

13. in product.compt.ts perform DI to productService to consume getProducts method, and within ngOnInit call getProducts to recive data from service layer

	i) mobile.comp.ts DI to productService to consume getProducts method, and within ngOnInit call getProducts to recive data from service layer
	ii) mobile.comp.html print only if productName=='mobile'

14. create dropdown in admin panel for displaying different products

15. create a component called manageproduct, add routing in admin panel and also update in admindashboard

16. in product service create a method called delete Product to delete products clicked by admin 

17. now display all the products in manageProduct component as similar to products component but add delete and update buttons in the place of addtocart and buynow


18. to perform update in manageproduct we have to add a new property called productEdit in product.ts and change all the object properties to productEdit:false;


19. create two blocks of code in manageproduct, first block has displaying values when productEdit is false, in second block all the input tags when the productEdit is true, and update button when productEdit false, save button when productEdit is true


20. create UpdateProduct in productService to update new data with existing data and call this method when save button is clicked 



## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
