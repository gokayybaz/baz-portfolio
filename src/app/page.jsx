import Navbar from "./components/Navbar/Navbar";
import ProfileImage from "./components/ProfileImage/ProfileImage";

export default function Home() {
  return (
    <div className="px-100 3xl:px-200 py-12 flex flex-col gap-12">
      <Navbar />
      <section>
        <div className="flex items-center gap-12">
          <ProfileImage />
          <div>
            <p className="text-xl">
              Merhaba, ben <b>Gökay Baz</b>. <br />
              BT altyapısı, sistem yönetimi ve yazılım geliştirme alanlarında çalışan bir <br /> <b>IT Uzmanı & Junior DevOps Engineer’ım.</b> <br /> Kurumsal sistemler, ERP entegrasyonlu web uygulamaları ve otomasyon çözümleri geliştiriyor; DevOps yolculuğumda modern teknolojileri sahada deneyimleyerek ilerliyorum.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
