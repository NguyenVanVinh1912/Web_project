// item: 0 1 2 3 4 5 6 7 8 9 10 11 12 13

//1: 1 2 3
//2: 3 4 5
//3: 6 7 8
//4: 9 10 11
//5: 12 13 

//itemPerPage: 3, currentPage =1;

//start = 0, End=3;

//Start=(currentPage-1)*itemPerPage;  End= currentPage*itemPerPage;

//1:currentPage =1 ,start=(1-1)*3=0 ,End=1*3=3
//2:currentPage =2 ,start=(2-1)*3=3 ,End=2*3=6
//3:currentPage =3 ,start=(3-1)*3=6 ,End=3*3=9

// window.onload function()
// {

// }

function theloai(matl,tentl)
{
    this.matl=matl;
    this.tentl=tentl;
}
function menuLoai()
{
    var arrTheLoai=[
        new theloai("all","Tất cả sản phẩm"),
        new theloai("adidas","Adidas"),
        new theloai("puma","Puma"),
        new theloai("nike","Nike"),
        new theloai("gucci","Gucci")
    ];
    var s="";
    for(var i=0 ;i<arrTheLoai.length ;i++)
    {
        var a='<li id="' + arrTheLoai[i].matl + '" class="tab-item active" onclick="changProductList(\''+arrTheLoai[i].matl+'\',this)">'+arrTheLoai[i].tentl+'</li>';
        s =s +a;
        // var a = '<a id="' + arrTheLoai[i].matl + '" onclick="changProductList(\'id\',this.id)" ><li class="tab-item active">' + arrTheLoai[i].tentl + '</li></a>';
        // s += a;
    }
    // s += '<ul class="section-option-product">'+s+'</ul>';
    console.log(s);
    document.getElementById('section-option-product').innerHTML = s;

}

