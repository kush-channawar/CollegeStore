# DBMS Project: CollegeStore - BuySell Web App
This website is for CoEP students especially freshers who find it difficult to get used books & other study material. 
Seniors can post ads for products which they have used in previous semester. Basically a user can sell as well as buy products here.
This portal connects freshers with their seniors who are interested in selling their used study material.

## Developers:
1. Kush Vijay Channawar - 111803068 T2
2. Sushil Pandit Mahajan - 111803073 T3

## Technologies
- HTML 5, CSS 3, Bootstrap 4
- EJS
- Express
- NodeJS
- PostgreSQL

## Get Started
1. Install the latest version of Node & PostgreSQL.
2. Run npm --version & node --version to check if Node is properly installed.
3. Clone this project to your local repository.
4. Run 'npm install' in working directory to install all the dependencies required.
5. Create a postgres daatabase with all DDL statements provided in sql.txt file OR restore the dump file db using pg_restore(preferred).
6. Set up a .env file in working directory as follows:
![Alt text](public/images/env.png?raw=true "Title")
You will have to use your own crypto key & iv and also your own database credentials

 
## How it Works
1. User first has to register with valid mail id
2. User can add products for sale or buy from available products
3. He can search for a particular product through all products or category wise also (There are 6 categories)
4. Product details are shown category wise.
5. User can see anyone's profile & can edit his own.
6. Before buying product, it has to be added to cart.
7. When buyer clicks Buy, request is sent to seller through mail.
8. Seller can either accept request or just ignore (Note : Other tabs should not be running this website at that time)
9. Once seller accepts, a pass is sent to buyer (Note : Deal is not completed)
10. In order to verify transaction & generate receipt, Seller should mark product as sold to a buyer by entering pass provided by him.
11. If pass matches, transaction is confirmed, a receipt is generated & mailed to both parties.

