import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as authAPI from '../../lib/api/auth';
import { useCookies } from 'react-cookie';
import DatePicker from 'react-datepicker';
import { format } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';

// {
//     title: 한강에서 낚시하실 분 ,
//     demoday_image: "https://s3bucket~~image",
//     description : "한강 탁 트인 곳에서 책 읽거나 맥주 마시면서 이야기해요!",
//     demo_date: "2023~~",
//     demo_time: 1530,
//     total_capacity: 6,
//     location: "여의도 한강공원, 망원 한강공원",
//     demo_code: "잠옷"
// }

const CreateDemodayForm = () => {
  const [title, setTitle] = useState('');
  const [demodayImageUrl, setDemodayImageUrl] = useState(
    'https://dayone-bucket-1.s3.ap-northeast-2.amazonaws.com/demoday_default_image.jpeg'
  );
  const [description, setDescription] = useState('');
  const [demoDate, setDemoDate] = useState(null);
  const [demoTime, setDemoTime] = useState('13:00');
  const [totalCapacity, setTotalCapacity] = useState(0);
  const [location, setLocation] = useState('');

  const [previewUrl, setPreviewUrl] = useState('img/demoday_default_img.png');
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef();

  const [cookies, setCookie, removeCookie] = useCookies(['access_token']);
  const navigate = useNavigate();

  useEffect(() => {
    console.log('selectedFile:', selectedFile);
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      // 파일 업로드 처리 로직을 구현합니다.
      console.log('업로드된 파일:', selectedFile);
      // 여기에서 서버로 파일을 전송하거나 다른 작업을 수행할 수 있습니다.
    }
  };

  const handleDateChange = (date) => {
    setDemoDate(date);
  };

  const handleSelectFile = () => {
    fileInputRef.current.click();
  };

  //   "title": "후",
  //   "description": "치맥 ㄱ",
  //   "location": "신촌",
  //   "totalCapacity": 2,
  //   "startRegisterationDate": "2023-05-16T09:00:00.000Z",
  //   "endRegistrationDate": "2023-05-22T18:00:00.000Z",
  //   "eventDate": "2023-05-24",
  //   "meetingTime": "13:00:00",
  //   "demodayImageUrl": "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAzMjhfMjQ3%2FMDAxNjQ4NDY1MDk5MzE3.kd39gj6TvpaTVDSBi9nQYJ6WWaYtzY3p6FpM_7zzUDQg.jfY-C4vT91hcyAL6uYKDWXktiJzMBltrNflci3aCKD0g.JPEG.loveeat414%2FIMG_5826.jpg&type=a340"

  const handleSubmit = async (e) => {
    e.preventDefault(); // 페이지 이동을 저지

    if (selectedFile) {
      const formData = new FormData();
      formData.append('image', selectedFile);
      console.log(formData);

      //   await authAPI
      //     .addDemodayImage(cookies.access_token, formData)
      //     .then((r) => {
      //       setDemodayImageUrl(r.data.data.image_url);

      //       const now = new Date();
      //       const startRegisterationDate = now.toISOString();
      //       const endRegistrationDate = new Date(
      //         `${demoDate}T00:00:00.000Z`
      //       ).toISOString();
      //       const eventDate = format(demoDate, 'yyyy-MM-dd');

      //       const jsonData = {
      //         title,
      //         description,
      //         location,
      //         startRegisterationDate,
      //         endRegistrationDate,
      //         eventDate,
      //         meetingTime: demoTime,
      //         totalCapacity,
      //         demodayImageUrl,
      //       };

      //       authAPI
      //         .addDemoday(cookies.access_token, jsonData)
      //         .then((r) => {
      //           console.log('데모데이 추가');
      //           navigate('/demodays');
      //         })
      //         .catch((error) => {
      //           console.error(error);
      //         });
      //     })
      //     .catch((error) => {
      //       console.error(error);
      //     });
    } else {
      const now = new Date();
      const startRegisterationDate = now.toISOString();
      //   const endRegistrationDate = `${demoDate}T00:00:00.000Z`;
      const demoDateType = new Date(demoDate);
      const endRegistrationDate = new Date(
        demoDateType.getTime() - 1
      ).toISOString();

      const eventDate = format(demoDate, 'yyyy-MM-dd');

      const jsonData = {
        title,
        description,
        location,
        startRegisterationDate,
        endRegistrationDate,
        eventDate,
        meetingTime: demoTime,
        totalCapacity,
        demodayImageUrl,
      };

      await authAPI
        .addDemoday(cookies.access_token, jsonData)
        .then((r) => {
          console.log('데모데이 추가');
          navigate('/demoday');
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <Link to="/">
            <button>취소</button>
          </Link>
          <p>데모데이 생성</p>
          <button type="submit">등록</button>
        </div>
        <input
          type="text"
          placeholder="데모 제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <div>
          <label htmlFor="fileInput">
            <img
              src={previewUrl}
              style={{ width: '300px', height: '166' }}
              alt="파일 선택"
              //   style={{ cursor: 'pointer' }}
              //   onClick={handleSelectFile}
            />
          </label>
          <input
            id="fileInput"
            type="file"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
          {/* <button onClick={handleUpload}>업로드</button> */}
        </div>
        <br />
        <h3>원하는 장소</h3>
        <h4>예) 한강 노들섬, 을지로 만선호프 등</h4>
        <input
          type="text"
          placeholder="내 답변"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <br />
        <h3>설명 (뭐할건지)</h3>
        <h4>
          예) 노들섬에서 돗자리 펴고 누워서 책 읽기, 만선호프에서 비전에 대한
          이야기 하기
        </h4>
        <input
          type="text"
          placeholder="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <h3>모임 날짜</h3>
        <h4>언제까지 모일까요? 예) "2023-05-24"</h4>
        {/* <input
          type="text"
          placeholder="년도, 월, 일"
          value={demoDate}
          onChange={(e) => setDemoDate(e.target.value)}
        /> */}
        <div>
          <DatePicker
            selected={demoDate}
            onChange={handleDateChange}
            dateFormat="yyyy-MM-dd"
          />
        </div>
        <br />
        <h3>모임 시간 </h3>
        <h4>예) 오후 1시일 경우 "13:00"</h4>
        <input
          type="text"
          placeholder="demo_time"
          value={demoTime}
          onChange={(e) => setDemoTime(e.target.value + ':00')}
        />
        <br />
        <h3>원하는 인원</h3>
        <h4>원하는 인원 : 예) 5명</h4>
        <input
          type="text"
          placeholder="total_capacity"
          value={totalCapacity}
          onChange={(e) => setTotalCapacity(e.target.value)}
        />
      </form>
    </div>
  );
};

export default CreateDemodayForm;