var mainProduct=[
    {productName: 'Adidas Alpha BOUNCE',productGender:'nam', productType: 'adidas', productId: '01', productImg: '../Mau/Images/productvinh/product/adidas1.png',productPrice1: "4.400.000", productPrice2: "3.900.000", productPrice3:3900000, productRating:5, productInfo:'- Có thể nói, adidas AlphaBOUNCE là một trong những đôi giày mới bắt mắt nhất trong phân khúc giày chạy bộ, thiết kế độc đáo hỗ trợ mọi chuyển động khó trong thể thao, mỗi bước đi đều có đệm Bounce mềm mại và dẻo dai. Alpha Bounce sẽ giúp bạn đi đường dài cực kỳ êm ái và thoải mái. Phần trên thông qua các nếp gấp mang tính biểu tượng của AP để vừa vặn với bàn chân của bạn và vừa vặn một cách thoải mái, cho phép bàn chân của bạn di chuyển trong trạng thái “thực”. Đây cũng là một đặc điểm nổi bật, vừa mang tính thời trang, vừa góp phần tạo nên hiệu quả vượt trội cho loại giày này. Đế được làm bằng cao su mềm với họa tiết nút tròn giúp hỗ trợ lực đè lên bàn chân.'}
    , {productName: 'Adidas EQT Boost',productGender:'nam', productType: 'adidas', productId: '02', productImg: '../Mau/Images/productvinh/product/adidas2.png',productPrice1: "3.000.000", productPrice2: "2.600.000", productPrice3:2600000, productRating:5, productInfo:'- Nếu bạn vẫn đang “loanh quanh” với hàng tá nhãn hiệu giày mà chưa biết mua gì. Tôi sẽ cho bạn biết, nếu bạn muốn mua giày mới ngay bây giờ, tại sao không bỏ qua adidas EQT. Dòng giày lâu đời tích hợp công nghệ hiện đại của Adidas, chẳng hạn như đế Torsion, cho phép bàn chân trước và bàn chân sau của người mang EQT hoạt động riêng biệt. Phần hỗ trợ giữa bàn chân và sọc “ba” là dấu hiệu duy nhất cho phép cả hai thực tế và thiết thực, thời trang. Một Mau giày mang tính thể thao và chất lượng cao mà bạn không bao giờ nên bỏ qua trong năm nay.'}
    , {productName: 'Adidas EQT Gazelle',productGender:'nam', productType: 'adidas', productId: '03', productImg: '../Mau/Images/productvinh/product/adidas3.png',productPrice1: "2.500.000", productPrice2: "2.100.000", productPrice3:2100000, productRating:5, productInfo:'- Giày Adidas EQT Gazelle là giày Swift, qua nhiều thập kỷ, nhiều thiết kế giày chạy bộ mang tính biểu tượng của Adidas đã đạt đến đỉnh cao. Giày đan siêu nhẹ này được thiết kế đặc biệt để sử dụng hàng ngày, có kiểu dáng thời trang và mang lại cảm giác nâng đỡ và linh hoạt. Giày thể thao Adidas EQT luôn là sự lựa chọn hàng đầu bởi vẻ đẹp tràn đầy sức sống, trẻ trung, tiện dụng, dễ phối với nhiều loại trang phục, phù hợp với nhiều dịp khác nhau.'}
    , {productName: 'Adidas NMD (Nomad)',productGender:'nam', productType: 'adidas', productId: '04', productImg: '../Mau/Images/productvinh/product/adidas4.png',productPrice1: "3.000.000", productPrice2: "2.600.000", productPrice3:2600000, productRating:5, productInfo:'- Được ra mắt vào tháng 12 năm 2015, nhưng nó vẫn là một đôi giày được săn đón và tiếp tục mở rộng tầm ảnh hưởng của mình trong giới yêu giày sneaker và ngành công nghiệp thời trang. Adidas NMD (Nomad) áp dụng thiết kế tối giản, đế và vải Primeknit, sẵn sàng chinh phục tất cả mọi người với phong cách đường phố. Càng hot và càng được yêu thích hơn khi nhiều phối màu thú vị cùng chất lượng siêu độc đáo được giới thiệu.'}
    , {productName: 'Adidas super star',productGender:'nu', productType: 'adidas', productId: '05', productImg: '../Mau/Images/productvinh/product/adidas5.png',productPrice1: "3.000.000", productPrice2: "2.500.000", productPrice3:2500000, productRating:5, productInfo:'- Với Adidas SuperStar, Adidas muốn khẳng định rằng đẳng cấp luôn trường tồn cùng thời gian. Hằng năm Mau giày này luôn cho ra mắt một phiên bản mới, thu hút được sự quan tâm của nhiều bạn trẻ.Thêm một điểm cộng to oành của bé này chính là khả năng ăn rơ tuyệt vời với bất cứ trang phục nào. Điều khiến những đôi giày adidas superstar đặc biệt chính là phần mũi vỏ sò (shelltoe).  Phần thân giày có ba sọc cổ điển của adidas, và thường được làm bằng chất liệu da.'}
    , {productName: 'Adidas NMD',productGender:'nu', productType: 'adidas', productId: '06', productImg: '../Mau/Images/productvinh/product/adidas6.png',productPrice1: "4.000.000", productPrice2: "3.600.000", productPrice3:3600000, productRating:5, productInfo:'- Nói đơn giản thế thôi bạn đã đủ biết sức hút mạnh mẽ của nó rồi đúng không? Mang âm hưởng khám phá và trải nghiệm cuộc sống. Adidas NMD chính là đứa con hoàn hảo nhất dành cho những cô nàng đam mê sự mới lạ. Giày thể thao adidas NMD được ra đời dựa trên cảm hứng từ nguồn cội Adidas Originals. NMD ra đời đại diện cho  một thế hệ mới, thế hệ của sự trẻ trung năng động.'}
    , {productName: 'Adidas EQT',productGender:'nu', productType: 'adidas', productId: '07', productImg: '../Mau/Images/productvinh/product/adidas7.png',productPrice1: "4.500.000", productPrice2: "3.200.000", productPrice3:3200000, productRating:5, productInfo:'- Sau gần 30 năm ra mắt, EQT vẫn được coi là đôi giày sở hữu nhiều công nghệ nhất thời điểm thập kỷ 80-90s. Chất liệu primeknit được sử dụng làm phần thân giày. Ưu điểm giúp cho đôi chân thoáng mát, không khí dễ dàng lưu thông. Đồng thời giúp tạo cảm giác ôm chân trong quá trình di chuyển. Phần lưỡi gà đã có sự thay đổi sau hơn 20 năm. Thiết kế SOCK – LINE được thay thế cho cấu trúc bất đối xứng trước đây. Đặc điểm của cấu trúc mới này là lưỡi gà gắn liền với thân giày, ôm sát vào phần chân như một chiếc tất.'}
    , {productName: 'FORUM EXHIBIT LOW',productGender:'nu', productType: 'adidas', productId: '08', productImg: '../Mau/Images/productvinh/product/adidas8.png',productPrice1: "3.000.000", productPrice2: "2.600.000", productPrice3:2600000, productRating:5, productInfo:'- Với thiết kế bề ngoài được mô tả theo đường ống của lốp xe, nên đôi giày adidas này được gọi với cái tên “Tubular”. Cũng chính đặc điểm hình dạng này giúp cho đôi giày tăng lực và độ bám đường. Hiện nay, có rất nhiều phiên bản của Tubular được xuất bản, với đầy đủ thiết kế cổ cao thấp khác nhau. Với thiết kế theo phong cách minimalism, tạo nên một sự tinh tế của phong cách thời trang hiện đại. Điểm nổi bật của đôi giày nằm ở phần đế bị lõm, đồng thời nó cũng hỗ trợ động lực trong quá trình vận chuyển (Mau adidas mới nhất).'}
    , {productName: 'Puma Ember Trail',productGender:'nam', productType: 'puma', productId: '09', productImg: '../Mau/Images/productvinh/product/puma1.png',productPrice1: "3.000.000", productPrice2: "2.200.000", productPrice3:2200000, productRating:5, productInfo:'- Là một phần của xu hướng sneaker năm 2020, Puma Ember Trail là một trong những sản phẩm chunky phổ biến của gia đình Puma. Đôi giày được thiết kế với thiết kế chắc chắn và khả năng tạo ra màu sắc nổi bật. Phần trên được làm bằng vải dệt kết hợp với lớp lưới mang lại cảm giác mịn màng tối đa. Lớp lót Misole EVA kết hợp công nghệ hỗ trợ gót chân Formstrip để bảo vệ bàn chân. Đế giày được làm bằng cao su với các rãnh chống trượt để tăng tính linh hoạt khi di chuyển.'}
    , {productName: 'Puma Cell Alien OG',productGender:'nam', productType: 'puma', productId: '10', productImg: '../Mau/Images/productvinh/product/puma2.png',productPrice1: "5.000.000", productPrice2: "4.000.000", productPrice3:4000000, productRating:5, productInfo:'- Ứng dụng công nghệ PUMA CELL xuất hiện lần đầu tiên vào năm 1998 kết hợp với thiết kế cá tính và màu sắc tươi mới và đệm nhẹ cho thoải mái, giày Puma Cell Alien OG là một trong những đôi giày sneaker sành điệu mới nhất được nhiều tín đồ thời trang của thương hiệu Puma yêu thích. Giày có thiết kế đường phố cổ điển của thập niên 90 với phần trên được làm bằng vải dệt cao cấp mềm mại kết hợp với đệm Misole Eva siêu nhẹ cho cảm giác thoải mái. Lớp lót tiên tiến với công nghệ hỗ trợ và cố định gót chân giúp bảo vệ đôi chân của bạn. Đế được làm bằng cao su chất lượng cao với hoa văn đặc biệt để tạo độ bền và nổi bật cho đôi giày.'}
    , {productName: 'PUMA x TYAKASHA RS-X',productGender:'nam', productType: 'puma', productId: '11', productImg: '../Mau/Images/productvinh/product/puma3.png',productPrice1: "4.900.000", productPrice2: "4.200.000", productPrice3:4200000, productRating:5, productInfo:'- Sở hữu thiết kế siêu thời trang và hiện đại với thiết kế hợp lý, giày PUMA x TYAKASHA RS-X là đôi giày Puma mới nhất đặc biệt phổ biến trong giới sneaker. Đôi giày sở hữu thiết kế street style cổ điển kết hợp với phô mai thể thao phóng đại để tạo điểm nhấn độc đáo. Phần trên được làm bằng da lộn cao cấp để tạo cảm giác chân mềm mại. Đệm siêu nhẹ Misole PU kết hợp với đế cao su chống trượt giúp bảo vệ chân và tăng khả năng vận động khi di chuyển. Sở hữu kiểu dáng cổ điển thập niên 80 với thiết kế độc đáo với các miếng TPU được sắp xếp nổi bật, PUMA x TYAKASHA RS-X chắc chắn sẽ là một lựa chọn tuyệt vời cho phong cách thời trang nổi bật của bạn.'}
    , {productName: 'Puma RS-X Trophy',productGender:'nam', productType: 'puma', productId: '12', productImg: '../Mau/Images/productvinh/product/puma4.png',productPrice1: "3.000.000", productPrice2: "2.500.000", productPrice3:2500000, productRating:5, productInfo:'- Puma RS-X Trophy là một đôi sneaker chunky với hình dáng siêu gọn gàng khiến nó trở thành một trong những Mau sneaker tiếp theo được yêu thích bởi tín đồ thời trang. Sở hữu thiết kế theo phong cách cổ điển với phần trên được làm từ vải dệt cao cấp kết hợp với đệm Misole Eva siêu nhẹ tạo cảm giác vô cùng thoải mái. Lớp lót xốp chống sốc với công nghệ cố định gót chân và đế cao su chống trượt cho chuyển động linh hoạt bảo vệ đôi chân của bạn. Puma RS-X Trophy chắc chắn sẽ tạo ra một trải nghiệm tuyệt vời trong phong cách thời trang của bạn.'}
    , {productName: 'Puma Suede',productGender:'nu', productType: 'puma', productId: '13', productImg: '../Mau/Images/productvinh/product/puma5.png',productPrice1: "3.000.000", productPrice2: "2.000.000", productPrice3:2000000, productRating:5, productInfo:'- Nhắc tới Puma ta không thể nào không nhớ tới cái tên kinh điển Puma Suede. Với hướng đi ban đầu là một đôi giày thể thao dành cho bộ môn bóng rổ, nhưng Puma lại muốn có một điều gì đó đột phá và sáng tạo, hơn nữa là sự chú ý từ các khán giả và vận động viên. Thế là ý tưởng về một đôi giày da lộn huyền thoại, hợp thời trang được ra đời.'}
    , {productName: 'Puma Rise',productGender:'nu', productType: 'puma', productId: '14', productImg: '../Mau/Images/productvinh/product/puma6.png',productPrice1: "3.000.000", productPrice2: "2.600.000", productPrice3:2600000, productRating:5, productInfo:'- Tiếp theo trong danh sách các Mau giày Puma nữ được ưa chuộng hiện nay là các đường nét tinh tế, mềm mại lấy cảm hứng từ Puma Rise. Mau giày thiết kế hình bóng chunky với lớp đệm midsole PU, phần đế gồ ghề kết hợp công nghệ RS đặc trưng. Mau giày mang tới sự thoải mái với phần đế ngoài cao su tạo lực kéo bền, độ bám tốt khi di chuyển. Điểm độc đáo của đôi giày là khả năng sáng tạo màu sắc hài hoà. Hệ thống lồng cao su bán mờ cho đôi chân thêm cá tính.'}
    , {productName: 'Puma Bari Mule',productGender:'nu', productType: 'puma', productId: '15', productImg: '../Mau/Images/productvinh/product/puma7.png',productPrice1: "2.500.000", productPrice2: "2.100.000", productPrice3:2100000, productRating:5, productInfo:'- Mang đến sự rung cảm thời thượng và linh hoạt, Puma Bari Mule ra đời như một sự tất yếu của thương hiệu. Hướng đến vẻ đẹp tối giản và nhanh gọn cho người dùng.  Mule đồng thời ra 3 màu sắc để người dùng có thể thoải mái lựa chọn cũng như phối đồ với mức giá phải chăng đáng kinh ngạc. Với nhiều màu sắc để lựa chọn, việc phối và kết hợp quần áo sẽ rất dễ dàng với Puma Bari Mule.'}
    , {productName: 'Puma Carina Leather',productGender:'nu', productType: 'puma', productId: '16', productImg: '../Mau/Images/productvinh/product/puma8.png',productPrice1: "3.000.000", productPrice2: "2.500.000", productPrice3:2500000, productRating:5, productInfo:'- Là một đôi giày cổ điển xuất hiện từ những năm 60, Puma Carina được thương hiệu ưu ái cho come back nhiều  lần phiên bản khác nhau. Với form dáng thon gọn, bộ đế dày, mạnh mẽ chắc chắn và chi tiết Formstrip 2 bên đặc trưng Puma Carina Leather sẽ luôn là một item không thể thiếu của các tín đồ thời trang. Thêm một điểm cộng khi mang đôi giày này là bạn có thể hack được gần 3cm chiều cao nhờ bộ đế cao có họa tiết kẻ thẳng đó.'}
    , {productName: 'Nike Zoom Pegasus',productGender:'nam', productType: 'nike', productId: '17', productImg: '../Mau/Images/productvinh/product/nike1.png',productPrice1: "4.800.000", productPrice2: "3.500.000", productPrice3:3500000, productRating:5, productInfo:'- Lấy cảm hứng từ những chú ngựa thần trong văn hóa Hy Lạp, Nike Zoom Pegasus được ra đời với mong muốn đưa đến cho mọi người sản phẩm giày chạy tốt nhất với giá cả phải chăng. Đây cũng là một trong những Mau giày Nike nam chạy bộ có tuổi đời cao nhất thế giới, khoảng gần 30 năm. Nike Zoom Pegasus được đánh giá là một trong những Mau giày chạy hoàn hảo nhất hiện nay. Phần thân giày được dệt từ vải lưới giúp thoáng khí và thoát mồ hôi rất tốt. Đế giày có sử dụng công nghệ Air để tạo độ êm chân tối đa cho người sử dụng, đặc biệt là khi chạy bộ.'}
    , {productName: 'Nike Zoom Shift',productGender:'nam', productType: 'nike', productId: '18', productImg: '../Mau/Images/productvinh/product/nike2.png',productPrice1: "3.100.000", productPrice2: "2.500.000", productPrice3:2500000, productRating:5, productInfo:'- Nike Zoom Shift được cho ra đời để phục vụ môn bóng rổ. Tuy vậy, trong những năm trở lại đây, đôi giày này đã trở nên rất hot và cháy hàng khắp mọi nơi. Với nhiều cải tiến và nhiều phiên bản khác nhau, được kết hợp cùng các cầu thủ bóng rổ, thật không khó để hiểu tại sau Mau giày Nike nam này lại thu hút đến vậy.'}
    , {productName: 'Nike Air Jordan',productGender:'nam', productType: 'nike', productId: '19', productImg: '../Mau/Images/productvinh/product/nike3.png',productPrice1: "5.600.000", productPrice2: "4.900.000", productPrice3:4900000, productRating:5, productInfo:'- Mau giày huyền thoại này được đặt tên dựa theo siêu sao bóng rổ Michael Jordan. Mặc dù ngày nay đã có nhiều Mau giày bóng rổ hiện đại hơn, êm chân hơn của Nike và các hãng giày khác, nhưng Nike Air Jordan vẫn là một tượng đài lớn, trở thành một item must – have trong tủ đồ của giới mộ điệu. Đôi giày này đã vượt qua khuôn khổ của đồ thể thao, trở thành một biểu tượng văn hóa của môn bóng rổ nói riêng và văn hóa nước Mỹ nói chung.'}
    , {productName: 'Nike Air Force 1',productGender:'nam', productType: 'nike', productId: '20', productImg: '../Mau/Images/productvinh/product/nike4.png',productPrice1: "5.000.000", productPrice2: "4.200.000", productPrice3:4200000, productRating:5, productInfo:'- Đây cũng là một trong những thiết kế đi cùng năm tháng của Nike. Ban đầu, vào năm 1982 Mau giày Nike nam này được rất nhiều cầu thủ bóng rổ nhà nghề Mỹ NBA diện trong các trận thi đấu, sau đó nó trở nên nổi tiếng trên toàn thế giới. Nike Air Force 1 cũng là một trong những thiết kế giày được ảnh hưởng nhiều nhất của Nike với hàng chục phiên bản khác nhau, mỗi phiên bản lại thể hiện một câu chuyện riêng.'}
    , {productName: 'Nike Air Jordan Low',productGender:'nu', productType: 'nike', productId: '21', productImg: '../Mau/Images/productvinh/product/nike5.png',productPrice1: "5.000.000", productPrice2: "4.000.000", productPrice3:4000000, productRating:5, productInfo:'- Giày Nike Air Jordan Low 1 có thiết kế thông minh với các rãnh sâu làm tăng lực ma sát và hạn chế trơn trượt. Phần lót trong chế tạo từ chất liệu da cao cấp mang lại cảm giác tự nhiên và êm ái. Bên cạnh đó, cấu tạo đế không khí giúp người dùng thoải mái dù mang giày trong suốt ngày dài. Giày nữ Air Nike Jordan Low được thiết kế theo phong cách skating. Chính vì vậy, màu sắc của Mau giày này vô cùng độc đáo và bắt mắt. Bạn có thể kết hợp giày với nhiều phong cách thời trang khác nhau. Từ đó sáng tạo ra những outfit thật thời thượng và cá tính.'}
    , {productName: 'Nike Joyride Dual',productGender:'nu', productType: 'nike', productId: '22', productImg: '../Mau/Images/productvinh/product/nike6.png',productPrice1: "3.000.000", productPrice2: "2.600.000", productPrice3:2600000, productRating:5, productInfo:'- Giày Nike Joyride Dual Run là phiên bản nâng cấp trong dòng giày chạy bộ Joyride. Joyride Dual Run giảm số lượng khoang chứa đầy các hạt từ bốn xuống còn hai. Nike đã loại bỏ hai ngăn chứa phía trước để bàn chân trước ổn định hơn và loại bỏ vấn đề: các hạt trượt ra từ bên dưới chân của bạn. Cải thiện mới tạo ra sự khác biệt lớn trong các buổi luyện chạy tốc độ. Bạn không còn mất năng lượng bị đẩy các hạt (gót chân) và thay vào là cảm giác tiếp đất bám và tốt hơn. Vẫn sử dụng một loại đệm giày (màu trắng) siêu thoải mái, chưa được đặt tên, từ Joyride Run Flyknit là midsole trong Joyride Dual Run. Midsole chỉ dày 19mm giữa bàn chân trước và mặt đất nhưng bước chân vẫn kết thúc bằng chân trước.'}
    , {productName: 'Nike Air Max 270',productGender:'nu', productType: 'nike', productId: '23', productImg: '../Mau/Images/productvinh/product/nike7.png',productPrice1: "4.600.000", productPrice2: "3.800.000", productPrice3:3800000, productRating:5, productInfo:'- Nike Air Max 270, đôi giày đế Air lifestyle (phong cách thường ngày) đầu tiên của Nike có bộ đế trong suốt, phô trương bong bóng Air Max rất lớn ở gót chân, cấu trúc bằng chất liệu vải thô, lưới đan và lưới thoáng khí ở phần thân trên với nhiều màu sắc chung tạo nên một tuyên bố và tạo hình bóng đặc trưng của đôi Nike Air Max 270.'}
    , {productName: 'Nike Air Shadow',productGender:'nu', productType: 'nike', productId: '24', productImg: '../Mau/Images/productvinh/product/nike8.png',productPrice1: "3.000.000", productPrice2: "2.700.000", productPrice3:2700000, productRating:5, productInfo:'- Đây có lẽ là phối màu gây chú ý nhất của Nike thời gian qua vì đã xóa bỏ đi sự đơn điệu cũng như sự nhàm chán của phối màu đen và trắng huyền thoại của Nike Air Force 1 xưa. Sự kết hợp độc đáo giữa các màu sắc rực rỡ mang lại sự phá cách và gây chú ý với tất cả những người nhìn vào nó, đặc biệt là việc vận dụng nhiều lớp vải đè lên nhau những vẫn giữ được sự mềm mại, thanh thoát của một đôi giày Nike Air Force 1 Shadow chính hãng. Về độ thoải mái khi đi thì với công nghệ air được sử dụng dưới lớp đế giày mang lại cảm giác êm chân tuyệt đối, đây là công nghệ tạo tiền đề để phát triển giày Nike zoom và Pegasus nên sẽ tạo cảm giác chân tốt nhất khi đi. Đây là Mau giày Nike nữ mới nhất được xếp vào những dòng giày Nike chính hãng có mức giá tốt.'}
    , {productName: 'Gucci Disney Rhyton',productGender:'nam', productType: 'gucci', productId: '25', productImg: '../Mau/Images/productvinh/product/gucci1.png',productPrice1: "3.000.000", productPrice2: "2.400.000", productPrice3:2400000, productRating:5, productInfo:'- Disney Rhyton là một item sáng giá có tên trong danh sách bộ sưu tập giày cho những ai là fans Disney. Với thiết kế form giày “kệch cỡm” và “to xác” trông rất hầm hố nhưng lại có chút đáng yêu khi được trang trí bằng hình ảnh em chuột Mickey. Dù là đi chơi, đi học hay đi làm thì em này hoàn toàn phù hợp với những outfit trên. Ngoài ra, với những ai thuộc team “nấm lùn” thì nên cân nhắc em này nhé bởi phần đế được nâng lên đến 5cm giúp bạn ăn gian, cải thiện được chiều cao của mình. Cùng chung một lò sản xuất với những dòng giày trước đây, nên em này cũng được sở hữu chất liệu cao cấp, mang lại cho người dùng cảm giác thoải mái, êm ái khi sử dụng.'}
    , {productName: 'Gucci Ace Leather',productGender:'nam', productType: 'gucci', productId: '26', productImg: '../Mau/Images/productvinh/product/gucci2.png',productPrice1: "7.000.000", productPrice2: "6.600.000", productPrice3:6600000, productRating:5, productInfo:'- Gucci Men’s Ace Leather mang trong mình thiết kế đậm nét hiện đại có thể mix and match được với nhiều set đồ khác nhau. Với hai tone màu trắng, đen chủ đạo quen thuộc em này trở thành item sáng giá được các tín đồ sneaker điên cuồng săn lùng. Dòng sản phẩm giày Gucci Men’s Ace Leather được làm bằng chất liệu da cao cấp có độ bền cao, giúp mang lại cảm giác thoải mái êm ái cho đôi chân trong quá trình di chuyển.'}
    , {productName: 'Gucci ace Signature',productGender:'nam', productType: 'gucci', productId: '27', productImg: '../Mau/Images/productvinh/product/gucci3.png',productPrice1: "6.100.000", productPrice2: "5.500.000", productPrice3:5500000, productRating:5, productInfo:'- Một dòng sản phẩm được tung ra thị trường, nhằm mở rộng và phát triển và khẳng định chủ quyền thương hiệu không ai khác chính là Mau giày Ace Gucci Signature Sneaker. Đây là Mau giày được làm bằng chất liệu da cao cấp, được in nổi hoa văn logo GG trên nền da đen. Với phần đế được làm bằng chất liệu cao su sản xuất tại Italia.'}
    , {productName: 'Gucci Leather Slip-on',productGender:'nam', productType: 'gucci', productId: '28', productImg: '../Mau/Images/productvinh/product/gucci4.png',productPrice1: "3.000.000", productPrice2: "2.600.000", productPrice3:2600000, productRating:5, productInfo:'- Giày Gucci Slip On Sneaker With Bees nổi bật với những con ong và ngôi sao độc đáo của nhà thiết kế Alessandro Michele, được may tinh xảo trên chất liệu da đen thời thượng, màu vàng – đen thời thượng. Với kiểu dáng mỏng, trơn phù hợp với mọi người bởi sự tiện lợi, nhỏ gọn, thể hiện cá tính của chủ nhân, đây là Mau giày không thể thiếu cho các tín đồ thời trang nam.'}
    , {productName: 'Gucci Ace Embroidered',productGender:'nu', productType: 'gucci', productId: '29', productImg: '../Mau/Images/productvinh/product/gucci5.png',productPrice1: "6.000.000", productPrice2: "5.600.000", productPrice3:5600000, productRating:5, productInfo:'- Một dòng sản phẩm đến từ thương hiệu nhà Gucci không thể không nhắc đến chính là Mau giày Gucci Ace Embroidered Sneaker. Em giày này khi vừa được tung ra thị trường rất được lòng các Sneakerhead cũng như các Fashionista bởi kiểu dáng, và họa tiết trên giày các Mau giày gucci ace embroidered cực đẹp cho nam nữ. Với tone trắng là màu chủ đạo, dễ dàng phối đồ em này còn được nhà Gucci điểm họa tiết thêu nổi bật như bọ cánh cam, hoa hồng hay trái tim….với nhiều màu sắc rực rỡ và tươi tắn. Vì là dòng sản phẩm được sản xuất bởi thương hiệu nổi tiếng là Gucci, nên em này sở hữu cho mình chất liệu cao cấp, với phần upper được làm bằng da mang lại cảm giác thoải mái, êm ái cho đôi chân mà không lo bị đau nhức, hay trầy xước.'}
    , {productName: 'Gucci Ace GG Supreme',productGender:'nu', productType: 'gucci', productId: '30', productImg: '../Mau/Images/productvinh/product/gucci6.png',productPrice1: "6.300.000", productPrice2: "5.900.000", productPrice3:5900000, productRating:5, productInfo:'- Women’s Ace GG Supreme Sneaker With Bees cũng là một item trong các Mau giày Gucci không kém phần năng động, cá tính và hiện mà không thể không nhắc đến trong bài viết này. Với 3 tone màu nổi bật làm điểm nhấn là xanh, đỏ và chỉ vàng óng ánh trên nền hoa văn Gucci, càng khiến em này trông bắt mắt và thu hút được sự chú ý hơn.'}
    , {productName: 'Gucci Loved',productGender:'nu', productType: 'gucci', productId: '31', productImg: '../Mau/Images/productvinh/product/gucci7.png',productPrice1: "8.000.000", productPrice2: "7.600.000", productPrice3:7600000, productRating:5, productInfo:'- Đỏ bóng và xanh trầm là hai tông màu ở phần sọc mà Gucci tập trung vào phiên bản lần này. Bên cạnh đó là chữ “LOVED” được thêu bằng chỉ vàng sáng rất đặc trưng cùng với đó là phần tab giày được thiết kế 2 màu xanh đỏ được coi là Snake Eyes của phiên bản này. Với thông điệp là hãy yêu nhau nhiều hơn, thương hiệu đã cho ra mắt đôi giày Gucci Loved với đầy sự ngọt ngào. Hiện đôi giày này đang được bán với giá 670 USD trên website của Gucci.'}
    , {productName: 'Gucci Basket',productGender:'nu', productType: 'gucci', productId: '32', productImg: '../Mau/Images/productvinh/product/gucci8.png',productPrice1: "7.500.000", productPrice2: "6.600.000", productPrice3:6600000, productRating:5, productInfo:'- Đôi giày thể thao Basket của Gucci được lấy cảm hứng từ những chiếc giày cao cổ từ những năm 1990 và được trình bày với màu đỏ, trắng và xanh lam. Chi tiết đến nỗi buồn nhẹ, đôi giày hàng ngày này được chế tạo bằng vật liệu bền vững với môi trường và mỗi chiếc giày đều có thẻ nhận dạng chuyên dụng.'}
    , {productName: 'Gucci Basket',productGender:'nu', productType: 'gucci', productId: '32', productImg: '../Mau/Images/productvinh/product/gucci8.png',productPrice1: "7.500.000", productPrice2: "6.600.000", productPrice3:6600000, productRating:5, productInfo:'- Đôi giày thể thao Basket của Gucci được lấy cảm hứng từ những chiếc giày cao cổ từ những năm 1990 và được trình bày với màu đỏ, trắng và xanh lam. Chi tiết đến nỗi buồn nhẹ, đôi giày hàng ngày này được chế tạo bằng vật liệu bền vững với môi trường và mỗi chiếc giày đều có thẻ nhận dạng chuyên dụng.'}
];
// trên 1 trang
let perPage=8;
let currentPage=1;
// làm tròn số math.round
var totalPage;
// = Math.ceil (mainProduct.length/perPage);
// mang chua sp tren 1 trang
var perPost= [];
var begin;
var end;

