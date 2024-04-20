
 Angular Project -> 

	CRUD 
	user based authentication
	route authentication 
	Responsive 
	Angular material 


	1. E commerce app
	2. bike rentals 
	3. college management app
	4. online course platform
	5. online banking
	6. hotel room booking 
	



E commerce app : 
		we have two types of users 
					1. admin
					2. enduser

		
		admin_dashboard: addProducts, adminManageProducts, viewOrders, viewUsers


		user_dashboard: login, viewProducts, orderProducts, manageProfile
	

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








 delete : 

	delete button => *ngFor => let a of products => a is current object


	service:

	deleteProduct(pro:product){
		res=productList.findIndex((ele)=> ele.productId==pro.productId);
		productList.splice(res,1);
	}

update





































		



