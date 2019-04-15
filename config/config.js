require('dotenv').config()

module.exports = 
{
  "username": process.env.USERNAME,
  "password": process.env.PASSWORD,
  "hashtags": [
    "minifigure",
    "lego", 
    "minifigures",
    "legominifigures", 
    "afol", 
    "legophotography", 
    "legominifigure",
    "legostagram", 
    "toyphotography", 
    "minifigs", 
    "instalego", 
    "minifig", 
    "legofan", 
    "legophoto", 
    "toy", 
    "toys", 
    "legos", 
    "legomania", 
    "starwars", 
    "brickcentral", 
    "legominifigs", 
    "toyartistry", 
    "legogram", 
    "bricknetwork", 
    "legominifig", 
    "legostarwars", 
    "legoart", 
    "brickpichub", 
    "toyslagram"
  ],
  "settings": {
    "run_every_x_hours": 3,
    "like_ratio": 0.75,
    "follow_ratio": 0.25,
    "do_unfollows": true,
    "unfollow_after_days": 2,
    "headless": true
  },
  "selectors": {
    "home_to_login_button": ".izU2O a",
    "username_field": "input[type=\"text\"]",
    "password_field": "input[type=\"password\"]",
    "login_button": ".L3NKy",
    "post_heart_grey": "span.glyphsSpriteHeart__outline__24__grey_9",
    "post_username": "div.e1e1d > h2 > a",
    "post_follow_link": "div.bY2yH > button",
    "post_like_button": "span.fr66n > button",
    "post_follow_button": "span.oW_lN._1OSdk > button",
    "post_close_button": "button.ckWGn",
    "user_unfollow_button": "span > button",
    "user_unfollow_confirm_button": "div.mt3GC > button.aOOlW.-Cab_"
  }
}