var arrTmp=[];
function xuatSanPham(type)
{
    // mainProduct=JSON.parse(localStorage.getItem('product'));
    var s='';
    // vars='';
    arrTmp=[];
    for(var i=0;i<mainProduct.length;i++)
    {
        if(type == mainProduct[i].productType || type == 'all')
        {
        s +='<div class="product">';
        s +='<div class="product-content">';
        s +='<div onclick="showProduct('+mainProduct[i].productId+')" class="product-img js-product-img" >';
        s +='<img src="'+mainProduct[i].productImg+'" alt="">';
        s +='</div>';
        s +='<div class="product-btns">';
        s +='<button class="btn-cart js-product-img">Thêm vào giỏ hàng';
        s +='<span><i class="ti-plus"></i></span>';
        s +=' </button>';
        s +=' <button class="btn-buy js-product-img">Mua hàng<span><i class="ti-shopping-cart-full"></i></span></button>';
        s +=' </div> </div>';
        s +=' <div class="product-info"><div class="product-info-top"> <h2 class="sm-title">LIFESTYLE</h2>';
        s +=' <div class="rating"> <span><i class="fas fa-star"></i></span> <span><i class="fas fa-star"></i></span> <span><i class="fas fa-star"></i></span> <span><i class="fas fa-star"></i></span> <span><i class="fas fa-star"></i></span>';
        s +=' </div> </div>';
        s +=' <a class="product-name" href="#">'+mainProduct[i].productName+'</a><p class="product-price">$'+mainProduct[i].productPrice1+'đ</p><p class="product-price">$ '+mainProduct[i].productPrice2+'đ</p> </div> <div class="off-info"> <h2 class="sm-title">sale off</h2> </div> </div>';
        arrTmp.push(mainProduct[i]);
        }      
     }
    totalPage = Math.ceil (arrTmp.length/perPage);
    document.getElementById('product').innerHTML=s;
    // document.getElementById('product-info').innerHTML=tt;
}


