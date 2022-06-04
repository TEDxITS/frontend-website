export type memberType = {
  nama: string;
  foto: string;
  jabatan: string;
  divisi: string;
};

export type exeType = {
  nama: string;
  foto: string;
  jabatan: string;
};

export interface exeProps {
  data: exeType[];
}

export interface staffProps {
  name: string;
  description: string;
}

export interface BoardProps {
  data: memberType[];
  name: string;
  description: string;
  isManager: boolean;
}

export const executives: exeType[] = [
  {
    nama: 'Melissa Gloria',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1654347854/team/Melissa_Gloria_Executive_Producer-Co-Lead_Organizer_jkhs8s_y6attd.jpg',
    jabatan: 'Executive Producer / Co-Lead Organizer',
  },
  {
    nama: 'Clara Lourdessa Oryza Emmanuella',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1654347290/team/Clara_Lourdessa_Oryza_Emmanuella_Licensee-Co-Lead_Organizer_efi3cz_g8vavn.jpg',
    jabatan: 'Licensee / Co-Lead Organizer',
  },
  {
    nama: 'Rachel Gracia Simatupang',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1654347765/team/Rachel_Gracia_Simatupang_Treasurer_hze9jx_dl8jsj.jpg',
    jabatan: 'Treasurer',
  },
];

export const directors: memberType[] = [
  {
    nama: 'Muhammad Aristo Widyadhana',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1654347999/team/Muhammad_Aristo_Widyadhana_Curator_Director_bs31sx_etlie9.jpg',
    jabatan: 'Director',
    divisi: 'Curating',
  },
  {
    nama: 'Althavida Riris',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1654348282/team/Althavida_Riris_Finance_Director_xxztns_qmygii.jpg',
    jabatan: 'Director',
    divisi: 'Fundraising',
  },
  {
    nama: 'Made Krisna Adinarayana',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1654348728/team/Made_Krisna_Adinarayana_Director_of_Event-2_smvswv_tohorw.jpg',
    jabatan: 'Director',
    divisi: 'Event',
  },
  {
    nama: 'Theresa Mahardikarani',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1654349060/team/Rani_Director-2_jkx94u_kzmce1.jpg',
    jabatan: 'Director',
    divisi: 'Human Resource & Administrative',
  },

  {
    nama: 'Ni Putu Putri Marinda Pradnyandari',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1654349329/team/Ni_Putu_Putri_Marinda_Pradnyandari_HRA_Director_xocazb_o5scyr.jpg',
    jabatan: 'Director',
    divisi: 'Human Resource & Administrative',
  },
];

export const event: memberType[] = [
  {
    nama: 'Salsabila Puti',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1654350729/team/Salsabila_Puti_Program_Manager_zqrn7d_thtxpu.jpg',
    jabatan: 'Director',
    divisi: 'Finance',
  },
  {
    nama: 'Reyhans Vigi',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1654350938/team/Reyhans_Vigi_Exeriential_Design_pzqntz_xqfwqk.jpg',
    jabatan: 'Manager',
    divisi: 'Experimential Design',
  },
  {
    nama: 'Gede Dhiyo Sakaputra',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1654351050/team/Gede_Dhiyo_Sakaputra_Logistics_and_Accommodation_dhb1k3_xqoshb.jpg',
    jabatan: 'Manager',
    divisi: 'Logistics and Accommodation',
  },
];

export const mnb: memberType[] = [
  {
    nama: 'Febrio Luqman',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1654351215/team/Febrio_Luqman_Media_Production_Manager_mddgpl_ma7lvi.jpg',
    jabatan: 'Manager',
    divisi: 'Media Production',
  },
  {
    nama: 'Wina Tungmiharja',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1654364335/team/Wina_Tungmiharja_Website_Manager_c8pmka_c0pfwx.jpg',
    jabatan: 'Manager',
    divisi: 'Website',
  },
  {
    nama: 'Silma Elvaretta Aska',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1654364456/team/Silma_Elvaretta_Aska_Marketing_Strategist_Manager_k3tlni_dwoqil.jpg',
    jabatan: 'Manager',
    divisi: 'Marketing Strategist',
  },
  {
    nama: 'Naomie Kartika Sari',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1654366777/team/Naomie_Kartika_Sari_Graphic_Design_Manager-2_bgrzrf_stbypa.jpg',
    jabatan: 'Manager',
    divisi: 'Graphic Design',
  },
];

export const finance: memberType[] = [
  {
    nama: 'Kherissa',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1654366930/team/Kherissa_Fundraising_Manager_ttfeeg_vqvxuq.jpg',
    jabatan: 'Manager',
    divisi: 'Fundraising',
  },
  {
    nama: 'Maria Valentia',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1654367002/team/Maria_Valentia_Partnership_Manager_dn5nmo_o83ly5.jpg',
    jabatan: 'Manager',
    divisi: 'Partnership',
  },
  {
    nama: 'Clarisa Puhutiana',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1654367098/team/Clarisa_Puhutiana_Ticketing_Manager_mocfdx_uqigvy.jpg',
    jabatan: 'Manager',
    divisi: 'Ticketing',
  },
];

