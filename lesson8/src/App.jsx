import React, { useState } from "react";
import "./App.css";
import "./component/NewRelease";
import NewRelease from "./component/NewRelease";
import Card from "./component/Card";

const App = () => {
  const animes = [


    {
      id: "2",
      movieName: "One Piece",
      description:
        "One Piece là bộ truyện tranh dành cho thiếu niên của tác giả nổi tiếng Oda Eiichiro. Bộ manga này được chuyển thể thành một series anime nhiều tập hài hước, đặc sắc. Phim Đảo Hải Tặc mở đầu câu chuyện bằng cảnh xử tử vua hải tặc Gol D. Roger. Trước khi chết ông đã tiết lộ rằng mình có một kho báu được giấu ngoài biển. Nếu ai tìm thấy kho báu thì chúng sẽ thuộc về người đó. Rất nhiều người gan dạ đã đổ xô ra biển để tìm kiếm kho báu bí ẩn của vua hải tặc Gol D. Roger.",
      image: "1.jpg",
      episode: "1018",
    },
    {
      id: "3",
      movieName: "Boruto: Naruto Next Generations",
      description:
        "Boruto: Naruto Next Generations kể về thế hệ sau của Naruto. Bộ phim vẫn lấy bối cảnh là thế giới Ninja nhưng nhân vật chính lần này lại là Uzumaki Boruto, con trai của Uzumaki Naruto và Hyuga Hinata. Đồng hành cùng Naruto trong lần quay lại này là Sarada Uchiha là con gái của Sasuke Uchiha, Sakura Haruno và Mitsuki – “con” của Orochimaru.",
      image: "2.jpg",
      episode: "250",
    },
    {
      id: "4",
      movieName: "Spy X Family",
      description:
        "Bộ phim là phần phim điện ảnh của series anime nổi tiếng Spy x Family. Trong bộ phim lần này, sau khi nhận được yêu cầu thay thế mình trong Chiến dịch Strix, Loid Forger quyết định giúp con gái Anya chiến thắng trong cuộc thi nấu ăn tại Học viện Eden bằng cách nấu bữa ăn yêu thích của hiệu trưởng để tránh bị thay thế khỏi nhiệm vụ mật. Nhưng từ đây, gia đình Forger phát hiện ra bí mật kinh hoàng ảnh hưởng đến hòa bình thế giới",
      image: "3.jpg",
      episode: "07",
    },
    {
      id: "5",
      movieName: "Shingeki no kyojin",
      description:
        "Câu chuyện của Đại chiến Titan tập trung vào một nền văn minh bên trong ba bức tường đồ sộ quây tròn đồng tâm, nơi được cho là duy nhất mà nhân loại còn tồn tại. Ba bức tường được đặt tên theo tên ba người con gái của vị vua đầu tiên có tên là Maria, Rose và Sina. Người dân ở đó, được gọi là dân tộc Eldia, đã tin rằng hơn một trăm năm trước, loài người đã bị đẩy đến bờ vực tuyệt chủng sau sự xuất hiện của những người khổng lồ hình dáng con người, được gọi là Titan.",
      image: "4.png",
      episode: "28",
    },
    {
      id: "6",
      movieName: "Captain Tsubasa",
      description:
        "Tsubasa Oozora là nhân vật chính trong bộ truyện này. Khi còn nhỏ, cậu đã thoát chết nhờ một quả bóng bất ngờ. Điều đó đã thúc đẩy cậu trở thành một fan hâm mộ bóng đá. Câu chuyện tập trung vào các trận đấu bóng đá hấp dẫn, đem lại những bất ngờ cho khán giả. Đây là bản làm lại của 'Tsubasa Giấc mơ sân cỏ', với những chi tiết được thêm hoặc bỏ, để cộng thêm nét đặc trưng vào bộ truyện. Bộ phim này đã làm vợi lên kí ức về tuổi thơ của biết bao người.",
      image: "5.jpg",
      episode: "28",
    },
    {
      id: "7",
      movieName: "Ao Ashi",
      description:
        "Ashito Aoi là một cầu thủ bóng đá trẻ, đầy khát vọng đến từ một thị trấn vùng nông thôn ở Nhật Bản. Hy vọng vào được một trường trung học với một câu lạc bộ bóng đá giỏi đã tan thành mây khói khi anh gây ra một sự cố trong một trận đấu quan trọng cho đội của mình, dẫn đến việc họ bị loại khỏi giải đấu. Tuy nhiên, anh đã lọt vào mắt xanh của một người quan trọng tình cờ đến thăm từ Tokyo. Mọi chuyện sẽ diễn ra như thế nào đối với Ashito?",
      image: "6.jpg",
      episode: "28",
    },
  ];

 



  const[animeData, setAnimeData] = useState(animes)
  const [getData, setGetData] = useState('')

console.log(getData)


  return (
    <>
      <div className="navbar">
        <h1>Anonime</h1>
        <div className="item">
          <p>Home</p>
          <p>List Anime</p>
        </div>
        <input type="text" placeholder="Search anime or movie" />
      </div>

      <div className="content">
        <div className="explore">
          <h1>Explore</h1>
          <p style={{opacity: '0.5'}}>What are you gonna watch today?</p>
          <Card getData={getData}/>
        </div>

        <div className="banner">
          <img src="0.jpg" className="banner-img"/>
          <div className="in-pic">
            <p className="banner-anime">Weather With You</p>
            <p className="banner-description">Corrupt politicians, frenzied nationalists, and other warmongering forces constantly jeopardize the thin veneer of peace between neighboring countries Ostania and Westalis.</p>

          </div>
        </div>



        <div className="new-release">
          <h1>New Release</h1>
          <div className="new-release-animes">
            {animes.map((animeData) => {
              return (
                <NewRelease
                key={animeData.id}
                name={animeData.movieName}
                description={animeData.description}
                image={animeData.image}
                episode={animeData.episode}
                onClick={() => setGetData(animeData)}
              />
              )
            })}

          </div>
        </div>
      </div>
    </>
  );
};

export default App;