const ulTag =document.querySelector('section-pag')
function xuatPage(page)
{   
    console.log(totalPage);
    console.log(mainProduct);
    let liTag ='';
    let activeLi;
    let beforePages = page - 1; //2 - 1 =1 trang trước đó
    let afterPages  = page + 1; //2 + 1 =3 trang sau đó
    if(page > 1){ //1 nếu trang lớn hơn 1 thì thêm thẻ li mới là nút trước đó
        liTag += '<a href="#product"><li class="btn prev" onclick="xuatPage('+(page-1)+');handlePage('+(page-1)+')"><span><i class="fas fa-chevron-left"></i> Trước</span></li></a>';
    }   
    
    if(page > 2){ //3 nếu trang lớn hơn 2 thì hãy thêm thẻ li trang 1
        liTag += '<a href="#product"><li class="numb" onclick="xuatPage('+1+');handlePage('+1+')"><span>1</span></li></a>';
        if(page > 3){ //nếu trang lớn hơn 3 thì hãy thêm thẻ li ()...)
            liTag += '<li class="dots"><span>...</span></li>';
        }
    }
    
    if(totalPage > 3)
    {
            // nếu trang bằng 1 thì xuất dc 2 trang 1 và 2
        if( page == 1){
            afterPages = afterPages +2; //afterPages by  2+ 2 =4 xuat hien den trang thu 4
        }else if(page == 2){
            afterPages = afterPages +1; //afterPages by  3+ 1 =4 xuat hien den trang thu 4
        }
        // nếu trang bằng tổng trang thì xuất dc 2 trang cuối và kế cuoi
        if( page == totalPage){
            beforePages = beforePages -2; //xuat hien 4 trang 
        }else if(page == totalPage){
            beforePages = beforePages -1; //xuat hien 4 trang 
        }
    }
    
    for(let i =beforePages ; i<= afterPages ;i++) //2số trang từ ít nhất là 1 dến tổng trang
    {
        if(i > totalPage){ //4 nếu lớn hơn tổng trang thì lướt bỏ đi
            continue;
        }
        if(i == 0){     //4 nếu bằng 0 thì tăng lên 1
            i = i + 1;
        }
        // s +='<button onclick="handlePage('+i+')">'+i+'</button>';
        if(page == i){ //nếu trang bằng i thì gán chuỗi active vào thẻ activeLi
            activeLi = "active";
        }
        else {          //nếu trang ko bằng i thì gán chuỗi rỗng vào thẻ activeLi
            activeLi = "";
        }
        liTag +=' <a href="#product"><li class="numb '+activeLi+'" onclick="xuatPage('+i+');handlePage('+i+')"><span>'+i+'</span></li></a>';
    }  
    
    if(page < totalPage-1){ //3 nếu trang nhỏ hơn tổng trang -1  thì hiển thi j trang cuối
        if(page < totalPage-2){ //nếu trang nhỏ hơn tổng trang -2 thi hiển thị (...)
            liTag += '<li class="dots"><span>...</span></li>';
        }
        liTag += '<a href="#product"><li class="numb" onclick="xuatPage('+totalPage+');handlePage('+totalPage+')"><span>'+totalPage+'</span></li></a>';
    }

    if(page < totalPage){ //1 nếu trang nhỏ hơn tổng trang thì thêm thẻ li mới là nút sau đó 
        liTag += '<a href="#product"><li class="btn next" onclick="xuatPage('+(page+1)+');handlePage('+(page+1)+')"><span>Sau <i class="fas fa-chevron-right"></i></span></li></a>';
    }   
    
    if(totalPage == 1 || totalPage == 0)
    {
        document.getElementById('pagination').innerHTML = "";
    }
    else
        document.getElementById('pagination').innerHTML = liTag;
}

