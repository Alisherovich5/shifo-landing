"use client";


import emailjs from "emailjs-com";
import LanguageSwitcher from "@/components/SelectLanguage";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Heart,
  Shield,
  Users,
  Phone,
  Mail,
  MapPin,
  Stethoscope,
  Calendar,
  Pill,
  Activity,
  ArrowRight,
  CheckCircle,
  Download,
  Smartphone,
  Clock,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState, FormEvent, ChangeEvent } from "react";
import { toast } from "react-toastify";

export default function Component() {
  const t = useTranslations();

  const navItems = [
    { href: "#features", label: t("nav.features") },
    { href: "#about", label: t("nav.about") },
    { href: "#contact", label: t("nav.contact") },
  ];

  // Form state

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };
  

  const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  };
  
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    if (
      !formData.firstName.trim() ||
      !formData.lastName.trim() ||
      !formData.email.trim() ||
      !formData.subject.trim() ||
      !formData.message.trim()
    ) {
      toast.error("❌ Iltimos, barcha maydonlarni to‘ldiring.");
      setIsSubmitting(false);
      return;
    }
  
    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };
  
    emailjs
      .send(
        "service_6f4n09o", // misol: "service_9f8s87s"
        "template_8z88ijl", // misol: "template_1a2b3c"
        templateParams,
        "Lg_bhdUAe2SNft5fz" // misol: "6nNNNN0-abCDEFGHIJ"
      )
      .then(
        (result) => {
          toast.success("✅ Muvaffaqiyatli yuborildi!");
          setFormData(initialFormData);
        },
        (error) => {
          toast.error("❌ Yuborishda xatolik yuz berdi.");
          console.error(error);
        }
      )
      .finally(() => setIsSubmitting(false));
  };
  
  
  
  return (
      <div className="flex flex-col min-h-screen bg-white">
        {/* Header */}
        <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <img className="w-28" src="/Logo.png" alt="Logo" />
            </Link>

            <div className="flex items-center space-x-4">
              <nav className="hidden md:flex space-x-8">
                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {item.label}
                    </Link>
                ))}
              </nav>
              <LanguageSwitcher />
            </div>
          </div>
        </header>

        <main className="flex-1 pt-16">
          {/* Hero Section */}
          <section className="w-full pt-12 sm:py-16 lg:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-16">
                <div className="space-y-8 text-center lg:text-left">
                  <div className="space-y-6">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                      {t("hero.title")}
                      <br />
                      <span className="text-blue-600">{t("hero.title_continue")}</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-600 text-center sm:text-start">
                      {t("hero.description")}
                    </p>
                  </div>

                  <div className="flex  sm:flex gap-4 justify-center lg:justify-start">
                    <Link target="_blank" href="https://apps.apple.com/us/app/shifo24/id6748796668">
                      <Button className="bg-black hover:bg-gray-800 text-white px-3 pr-5 py-3 rounded-xl flex items-center gap-2 justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            className="w-6 h-6"
                            viewBox="0 0 16 16"
                        >
                          <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282" />
                        </svg>
                        <div className="text-left">
                          <div className="text-xs text-gray-300">{t("download.appStore")}</div>
                          <div className="font-semibold">App Store</div>
                        </div>
                      </Button>
                    </Link>
                    <Link target="_blank" href="https://play.google.com/store/apps/details?id=com.shifo24.shifo24mobile">
                      <Button className="bg-green-600 hover:bg-green-700 text-white px-3 pr-5 py-3 rounded-xl flex items-center gap-2 justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            className="w-6 h-6"
                            viewBox="0 0 16 16"
                        >
                          <path d="M14.222 9.374c1.037-.61 1.037-2.137 0-2.748L11.528 5.04 8.32 8l3.207 2.96zm-3.595 2.116L7.583 8.68 1.03 14.73c.201 1.029 1.36 1.61 2.303 1.055zM1 13.396V2.603L6.846 8zM1.03 1.27l6.553 6.05 3.044-2.81L3.333.215C2.39-.341 1.231.24 1.03 1.27" />
                        </svg>
                        <div className="text-left">
                          <div className="text-xs text-green-100">{t("download.googlePlay")}</div>
                          <div className="font-semibold">Google Play</div>
                        </div>
                      </Button>
                    </Link>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-8 justify-center lg:justify-start pt-4">
                    <div className="text-center lg:text-left">
                      <div className="text-2xl font-bold text-gray-900">100K+</div>
                      <div className="text-sm text-gray-600">{t("hero.users")}</div>
                    </div>
                    <div className="text-center lg:text-left">
                      <div className="text-2xl font-bold text-gray-900">24/7</div>
                      <div className="text-sm text-gray-600">{t("hero.support")}</div>
                    </div>
                  </div>
                </div>
                <div>
                  <img className="w-72 h-[580px]" src="/iPhone.png" alt="iPhone" />
                </div>
              </div>            </div>
          </section>

          {/* Features Section */}
          <section id="features" className="w-full py-16 sm:py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <div className="inline-flex items-center px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 mb-6">
                  <Activity className="w-4 h-4 mr-2" />
                  {t("features.app")}
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  {t("features.sectionTitle")}
                  <br />
                  <span className="text-blue-600">{t("features.title_continue")}</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t("features.sectionDesc")}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: Stethoscope,
                    title: "features.item1.title",
                    description: "features.item1.description",
                    features: [t("features.item1.feature1"), t("features.item1.feature2"), t("features.item1.feature3")],
                  },
                  {
                    icon: Calendar,
                    title: "features.item2.title",
                    description: "features.item2.description",
                    features: [t("features.item2.feature1"), t("features.item2.feature2"), t("features.item2.feature3")],
                  },
                  {
                    icon: Activity,
                    title: "features.item3.title",
                    description: "features.item3.description",
                    features: [t("features.item3.feature1"), t("features.item3.feature2"), t("features.item3.feature3")],
                  },
                  {
                    icon: Pill,
                    title: "features.item4.title",
                    description: "features.item4.description",
                    features: [t("features.item4.feature1"), t("features.item4.feature2"), t("features.item4.feature3")],
                  },
                  {
                    icon: Shield,
                    title: "features.item5.title",
                    description: "features.item5.description",
                    features: [t("features.item5.feature1"), t("features.item5.feature2"), t("features.item5.feature3")],
                  },
                  {
                    icon: Users,
                    title: "features.item6.title",
                    description: "features.item6.description",
                    features: [t("features.item6.feature1"), t("features.item6.feature2"), t("features.item6.feature3")],
                  },
                ].map((feature, index) => (
                    <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                          <feature.icon className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{t(feature.title)}</h3>
                        <p className="text-gray-600 mb-4">{t(feature.description)}</p>
                        <div className="space-y-2">
                          {feature.features.map((item, idx) => (
                              <div key={idx} className="flex items-center text-sm text-gray-600">
                                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                                {item}
                              </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                ))}
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="w-full py-16 sm:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="space-y-8">
                  <div className="space-y-6">
                    <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-sm font-medium text-blue-700">
                      <Heart className="w-4 h-4 mr-2" />
                      {t("about.about")}
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                      {t("about.sectionTitle")}
                      <br />
                      <span className="text-blue-600">{t("about.title_continue")}</span>
                    </h2>
                    <p className="text-lg text-gray-600">{t("about.description")}</p>
                  </div>

                  <div className="space-y-6">
                    {[
                      {
                        icon: Clock,
                        title: "about.item1.title",
                        description: "about.item1.description",
                      },
                      {
                        icon: Shield,
                        title: "about.item2.title",
                        description: "about.item2.description",
                      },
                      {
                        icon: Smartphone,
                        title: "about.item3.title",
                        description: "about.item3.description",
                      },
                    ].map((item, index) => (
                        <div key={index} className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                            <item.icon className="w-4 h-4 text-blue-600" />
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 mb-1">{t(item.title)}</h4>
                            <p className="text-gray-600">{t(item.description)}</p>
                          </div>
                        </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 p-8 rounded-2xl">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{t("about.stats.heading")}</h3>
                    <p className="text-gray-600">{t("about.stats.description")}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-8">
                    {[
                      { number: "100K+", label: "about.stats.item1.label" },
                      { number: "500+", label: "about.stats.item2.label" },
                      { number: "24/7", label: "about.stats.item3.label" },
                      { number: "98%", label: "about.stats.item4.label" },
                    ].map((stat, index) => (
                        <div key={index} className="text-center">
                          <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                          <div className="text-sm text-gray-600">{t(stat.label)}</div>
                        </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Download CTA Section */}
          <section className="w-full py-16 sm:py-20 bg-blue-600">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left space-y-8">
                  <div className="space-y-6">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">{t("download.title")}</h2>
                    <p className="text-xl text-blue-100">{t("download.description")}</p>
                  </div>

                  <div className="flex sm:flex gap-4 justify-center lg:justify-start">
                    <Link target="_blank" href="https://apps.apple.com/us/app/shifo24/id6748796668">
                      <Button className="bg-white hover:bg-gray-100 text-gray-900 px-3 pr-5 py-3 rounded-xl gap-2 flex items-center justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            className="w-6 h-6"
                            viewBox="0 0 16 16"
                        >
                          <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282" />
                        </svg>
                        <div className="text-left">
                          <div className="text-xs text-gray-600">{t("download.appStore")}</div>
                          <div className="font-semibold">App Store</div>
                        </div>
                      </Button>
                    </Link>
                    <Link target="_blank" href="https://play.google.com/store/apps/details?id=com.shifo24.shifo24mobile">
                      <Button className="bg-green-600 hover:bg-green-700 text-white px-3 pr-5 py-3 rounded-xl flex items-center gap-2 justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            className="w-6 h-6"
                            viewBox="0 0 16 16"
                        >
                          <path d="M14.222 9.374c1.037-.61 1.037-2.137 0-2.748L11.528 5.04 8.32 8l3.207 2.96zm-3.595 2.116L7.583 8.68 1.03 14.73c.201 1.029 1.36 1.61 2.303 1.055zM1 13.396V2.603L6.846 8zM1.03 1.27l6.553 6.05 3.044-2.81L3.333.215C2.39-.341 1.231.24 1.03 1.27" />
                        </svg>
                        <div className="text-left">
                          <div className="text-xs text-green-100">{t("download.googlePlay")}</div>
                          <div className="font-semibold">Google Play</div>
                        </div>
                      </Button>
                    </Link>
                  </div>

                  <div className="flex items-center md:justify-center sm:justify-center   lg:justify-start gap-6 ">
                    <div className="text-center lg:text-left">
                      <div className="flex items-center justify-center lg:justify-start mb-2">
                        <Download className="w-5 h-5 text-blue-200 mr-2" />
                        <div className="text-xl font-bold text-white">{t("download.free")}</div>
                      </div>
                      <div className="text-sm text-blue-200">{t("download.download")}</div>
                    </div>
                    <div className="text-center lg:text-left">
                      <div className="flex items-center justify-center lg:justify-start mb-2">
                        <Clock className="w-5 h-5 text-blue-200 mr-2" />
                        <div className="text-xl font-bold text-white">24/7</div>
                      </div>
                      <div className="text-sm text-blue-200">{t("hero.support")}</div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center">
                    <div className="w-48 bg-white h-48 p-4 rounded-xl flex items-center justify-center mx-auto mb-6">
                      <img src="/qr.svg" alt="QR Code" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{t("download.qr_code.heading")}</h3>
                    <p className="text-blue-200">{t("download.qr_code.description")}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="w-full py-16 sm:py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <div className="inline-flex items-center px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 mb-6">
                  <Mail className="w-4 h-4 mr-2" />
                  {t("contact.app")}
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  {t("contact.sectionTitle")}
                  <br />
                  <span className="text-blue-600">{t("contact.title_continue")}</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t("contact.description")}</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-6">
                  {[
                    {
                      icon: Phone,
                      title: "contact.item1.title",
                      description: "contact.item1.description",
                      contact: "contact.item1.contact",
                      link: "",
                      tel: "+998958297555",
                    },
                    {
                      icon: Mail,
                      title: "contact.item2.title",
                      description: "contact.item2.description",
                      contact: "contact.item2.contact",
                      link: "https://mail.google.com/mail/u/1/#inbox?compose=CllgCJlDTcpJMmnjHdldvwsKFljpWJzbmxFSFqSRGWTPRnDVWKdxjfGRgrWmQRbtKGxjHmvWCcL",
                      tel: "",
                    },
                    {
                      icon: MapPin,
                      title: "contact.item3.title",
                      description: "contact.item3.description",
                      contact: "contact.item3.contact",
                      link: "",
                      tel: "",
                    },
                  ].map((contact, index) => (
                      <Card key={index} className="border-0 shadow-sm">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                              <contact.icon className="h-6 w-6 text-white" />
                            </div>
                            <div>
                              <h3 className="font-bold text-gray-900 mb-2">{t(contact.title)}</h3>
                              <p className="text-gray-600 mb-2">{t(contact.description)}</p>
                              {contact.link ? (
                                  <a
                                      href={contact.link}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="font-medium text-blue-600 hover:underline"
                                  >
                                    {t(contact.contact)}
                                  </a>
                              ) : contact.tel ? (
                                  <a href={`tel:${contact.tel}`} className="font-medium text-blue-600 hover:underline">
                                    {t(contact.contact)}
                                  </a>
                              ) : (
                                  <span className="font-medium text-gray-800">{t(contact.contact)}</span>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                  ))}
                </div>

                <Card className="border-0 shadow-sm">
                  <CardContent className="p-6">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                            {t("contact.form.first_name")}
                          </label>
                          <Input
                              id="firstName"
                              value={formData.firstName}
                              onChange={handleInputChange}
                              placeholder="John"
                              className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                              required
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                            {t("contact.form.last_name")}
                          </label>
                          <Input
                              id="lastName"
                              value={formData.lastName}
                              onChange={handleInputChange}
                              placeholder="Doe"
                              className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                              required
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          {t("contact.form.email")}
                        </label>
                        <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="john@example.com"
                            className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                            required
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                          {t("contact.form.subject")}
                        </label>
                        <Input
                            id="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            placeholder={t("contact.form.placeholder.subject")}
                            className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                            required
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                          {t("contact.form.message")}
                        </label>
                        <textarea
                            id="message"
                            rows={4}
                            value={formData.message}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder={t("contact.form.placeholder.message")}
                            required
                        />
                      </div>
                      <Button
                          type="submit"
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                          disabled={isSubmitting}
                      >
                        {isSubmitting ? t("contact.form.submitting") : t("contact.form.submit")}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </main>

        <footer className="w-full py-12 bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <div className="flex items-center justify-start gap-2">
                  <div className="w-6 h-6 rounded-lg flex items-center justify-center">
                    <img className="" src="/Logo1.png" alt="Footer Logo" />
                  </div>
                  <span className="text-xl font-bold text-white">
                  Shifo<span className="text-blue-400">24</span>
                </span>
                </div>
                <p className="text-gray-400 text-sm">{t("footer.description")}</p>
              </div>

              <div>
                <h3 className="text-white font-medium mb-4">{t("footer.section1.title")}</h3>
                <ul className="space-y-2 transition-all duration-300">
                  {navItems.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                          {link.label}
                        </Link>
                      </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">© {new Date().getFullYear()} {t("footer.copyright")}</p>
            </div>
          </div>
        </footer>
      </div>
  );
}