export const staffData: staffProps[] = [
  {
    name: 'Program',
    description:
      "Responsible for innovating, developing, and executing the event's concepts in alignment with the theme, topic, and speakers from the Curator Department. Job duties include managing event set-up, tear down and follow-up processes, liaise with vendors, exhibitors, stakeholders, and coordinate with the other divisions.",
  },
  {
    name: 'Exp. Design',
    description:
      'Accountable for the creative execution of “setting the mood” at all TEDxITS events (stage design, decorations, venue vendor plan, interactive booth) in alignment with the whole event.',
  },
  {
    name: 'Logistics & Acco.',
    description:
      'Accountable for the technical execution of events in alignment with the event structure and format of the whole event by providing the necessary tools or equipment. In terms of accommodation, also responsible for individuals transportation, security, protocol, venue licensing and distribution of food & beverage for all for all activities of TEDxITS 2022.',
  },
  {
    name: 'Curating',
    description:
      'Responsible for the essence of TEDxITS 2022; oversees the process of theme, topic, and speakers ideation for the event and marketing. Curators will also invite, prepare, and become liaison officers for speakers throughout the event.',
  },
  {
    name: 'HRA',
    description:
      "Responsible for the organization's knowledge management, secretarial/administrative affairs, and the management of human resources of TEDxITS 2022",
  },
  {
    name: 'Fundraising',
    description:
      'In charge of designing merchandise, coming up with unique and out-of-the-box merchandise ideas, managing production, sales, and marketing, providing sales and revenue report. Coordinates closely with Curator Department to ensure alignment between merchandise design and grand theme and with Marketing Department to achieve high sales.',
  },
  {
    name: 'Partnership',
    description:
      'Accountable for initiating and maintaining partnership with external parties with the purpose of gathering funds (sponsorship) and media promotion for publication (public relations). This department is in charge of securing event sponsorship and exhibition income to achieve income targets.',
  },
  {
    name: 'Ticketing',
    description:
      'Manage ticket-sales, ticketing system, concepting and controlling tickets and their delivery, coordinating with other departments regarding ticketing matters.',
  },
  {
    name: 'Marketing Strategist',
    description:
      'Accountable for the ideation and execution of marketing efforts (social media and content marketing) across all marketing channels (social media, e-mail, word-of-mouth, buzzer), including the content and copywriting.',
  },
  {
    name: 'Graphic Design',
    description:
      "In charge for the graphic design realization of branding, marketing, and operational materials. Also, continuously maintaining the company's brand aesthetics, internally and externally.",
  },
  {
    name: 'Media Production',
    description:
      'Accountable for the video production of branding, marketing, and operational materials. Job duties include taking video documentation, editing video, and creating motion pictures.',
  },
  {
    name: 'Website',
    description:
      'Responsible for the construction, management, and development of the TEDxITS official website and receives content approval from the Marketing Director. Coordinates closely with the Ticketing Division for ticketing orders and Marketing Director for the branding and marketing materials and navigation.',
  },
];