function handlePage(key)
{
    //console.log(mainProduct);
    currentPage =key;
    // tách mảng dùng slice
    var s='';
    begin=(currentPage - 1)*perPage;
    end=(currentPage - 1)*perPage +perPage;
    perPost=[];
    perPost = arrTmp.slice(begin,end);
    console.log(perPost);
    for(var i=0; i<perPost.length ;i++)
    {
        s +='<div class="product" >';
        s +='<div class="product-content ">';
        s +='<div class="product-img js-product-img"  onclick="showProduct('+perPost[i].productId+')">';
        s +='<img src="'+perPost[i].productImg+'" alt="">';
        s +='</div>';
        s +='<div class="product-btns">';
        s +='<button  class="btn-cart" ><a onclick="spct('+perPost[i].productId+')" href="sp.html" style="color: #fff;font-size: 15px;">Thêm vào giỏ hàng</a>';
        s +='<span><i class="ti-plus"></i></span>';
        s +=' </button>';
        s +='<button class="btn-buy"><a onclick="spct('+perPost[i].productId+')" href="sp.html" style="color: #000;font-size: 15px;">Mua hàng</a><span><i class="ti-shopping-cart-full"></i></span></button>';
        s +=' </div> </div>';
        s +=' <div class="product-info"><div class="product-info-top"> <h2 class="sm-title">LIFESTYLE</h2>';
        s +=' <div class="rating"> <span><i class="fas fa-star"></i></span> <span><i class="fas fa-star"></i></span> <span><i class="fas fa-star"></i></span> <span><i class="fas fa-star"></i></span> <span><i class="fas fa-star"></i></span>';
        s +=' </div> </div>';
        s +=' <a onclick="spct('+perPost[i].productId+')" class="product-name" href="sp.html">'+perPost[i].productName+'</a><p class="product-price">$'+perPost[i].productPrice1+'đ</p><p class="product-price">$ '+perPost[i].productPrice2+'đ</p>  <p class="product-price-js" style="font-size: 0px; display: block;">'+perPost[i].productPrice3+'</p> </div> <div class="off-info"> <h2 class="sm-title">sale off</h2> </div> </div>';
        //console.log(s);
        
    }
    document.getElementById('product').innerHTML = s;
}
var arrTmp=[];
function changProductList(type,element)
{
    console.log(element);
    console.log(type);
    let tab=document.getElementsByClassName('tab-item');
    console.log(tab);
    for(i=0 ; i<tab.length;i++)
    {
        tab[i].style.background = '#0cd9e0';
    }
    element.style.background ='red';
    xuatSanPham(type);
    xuatPage(1);
    handlePage(1,type);
}

