const database = require('../database/database');

const calculateTenure = () => {
  let date = new Date();
  let currentMonth = date.getMonth(); 
  let currentYear = date.getFullYear();
  let startDate = `${currentYear}-${(currentMonth + 1).toString().padStart(2, '0')}-01`;
  let endDate = new Date(currentYear, currentMonth + 1, 0).toISOString().split('T')[0];

  return {
      startdate: startDate,
      enddate: endDate
  };
};

const getAllUsers = (req, res) => {
  database.query(
    `SELECT * FROM app_installation ;`,
    (err, result) => {
      if (err) {
        console.log(err)
      } else {
        res.send(result)
      }
    }
  );

}

const getStoreDetail = (req, res) => {

  const name = req.query.data;
  const { startdate, enddate } = calculateTenure();

  const getStoreInfoQuery = `SELECT * FROM app_installation WHERE shop_name = ?`;

  const getWishlistUsersQuery = `SELECT * FROM wishlist_users WHERE shop_name = ?`;

  const getWishlistItemsQuesry = `SELECT COUNT(wi.title) as itemCount FROM  wishlist_items as wi JOIN wishlist_users as wu ON  wi.wishlist_id = wu.id WHERE wu.shop_name = ?`;

  const TotalRevenue = `SELECT SUM(ci.price) AS totalPrice FROM wishlist_users AS wu JOIN cart_items AS ci ON wu.id = ci.wishlist_id
 WHERE wu.shop_name = ?`;
 const getWishlistItemsQuery = `SELECT COUNT(wi.title) AS itemCount 
 FROM wishlist_items AS wi
 JOIN wishlist_users AS wu ON wi.wishlist_id = wu.id
 WHERE wu.shop_name = ? 
 AND wi.created_at >= ? 
 AND wi.created_at <= ?`;

database.query(getStoreInfoQuery, [name], (err, storeResult) => {
    if (err) {
      return res.status(500).send("Error fetching store info");
    }
   
    const activePlanName = storeResult[0]?.active_plan_name;
    if (!activePlanName) {
      return res.status(500).send("Active plan name not found");
    }

    const getPlanQuotaQuery = `SELECT quota FROM plan WHERE name = ?`;

    database.query(getWishlistUsersQuery, [name], (err, wishlistResult) => {
      if (err) {
        return res.status(500).send("Error fetching wishlist users");
      }
      database.query(getWishlistItemsQuesry, [name], (err, itemsResult) => {
        if (err) {
          return res.status(500).send("Error fetching wishlist items");
        }

        database.query(TotalRevenue, [name], (err, totalRevenueResult) => {
          if (err) {
            return res.status(500).send("Error fetching Total Revenue ");
          }
          database.query(getPlanQuotaQuery, [activePlanName], (err, planQuotaResult) => {
            if (err) {
              return res.status(500).send("Error fetching plan quota");
            }
            database.query(getWishlistItemsQuery, [name, startdate, enddate], (err, Month_itemsResult) => {
              if (err) {
                console.error("Error fetching wishlist items:", err);
                return res.status(500).send("Error fetching wishlist items");
              }

        //  console.log("Month_itemsResult", Month_itemsResult)
            
          const response = {
            storeInfo: storeResult[0] || {},
            wishlistUsers: wishlistResult,
            itemsResult: itemsResult[0]?.itemCount || 0,
            TotalRevenue: totalRevenueResult[0].totalPrice || 0,
            planQuota: planQuotaResult[0]?.quota || null,
            month_Wise_item: Month_itemsResult[0]?.itemCount || 0,
          };
          res.send(response);
        });
      });
    });
    });
  });
});
}

// const wishlistItems = (req, res) => {
//   const name = req.query.data;
//   database.query(
//     `SELECT COUNT(wishlist_items.title) FROM  wishlist_items as wi JOIN wishlist_users as wu ON  wi.wishlist_id = wu.id WHERE 
// wu.shop_name = ${name}`,
//     (err, result) => {
//       if (err) {
//         console.log(err)
//       } else {
//         res.send(result)
//       }
//     }

//   )
// }




const wishlistItems = (req, res) => {
  const name = req.query.data;
  const { startdate, enddate } = calculateTenure();

  database.query(
      `SELECT COUNT(wi.title) AS total_items 
       FROM wishlist_items AS wi
       JOIN wishlist_users AS wu ON wi.wishlist_id = wu.id
       WHERE wu.shop_name = ${database.escape(name)}
       AND wi.created_at >= ${database.escape(startdate)}
       AND wi.created_at <= ${database.escape(enddate)}`,
      (err, result) => {
          if (err) {
              console.log(err);
              res.status(500).send('Error retrieving wishlist items');
          } else {
              res.send(result);
              console.log("rrrr5555--- ", result)
          }
      }
  );
};

const planQuota = (req, res) => {
  console.log("first")

}

module.exports = {
  getAllUsers,
  getStoreDetail,
  wishlistItems,
  planQuota
}