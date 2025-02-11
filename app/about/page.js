import Layout from "@/components/Layout";
import aboutData from "@/data/pages/about.json";
import styles from "@/styles/modules/Style.module.scss";
import Image from "next/image";
import avatar from "@/public/images/img/avatar.jpg";
export const metadata = {
  title: aboutData.frontmatter.title,
  description: aboutData.frontmatter.description,
};

const About = () => {
  const { title, banner, about_info, authors } = aboutData.frontmatter;

  console.log(banner.image_01);

  return (
    <Layout>
      <div
        className={`${styles.waveBg} px-3 md:px-10 xl:px-1 py-24 text-center text-white`}
      >
        <div className="container relative">
          <div className="relative w-full max-w-4xl mx-auto z-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-white font-normal text-balance !leading-snug capitalize relative z-10 mix-blend-difference">
              Toán học không chỉ là con số, mà là ngôn ngữ của vũ trụ.
            </h1>
          </div>
          <p className="mt-8 font-light w-full max-w-lg mx-auto"></p>
        </div>
      </div>

      <div className="py-16 sm:py-24">
        <div className="container">
          <div className="row justify-center">
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl mb-8 !leading-snug">
                Đôi chút về bản thân
              </h2>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="w-1/3 rounded-3xl overflow-hidden">
              <Image src={avatar} alt="avatar" width={"100%"} className="" />
            </div>
            <div className="w-2/3 space-y-4">
              <p class="mt-4 text-gray-700 text-lg leading-relaxed">
                Xin chào! Mình là{" "}
                <span class="font-semibold text-blue-700">
                  Nguyen Phuoc Tri
                </span>
                , một người yêu thích toán học đến mức có thể nói về nó cả ngày
                mà không chán! 😆
              </p>
              <p class="mt-4 text-gray-700 text-lg leading-relaxed">
                Bạn có từng nghĩ toán học chỉ là những con số khô khan trên sách
                giáo khoa không? Thực ra, nó xuất hiện ở khắp mọi nơi – từ cách
                điện thoại của bạn hoạt động, cách ngân hàng tính lãi suất, đến
                những đường nét hoàn hảo trong một bức tranh nghệ thuật.
              </p>
              <p class="mt-4 text-gray-700 text-lg leading-relaxed">
                Blog này là nơi mình chia sẻ những điều thú vị về toán học theo
                cách đơn giản, dễ hiểu và hoàn toàn không đau đầu. 🤯 Có thể bạn
                thích giải những bài toán thử thách, muốn biết toán ứng dụng vào
                cuộc sống thế nào, hay đơn giản là tò mò xem nó có gì hay ho –
                dù thế nào đi nữa, mình cũng rất vui khi có bạn đồng hành trên
                hành trình này! 🚀
              </p>
              <p class="mt-4 text-gray-700 text-lg font-bold leading-relaxed">
                Cùng nhau khám phá thế giới toán học nhé! 🎯
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