function changesize(type,element)
{
    console.log(type);
    let select=document.getElementsByClassName('select-size');
    console.log(select);
    for(i=0 ;i<select.length;i++)
    {
        select[i].style.border='none';
    }
    console.log(element);
    element.style.border='1px solid #000';
}
 
function showProduct(type)
{
    for(let i=0 ; i<mainProduct.length ;i++ )
    {
        if(mainProduct[i].productId == type)
        {
            document.getElementById('showImg').setAttribute("src",mainProduct[i].productImg);
            var s1="";
            s1 +=''+mainProduct[i].productName+'';
            document.getElementById('showName').innerHTML=s1;
            var s2="";
            s2 +=''+mainProduct[i].productInfo+'';
            document.getElementById('showInfo').innerHTML=s2;
            break;
        }
    }
    const infos=document.querySelectorAll('.js-product-img');
    const modal=document.querySelector('.js-modal-product');
    const modalContainer =document.querySelector('.js-modal-container-product')
    const modalClose=document.querySelector('.js-modal-close-product');

    //hàm hiển thị modal (them class open)
    function showinfo(){
        modal.classList.add('open');
    }

    //hàm ẩn modal (gỡ class open )
    function hideinfo(){
        modal.classList.remove('open');
    }

    //lặp qua tùng thẻ có class .js-product-img và nghe hành vi click
    for(const info of infos)
    {
      info.addEventListener('click',showinfo);
    }

    //nghe hành vi click vào class .js-modal-close-product
    modalClose.addEventListener('click',hideinfo);

    //Ẩn modal khi bấm ngoài trang thông tin sản phẩm thẩm chí bấm thằng con cũng ẩn (con là =>.js-modal-containẻ-product)
    modal.addEventListener('click',hideinfo);

    //ngừng đến class (con là =>.js-modal-containẻ-product) khiến nó không tự động ẩn.
    modalContainer.addEventListener('click' , function(event){
      event.stopPropagation();
    })
}     
//---------------------------------------Tìm kiếm------------------------------------
function renderData(arrTmp,type)
{
    let s="";
    arrTmp.map(value=>{
        s +='<div class="product">';
        s +='<div class="product-content">';
        s +='<div class="product-img js-product-img"  onclick="showProduct('+value.productId+')">';
        s +='<img src="'+value.productImg+'" alt=""> </a>';
        s +='</div>';
        s +='<div class="product-btns">';
        s +='<button  class="btn-cart js-product-img" ><a onclick="spct('+value.productId+')" href="sp.html" style="color: #fff;font-size: 15px;">Thêm vào giỏ hàng</a>';
        s +='<span><i class="ti-plus"></i></span>';
        s +=' </button>';
        s +='<button class="btn-buy js-product-img"><a onclick="spct('+value.productId+')" href="sp.html" style="color: #000;font-size: 15px;">Mua hàng</a><span><i class="ti-shopping-cart-full"></i></span></button>';
        s +=' </div> </div>';
        s +=' <div class="product-info"><div class="product-info-top"> <h2 class="sm-title">LIFESTYLE</h2>';
        s +=' <div class="rating"> <span><i class="fas fa-star"></i></span> <span><i class="fas fa-star"></i></span> <span><i class="fas fa-star"></i></span> <span><i class="fas fa-star"></i></span> <span><i class="fas fa-star"></i></span>';
        s +=' </div> </div>';
        s +=' <a class="product-name" href="#">'+value.productName+'</a><p class="product-price">$'+value.productPrice1+'đ</p><p class="product-price">$ '+value.productPrice2+'đ</p>  <p class="product-price-js" style="font-size: 0px; display: block;">'+value.productPrice3+'</p> </div> <div class="off-info"> <h2 class="sm-title">sale off</h2> </div> </div>';
    })
    totalPage = Math.ceil (arrTmp.length/perPage);
    xuatPage(1);
    handlePage(type);
    document.getElementById('product').innerHTML=s;
}

