var express = require("express");
var router = express.Router();
const message = require("./messages")
let pic1 =""
let pic =""
let pic2=""
let pic3=""
let msg1 = "";
let memsg = ""
/* GET home page. */

router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
  
});

router.post("/", (req, res,next) => {
  const years = req.body.years_service * 12;
  const salary = years * req.body.pension;
  const result = salary / 480;
  
  
  if (result >= 12000 && result <= 16000) {
    
    msg1 = "وقت مناسب للتقاعد  ما بقي بالعمر كثر ما مضى استانس وانبسط";
    pic="../images/pension6.jpg"
    pic1=""
    pic2=""
    pic3=""
    memsg="مع تحيات أبي حازم"
  };


  if (result >= 9000 && result < 12000) {
    msg1 = " ما تلاحظ انك استعجلت شوي  لعلك تصبر لك خمس سنين باقي فيك عرموش "
    pic2="../images/pension7.jpg"
    pic1=""
    pic=""
    pic3=""
    memsg="مع تحيات أبي حازم"
   
  };


  if (result > 16000) {
    msg1 =
      " للحين  ما تقاعدت يا ابن الحلال فكهم من شرك وخل الشباب يلقون فرصة من عرفت الدنيا وانت تشتغل  ريح جاك الموت وانت تهذب";
      pic3="../images/pension4.jpg"
      pic1=""
      pic2=""
      pic=""
      memsg="مع تحيات أبي حازم"
  }


  if (result < 9000) {
    msg1 =" من جدك تبي تتقاعد أمداك تداوم  للحين اسمك مكتوب بالرصاص  توك يالحبيب  تعوذ من الشيطان  وعقب عشر سنين تعال"
    pic1="../images/pension5.jpg"
    pic=""
    pic2=""
    pic3=""
    memsg="مع تحيات أبي حازم"
  }


  res.render("index", { Result: result, message: msg1,messag:memsg, Pics: pic, Pics1:pic1,Pics2:pic2, Pics3:pic3});
 // console.log(Pics)
});



module.exports = router;
