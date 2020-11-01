const express = require('express');
const router = express.Router();
var db = require('../database');

//display product details page
router.get("/:id", function (req, res) {
    var sess = req.session;
    if (sess.username) {
        var product_id = req.params.id;
        (async () => {
            const client = await db.connect();

            try {
                await client.query("BEGIN");
                const productCategoryQuery = {
                    text: 'SELECT "category" FROM "product" WHERE product_id = $1',
                    values: [product_id],
                    rowMode: "array",
                };
                const CategoryResp = await client.query(productCategoryQuery);
                const category = CategoryResp.rows;

                switch (category[0][0]) {
                    case "books":
                        productUserQuery = {
                            text: 'SELECT * FROM "bookview" WHERE product_id = $1',
                            values: [product_id],
                            rowMode: "array",
                        };
                        break;
                    case "clothing":
                        productUserQuery = {
                            text: 'SELECT * FROM "clothview" WHERE product_id = $1',
                            values: [product_id],
                            rowMode: "array",
                        };
                        break;
                    case "notes":
                        productUserQuery = {
                            text: 'SELECT * FROM "notesview" WHERE product_id = $1',
                            values: [product_id],
                            rowMode: "array",
                        };
                        break;
                    case "other":
                        productUserQuery = {
                            text: 'SELECT * FROM "otherview" WHERE product_id = $1',
                            values: [product_id],
                            rowMode: "array",
                        };
                        break;
                    case "calculators":
                        productUserQuery = {
                            text: 'SELECT * FROM "calcview" WHERE product_id = $1',
                            values: [product_id],
                            rowMode: "array",
                        };
                        break;
                    case "pcs":
                        productUserQuery = {
                            text: 'SELECT * FROM "pcview" WHERE product_id = $1',
                            values: [product_id],
                            rowMode: "array",
                        };
                        break;
                }
                const productResp = await client.query(productUserQuery);
                const details = productResp.rows;

                res.render("product", {
                    user: sess.username,
                    category: category,
                    details: details,
                });
                await client.query("COMMIT");
            } catch (err) {
                await client.query("ROLLBACK");
                throw err;
            } finally {
                client.release();
            }
        })().catch((err) => console.log(err.stack));
    } else {
        res.redirect("/login");
    }
});

module.exports = router;