export const team = [
  {
    nama: 'Adinda Ayu',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646040206/team/Adinda_Ayu_Program_Volunteer_omlfit.jpg',
    jabatan: 'Volunteer',
    divisi: 'Program',
  },
  {
    nama: 'Aditya Agral Serhansyah',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646039887/team/Aditya_Agral_Serhansyah_Partnership_Volunteer_w4gjhs.jpg',
    jabatan: 'Volunteer',
    divisi: 'Partnership',
  },
  {
    nama: 'Adna Moria',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646039906/team/Adna_Moria_Curator_Expert_Staff_znndyo.jpg',
    jabatan: 'Expert Staff',
    divisi: 'Curator',
  },
  {
    nama: 'Ahmad Ferdiansyah Ramadhani',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646039916/team/Ahmad_Ferdiansyah_Ramadhani_Website_Volunteer_wrnxna.jpg',
    jabatan: 'Volunteer',
    divisi: 'Website',
  },
  {
    nama: 'Ainun Azizah Puspita Sari',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646039892/team/Ainun_Azizah_Puspita_Sari_Fundraising_Volunteer_w7vpbp.jpg',
    jabatan: 'Volunteer',
    divisi: 'Fundraising',
  },
  {
    nama: 'Alexander Yeriko Cristoval',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646039887/team/Alexander_Yeriko_Cristoval_Logistics_and_Accomodations_Volunteer_wlsxu9.jpg',
    jabatan: 'Volunteer',
    divisi: 'Logistics and Accomodations',
  },
  {
    nama: 'Alkahfi Isham Ahsani',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646039896/team/Alkahfi_Isham_Ahsani_Logistic_and_Accomodation_Volunteer_qsihkt.jpg',
    jabatan: 'Volunteer',
    divisi: 'Logistic and Accomodation',
  },
  {
    nama: 'Althavida Riris',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646039913/team/Althavida_Riris_Finance_Director_xxztns.jpg',
    jabatan: 'Director',
    divisi: 'Finance',
  },
  {
    nama: 'Annisa Fatmahani',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646039911/team/Annisa_Fatmahani_Marketing_Strategist_Volunteer_fn42ge.jpg',
    jabatan: 'Volunteer',
    divisi: 'Marketing Strategist',
  },
  {
    nama: 'Ariya Rifqi Rahadian',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646039921/team/Ariya_Rifqi_Rahadian_Marketing_Strategist_Volunteer_gigkoe.jpg',
    jabatan: 'Volunteer',
    divisi: 'Marketing Strategist',
  },
  {
    nama: 'Armand Faris A Surbakti',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646039898/team/Armand_Faris_A_Surbakti_Program_Volunteer_zz2ld5.jpg',
    jabatan: 'Volunteer',
    divisi: 'Program',
  },
  {
    nama: 'Aulia Balqis Sukma',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646039922/team/Aulia_Balqis_Sukma_HRA_Volunteer_xk3hek.jpg',
    jabatan: 'Volunteer',
    divisi: 'HRA',
  },
  {
    nama: 'Aulia Cisatra',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646039913/team/Aulia_Cisatra_Website_Volunteer_zf9tfl.jpg',
    jabatan: 'Volunteer',
    divisi: 'Website',
  },
  {
    nama: 'Aulia Muhammad',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646039933/team/Aulia_Muhammad_Marketing_Strategist_Expert_Staff_eql23u.jpg',
    jabatan: 'Expert Staff',
    divisi: 'Marketing Strategist',
  },
  {
    nama: 'Ayu Putu Alika Pramesvari Riananda',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646039942/team/Ayu_Putu_Alika_Pramesvari_Riananda_Partnership_Volunteer_v1eqzm.jpg',
    jabatan: 'Volunteer',
    divisi: 'Partnership',
  },
  {
    nama: 'Azahra Nabila',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646039931/team/Azahra_Nabila_Graphic_Design_Volunteer_htqwtu.jpg',
    jabatan: 'Volunteer',
    divisi: 'Graphic Design',
  },
  {
    nama: 'Azeva Haqqi Pradiar',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646039941/team/Azeva_Haqqi_Pradiar_Program_Expert_Staff_cz8nse.jpg',
    jabatan: 'Expert Staff',
    divisi: 'Program',
  },
  {
    nama: 'Azra Bella Nirmala',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646039930/team/Azra_Bella_Nirmala_Experiential_Design_Volunteer_s3a1fb.jpg',
    jabatan: 'Volunteer',
    divisi: 'Experiential Design',
  },
  {
    nama: 'Bahrul Setia Adhi',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646039949/team/Bahrul_Setia_Adhi_Media_Production_pug6gs.jpg',
    jabatan: '',
    divisi: 'Media Production',
  },
  {
    nama: 'Benedictus',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646039932/team/Benedictus_Website_Expert_Staff_czg0t4.jpg',
    jabatan: 'Expert Staff',
    divisi: 'Website',
  },
  {
    nama: 'Berliana Shafa Kirana',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646039957/team/Berliana_Shafa_Kirana_Partnership_Volunteer_rhiwzn.jpg',
    jabatan: 'Volunteer',
    divisi: 'Partnership',
  },
  {
    nama: 'Bimasetya Mahardhika',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646039940/team/Bimasetya_Mahardhika_Experiental_Design_Volunteer_sebkw9.jpg',
    jabatan: 'Volunteer',
    divisi: 'Experiental Design',
  },
  {
    nama: 'Calysta Gracia Adriela',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646039951/team/Calysta_Gracia_Adriela_Fundraising_Volunteer_asa7li.jpg',
    jabatan: 'Volunteer',
    divisi: 'Fundraising',
  },
  {
    nama: 'Caroline Permatasari',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646039955/team/Caroline_Permatasari_Logistic_and_Accomodation_hqmmdp.jpg',
    jabatan: '',
    divisi: 'Logistic and Accomodation',
  },
  {
    nama: 'Chairevita Novia Mediana',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646039963/team/Chairevita_Novia_Mediana_HRA_Volunteer_soxhjv.jpg',
    jabatan: 'Volunteer',
    divisi: 'HRA',
  },
  {
    nama: 'Christhoper Marcelino Mamahit',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646039962/team/Christhoper_Marcelino_Mamahit_Website_Volunteer_pa7if6.jpg',
    jabatan: 'Volunteer',
    divisi: 'Website',
  },
  {
    nama: 'Clara Lourdessa Oryza Emmanuella',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646039963/team/Clara_Lourdessa_Oryza_Emmanuella_Licensee-Co-Lead_Organizer_efi3cz.jpg',
    jabatan: 'Executive',
    divisi: '',
  },
  {
    nama: 'Clarisa Puhutiana',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646039978/team/Clarisa_Puhutiana_Ticketing_Manager_mocfdx.jpg',
    jabatan: 'Manager',
    divisi: 'Ticketing',
  },
  {
    nama: 'Clarissa Larasati',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646039963/team/Clarissa_Larasati_HRA_Expert_Staff_pqmver.jpg',
    jabatan: 'Expert Staff',
    divisi: 'HRA',
  },
  {
    nama: 'Daani Nauval S',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646039973/team/Daani_Nauval_S_Marketing_Strategist_Volunteer_ftrhbz.jpg',
    jabatan: 'Volunteer',
    divisi: 'Marketing Strategist',
  },
  {
    nama: 'Denisha Anelda',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646039973/team/Denisha_Anelda_Ticketing_Volunteer_of6far.jpg',
    jabatan: 'Volunteer',
    divisi: 'Ticketing',
  },
  {
    nama: 'Dimas Sandhi Satriagung',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646039964/team/Dimas_Sandhi_Satriagung_Logistic_and_Accomodations_Volunteer_aigm04.jpg',
    jabatan: 'Volunteer',
    divisi: 'Logistic and Accomodations',
  },
  {
    nama: 'Endroen Muhammad',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646039969/team/Endroen_Muhammad_Experiential_Design_wi633q.jpg',
    jabatan: '',
    divisi: 'Experiential_Design',
  },
  {
    nama: 'Evana Fausta Najdah',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646039966/team/Evana_Fausta_Najdah_Partnership_Volunteer_dgtunc.jpg',
    jabatan: 'Volunteer',
    divisi: 'Partnership',
  },
  {
    nama: 'Farah Sabara Putri Puspita',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646039970/team/Farah_Sabara_Putri_Puspita_Graphic_Design_Expert_Staff_1_bwq0vv.jpg',
    jabatan: 'Expert Staff',
    divisi: 'Graphic Design',
  },
  {
    nama: 'Fariz D. Kresnaldi',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646040013/team/Fariz_D._Kresnaldi_Media_Production_iiu7lj.jpg',
    jabatan: '',
    divisi: 'Media Production',
  },
  {
    nama: 'Fatimah Shofi Latifa',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646039975/team/Fatimah_Shofi_Latifa_Graphic_Design_Volunteer_bxizv6.jpg',
    jabatan: 'Volunteer',
    divisi: 'Graphic Design',
  },
  {
    nama: 'Febrio Luqman',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646039974/team/Febrio_Luqman_Media_Production_Manager_mddgpl.jpg',
    jabatan: 'Manager',
    divisi: 'Media Production',
  },
  {
    nama: 'Gede Dhiyo Sakaputra',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646039986/team/Gede_Dhiyo_Sakaputra_Logistics_and_Accommodation_dhb1k3.jpg',
    jabatan: '',
    divisi: 'Logistics and Accommodation',
  },
  {
    nama: 'Gideon Gilang Yudista',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646040003/team/Gideon_Gilang_Yudista_Media_Production_Volunteer_mxwwga.jpg',
    jabatan: 'Volunteer',
    divisi: 'Media Production',
  },
  {
    nama: 'Grace Marcella',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646039975/team/Grace_Marcella_Logistic_and_Accomodation_ne14y7.jpg',
    jabatan: '',
    divisi: 'Logistic and Accomodation',
  },
  {
    nama: 'Hafid Kurniawan',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646039996/team/Hafid_Kurniawan_Program_Volunteer_iaywwq.jpg',
    jabatan: 'Volunteer',
    divisi: 'Program',
  },
  {
    nama: 'Hagai Yemima',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646039978/team/Hagai_Yemima_Program_Volunteer_gnmpcr.jpg',
    jabatan: 'Volunteer',
    divisi: 'Program',
  },
  {
    nama: 'Hanif Fauzul Anam',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646039992/team/Hanif_Fauzul_Anam_Experiential_Design_Volunteer_qqfufy.jpg',
    jabatan: 'Volunteer',
    divisi: 'Experiential Design',
  },
  {
    nama: 'Hanif Zaky Anwar',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646039989/team/Hanif_Zaky_Anwar_HRA_Volunteer_df96wy.jpg',
    jabatan: 'Volunteer',
    divisi: 'HRA',
  },
  {
    nama: 'Hanna Ressica',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646040021/team/Hanna_Ressica_Logistics_and_Accommodation_Volunteer_hif8rq.jpg',
    jabatan: 'Volunteer',
    divisi: 'Logistics and Accommodation',
  },
  {
    nama: 'Haura Shafwa',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646040003/team/Haura_Shafwa_Curator_Volunteer_i20uit.jpg',
    jabatan: 'Volunteer',
    divisi: 'Curator',
  },
  {
    nama: 'Hervira Kusumadewi',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646040003/team/Hervira_Kusumadewi_Graphic_Design_Volunteer_bhylwv.jpg',
    jabatan: 'Volunteer',
    divisi: 'Graphic Design',
  },
  {
    nama: 'Hilda Calista Triadi',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646039998/team/Hilda_Calista_Triadi_Partnership_Volunteer_yvv1e9.jpg',
    jabatan: 'Volunteer',
    divisi: 'Partnership',
  },
  {
    nama: 'I. G. Putu Farrell Aditya Kusuma',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646040016/team/I._G._Putu_Farrell_Aditya_Kusuma_Partnership_Volunteer_bw3von.jpg',
    jabatan: 'Volunteer',
    divisi: 'Partnership',
  },
  {
    nama: 'I Dewa Gde Sriwisnu Aji Kesawa',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646040031/team/I_Dewa_Gde_Sriwisnu_Aji_Kesawa_HRA_Volunteer_fxh8vd.jpg',
    jabatan: 'Volunteer',
    divisi: 'HRA',
  },
  {
    nama: 'Ida Ayu Gayatri',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646040017/team/Ida_Ayu_Gayatri_Partnership_expertstaff_uenqxs.jpg',
    jabatan: 'Expert Staff',
    divisi: 'Partnership',
  },
  {
    nama: 'Isna Khoirun Nisa',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646040026/team/Isna_Khoirun_Nisa_Marketing_Strategist_Volunteer_sex0bc.jpg',
    jabatan: 'Volunteer',
    divisi: 'Marketing Strategist',
  },
  {
    nama: 'Jacqueline Chelsea',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646040037/team/Jacqueline_Chelsea_Curator_Volunteer_pdcwyx.jpg',
    jabatan: 'Volunteer',
    divisi: 'Curator',
  },
  {
    nama: 'Jacynda',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646040027/team/Jacynda_Fundraising_Volunteer_ygowyk.jpg',
    jabatan: 'Volunteer',
    divisi: 'Fundraising',
  },
  {
    nama: 'James Philip Rada Subekti',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646040028/team/James_Philip_Rada_Subekti_Media_Production_Volunteer_jk4val.jpg',
    jabatan: 'Volunteer',
    divisi: 'Media Production',
  },
  {
    nama: 'Julian Robert W',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646040034/team/Julian_Robert_W_Ticketing_Volunteer_xd3cjd.jpg',
    jabatan: 'Volunteer',
    divisi: 'Ticketing',
  },
  {
    nama: 'Kavindra Natha Wilasa',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646040052/team/Kavindra_Natha_Wilasa_Logistics_and_Accomodations_gcmcbw.jpg',
    jabatan: '',
    divisi: 'Logistics and Accomodations',
  },
  {
    nama: 'Kayana Shatila Kamase',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646040028/team/Kayana_Shatila_Kamase_HRA_Expert_Staff_dcdzci.jpg',
    jabatan: 'Expert Staff',
    divisi: 'HRA',
  },
  {
    nama: 'Keisha Alessandra L S',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646040042/team/Keisha_Alessandra_L_S_Ticketing_Volunteer_x3w4lw.jpg',
    jabatan: 'Volunteer',
    divisi: 'Ticketing',
  },
  {
    nama: 'Khalisha Dzakira Hidayat',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646040046/team/Khalisha_Dzakira_Hidayat_Program_Volunteer_hnlaph.jpg',
    jabatan: 'Volunteer',
    divisi: 'Program',
  },
  {
    nama: 'Kherissa',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646040057/team/Kherissa_Fundraising_Manager_ttfeeg.jpg',
    jabatan: 'Manager',
    divisi: 'Fundraising',
  },
  {
    nama: 'Kintania Dewiraputri Kumala',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646040037/team/Kintania_Dewiraputri_Kumala_Partnership_Volunteer_udaocg.jpg',
    jabatan: 'Volunteer',
    divisi: 'Partnership',
  },
  {
    nama: 'Kurnia Cahya Febryanto',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646040039/team/Kurnia_Cahya_Febryanto_Website_Expert_Staff_ftbvbj.jpg',
    jabatan: 'Expert Staff',
    divisi: 'Website',
  },
  {
    nama: 'Luthfan',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646040064/team/Luthfan_Fundraising_Volunteer_tcfcmv.jpg',
    jabatan: 'Volunteer',
    divisi: 'Fundraising',
  },
  {
    nama: 'Lyna Levia Faiqoh',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646040052/team/Lyna_levia_faiqoh_Partnership_Volunteer_v68wbn.jpg',
    jabatan: 'Volunteer',
    divisi: 'Partnership',
  },
  {
    nama: 'M. Salman Alghazali',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646043431/team/M._Salman_Alghazali_Media_Production_ilvusc.jpg',
    jabatan: '',
    divisi: 'Media Production',
  },
  {
    nama: 'Made Krisna Adinarayana',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646040055/team/Made_Krisna_Adinarayana_Director_of_Event-2_smvswv.jpg',
    jabatan: 'Director',
    divisi: 'Event',
  },
  {
    nama: 'Maria Goretti Kalinda Darma',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646040068/team/Maria_Goretti_Kalinda_Darma_Ticketing_Volunteer_dhvcex.jpg',
    jabatan: 'Volunteer',
    divisi: 'Ticketing',
  },
  {
    nama: 'Maria Valentia',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646040069/team/Maria_Valentia_Partnership_Manager_dn5nmo.jpg',
    jabatan: 'Manager',
    divisi: 'Partnership',
  },
  {
    nama: 'Melissa Gloria',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646040060/team/Melissa_Gloria_Executive_Producer-Co-Lead_Organizer_jkhs8s.jpg',
    jabatan: 'Executive',
    divisi: '',
  },
  {
    nama: 'Michael Yoshiya Bangun',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646040078/team/Michael_Yoshiya_Bangun_Curator_Volunteer_nowjrv.jpg',
    jabatan: 'Volunteer',
    divisi: 'Curator',
  },
  {
    nama: 'Moch. Ardyananda Cahaya Perkasa',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646040065/team/Moch._Ardyananda_Cahaya_Perkasa_Experiential_Design_c5nu7y.jpg',
    jabatan: '',
    divisi: 'Experiential Design',
  },
  {
    nama: 'Mohammad Jafar Shodiq Rizqiansha',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646040070/team/Mohammad_Ja_far_Shodiq_Rizqiansha_Program_Volunteer_dfabc1.jpg',
    jabatan: 'Volunteer',
    divisi: 'Program',
  },
  {
    nama: 'Mohammed Fachry Dwi Handoko',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646040075/team/Mohammed_Fachry_Dwi_Handoko_Website_Volunteer_fsdi7t.jpg',
    jabatan: 'Volunteer',
    divisi: 'Website',
  },
  {
    nama: 'Muh. Ichsan Alansyari Asran',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646040077/team/Muh._Ichsan_Alansyari_Asran_Experiential_Design_Staff_Ahli-2_mk8tql.jpg',
    jabatan: 'Expert Staff',
    divisi: 'Experiential Design',
  },
  {
    nama: 'Muhamad Fauzan Herlambang',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646040091/team/Muhamad_Fauzan_Herlambang_Graphic_Design_Expert_staff_nq2taz.jpg',
    jabatan: 'Expert Staff',
    divisi: 'Graphic Design',
  },
  {
    nama: 'Muhammad Arif Falah',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646040083/team/Muhammad_Arif_Falah_Fundraising_ExpertStaff_mcttjn.jpg',
    jabatan: 'Expert Staff',
    divisi: 'Fundraising',
  },
  {
    nama: 'Muhammad Aristo Widyadhana',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646040074/team/Muhammad_Aristo_Widyadhana_Curator_Director_bs31sx.jpg',
    jabatan: 'Director',
    divisi: 'Curator',
  },
  {
    nama: 'Muhammad Fakhri Andika',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646040086/team/Muhammad_Fakhri_Andika_Fundraising_Volunteer_x9rskm.jpg',
    jabatan: 'Volunteer',
    divisi: 'Fundraising',
  },
  {
    nama: 'Muhammad Muzakky',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646040089/team/Muhammad_Muzakky_Fundraising_Expert_Staff_lkuhvn.jpg',
    jabatan: 'Expert Staff',
    divisi: 'Fundraising',
  },
  {
    nama: 'Muhammad Rafly Rahardian',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646040082/team/Muhammad_Rafly_Rahardian_Media_Production_volunteer_rkpn6f.jpg',
    jabatan: 'Volunteer',
    divisi: 'Media Production',
  },
  {
    nama: 'Muhammad Rayhan Rafy',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646040112/team/Muhammad_Rayhan_Rafy_Partnership_Volunteer_oynryc.jpg',
    jabatan: 'Volunteer',
    divisi: 'Partnership',
  },
  {
    nama: 'Muhammad Rayhan Rizky Anugraha',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646040111/team/Muhammad_Rayhan_Rizky_Anugraha_Logistic___Accomodation_Volunteer_smmrny.jpg',
    jabatan: 'Volunteer',
    divisi: 'Logistic Accomodation',
  },
  {
    nama: 'Muhammad Ridho Waradana',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646040105/team/Muhammad_Ridho_Waradana_Website_Volunteer_1_x17wb2.jpg',
    jabatan: 'Volunteer',
    divisi: 'Website',
  },
  {
    nama: 'Muhammad Rizal Ramadhan Dawanto',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646040113/team/Muhammad_Rizal_Ramadhan_Dawanto_Media_Production_Volunteer_bigzjm.jpg',
    jabatan: 'Volunteer',
    divisi: 'Media Production',
  },
  {
    nama: 'Muhammad Salman',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646040090/team/Muhammad_Salman_Marketin_Branding_Volunteer-2_ohtltp.jpg',
    jabatan: 'Volunteer',
    divisi: 'Marketing Branding',
  },
  {
    nama: 'Muhammad Zaki',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646040095/team/Muhammad_Zaki_Graphic_Designer_Volunteer_nbcnla.jpg',
    jabatan: 'Volunteer',
    divisi: 'Graphic Designer',
  },
  {
    nama: 'Muthia Naila',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646040103/team/Muthia_Naila_HRA_Expert_Staff_bvneya.jpg',
    jabatan: 'Expert Staff',
    divisi: 'HRA',
  },
  {
    nama: 'Nabila Balqis',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646040125/team/Nabila_Balqis_Ticketing_Volunteer_olp2lr.jpg',
    jabatan: 'Volunteer',
    divisi: 'Ticketing',
  },
  {
    nama: 'Nadya Emirah D.I',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646040124/team/Nadya_Emirah_D.I_Marketing_Strategist_Volunteer_gopwop.jpg',
    jabatan: 'Volunteer',
    divisi: 'Marketing Strategist',
  },
  {
    nama: 'Nadya Putri Arisni',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646040108/team/Nadya_Putri_Arisni_partnership_volunteer_y3o4pw.jpg',
    jabatan: 'Volunteer',
    divisi: 'Partnership',
  },
  {
    nama: 'Naila Hafizhah',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646040130/team/Naila_Hafizhah_Ticketing_sdja54.jpg',
    jabatan: '',
    divisi: 'Ticketing',
  },
  {
    nama: 'Naomi Nathalia',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646040115/team/Naomi_Nathalia_Program_Volunteer_zwbnkz.jpg',
    jabatan: 'Volunteer',
    divisi: 'Program',
  },
  {
    nama: 'Naomie Kartika Sari',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646040122/team/Naomie_Kartika_Sari_Graphic_Design_Manager-2_bgrzrf.jpg',
    jabatan: 'Manager',
    divisi: 'Graphic Design',
  },
  {
    nama: 'Natashia Deborah',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646040128/team/Natashia_Deborah_Partnership_Expert_Staff_b4rixm.jpg',
    jabatan: 'Expert Staff',
    divisi: 'Partnership',
  },
  {
    nama: 'Ni Putu Putri Marinda Pradnyandari',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646040135/team/Ni_Putu_Putri_Marinda_Pradnyandari_HRA_Director_xocazb.jpg',
    jabatan: 'Director',
    divisi: 'HRA',
  },
  {
    nama: 'Nur Annisa Kusumawardani',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646040129/team/Nur_Annisa_Kusumawardani_Curator_Expert_Staff_tsmldk.jpg',
    jabatan: 'Expert Staff',
    divisi: 'Curator',
  },
  {
    nama: 'Rachel Gracia Simatupang',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646040146/team/Rachel_Gracia_Simatupang_Treasurer_hze9jx.jpg',
    jabatan: 'Executive',
    divisi: '',
  },
  {
    nama: 'Raditya Rafie Johari',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646040134/team/Raditya_Rafie_Johari_Fundraising_Volunteer_splo9t.jpg',
    jabatan: 'Volunteer',
    divisi: 'Fundraising',
  },
  {
    nama: 'Rafian Hidayat',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646040138/team/Rafian_Hidayat_Graphic_Designer_Volunteer_rzei12.jpg',
    jabatan: 'Volunteer',
    divisi: 'Graphic Designer',
  },
  {
    nama: 'Raihan Nabil W',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646040158/team/Raihan_Nabil_W_Partnership_Volunteer_gys9lq.jpg',
    jabatan: 'Volunteer',
    divisi: 'Partnership',
  },
  {
    nama: 'Raka Muhammad',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646040145/team/Raka_Muhammad_Media_Production_Volunteer_x7xgdu.jpg',
    jabatan: 'Volunteer',
    divisi: 'Media Production',
  },
  {
    nama: 'Ramadhana Rizqy Arifin',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646040149/team/Ramadhana_Rizqy_Arifin_Website_Volunteer_euqhnp.jpg',
    jabatan: 'Volunteer',
    divisi: 'Website',
  },
  {
    nama: 'Rani',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646040164/team/Rani_Director-2_jkx94u.jpg',
    jabatan: 'Director',
    divisi: 'Marketing Branding',
  },
  {
    nama: 'Reyhans Vigi',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646040172/team/Reyhans_Vigi_Exeriential_Design_pzqntz.jpg',
    jabatan: '',
    divisi: 'Experimential Design',
  },
  {
    nama: 'Rezha Muhammad Al Ghifari',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646040157/team/Rezha_Muhammad_Al_Ghifari_Experiential_Design_Volunteer_bskaav.jpg',
    jabatan: 'Volunteer',
    divisi: 'Experiential Design',
  },
  {
    nama: 'Riedha Sabila A',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646040171/team/Riedha_Sabila_A_Curator_Expert_Staff_wa3yay.jpg',
    jabatan: 'Expert Staff',
    divisi: 'Curator',
  },
  {
    nama: 'Rr Kayla Angelica Priambudi',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646040155/team/Rr_Kayla_Angelica_Priambudi_Ticketing_Volunteer_g3r1ds.jpg',
    jabatan: 'Volunteer',
    divisi: 'Ticketing',
  },
  {
    nama: 'Safira Khairunnisa',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646040175/team/Safira_Khairunnisa_Marketing_Strategist_Expert_Staff_a4qix0.jpg',
    jabatan: 'Expert Staff',
    divisi: 'Marketing Strategist',
  },
  {
    nama: 'Salsabila Puti',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646040159/team/Salsabila_Puti_Program_Manager_zqrn7d.jpg',
    jabatan: 'Manager',
    divisi: 'Program',
  },
  {
    nama: 'Shafira Mustaqila M',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646040172/team/Shafira_Mustaqila_M_Marketing_Strategist_Volunteer_esk69v.jpg',
    jabatan: 'Volunteer',
    divisi: 'Marketing Strategist',
  },
  {
    nama: 'Shine Eliza D',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646043438/team/Shine_Eliza_D_Graphic_Design_Volunteer_dah3ly.jpg',
    jabatan: 'Volunteer',
    divisi: 'Graphic Design',
  },
  {
    nama: 'Shinta Novia Vera',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646040162/team/Shinta_Novia_Vera_Experiential_Design_Volunteer_zxxgfe.jpg',
    jabatan: 'Volunteer',
    divisi: 'Experiential Design',
  },
  {
    nama: 'Silma Elvaretta Aska',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646040201/team/Silma_Elvaretta_Aska_Marketing_Strategist_Manager_k3tlni.jpg',
    jabatan: 'Manager',
    divisi: 'Marketing Strategist',
  },
  {
    nama: 'Steffanie Ruth Olanda',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646040169/team/Steffanie_Ruth_Olanda_Ticketing_vfc8m8.jpg',
    jabatan: '',
    divisi: 'Ticketing',
  },
  {
    nama: 'Sulthan Hafizh Ristawan',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646043439/team/Sulthan_Hafizh_Ristawan_Media_Production_Expert_Staff_vqcfoa.jpg',
    jabatan: 'Expert Staff',
    divisi: 'Media Production',
  },
  {
    nama: 'Syarifah Fitria Hannan',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646040191/team/Syarifah_Fitria_Hannan_Program_Volunteer_ljicws.jpg',
    jabatan: 'Volunteer',
    divisi: 'Program',
  },
  {
    nama: 'Takha Audyarahma',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646040179/team/Takha_Audyarahma_Experiential_Design_dnxzk8.jpg',
    jabatan: '',
    divisi: 'Experiential Design',
  },
  {
    nama: 'Theofilus C.P.',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646040176/team/Theofilus_C.P._Logistic_and_Accomodation_Volunteer_hr21dq.jpg',
    jabatan: 'Volunteer',
    divisi: 'Logistic and Accomodation',
  },
  {
    nama: 'Tiara Ratu Nazillah',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646040176/team/Tiara_Ratu_Nazillah_Partnership_Volunteer_voiacm.jpg',
    jabatan: 'Volunteer',
    divisi: 'Partnership',
  },
  {
    nama: 'Tiara Salsabila',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646040193/team/Tiara_Salsabila_Graphic_Design_Volunteer_rkbjhj.jpg',
    jabatan: 'Volunteer',
    divisi: 'Graphic Design',
  },
  {
    nama: 'Vanessa Olivia Hariko',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646040200/team/Vanessa_Olivia_Hariko_Program_Expert_Staff_cja80u.jpg',
    jabatan: 'Expert Staff',
    divisi: 'Program',
  },
  {
    nama: 'Wina Tungmiharja',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646040182/team/Wina_Tungmiharja_Website_Manager_c8pmka.jpg',
    jabatan: 'Manager',
    divisi: 'Website',
  },
  {
    nama: 'Yosafat Respati',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646040193/team/Yosafat_Respati_Fundraising_Volunteer_urvucw.jpg',
    jabatan: 'Volunteer',
    divisi: 'Fundraising',
  },
  {
    nama: 'Zahra Oktaviana',
    foto: 'https://res.cloudinary.com/tedxits/image/upload/v1646040188/team/Zahra_Oktaviana_Partnership_Volunteer_efhzd2.jpg',
    jabatan: 'Volunteer',
    divisi: 'Partnership',
  },
];

// tulisan board of managers = 36pt font fivo sans modern medium
// tulisan departement = 24pt font fivo sans modern medium
// deskripsi departement = 14pt font fivo sans modern regular
// nama anggota = 22,87pt fivo sans modern bold (align left)
// posisi = 18,3pt fivo sans modern reguler (align left)
// lingkaran berpanah ukuran = 114x114

// section hitam
// tulisan divisi pojok kiri = 24pt fivo sans modern medium
// deskripsi divisi pojok kanan = 14pt fivo sans modern reguler
// tulisan miring di kanan dan kiri = 24pt fivo sans modern medium
// nama anggota = 22,87pt fivo sans modern bold
// posisi anggota = 18,3pt fivo sans modern reguler

//section hitam kecil
//nama anggota = 18pt fivo sans modern bold
// posisi = 14pt fivo sans modern reguler