function searchData()
{  
    let valueSearch=document.getElementById("mysearch").value;
    console.log(valueSearch)
   const dataFilter=mainProduct.filter(value =>{
       return value.productName.toUpperCase().includes(valueSearch.toUpperCase())
   })
   renderData(dataFilter,valueSearch);

}

// -------------------------------- Quan ly san pham (Admin)--------------------------
function xuatSanPhamAdmin()
{
    localStorage.setItem('product',JSON.stringify(mainProduct));
    mainProduct=JSON.parse(localStorage.getItem('product'));

    if(localStorage.getItem('product') === null)
        return false;
    
    var tr=`<tr>
                    <td>ID</td>
                    <td>Tên Sản Phảm</td>
                    <td>Thể Loại</td>
                    <td>Ảnh</td>
                    <td>Giá Gốc</td>
                    <td>Giá Sale</td>
                    <td>Giá Sale</td>                   
                    <td>Sửa</td>
                    <td>Xóa</td>
            </tr>`
    for(var i=0; i<mainProduct.length ;i++)
    {
        tr += ' <tr> '
        tr += '     <td>'+mainProduct[i].productId+'</td>'
        tr += '     <td>'+mainProduct[i].productName+'</td>'
        tr += '     <td>'+mainProduct[i].productType+'</td>                 '
        tr += '     <td><img class="admin-img" src="'+mainProduct[i].productImg+'" alt=""></td>'
        tr += '     <td>'+mainProduct[i].productPrice1+'</td>'
        tr += '     <td>'+mainProduct[i].productPrice2+'</td>'
        tr += '     <td>'+mainProduct[i].productPrice3+'</td>'
        tr += '     <td><button class="" onclick="showSuaProduct(\''+mainProduct[i].productId+'\')" >Sửa</button></td>'
        tr += '     <td><button class="delete"  onclick="deleteSanPhamAdmin(\''+mainProduct[i].productId+'\')">&times;</button></td>'
        tr += ' </tr>'
    }
    document.getElementById('userlist').innerHTML=tr;
}
// ------------------------------- deleteSanPham --------------------
function deleteSanPhamAdmin(deleteProduct)   
{

    console.log(deleteProduct);
    if(confirm("Bạn có chắc muốn xóa chưa ?"))
    {
        mainProduct=JSON.parse(localStorage.getItem('product'));
        for(i=0; i<mainProduct.length ;i++)
        {
            if(mainProduct[i].productId == deleteProduct)
            {
               
                mainProduct.splice(i,1);
            }
        }
        localStorage.setItem('product',JSON.stringify(mainProduct));
        xuatSanPhamAdmin();
    }
}               
// ---------------------------- CreateSanPham ------------------------
var product;
function createSanPhamAdmin() 
{
    alert("Tao San Pham")
    mainProduct=JSON.parse(localStorage.getItem("product"));
    product={productName: document.getElementById('admin-name').value ,productGender:'nam', productType: document.getElementById('admin-type').value, productId:document.getElementById('admin-id').value, productImg:document.getElementById('admin-img').value,productPrice1: document.getElementById('admin-price1').value, productPrice2: document.getElementById('admin-price2').value, productPrice3:document.getElementById('admin-price3').value, productRating:5, productInfo:document.getElementById('admin-introduct').value}
    console.log(product.productName);
    mainProduct.push(product);
    localStorage.setItem('product',JSON.stringify(mainProduct));
    alert('Thêm sản phẩm thành công')
    xuatSanPhamAdmin();
    return false;
}
// ------------------------------ EditSanPham -----------------------------
function editSanPhamAdmin(editProduct)
{
    
    localStorage.setItem('product',JSON.stringify(mainProduct));
    for(i=0 ;i<mainProduct.length ;i++)
    {   
        
        if(mainProduct[i].productId === editProduct)
        {
            console.log(mainProduct[i]);
            document.getElementById('admin-id-sua').value=mainProduct[i].productId;
            document.getElementById('admin-name-sua').value=mainProduct[i].productName;
            document.getElementById('admin-type-sua').value=mainProduct[i].productType;
            document.getElementById('admin-img-sua').value=mainProduct[i].productImg;
            document.getElementById('admin-price1-sua').value=mainProduct[i].productPrice1;
            document.getElementById('admin-price2-sua').value=mainProduct[i].productPrice2;
            document.getElementById('admin-price3-sua').value=mainProduct[i].productPrice3;
            document.getElementById('admin-introduct-sua').value=mainProduct[i].productInfo;
            break;
        }
    }
}         

