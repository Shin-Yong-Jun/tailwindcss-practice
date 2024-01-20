import React from "react";

const Card = () => {
  return (
    <div className="w-[32rem] relative left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white">
      <img
        src="/KakaoTalk_20231110_131431937.png"
        alt="카드이미지"
        className="w-[30rem] h-[23rem] m-auto pt-[.5rem]"
      />
      <section className="p-4 text-black">
        <h3 className="text-2xl text-[#232323] border-b">제목입니다.</h3>
        <p className="text-lg text-[#787878] font-serif">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
        </p>
      </section>
    </div>
  );
};

export default Card;
