"use client"
import { Button } from '@/components/ui/button'
import { Linkedin } from 'lucide-react'
import { DownloadCloud } from 'lucide-react'
import { GithubIcon } from 'lucide-react'
import React from 'react'
import { IoDocumentOutline } from 'react-icons/io5'

const ProfileInfo = () => {
    return (
        <div className="flex flex-col items-center gap-6">
            <p className="text-xl">
                Merhaba, ben <b>Gökay Baz</b>. <br />
                BT altyapısı, sistem yönetimi ve yazılım geliştirme alanlarında çalışan bir <br /> <b>IT Uzmanı & Junior DevOps Engineer’ım.</b> <br /> Kurumsal sistemler, ERP entegrasyonlu web uygulamaları ve otomasyon çözümleri geliştiriyor; DevOps yolculuğumda modern teknolojileri sahada deneyimleyerek ilerliyorum.
            </p>
            <div className="flex gap-4 w-full">
                <Button onClick={() => open("https://github.com/gokayybaz", "_blank")} className={"flex cursor-pointer h-11 items-center"}>
                    <GithubIcon />
                    <p>@gokayybaz</p>
                </Button>
                <Button onClick={() => open("https://www.linkedin.com/in/gokayybaz/", "_blank")} className={"flex bg-blue-900 dark:text-white hover:bg-blue-800 cursor-pointer h-11 items-center"}>
                    <Linkedin />
                    <p>@gokayybaz</p>
                </Button>
                <Button onClick={() => open("/gokaybaz-it-specialist-devops-cv.pdf")} variant="outline" className={"flex w-1/3 h-11 cursor-pointer items-center gap-4"}>
                    <IoDocumentOutline />
                    <p className="font-semibold">CV İNDİR</p>
                    <DownloadCloud />
                </Button>
            </div>
        </div>
    )
}

export default ProfileInfo