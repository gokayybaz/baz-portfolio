import { Button } from "@/components/ui/button";
import Navbar from "./components/Navbar/Navbar";
import ProfileImage from "./components/ProfileImage/ProfileImage";
import { IoDocument, IoDocumentAttach, IoDocumentAttachOutline, IoDocumentOutline, IoDownload, IoDownloadOutline } from "react-icons/io5";
import { HardDriveDownload } from "lucide-react";
import { DownloadCloud } from "lucide-react";
import { Github } from "lucide-react";
import { GithubIcon } from "lucide-react";
import { Linkedin } from "lucide-react";
import ProfileInfo from "./components/ProfileInfo/ProfileInfo";

export default function Home() {
  return (
    <div className="px-100 3xl:px-200 py-12 flex flex-col gap-12">
      <Navbar />
      <section>
        <div className="flex items-center gap-12">
          <ProfileImage />
          <ProfileInfo />
        </div>
      </section>
      <hr />
    </div>
  );
}
