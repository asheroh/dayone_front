import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as authAPI from '../../lib/api/auth';
import { useCookies } from 'react-cookie';
import DatePicker from 'react-datepicker';
import { format } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
import FormHeader from '../common/FormHeader';

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

const DemodayForm = () => {
  const [title, setTitle] = useState('');
  const [demodayImageUrl, setDemodayImageUrl] = useState(
    'https://dayone-bucket-1.s3.ap-northeast-2.amazonaws.com/default1.jpeg'
  );
  const [description, setDescription] = useState('');
  const [demoDate, setDemoDate] = useState(null);
  const [demoTime, setDemoTime] = useState('13:00');
  const [totalCapacity, setTotalCapacity] = useState(2);
  const [location, setLocation] = useState('');

  const [previewUrl, setPreviewUrl] = useState('img/demoday_default_img.png');
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef();

  const [cookies, setCookie, removeCookie] = useCookies(['access_token']);
  const navigate = useNavigate();

  // useEffect(() => {
  //   console.log('selectedFile:', selectedFile);
  // }, []);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }

    const formData = new FormData();
    formData.append('image', file);

    await authAPI
      .addDemodayImage(cookies.access_token, formData)
      .then((r) => {
        console.log('image response:', r);

        console.log('image response url:', r.data.data);
        setDemodayImageUrl(r.data.data);
      })
      .catch((error) => {
        console.log('image response:');

        console.error(error);
      });
  };

  const handleDateChange = (date) => {
    setDemoDate(date);
  };

  const handleSubmit = async (e) => {
    const eventDate = format(demoDate, 'yyyy-MM-dd');

    const jsonData = {
      title,
      description,
      location,
      eventDate,
      meetingTime: demoTime,
      totalCapacity,
      demodayImageUrl,
    };

    await authAPI
      .addDemoday(cookies.access_token, jsonData)
      .then((res) => {
        console.log(res);
        navigate('/');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <FormHeader headerTitle={'데모 생성'} clickMethod={handleSubmit} />
      <br /> <br /> <br /> <br /> <br />
      <form>
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
              style={{ width: '400px', height: '221' }}
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
        <h4>예 오후 1시일 경우 "13:00"</h4>
        <input
          type="text"
          placeholder="demo_time"
          value={demoTime}
          onChange={(e) => setDemoTime(e.target.value)}
        />
        <br />
        <h3>원하는 인원</h3>
        <h4>본인 포함 인원 : 예) 5명</h4>
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

export default DemodayForm;