function hoanthanhEditSanPhamAdmin(editProduct)
{
    
    for(i=0 ;i<mainProduct.length ;i++)
    {
        if(mainProduct[i].productId == editProduct)
        {
            mainProduct[i]={productName: document.getElementById('admin-name-sua').value ,productGender:'nam', productType: document.getElementById('admin-type-sua').value, productId:document.getElementById('admin-id-sua').value, productImg:document.getElementById('admin-img-sua').value,productPrice1: document.getElementById('admin-price1-sua').value, productPrice2: document.getElementById('admin-price2-sua').value, productPrice3:document.getElementById('admin-price3-sua').value, productRating:5, productInfo:document.getElementById('admin-introduct-sua').value}
            alert("Sửa thành công")   
            break;
        }
              
    }
    localStorage.setItem('product',JSON.stringify(mainProduct));
    xuatSanPhamAdmin();
}

// --------------------------Show Hide Ẩn Product ------------------------------------------
function showSuaProduct(obj)
{
    mainProduct=JSON.parse(localStorage.getItem('product'));
    document.getElementById('modal-admin-sua').style.display="flex";
    editSanPhamAdmin(obj);
}
function hideSuaProduct()
{
    document.getElementById('modal-admin-sua').style.display="none";
}

//-------------------- Dùng để ẩn hiện title ---------------------
function themProduct()
{
    document.getElementById('them-title').style.display="inline-block";
    document.getElementById('admin-them-user').innerHTML="";
    document.getElementById('them-list').innerHTML="Danh Sách Sản Phẩm";
}


function spct(type)
{
    for(let i=0 ; i<mainProduct.length ;i++ )
    {
        if(mainProduct[i].productId == type)
        {
            var ctsp = mainProduct[i]
            localStorage.setItem("ctsp", JSON.stringify(ctsp))
        }
    }
}

// -------------------------- Kiem tra input Product ----------------------
function ktThemProduct()
{
    let id=document.getElementById('admin-id').value;
    let name=document.getElementById('admin-name').value;
    let type=document.getElementById('admin-type').value;
    let img=document.getElementById('admin-img').value;
    let price1=document.getElementById('admin-price1').value;
    let price2=document.getElementById('admin-price2').value;
    let price3=document.getElementById('admin-price3').value;
    let introduct=document.getElementById('admin-introduct').value;

    if(id == "")
    {
        alert("Id còn trống !")
        //Không được để email.focus() nếu để return sẽ không hoạt động
       document.getElementById('admin-id').focus();
       return false;
    }else if(id.length > 2){
        // alert("Mật khẩu không hợp lệ")
        alert("Id không được lớn hơn 2 kí tự")
        document.getElementById('admin-id').focus();
        return false;
    }else if(isNaN(id))
    {
        alert("ID nhập sai định dạng")
        document.getElementById('admin-id').focus();
        return false;
    }

    if(name == "")
    {
        alert("Tên giày còn trống !")
        //Không được để email.focus() nếu để return sẽ không hoạt động
       document.getElementById('admin-name').focus();
       return false;
    }else if (name.trim().length < 5)
    {
        alert("Tên giày không được nhỏ hơn 5 kí tự !")
       document.getElementById('admin-name').focus();
       return false
    }else if (name.trim().length > 50)
        {
        alert("Tên giày không được lớn hơn 50 kí tự !")
       document.getElementById('admin-name').focus();
       return false
        }

    if(type == "")
    {
        alert("Bạn chưa chọn thể loại")
        //Không được để email.focus() nếu để return sẽ không hoạt động
    //    document.getElementById('admin-type').focus();
       return false;
    }

    if(img == "")
    {
        alert("Bạn chưa nhập đường link ảnh !")
        //Không được để email.focus() nếu để return sẽ không hoạt động
       document.getElementById('admin-img').focus();
       return false;
    }

    if(price1 == "")
    {
        alert("Giá Gốc còn trống !")
        //Không được để email.focus() nếu để return sẽ không hoạt động
       document.getElementById('admin-price1').focus();
       return false;
    }else if(price1.length < 5){
        // alert("Mật khẩu không hợp lệ")
        alert("Giá Gốc không đúng")
        document.getElementById('admin-price1').focus();
        return false;
    }

    if(price2 == "")
    {
        alert("Giá Sale 1 còn trống !")
        //Không được để email.focus() nếu để return sẽ không hoạt động
       document.getElementById('admin-price2').focus();
       return false;
    }else if(price2.length < 5){
        // alert("Mật khẩu không hợp lệ")
        alert("Giá Sale 1 không đúng")
        document.getElementById('admin-price2').focus();
        return false;
    }
    
    if(price3 == "")
    {
        alert("Giá Sale 2 còn trống !")
        //Không được để email.focus() nếu để return sẽ không hoạt động
       document.getElementById('admin-price3').focus();
       return false;
    }else if(isNaN(price3))
    {
        alert("Giá Sale ghi sai định dạng.")
        document.getElementById('admin-price3').focus();
        return false;
    }

    if(introduct == "")
    {
        alert("Giới Thiệu Sản Phẩm còn trống !")
        //Không được để email.focus() nếu để return sẽ không hoạt động
       document.getElementById('admin-introduct').focus();
       return false;
    }else if (introduct.length < 11)
    {
        alert("Giới Thiệu Sản Phẩm quá ngắn!")
       document.getElementById('admin-introduct').focus();
       return false
    }

    
    return true;
}